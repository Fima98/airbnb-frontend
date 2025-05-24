import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddProperyButton";
import { getUserId } from "@/lib/actions";
import Logo from "../Logo";

const Navbar = async () => {
  const userId = await getUserId();

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-white border-b">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 items-center py-6 px-6">
        <Link href="/" className="flex items-center">
          <Logo />
          <h3 className="hidden md:block ml-2 text-airbnb font-medium text-2xl">
            airbnb
          </h3>
        </Link>

        <div className="flex justify-center gap-6">
          <h2>Home</h2>
          <h2>Experiences</h2>
        </div>

        <div className="flex justify-end items-center space-x-4">
          <AddPropertyButton userId={userId} />
          <UserNav userId={userId} />
        </div>
      </div>

      <div className="flex justify-center pb-6">
        <SearchFilters />
      </div>
    </nav>
  );
};

export default Navbar;
