import Chat from "@/components/inbox/Chat";
import apiService from "@/services/apiService";
import { getUserId } from "@/lib/actions";

export type UserType = {
    id: string;
    name: string;
    avatar: string;
};

export type ChatType = {
    id: string;
    users: UserType[];
};

const InboxPage = async () => {
    const userId = await getUserId();
    if (!userId) {
        return (
            <main className="max-w-[1440px] mx-auto px-6 pb-6 space-y-4">
                <h1 className="my-6 text-2xl">Inbox</h1>
                <p>Please log in to view your inbox.</p>
            </main>
        );
    }

    const chats = await apiService.get(`/api/chat/`);
    console.log(chats);

    return (
        <main className="max-w-[1440px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 text-2xl">Inbox</h1>

            {chats.map((chat: ChatType) => (
                <Chat key={chat.id} chat={chat} userId={userId} />
            ))}
        </main>
    );
};

export default InboxPage;
