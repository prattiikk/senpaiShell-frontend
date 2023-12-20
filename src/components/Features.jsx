import React, { useEffect } from 'react';

const Features = () => {


    useEffect(() => {
        const handleScroll = (selector) => {
            return () => {
                const scrollPosition = window.scrollY;
                const overlayDiv = document.querySelector(selector);
                let position = 800;
                if (window.innerWidth <= 768) {
                    position = 400;
                    if (selector === '.sec_div') {
                        position = 600;
                    }
                    else if (selector === '.third_div') {
                        position = 800;
                    }
                } // Adjust the breakpoint as needed

                // if (selector === '.sec_div') {
                //     position = 900;
                // }
                // else if (selector === '.third_div') {
                //     position = 1000;
                // }
                // Adjust the following values based on your design
                let translateX = Math.min(0, scrollPosition - position); // Adjust 800 to control when the separation starts
                if (selector === '.sec_div') {
                    translateX = -translateX;
                }
                overlayDiv.style.transform = `translateX(${-translateX}px)`;
                overlayDiv.style.transition = 'transform 0.5s'; // Adjust duration and easing function here
            };
        };

        window.addEventListener('scroll', handleScroll('.first_div'));
        window.addEventListener('scroll', handleScroll('.sec_div'));
        window.addEventListener('scroll', handleScroll('.third_div'));


        return () => {
            window.removeEventListener('scroll', handleScroll('.first_div'));
            window.removeEventListener('scroll', handleScroll('.sec_div'));
            window.removeEventListener('scroll', handleScroll('.third_div'));
        };
    }, []);





    return (
        <div className='w-[90vw] mx-auto min-h-screen grid grid-cols-1 grid-rows-3 gap-2 text-white opacity-80 sm:p-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px] '>
                <div className='first_div hfont text-3xl sm:text-4xl text-center text-black tracking-tight rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Personalized Look and Feel</div>
                <div className='text-xl leading-[1.5rem] sm:leading-normal flex justify-center items-center'><p className='px-10 py-6  sm:px-20'>Your Style, Your Shell: Customize the shell's appearance with your chosen color schemes and visuals.</p></div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px]'>
                <div className='order-2 sm:order-1 text-xl leading-[1.5rem] sm:leading-normal flex justify-center items-center'><p className='px-10 py-6 sm:px-20'>Effortless Commanding: Simplify your workflow by creating easy-to-use shortcuts for frequently used commands.</p></div>
                <div className='sec_div order-1 sm:order-2 hfont text-3xl sm:text-4xl text-center text-black tracking-tight rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Streamlined Command Experience</div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 bg-[rgb(27,28,30)] rounded-[40px] sm:rounded-[70px] '>
                <div className='third_div hfont text-3xl sm:text-4xl text-center text-black tracking-tight rounded-[40px] sm:rounded-[70px] bg-[rgb(163,160,253)] flex justify-center items-center px-10'>Shared Configuration Hub</div>
                <div className='text-xl leading-[1.5rem] sm:leading-normal flex justify-center items-center'><p className='px-10 py-6 sm:px-20'>Explore and Share: Discover unique configurations in a shared hub, and contribute your own for a collaborative command line experience.</p></div>
            </div>
        </div>
    );
};

export default Features;
