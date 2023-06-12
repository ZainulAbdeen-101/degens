import React from "react";
import Image from "next/image";
import { BsArrowLeft } from "./icon";

export default function Broadcast() {
  return (
    <>
      <div className="flex mt-[100px]">
        <div>
            <Image className="absolute ml-[550px]" src={'/star.png'} width={120} height={120} alt="" />
          <Image className="" src={"/Groupbr.png"} alt="" width={750} height={700} />
        </div>
        <div className="text-right mt-10 mr-5">
          <p className="text-neutral-400  font-light">EMAIL & SMS BROADCAST</p>
          <h1 className="text-[45px] leading-tight">
            We Have Email.Sms <br />
            <span className="text-[#FF3969]">Broadcast </span>For You.
          </h1>
          <p className="mt-5">
            Broadcast and email is best use for something announcing significant
            changes.
          </p>
          <div className="flex justify-end gap-5 mt-10  items-center text-neutral-400">
            <p className="">
              Makes them purchase your product, services and interact website
              due.
            </p>
            <BsArrowLeft size={20} />
          </div>
          <div className="flex justify-end gap-5 mt-10 items-center text-neutral-400">
            <p>Holds and catches their attention lorem.</p>
            <BsArrowLeft size={20} />
          </div>
          <div className="flex justify-end gap-5 mt-10 items-center text-neutral-400">
            <p>Diverts them to your brand.</p>
            <BsArrowLeft size={20} />
          </div>

          <button className="mt-10 text-neutral-300 btn btn-outline hover:bg-[#FF3969] ">
            Secondary
          </button>
        </div>
      </div>
    </>
  );
}
