import React from 'react';

const Hero = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center md:text-start ">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Committed to 

        <strong className="block font-extrabold text-blue-700"> Excellence </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      To lay a strong foundation for future leaders
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded  bg-green-600 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Apply Today
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          About Us
        </a>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Hero;
