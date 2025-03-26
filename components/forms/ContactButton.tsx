import Link from "next/link";
import React from "react";

interface ContactButtonProps {
  userId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ userId }) => {
  return (
    <div className="cursor-pointer transition py-2 px-4 mt-2 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl">
      <Link href={`/inbox/${userId}`}>
        <button>Message</button>
      </Link>
    </div>
  );
};

export default ContactButton;
