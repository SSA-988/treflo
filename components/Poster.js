import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Poster() {
 return (
   <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]">
     <Image
       src="https://images7.alphacoders.com/596/thumb-1920-596343.jpg"
       layout="fill"
       objectFit="cover"
     />

     <div className="absolute top-1/2  text-center w-full">
       <p className=" text-white sm:text-lg md:text-xl xl:text-2xl font-bold">
         Hungry?
       </p>
       <button className="mt-2 p-2 sm:p-2 sm:font-normal md:font-bold text-blue-300 lg:font-bold bg-white rounded-xl shadow-md lg:m-2 lg:p-3 hover:shadow-xl active:scale-90 transition duration-150">
         Grab A pizza
       </button>

       {/* animate={{
            //   scale: [1, 2, 2, 1, 1],
            //   rotate: [0, 0, 270, 270, 0],
            //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            // }} */}
     </div>
   </div>
 );
}

export default Poster