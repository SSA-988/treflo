import { LightningBoltIcon, SparklesIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from "../slices/cartSlice";

function CheckProduct({key,name,rating,id,isVeg,price,description,img_url,data}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  const [additems, setAdditems] = useState(1);
  // console.log("the value recieved: ",data);
  const CheckValue = () => {
    if(additems === 1){
      removeItemFromBasket();
    }else{
      setAdditems(Math.max(0,additems - 1))
    }
  }
  return (
    <div>
      <Image src={img_url} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{name}</p>
        <div className="flex">
          <h3>{rating}</h3>
          <StarIcon className="w-6 h-6 text-[#006491] " />
          <div className="flex items-center ml-1">
            {isVeg ? (
              <>
                <h3 className="text-green-600 font-semibold">Pure Veg</h3>
                <SparklesIcon className="w-4 h-4 text-[#00693E] ml-1 " />
              </>
            ) : (
              <>
                <h3 className="text-red-600 font-semibold">Non-Veg</h3>
                <LightningBoltIcon className="w-4 h-4 text-[#D2122E] ml-1 " />
              </>
            )}
          </div>
        </div>

        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
        <div className="flex items-center space-x-2">
          <h3>
            {"Rs"}
            {price}
          </h3>
          <h3 className="cursor-pointer font-semibold bg-[#DB7093] rounded-md p-1 text-white">
            {data}
          </h3>
        </div>
        <div className="w-32 justify-center py-2 flex items-center bg-[#006491] mt-2 text-white rounded-md">
          <div
            onClick={CheckValue}
          >
            <h3 className="cursor-pointer font-semibold texrt-white px-4">-</h3>
          </div>

          <div>
            <h3 className="cursor-pointer font-semibold texrt-white px-2">
              {additems}
            </h3>
          </div>

          <div onClick={() => setAdditems(additems + 1)}>
            <h3 className=" cursor-pointer font-semibold texrt-white px-4">
              +
            </h3>
          </div>
        </div>
        {/* <div
          className="absolute w-32 justify-center py-2 flex items-center bg-[#FF3366] rounded-md"
        >
          <div onClick={removeItemFromBasket}>
            <h3 className="cursor-pointer font-semibold texrt-white px-2">-</h3>
          </div>

          <div>
            <h3 className="cursor-pointer font-semibold texrt-white px-2">
              {additems}
            </h3>
          </div>

          <div onClick={() =>setAdditems(additems + 1)}>
            <h3 className=" cursor-pointer font-semibold texrt-white px-2">+</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CheckProduct