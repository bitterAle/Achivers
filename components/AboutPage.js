import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div>
 

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-start ">
        <small className=' text-blue-800'> About Us</small>
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Welcome to The Eldoret Achievers School.
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
        sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Know More
        </a>
      </div>
    </div>
  </div>

  <Image
    alt=""
    src="/pic1.png"
    width={100}
    height={100}
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
        </div>
    );
}

export default AboutPage;
