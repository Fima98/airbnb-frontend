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
                    dataCategory === "Amazing pools"
                        ? "border-black fill-current text-black opacity-100"
                        : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCategory("Amazing pools")}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
                    dataCategory === "Villas"
                        ? "border-black fill-current text-black opacity-100"
                        : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCategory("Villas")}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
                    dataCategory === "Cabins"
                        ? "border-black fill-current text-black opacity-100"
                        : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCategory("Cabins")}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white ${
                    dataCategory === "Tiny homes"
                        ? "border-black fill-current text-black opacity-100"
                        : "border-white hover:border-gray-300 opacity-50 hover:opacity-100"
                }`}
                onClick={() => setCategory("Tiny homes")}
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
