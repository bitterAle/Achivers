import React from 'react';

const Numbers = () => {
    return (
        <div className=' flex gap-5 w-full flex-wrap bg-blue-700 min-h-64'>
            <div className=' flex items-center justify-center text-center w-full bg-blue-700 text-white md:flex-1 '><p className=' text-4xl'>50+ <br></br> <span className=' text-2xl font-light text-gray-700'>Academic Achievement</span></p></div>
            <div className=' flex items-center justify-center text-center w-full bg-blue-700 text-white md:flex-1 '><p className=' text-4xl'>40+ <br></br> <span className=' text-2xl font-light text-gray-700'>Teaching Staff</span></p></div>
            <div className=' flex items-center justify-center text-center w-full bg-blue-700 text-white md:flex-1 '><p className=' text-4xl'>30+ <br></br> <span className=' text-2xl font-light text-gray-700'>Support Staff</span></p></div>
            <div className=' flex items-center justify-center text-center w-full bg-blue-700 text-white md:flex-1 '><p className=' text-4xl'>10+ <br></br> <span className=' text-2xl font-light text-gray-700'>School Bus</span></p></div>
        </div>
    );
}

export default Numbers;
