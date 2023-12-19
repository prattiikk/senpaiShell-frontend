import React from 'react';

const Features = () => {
    return (
        // <div className='text-white w-[90vw] mx-auto h-screen grid grid-cols-1 md:grid-cols-3 gap-1'>
        //     <div className=' m-2 p-8 flex flex-col justify-center'>
        //         <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Personalized Look and Feel</p>
        //         <p className=' tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Your Style, Your Shell: Customize the shell's appearance with your chosen color schemes and visuals.</p>
        //     </div>
        //     <div className=' m-2 p-8 flex flex-col justify-center'>
        //         <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Streamlined Command Experience</p>
        //         <p className=' tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Effortless Commanding: Simplify your workflow by creating easy-to-use shortcuts for frequently used commands.</p>
        //     </div>
        //     <div className=' m-2 p-8 flex flex-col justify-center'>
        //         <p className='text-4xl sm:text-5xl text-center tracking-tighter'>Shared Configuration Hub</p>
        //         <p className=' tracking-tighter leading-5 sm:leading-normal opacity-50 mt-10'>Explore and Share: Discover unique configurations in a shared hub, and contribute your own for a collaborative command line experience.</p>
        //     </div>
        // </div>

        <div className='w-[90vw] mx-auto min-h-screen grid grid-cols-1 grid-rows-3 gap-2 text-white opacity-80 mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px] '>
                <div className='hfont text-3xl sm:text-5xl text-center text-black tracking-tighter rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Personalized Look and Feel</div>
                <div className='text-xl leading-5 sm:leading-normal flex justify-center items-center'><p className='px-10 py-10  sm:px-20'>Your Style, Your Shell: Customize the shell's appearance with your chosen color schemes and visuals.</p></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px]'>
                <div className='text-xl leading-5 sm:leading-normal flex justify-center items-center'><p className='px-10 py-10 sm:px-20'>Effortless Commanding: Simplify your workflow by creating easy-to-use shortcuts for frequently used commands.</p></div>
                <div className='hfont text-3xl sm:text-5xl text-center text-black tracking-tighter rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Streamlined Command Experience</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px] '>
                <div className='hfont text-3xl sm:text-5xl text-center text-black tracking-tighter rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Shared Configuration Hub</div>
                <div className='text-xl leading-5 sm:leading-normal flex justify-center items-center'><p className='px-10 py-10 sm:px-20'>Explore and Share: Discover unique configurations in a shared hub, and contribute your own for a collaborative command line experience.</p></div>
            </div>
        </div>
    );
};

export default Features;
