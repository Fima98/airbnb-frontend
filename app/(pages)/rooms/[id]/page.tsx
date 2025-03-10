import ReservationSidevar from "@/components/properties/ReservationSidevar";
import Image from "next/image";

import apiService from "@/services/apiService";

const RoomDetailPage = async ({ params }: { params: { id: string } }) => {
    const property = await apiService.get(`/api/properties/${params.id}/`);
    console.log(property);
    return (
        <main className="max-w-[1440px] px-10 mb-12">
            {/* <h1 className="text-3xl pb-4">Room detail, idk</h1> */}
            <div className="w-full h-[56vh] overflow-hidden relative rounded-xl mb-4">
                <Image
                    fill
                    className="object-cover w-full h-full"
                    src={property.image_url}
                    alt={property.title}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
                <div className="col-span-3 pr-12">
                    <h1 className="text-2xl font-semibold">{property.title}</h1>
                    <span className="text-gray-500 block text-sm mb-6">
                        {property.guests} guests · {property.bedrooms} bedrooms
                        · {property.bathrooms} bathrooms
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
                            Hosted by {property.host.name}
                        </p>
                    </div>
                    <hr />
                    <div className="py-6 text-sm font-medium">
                        {property.description}
                    </div>
                </div>
                <ReservationSidevar property={property} />
            </div>
        </main>
    );
};

export default RoomDetailPage;
