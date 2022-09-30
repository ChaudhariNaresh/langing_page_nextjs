import Image from 'next/image';
import React from 'react';

const Detail = () => {
  return (
    <section class="body-font w-full h-full md:py-24 md:pl-[135px]">
      <div class="">
        <div class="my-10">
          <h3 class="sm:text-4xl text-4xl font-bold title-font text-gray-900 mb-4">
            We can help you from design
            <br />
            to production
          </h3>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:mt-10 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col ">
            <div class="w-20 h-20 inline-flex items-center justify-center shadow-lg bg-[#FFFFFF]  mb-6 flex-shrink-0">
              <Image
                src="/../public/assests/explore.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Explore
              </h2>
              <p class="leading-relaxed text-base">
                We shape brands through exploration and investigation, applying
                in-depth research challange assumptions at turn
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col ">
            <div class="w-20 h-20 inline-flex items-center justify-center shadow-lg bg-[#FFFFFF]  mb-6 flex-shrink-0">
              <Image
                src="/../public/assests/design.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col ">
            <div class="w-20 h-20 inline-flex items-center justify-center shadow-lg bg-[#FFFFFF]  mb-6 flex-shrink-0">
              <Image
                src="/../public/assests/build.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Neptune
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-20  border-0 py-2 px-8 focus:outline-none outline rounded text-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Detail;
