import React from 'react';

const Header = () => {
  return (
    <div class="h-[100px]">
      <header>
        <div class="mx-auto flex flex-wrap md:py-6 flex-col md:flex-row md:mx-[135px] items-center">
          <a class="font-logo flex title-font  items-center text-black mb-4 md:mb-0">
            <span class="ml-2 text-2xl">Head Start.</span>
          </a>
          <nav class="md:ml-auto text-[#464265] md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mx-8 hover:text-gray-900">Home</a>
            <a class="mx-8 hover:text-gray-900">Features</a>
            <a class="mx-8 hover:text-gray-900">About us</a>
            <a class="mx-8 hover:text-gray-900">Contact</a>
            <a class="mx-8 hover:text-gray-900">Sign Up</a>
          </nav>
          <button class="inline-flex items-center bg-black text-slate-200 border-0 py-3 px-8 focus:outline-none rounded-[1px] text-base mt-4 md:mt-0">
            Get Pro
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
