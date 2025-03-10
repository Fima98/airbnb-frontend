import Image from "next/image";
import ContactButton from "@/components/forms/ContactButton";
import PropertyList from "@/components/properties/PropertyList";

const HostDetailPage = () => {
    return (
        <main className="max-w-[1440px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1  mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image
                            src="/profile_avatar.jpg"
                            alt="user"
                            width={108}
                            height={108}
                            className="rounded-full"
                        />
                        <h1 className="mt-4 text-xl font-semibold">John Doe</h1>
                        <p className="text-gray-900 font-semibold">Host</p>
                        <ContactButton />
                    </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <PropertyList />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HostDetailPage;
