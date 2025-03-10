import Image from "next/image";
import ContactButton from "@/components/forms/ContactButton";
import PropertyList from "@/components/properties/PropertyList";

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1440px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Reservation</h1>
            <div className="space-y-4">
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                src="/property_image.jpg"
                                alt="property"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="hover:scale-110 object-cover transition h-full w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>

                        <p className="mb-2">
                            <strong>Check in date:</strong> 11/12/2024
                        </p>
                        <p className="mb-2">
                            <strong>Check in date:</strong> 16/12/2024
                        </p>
                        <p className="mb-2">
                            <strong>Number of nights:</strong> 5
                        </p>
                        <p className="mb-2">
                            <strong>Total price:</strong> $1000
                        </p>

                        <div className="inline-block mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl transition hover:bg-airbnb-dark">
                            Go to property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MyReservationsPage;
