"use client";
import useLoginModal from "@/hooks/useLoginModal";
import apiService from "@/services/apiService";
import React from "react";
import { useRouter } from "next/navigation";

interface ContactButtonProps {
  userId: string;
  hostId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ userId, hostId }) => {
  const LoginModal = useLoginModal();
  const router = useRouter();
  const startChat = async () => {
    if (userId && hostId) {
      const chat = await apiService.get(`/api/chat/start/${hostId}/`);
      if (chat.chat_id) {
        router.push(`/inbox/${chat.chat_id}`);
      }
    } else {
      LoginModal.open();
    }
  };
  return (
    <div className="cursor-pointer transition py-2 px-4 mt-2 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl">
      <button onClick={startChat}>Message</button>
    </div>
  );
};

export default ContactButton;
