import React from 'react'
import BannerInfoScroll from '../pages/Homepage/BannerInfoScroll'
import Button from './Button'

const Footer = () => {
  return (
    <div className=''>
    <div>
    <div className='flex justify-end w-full'>
      <p className='text-[56px] font-bold tracking-wide text-neutral-800 uppercase'>Mary</p>
    </div>
    <BannerInfoScroll/>
    <div className='flex flex-row justify-between '>
      <div className='w-20 min-h-full bg-red-200'></div>
      <div className='flex flex-col md:flex-row justify-between px-10 md:px-20 w-full'>
      <div className="uppercase text-[2rem] font-[600] md:py-16 ">
          <div className="flex flex-row items-center gap-5">
            <p className="leading-[0]">Let's</p>
            <div>
              <Button text="HI" />
            </div>
          </div>
          <div>build together</div>
        </div>
      <div className='grid grid-cols-1 gap-20 py-16'>
        {/* <div>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
        </div> */}
        {/* <div>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
        </div> */}
        <div>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
          <p className='uppercase'>HOME</p>
        </div>
      </div>
      </div>
      <div className='w-20 min-h-full bg-red-300'></div>
    </div>
    </div>
    <hr className="h-[1px] border-neutral-700" />
    <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between text-sm text-neutral-500 py-5 px-5 md:px-10'>
      <div>Design inspo by Damien  |  Built by me with React, TailwindCSS & Framer Motion</div>
      <div className=''>
        &copy; Mary Ojo (2024)
      </div>
    </div>
    </div>
  )
}

export default Footer