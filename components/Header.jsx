import React from 'react';

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-2xl font-bold ">Head Start.</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mx-12 hover:text-gray-900">Home</a>
          <a class="mx-12 hover:text-gray-900">Features</a>
          <a class="mx-12 hover:text-gray-900">About us</a>
          <a class="mx-12 hover:text-gray-900">Contact</a>
          <a class="mx-12 hover:text-gray-900">Sign up</a>
        </nav>
        <button class="inline-flex items-center bg-gray-900 text-slate-200 border-0 py-3 px-8 focus:outline-none rounded text-base mt-4 md:mt-0">
          Get Pro
        </button>
      </div>
    </header>
  );
};

export default Header;
