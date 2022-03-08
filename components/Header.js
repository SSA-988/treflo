import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";
function Header() {
  const router = useRouter();
   const items = useSelector(selectItems);
  return (
    <div className=" sticky top-0 z-50 bg-[#006491] p-1 w-full h-full">
      <div className="flex items-center">
        {/* Header Left */}
        <div className="mt-3">
          <Image
            onClick={() => router.push("/")}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsRBRPcCz1HPxKaTNFDzWTZ5xT0yddvbyPgsVsXNOFBkki1-4yM-gLQH88QWzKCEFo4U&usqp=CAU"
            width={110}
            height={32}
            objectFit="contain"
            className="cursor-pointer rounded-md"
          />
        </div>
        <div className="hidden md:inline-block text-white cursor-pointer">
          <h3 className="text-sm text-gray-300">welcome</h3>
          <h2 className="font-bold text-md">address</h2>
        </div>
        {/* Header Middle */}
        <div className="ml-6 mr-4 hidden sm:flex items-center h-10 rounded-sm flex-grow cursor-pointer  bg-gray-300 hover:bg-gray-400">
          <input
            className="p-2 h-full w-4 flex-grow rounded-l-sm focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Header Right */}
        <div className="flex items-center space-x-4">
          <div className="text-white">
            <h3 className="text-sm text-gray-300 ">hello, Sujan</h3>
            <h2 className="font-bold text-md cursor-pointer">Your Account</h2>
          </div>

          <div className="text-white">
            <h3 className="text-sm text-gray-300">Pizzas</h3>
            <h2 className="font-bold text-md">Bakery</h2>
          </div>

          <div
            onClick={() => router.push("/Checkout")}
            className="cursor-pointer  relative link flex items-center text-white"
          >
            <span className="absolute items-center top-0 left-6 md:right-10 h-4 w-4 bg-yellow-500 text-black text-center  rounded-full font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden text-white md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
