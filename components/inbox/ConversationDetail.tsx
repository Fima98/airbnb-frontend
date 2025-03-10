"use client";

import SubmitButton from "@/components/forms/CustomButton";

const ConversationDetail = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Conversation */}
            <div className="flex-grow overflow-auto flex flex-col space-y-4 p-4">
                {/* Received Message */}
                <div className="w-[70%] py-3 px-4 rounded-tl-none rounded-xl bg-gray-200 shadow-md">
                    <p className="font-semibold text-sm text-gray-600 mb-1">
                        John Doe
                    </p>
                    <p className="text-sm text-gray-800">
                        Hello, how are you? I wanted to ask you something about
                        our project.
                    </p>
                </div>

                {/* Sent Message */}
                <div className="w-[70%] ml-auto py-3 px-4 rounded-tr-none rounded-xl bg-airbnb text-white shadow-md">
                    <p className="font-semibold text-sm text-white mb-1">You</p>
                    <p className="text-sm">
                        Sure! Let me know what you’d like to discuss.
                    </p>
                </div>
            </div>

            {/* Message Input */}
            <div className="fixed bottom-0 left-0 w-full bg-white py-4 px-6 flex border-t border-gray-300 space-x-4">
                <input
                    type="text"
                    placeholder="Message..."
                    className="w-full p-2 bg-gray-200 rounded-xl focus:outline-none"
                />

                <SubmitButton
                    label="Send"
                    onClick={() => console.log("Send")}
                />
            </div>
        </div>
    );
};

export default ConversationDetail;
