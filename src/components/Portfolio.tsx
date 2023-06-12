import React from 'react'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <>
    <div className='ml-10 mt-[100px]'>
        <p className='text-neutral-300'>Our Works</p>
        <h1 className="text-[40px]">Our <span className='text-[#FF3969]'>Portfolio</span> </h1>
    </div>
    <div className='flex justify-around mt-10'>
        <Image src={'/p1.png'} width={400} height={0} alt='' />
        <Image src={'/p1.png'} width={400} height={0} alt='' />

        <Image src={'/p1.png'} width={400} height={0} alt='' />

     


    </div>
    <div className='mt-[100px] mx-auto text-center'> 
        <h2 className='text-[40px]'>
            Try Degens <span className='text-[#FF3969]'>Free</span>
        </h2>
        <p className='font-light text-neutral-200'>
            After your 14-days trial of our professional Plan. enjoy the Free version of <br /> Calendly-forever
        </p>
        <button className="mt-20 btn btn-outline btn-wide">Get the Degens App</button>
    </div>
    
    </>
  )
}
