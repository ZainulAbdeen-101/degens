import React from 'react'
import Image from 'next/image'
import { BsFillPersonCheckFill, MdContentCopy, MdPeopleAlt } from './icon'


export default function Control() {
  return (
    <>
    <div className='mt-[150px] flex'>

    <div className='max-w-[550px] ml-[60px]'>
        <p className='text-neutral-400'>
            DRAG & DROP
        </p>
        <h1 className='text-[45px] leading-tight'>
            Control All Elements <span className='text-[#FF3969]'>Super</span> Easy.
        </h1>
        <div className="flex items-start gap-10 mt-5">
            <MdPeopleAlt fill='#FF3969' size={40} />
            <div>
                <p className='font-semibold text-lg'>Drag Image & SVG</p>
                <p className='text-neutral-500 font-light'>Create beautiful  sites at breakneck speed without compromising on your creativity</p>
            </div>

        </div>
        <div className="flex items-start gap-10 mt-10">
            <BsFillPersonCheckFill fill='#FF3969'  size={30} />
            <div>
                <p className='font-semibold text-lg'>Create Custom Field</p>
                <p className='text-neutral-500 font-light'>Keep your brand front &center with your customer </p>
            </div>

        </div>
        <div className="flex items-start gap-10 mt-10">
            <MdContentCopy fill='#FF3969'  size={40} />
            <div>
                <p className='font-semibold text-lg'> Custom Attribute</p>
                <p className='text-neutral-500 '>increase your client retention rate by showing your results and value.
         </p>
            </div>

        </div>

    </div>
    <div>
        <Image className='absolute mt-[-16px] ml-[-20px] ' src={'/dot.png'} width={180} height={180} alt='' />
        <Image className='absolute right-0' src={'/image 26.png'} width={650} height={500} alt='' /> 
    </div>
    </div>
    
    </>
  )
}
