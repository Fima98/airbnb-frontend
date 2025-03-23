import PropertyList from "@/components/properties/PropertyList";
import { getUserId } from "@/lib/actions";

const MyFavorites = async () => {
    const userId = await getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] mx-auto px-8 py-12">
                <h1 className="text-2xl font-semibold mb-4">My Favorites</h1>
                <p className="mt-4">Please log in to view your favorites.</p>
            </main>
        );
    }

    return (
        <main className="max-w-[1500px] mx-auto px-8 py-12">
            <h1 className="text-2xl font-semibold mb-4">My Favorites</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <PropertyList favorites={true} />
            </div>
        </main>
    );
};

export default MyFavorites;
