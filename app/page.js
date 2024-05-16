
import React from 'react';

import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import AboutPage from '@/components/AboutPage';
import Curric from '@/components/Curric';
import Message from '@/components/Message';
import Numbers from '@/components/Numbers';
import Testimonial from '@/components/Testimonial';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';


const Page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutPage/>
      <Curric/>
      <Message/>
      <Numbers/>
      <Testimonial/>
      <Banner/>
      <Footer/>

    </div>
  );
}

export default Page;
