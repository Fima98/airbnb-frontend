import React from "react";
import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-8">
      <div
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
          dataCategory === "Hanoks"
            ? "border-black fill-current text-black opacity-100"
            : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
        }`}
        onClick={() => setCategory("Hanoks")}
      >
        <Image
          src="/category_hanoks.jpg"
          alt="hanoks"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Hanoks</span>
      </div>

      <div
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
          dataCategory === "Luxe"
            ? "border-black fill-current text-black opacity-100"
            : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
        }`}
        onClick={() => setCategory("Luxe")}
      >
        <Image
          src="/category_luxe.jpg"
          alt="luxe"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Luxe</span>
      </div>

      <div
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
          dataCategory === "Cabins"
            ? "border-black fill-current text-black opacity-100"
            : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
        }`}
        onClick={() => setCategory("Cabins")}
      >
        <Image
          src="/category_cabins.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Cabins</span>
      </div>

      <div
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
          dataCategory === "Tiny homes"
            ? "border-black fill-current text-black opacity-100"
            : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
        }`}
        onClick={() => setCategory("Tiny homes")}
      >
        <Image
          src="/category_tiny_homes.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Tiny homes</span>
      </div>

      <div
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
          dataCategory === "Lakefront"
            ? "border-black fill-current text-black opacity-100"
            : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
        }`}
        onClick={() => setCategory("Lakefront")}
      >
        <Image
          src="/category_lake.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Lakefront</span>
      </div>
    </div>
  );
};

export default Categories;
