"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SearchFilters from "./SearchFilters";
import SearchFiltersCompact from "./SearchFilterCompact";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddProperyButton";
import { getUserId } from "@/lib/actions";
import Logo from "../Logo";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getUserId().then((id) => setUserId(id));
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-white border-b">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 items-center transition-all duration-300 px-6 h-20">
        <Link href="/" className="flex items-center">
          <Logo />
          <h3 className="hidden md:block ml-2 text-airbnb font-medium text-2xl">
            airbnb
          </h3>
        </Link>

        {/* ignore that, i just wanted to text my skills, i won't use it */}
        <div className="flex justify-center">
          {isAtTop ? (
            <div className="flex gap-6">
              <h2>Home</h2>
              <h2>Experiences</h2>
            </div>
          ) : (
            <SearchFiltersCompact />
          )}
        </div>

        <div className="flex justify-end items-center space-x-4">
          <AddPropertyButton userId={userId} />
          <UserNav userId={userId} />
        </div>
      </div>

      <div
        className={cn("flex justify-center pb-6 duration-300", {
          hidden: !isAtTop,
        })}
      >
        <SearchFilters />
      </div>
    </nav>
  );
};

export default Navbar;
