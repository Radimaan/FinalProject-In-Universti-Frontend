import React from "react";
import { IoIosSearch, IoMdTime, IoIosArrowForward } from "react-icons/io";

import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";




const PlogItem = () => {
  return (
    <div className="PlogItem group relative rounded-lg overflow-hidden">
      <div className="imgWapper w-full overflow-hidden rounded-lg cursor-pointer  relative">

        {/* Image */}
        <img
          src="https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"
          alt="plogimg"
          className="w-full transition-all duration-500 ease-out 
                     group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 
                     bg-black/50
                     opacity-0
                     transition-all duration-500 ease-out
                     group-hover:opacity-100
                     flex items-center justify-center gap-4"
        >
          <span className="text-white text-lg font-semibold transition-all ease-in hover:bg-[#ff5252] rounded-full p-1 group/fa">
           <IoIosSearch className="text-[28px] !text-white transition-all ease-in    "/>
          </span>
          <span className="text-white text-lg font-semibold transition-all ease-in hover:bg-[#ff5252] rounded-full p-1 group/fa">
           <FaLink  className="text-[28px] !text-white transition-all ease-in    "/>
          </span>
        <span className="flex items-center bg-[#ff5252] absolute  bottom-[15px] right-[15px] text-white rounded-md p-1 text-[11px] font-[500] gap-1"> 
          <IoMdTime className="text-[16px]"/> 5 APRIL, 2025
        </span>
        </div>

      </div>
      <div className="info py-4">
        <h1 className="text-[15px] font-[500] text-black">
        <Link to='/' className="link">
          Nullam ullamcorper ornare molestie 
          </Link>
          </h1>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nihil deleniti </p>


        <Link
  to="/"
  className="link font-[500] text-[14px] flex gap-2 items-center group/bu  w-[35%] hover:underline transition-all duration-300 ease-in" 
>
  Read More
  <IoIosArrowForward
    className="text-[16px] transition-all duration-300 ease-out group-hover/bu:translate-x-2"
  />
</Link>

      </div>
    </div>
  );
};

export default PlogItem;
