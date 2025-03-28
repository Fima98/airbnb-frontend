"use client";

import React, { useState } from "react";
import Image from "next/image";
import useSearchModal, { SearchQuery } from "@/hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [dataCategory, setDataCategory] = useState("");

  const _setCategory = (_category: string) => {
    if (dataCategory === _category) {
      setDataCategory("");
      const newFilters: SearchQuery = {
        country: searchModal.query.country,
        checkIn: searchModal.query.checkIn,
        checkOut: searchModal.query.checkOut,
        guests: searchModal.query.guests,
        category: "",
      };
      searchModal.setFilters(newFilters);
      searchModal.applyFilters();
    } else {
      setDataCategory(_category);
      const newFilters: SearchQuery = {
        country: searchModal.query.country,
        checkIn: searchModal.query.checkIn,
        checkOut: searchModal.query.checkOut,
        guests: searchModal.query.guests,
        category: _category,
      };
      searchModal.setFilters(newFilters);
      searchModal.applyFilters();
    }
  };

  const getCategoryClasses = (category: string) => {
    return `pb-4 flex flex-col items-center space-y-2 border-b-2 transition ${
      dataCategory === category
        ? "border-black opacity-100"
        : "border-white opacity-50 hover:opacity-100 hover:border-gray-300"
    } cursor-pointer`;
  };

  return (
    <div className="pt-3 pb-4 flex items-center space-x-8">
      <div
        onClick={() => _setCategory("Hanoks")}
        className={getCategoryClasses("Hanoks")}
      >
        <Image src="/category_hanoks.jpg" alt="Hanoks" width={32} height={32} />
        <span className="text-xs">Hanoks</span>
      </div>

      <div
        onClick={() => _setCategory("Luxe")}
        className={getCategoryClasses("Luxe")}
      >
        <Image src="/category_luxe.jpg" alt="Luxe" width={32} height={32} />
        <span className="text-xs">Luxe</span>
      </div>

      <div
        onClick={() => _setCategory("Cabins")}
        className={getCategoryClasses("Cabins")}
      >
        <Image src="/category_cabins.jpg" alt="Cabins" width={32} height={32} />
        <span className="text-xs">Cabins</span>
      </div>

      <div
        onClick={() => _setCategory("Tiny homes")}
        className={getCategoryClasses("Tiny homes")}
      >
        <Image
          src="/category_tiny_homes.jpg"
          alt="Tiny homes"
          width={32}
          height={32}
        />
        <span className="text-xs">Tiny homes</span>
      </div>

      <div
        onClick={() => _setCategory("Lakefront")}
        className={getCategoryClasses("Lakefront")}
      >
        <Image
          src="/category_lake.jpg"
          alt="Lakefront"
          width={32}
          height={32}
        />
        <span className="text-xs">Lakefront</span>
      </div>
    </div>
  );
};

export default Categories;
