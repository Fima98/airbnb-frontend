import ReservationSidevar from "@/components/properties/ReservationSidevar";
import Image from "next/image";

const RoomDetailPage = () => {
    return (
        <main className="max-w-[1440px] px-10 mb-12">
            <h1 className="text-3xl pb-4">Room detail, idk</h1>
            <div className="w-full h-[56vh] overflow-hidden relative rounded-xl mb-4">
                <Image
                    fill
                    className="object-cover w-full h-full"
                    src={"/property_image.jpg"}
                    alt="property"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                <div className="col-span-3 pr-12">
                    <h1 className="text-2xl font-semibold">
                        Room name jgdhjgdjkhgdk
                    </h1>
                    <span className="text-gray-500 block text-sm mb-6">
                        6 guests · 3 bedrooms · 2 beds · 1 baths
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image
                            src={"/profile_avatar.jpg"}
                            alt="profile avatar"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <p className="text-sm font-semibold">
                            Hosted by John Doe
                        </p>
                    </div>
                    <hr />
                    <div className="py-6 text-sm font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam aspernatur, voluptatibus, dolores, quae, quia,
                        voluptate quos
                    </div>
                </div>
                <ReservationSidevar />
            </div>
        </main>
    );
};

export default RoomDetailPage;
