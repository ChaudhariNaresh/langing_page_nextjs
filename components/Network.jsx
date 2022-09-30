import Image from 'next/image';
import React from 'react';

const Network = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Design Agency Network
          </h1>
          <p class="mb-8 leading-relaxed">
            List your agency among the leaders of the industry, promote your
            work, create original content, find new team members and keep up
            with digital marketing events.
          </p>
          <div class="flex justify-center">
            <h3 className="">Learn More</h3>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/../public/assests/designnetwork.png"
            width={541}
            height={393}
          />
        </div>
      </div>
    </section>
  );
};

export default Network;
