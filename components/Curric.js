import React from 'react';
import Image from 'next/image';

const Curric = () => {
    return (
        <div className=' min-h-screen w-full flex flex-col items-center justify-center bg-white  text-black  p-5'>
            <small className=' text-blue-600'>programs</small>
            <h1 className=' text-4xl font-extrabold capitalize p-5 m-5'>our academic programs</h1>
            <div className=' flex gap-4 flex-wrap w-full'>
                <div className=' flex flex-col justify-between items-center w-full bg-slate-200 rounded-sm p-8 md:flex-1 '>
                    <Image src='/pic3.png' width={100} height={100} className=' w-full h-auto rounded-sm '></Image>
                     <h2 className=' text-2xl font-bold text-black'> Kindergarten</h2> 
                     <p>At our Kindergarten, we create a nurturing and stimulating environment where young minds blossom through play-based learning, fostering a love for exploration and discovery</p>
                      <button className=' w-full h-10 bg-blue-500 rounded-sm '> Apply Today</button></div>
                <div className=' flex flex-col justify-between items-center w-full bg-slate-200 rounded-sm p-8 md:flex-1 '>
                    <Image src='/pic4.png' width={100} height={100} className=' w-full h-auto rounded-sm '></Image> 
                    <h2  className=' text-2xl font-bold text-black' >Primary School</h2> 
                    <p>In our Primary School, we are dedicated to providing a foundation of quality education, fostering a love for learning, and empowering students to explore their potential in a supportive and engaging environment.</p>
                     <button className=' w-full h-10 bg-blue-500 rounded-sm '> Apply Today</button></div>
                <div className=' flex flex-col justify-between items-center w-full bg-slate-200 rounded-sm p-8 md:flex-1 '>
                    <Image src='/pic5.png' width={100} height={100} className=' w-full h-auto rounded-sm '></Image>
                     <h2 className=' text-2xl font-bold text-black'> Junior Secondary</h2>
                      <p>At our Junior Secondary, we guide students through a dynamic educational journey, encouraging critical thinking, character development, and academic excellence to prepare them for the challenges ahead.</p> 
                      <button className=' w-full h-10 bg-blue-500 rounded-sm '> Apply Today</button></div>
            </div>
        </div>
    );
}

export default Curric;
