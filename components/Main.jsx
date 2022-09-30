import React from 'react';
import Image from 'next/image';
import Aboutimg1 from '../public/assests/img1.png';
import Aboutimg2 from '../public/assests/img2.png';

const Main = () => {
  return (
    <section class="text-gray-600 body-font my-10">
      <div class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font font-Inter  text-6xl mb-8 font-bold text-gray-900 leading-[1.15]">
            Creatives Ideas,
            <br class="hidden lg:inline-block" />
            What we are Adorning
          </h1>
          <p class="mb-10 text-slate-500 leading-relaxed">
            We are a specialist agency in manufacturing design for
            <br class="hidden lg:inline-block" />
            personal and corporate brands
          </p>
          <div class="flex mt-6 justify-center">
            <button class="inline-flex items-center bg-gray-900 text-slate-200 border-0 py-4 px-10 focus:outline-none rounded text-base mt-4 md:mt-0">
              Get Started
            </button>
          </div>
        </div>
        <div class="relative flex h-auto  lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="" src={Aboutimg1} alt="/" />
          <div className="absolute top-[83px] right-[88px] w-[418px] h-[360px] items-center justify-center ">
            <Image
              className="top-[83px] right-[88px]"
              src={Aboutimg2}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
