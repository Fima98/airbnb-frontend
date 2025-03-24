import { ChatType } from "@/app/(pages)/inbox/page";
import Link from "next/link";

interface ChatProps {
    chat: ChatType;
    userId: string;
}

const Chat: React.FC<ChatProps> = ({ chat, userId }) => {
    const otherUser = chat.users.find((user) => user.id !== userId);

    return (
        <div className="px-6 py-4 border border-gray-300 rounded-xl">
            <p className="mb-6 text-xl">{otherUser?.name}</p>

            <Link href={`/inbox/${chat.id}`}>
                <p className="cursor-pointer text-airbnb-dark">Go to chat</p>
            </Link>
        </div>
    );
};

export default Chat;
