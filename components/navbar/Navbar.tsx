import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddProperyButton";
import { getUserId } from "@/lib/actions";
import Logo from "../Logo";

const Navbar = async () => {
    const userId = await getUserId();
    console.log("User ID", userId);
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1440px] mx-auto items-center px-6">
                <div className="flex justify-between">
                    <Link href="/" className="mt-3">
                        <div className="flex text-airbnb">
                            <Logo />
                            <h3 className="text-airbnb hidden sm:block font-semibold text-2xl">
                                airbnb
                            </h3>
                        </div>
                    </Link>

                    <div className="flex space-x-4">
                        <SearchFilters />
                    </div>
                    <div className="flex items-center space-x-4">
                        <AddPropertyButton userId={userId} />
                        <UserNav userId={userId} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
