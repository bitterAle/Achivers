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
      We offer a comprehensive curriculum designed to meet the individual needs of each student. Our approach combines rigorous academic standards, innovative teaching methods, and modern technologies to foster critical thinking, creativity, and collaboration. We believe in empowering students to become lifelong learners, preparing them to excel in a competitive global environment.
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
