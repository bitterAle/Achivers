import React from 'react';
import Image from 'next/image';

const Message = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <Image
            alt=""
            src="/pic2.png"
            width={100}
            height={200}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl  text-black font-bold sm:text-3xl">
         A message from our Director
          </h2>

          <p className="mt-4 text-gray-600">
          At Eldoret Achievers, we are committed to fostering an environment that not only nurtures academic brilliance but also encourages personal development and character building. Our dedicated team of educators is passionate about cultivating a love for learning and instilling values that will guide our students throughout their lives.

We are excited about the possibilities and opportunities that lie ahead. Together, let us create a community where curiosity thrives, creativity flourishes and every individual is empowered to reach their full potential.

Together, we will inspire, innovate, and achieve greatness. Welcome to a year that promises to be nothing short of extraordinary! </p>

         


        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Message;
