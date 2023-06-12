import React from 'react'
import Image from 'next/image'
import { BsTwitter } from 'react-icons/bs'
import { IoLogoDiscord } from './icon'


export default function Navbar() {
  return (
  <>
  <div className='flex gap-10 items-center justify-around'>

  <div>
    <Image src={'/logo.png'} alt='' width={270} height={0} />

  </div>
  <div className='flex gap-20 items-center'>
    <ul className='flex gap-14'>
      <li>Home</li>
      <li>About</li>
      <li>Get Wassified</li>
      <li>Rewards</li>
      <li> Roadmap</li>
      <li>Team  </li>
    </ul>

   
    <div className='flex gap-3 items-center'>
      <BsTwitter size={30} />
      <IoLogoDiscord size={30} />
    </div>
  </div>
  

  </div>
  
  </>
  )
}
