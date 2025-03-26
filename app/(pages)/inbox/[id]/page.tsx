import React from "react";
import ChatDetail from "@/components/inbox/ChatDetail";
import { getUserId } from "@/lib/actions";
import apiService from "@/services/apiService";
import { UserType } from "../page";
import { getAccessToken } from "@/lib/actions";

export type MessageType = {
  id: string;
  name: string;
  message: string;
  chatId: string;
  sent_to: UserType;
  sent_by: UserType;
};

const Chat = async ({ params }: { params: { id: string } }) => {
  const userId = await getUserId();
  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="max-w-[1500px] mx-auto px-8 py-12">
        <p className="mt-4">Please log in to view your messages.</p>
      </main>
    );
  }

  const data = await apiService.get(`/api/chat/${params.id}/`);

  return (
    <main className="max-w-[1440px] mx-auto px-6 pb-6">
      <ChatDetail
        chat={data.chat}
        messages={data.messages}
        userId={userId}
        token={token}
      />
    </main>
  );
};

export default Chat;
