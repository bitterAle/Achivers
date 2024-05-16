import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHero from '@/components/AboutHero';
import Trophy from '@/components/Trophy';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <div>
            <Navbar/>
            <AboutHero/> 
            <Trophy/>
            <Footer/>
            
        </div>
    );
}

export default Page;
