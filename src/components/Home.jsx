import React from "react";
import screenshot from "./images/screenzy-1702905995889.png";

const Home = () => {
  return (
    <div className="w-screen bg-black backdrop-blur-xl flex flex-col items-center justify-center p-2 overflow-hidden mb-10">
      <div className="flex-grow min-h-2/3 flex flex-col items-center justify-center heading_line ">
        <h1 className="hfont text-6xl sm:text-[7em] md:text-[9em] text-gray-300 font-black tracking-tight text-center hover:tracking-tighter hover:cursor-pointer duration-1000 px-10 sm:px-0">
          senpai<span className="text-purple-600">Shell.</span>
        </h1>
        <p className="text-white w-[80vw] opacity-50 text-base leading-5 font-mono sm:text-lg text-center tracking-tighter mt-8 ">
          A beginner-friendly shell that's lightweight, customizable, and
          aesthetically pleasing for your Linux system.
        </p>
        <div className="w-1/3 mt-8 text-white text-xl font-semibold flex justify-evenly leading-none">
          <button className="px-4 py-3 w-fit bg-gradient-to-r from-[rgb(32,18,223)] to-purple-800 hover:scale-90 hover:cursor-pointer duration-700 rounded-md whitespace-nowrap">
            ✨ Download
          </button>
          {/* <button className='border bg-white rounded-full px-4 py-1  w-36'>star on github</button> */}
        </div>
      </div>
      <div className="flex-grow min-h-1/3 flex flex-col items-center justify-center mt-8 relative">
        <img
          src={screenshot}
          className="w-[80vw] sm:w-2/4 object-cover object-center border-2 border-black rounded-md "
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
