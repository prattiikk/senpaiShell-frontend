import React from 'react';

const Features = () => {
    return (
        <div className='text-white w-[90vw] mx-auto h-screen grid grid-cols-1 md:grid-cols-3 gap-1'>
            <div className=' m-2 p-8 flex flex-col justify-center'>
                <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Personalized Look and Feel</p>
                <p className='font-mono tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Your Style, Your Shell: Customize the shell's appearance with your chosen color schemes and visuals.</p>
            </div>
            <div className=' m-2 p-8 flex flex-col justify-center'>
                <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Streamlined Command Experience</p>
                <p className='font-mono tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Effortless Commanding: Simplify your workflow by creating easy-to-use shortcuts for frequently used commands.</p>
            </div>
            <div className=' m-2 p-8 flex flex-col justify-center'>
                <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Shared Configuration Hub</p>
                <p className='font-mono tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Explore and Share: Discover unique configurations in a shared hub, and contribute your own for a collaborative command line experience.</p>
            </div>
        </div>
    );
};

export default Features;
