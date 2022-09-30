import React from 'react';
import Image from 'next/image';
import Aboutimg1 from '../public/assests/img1.png';
import Aboutimg2 from '../public/assests/img2.png';

const Main = () => {
  return (
    <section class="body-font w-full h-full md:py-24 md:pl-[135px] md:pr-[66px]">
      <div class="container flex  md:flex-row flex-col items-center ">
        <div class="lg:flex-grow md:w-1/2  md:pr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font font-Inter  text-6xl mb-9 font-bold text-gray-900 leading-[1.15]">
            Creatives Ideas,
            <br class="hidden lg:inline-block" />
            What we are Adorning
          </h1>
          <p class="mb-16 text-[#7E8495] text-[20px] leading-8">
            We are a specialist agency in manufacturing design for
            <br class="hidden lg:inline-block" />
            personal and corporate brands
          </p>
          <div class="">
            <button class="items-center bg-gray-900 text-slate-200 border-0 py-6 px-14 focus:outline-none rounded text-base mt-4 ">
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
