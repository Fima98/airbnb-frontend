"use client";

import SubmitButton from "@/components/forms/CustomButton";
import { ChatType } from "@/app/(pages)/inbox/page";
import React, { useEffect, useState, useRef } from "react";
import useWebSocket from "react-use-websocket";
import { UserType } from "@/app/(pages)/inbox/page";
import { MessageType } from "@/app/(pages)/inbox/[id]/page";

interface ChatDetailProps {
  chat: ChatType;
  userId: string;
  token: string;
  messages: MessageType[];
}

const ChatDetail: React.FC<ChatDetailProps> = ({
  chat,
  userId,
  token,
  messages,
}) => {
  const messageDiv = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState("");
  const myUser = chat.users?.find((user) => user.id === userId);
  const otherUser = chat.users?.find((user) => user.id !== userId);

  const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>([]);

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    `${process.env.NEXT_PUBLIC_WS_HOST}/ws/${chat.id}/?token=${token}`,
    {
      share: false,
      shouldReconnect: () => true,
    }
  );

  useEffect(() => {
    console.log("Connection state changed", readyState);
  }, [readyState]);

  useEffect(() => {
    if (
      lastJsonMessage &&
      typeof lastJsonMessage === "object" &&
      "name" in lastJsonMessage &&
      "message" in lastJsonMessage
    ) {
      const message: MessageType = {
        id: "",
        name: lastJsonMessage.name as string,
        message: lastJsonMessage.message as string,
        sent_to: otherUser as UserType,
        sent_by: myUser as UserType,
        chatId: chat.id,
      };

      setRealtimeMessages((prevMessages) => [...prevMessages, message]);
    }
    scrollToBottom();
  }, [lastJsonMessage]);

  const sendMessage = async () => {
    sendJsonMessage({
      event: "chat_message",
      data: {
        message: newMessage,
        name: myUser?.name,
        sent_to_id: otherUser?.id,
        chat_id: chat.id,
      },
    });

    setNewMessage("");

    setTimeout(() => {
      scrollToBottom();
    }, 50);
  };

  const scrollToBottom = () => {
    if (messageDiv.current) {
      messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {/* Conversation */}
      <div
        ref={messageDiv}
        className="flex-grow overflow-auto flex pb-20 flex-col space-y-4 p-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`w-[70%] py-3 px-4 rounded-xl shadow-md ${
              message.sent_by.name === myUser?.name
                ? "ml-auto rounded-tr-none bg-airbnb text-white"
                : "rounded-tl-none bg-gray-200"
            }`}
          >
            <p
              className={`font-semibold text-sm ${
                message.sent_by.name === myUser?.name
                  ? "text-white"
                  : "text-gray-600"
              } mb-1`}
            >
              {message.sent_by.name}
            </p>
            <p className="text-sm">{message.message}</p>
          </div>
        ))}
        {realtimeMessages.map((message, index) => (
          <div
            key={index}
            className={`w-[70%] py-3 px-4 rounded-xl shadow-md ${
              message.name === myUser?.name
                ? "ml-auto rounded-tr-none bg-airbnb text-white"
                : "rounded-tl-none bg-gray-200"
            }`}
          >
            <p
              className={`font-semibold text-sm ${
                message.name === myUser?.name ? "text-white" : "text-gray-600"
              } mb-1`}
            >
              {message.name}
            </p>
            <p className="text-sm">{message.message}</p>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 w-full bg-white py-4 px-6 flex border-t border-gray-300 space-x-4">
        <input
          type="text"
          placeholder="Message..."
          className="w-full p-2 bg-gray-200 rounded-xl focus:outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />

        <SubmitButton label="Send" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default ChatDetail;
