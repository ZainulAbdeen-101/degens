import React from "react";
import Image from "next/image";

export default function Choose() {
  return (
    <>
      <div className="mt-[200px]">
        <h1 className="text-center text-[45px] leading-snug">
          Check Why You <span className="text-[#FF3969]">Should</span>
          <br /> Choose Us
        </h1>
        <Image
          className="absolute right-10 mt-[-130px]"
          src={"/Group 4.png"}
          width={200}
          height={200}
          alt=""
        />
      </div>

      <div className="flex gap-20  mt-[150px] items-center ">
        <div className="text-center ">
          {" "}
          <Image
            className="mx-auto"
            src={"/app.png"}
            width={110}
            height={150}
            alt=""
          />
          <p className="font-bold text-lg mt-10">Appointments</p>
          <p className="text-neutral-500 mt-10">
            Built Wicket longer admire do barton vanity itself do in it
          </p>
        </div>
        <div className="relative  backdrop-filter text-center  bg-white/10    px-6 py-20  backdrop-blur-xl drop-shadow-lg border-t border-r border-l border-[white]  rounded-3xl">
          <Image
            className="mx-auto"
            src={"/fast.png"}
            width={110}
            height={110}
            alt=""
          />
          <p className="font-bold text-lg mt-10">Fast support</p>
          <p className="text-neutral-500 mt-10">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
          <Image className="absolute -z-10 ml-[270px] mt-[370px] " src={'/rect.png'} height={150} alt="" width={150} />
        <div className="text-center ">
          <Image
            className="mx-auto"
            src={"/int.png"}
            alt=""
            height={120}
            width={120}
          />
          <p className="font-bold text-lg mt-10">App Integrations</p>
          <p className="text-neutral-500 mt-10">
            Barton Vanity itself do in it.Preferd to men it engrossed listening.
          </p>
        </div>
        <div className="text-center">
          <Image
            className="mx-auto"
            src={"/custom.png"}
            alt=""
            width={110}
            height={120}
          />
          <p className="font-bold text-lg mt-10">Customization </p>
          <p className="text-neutral-500 mt-10">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </>
  );
}
