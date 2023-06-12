import React from 'react'
import Image from 'next/image'
import { AiFillPlayCircle } from './icon'

export default function Hero() {
  return (
    <>
    <div className=' flex  items-center'>

<div className='ml-[65px]  mt-[100px] max-w-[700px] '>

    <h1 className='text-[60px]'>
        Build Your <br /> Next <span className='text-[#FF3969] underline decoration-[#FF3969]'>Product</span>
         <br /> With Degens.
    </h1>
    <p className='mt-5 text-neutral-400 max-w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
    <div className='mt-10 flex gap-x-20'>
        <button className='bg-[#FF3969] px-4 rounded-lg'>Find out more</button>
        <button className='flex items-center'>
        <AiFillPlayCircle fill='#FF3969' size={50} />
        <p className='text-neutral-400'>
            Play Demo
        </p>

        </button>
    </div>
</div>
<div className=''>
   
    <Image className='absolute top-0 right-0 mt-[60px]' src={'/hero.png'} alt='' width={600} height={0} />
    <Image className='absolute top-0 right-0 mt-20' src={'/150 1.png'} width={80} height={80} alt='' />
    <Image className='absolute ml-[150px] mt-[-180px]' src={'/c1.png'} width={36} height={36} alt='' />
    <Image className='absolute mt-[220px] ml-[180px]' src={'/c2.png'} width={25} height={25} alt='' />


    <Image className='absolute mt-[210px] right-36' src={'/c3.png'} width={67} height={67} alt='' />
</div>




    </div>
    
    
    </>
  )
}
