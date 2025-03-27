"use client";
import React, { useState } from "react";

import Image from "next/image";
import useSearchModal, { SearchQuery } from "@/hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [dataCategory, setDataCategory] = useState("");

  const _setCategory = (_category: string) => {
    setDataCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      category: _category,
    };

    searchModal.setQuery(query);
  };
  return (
    <div className="pt-3 cursor-pointer pb-4 flex items-center space-x-8">
      <div
        onClick={() => _setCategory("Amazing pools")}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100"
      >
        <Image
          src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Amazing pools</span>
      </div>

      <div
        onClick={() => _setCategory("Villas")}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100"
      >
        <Image
          src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Villas</span>
      </div>

      <div
        onClick={() => _setCategory("Cabins")}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100"
      >
        <Image
          src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Cabins</span>
      </div>

      <div
        onClick={() => _setCategory("Tiny homes")}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100"
      >
        <Image
          src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
