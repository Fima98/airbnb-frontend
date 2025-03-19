import Image from "next/image";
import apiService from "@/services/apiService";
import Link from "next/link";

const MyReservationsPage = async () => {
    const reservations = await apiService.get("/api/auth/reservations/");
    console.log(reservations);
    return (
        <main className="max-w-[1440px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Reservation</h1>
            <div className="space-y-4">
                {reservations.map((reservation: any) => (
                    <div
                        key={reservation.id}
                        className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl"
                    >
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    src={reservation.property.image_url}
                                    alt="property"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="hover:scale-110 object-cover transition h-full w-full"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">
                                {reservation.property.title}
                            </h2>

                            <p className="mb-2">
                                <strong>Check in date:</strong>{" "}
                                {reservation.start_date}
                            </p>
                            <p className="mb-2">
                                <strong>Check out date:</strong>{" "}
                                {reservation.end_date}
                            </p>
                            <p className="mb-2">
                                <strong>Number of nights:</strong>{" "}
                                {reservation.number_of_nights}
                            </p>
                            <p className="mb-2">
                                <strong>Total price:</strong> $
                                {reservation.total_price}
                            </p>

                            <div className="inline-block mt-6 cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl transition hover:bg-airbnb-dark">
                                <Link
                                    href={`/rooms/${reservation.property.id}`}
                                >
                                    Go to property
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default MyReservationsPage;
