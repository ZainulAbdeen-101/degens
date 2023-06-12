import React from "react";
import Image from "next/image";

export default function Manage() {
  return (
    <>
      <div className="mt-[150px] text-center">
        <h1 className=" text-[50px]">
          Bring All Time <span className="text-[#FF3969]">Management </span>
          <br /> & Task Together
        </h1>
        <p className="text-neutral-300 mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys <br /> standard dummy text ever
          since the 1500s
        </p>
      </div>
   
   <div className="flex justify-center mt-20">

      <progress className=" progress progress-warning w-[1000px]" value="30" max="100"></progress>
   </div>
      <div className="flex mt-10  items-center justify-center gap-32">

      <div className="flex items-center gap-5 ">
      <input  type="checkbox"  defaultChecked={true} className="checkbox bg-[#FF3969] checkbox-xs" />
      
      <p>
        Create task for any <br /> team person

      </p>
        
      </div>
      <div className="flex items-center gap-5">
      <input type="checkbox"  className="checkbox checkbox-xs" />
      
      <p>
        Make timeframe to <br /> do the task

      </p>
        
      </div>
      <div className="flex items-center gap-5">
      <input type="checkbox" className="checkbox checkbox-xs" />
      
      <p>
        Get task completed by <br /> your member

      </p>
        
      </div>
      </div>
      <div className="flex justify-center mt-20 ">
        <Image className="backdrop-filter  p-8  bg-white/10   backdrop-blur-md drop-shadow-lg border-t border-r border-l border-[white]  rounded-3xl" src={'/screen.png'} width={800} height={800} alt="" />
      </div>
    
    </>
  );
}
