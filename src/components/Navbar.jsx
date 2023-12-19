import React from 'react';

const Navbar = () => {
    return (
        <div className='w-screen h-20 px-12 bg-black flex items-center justify-between'>
            <a href="#" className='text-white font-black tracking-tight text-3xl hover:scale-90 hover:cursor-pointer duration-700'>
                senpaiS.
            </a>
            <a href="#" className='text-white font-medium tracking-tighter text-2xl hover:scale-90 duration-700 hover:cursor-pointer'>GitHub</a>
        </div>
    );
};

export default Navbar;
