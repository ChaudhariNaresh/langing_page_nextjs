import Image from 'next/image';
import React from 'react';
import Backgroundimg from '../public/assests/final.png';

const Final = () => {
  return (
    <div className="w-full h-full my-20">
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ">
        <Image className="" src={Backgroundimg} alt="" />
        <div className="absolute  items-center justify-center ">
          <h3 class="sm:text-4xl text-lg text-center font-bold title-font text-gray-900  sm:mb-4">
            Start Design Explore Today
          </h3>
          <p className="text-center  text-[#7E8495]">
            Cap table cleanup you&apos;ve got marvelous design.
          </p>
          <button class="flex mx-auto sm:mt-10 mt-2 border-0 sm:py-2 sm:px-8 px-4 py-1 outline rounded sm:text-md md:text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Final;
