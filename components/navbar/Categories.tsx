import React from "react";

import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-4 flex items-center space-x-8">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100">
        <Image
          src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Amazing pools</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100">
        <Image
            src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Villas</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100">
        <Image
            src="/category_amazing_pools.jpg"
          alt="pools"
          width={32}
          height={32}
        ></Image>
        <span className="text-xs">Cabins</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 transition border-white hover:border-gray-300 opacity-50 hover:opacity-100">
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
