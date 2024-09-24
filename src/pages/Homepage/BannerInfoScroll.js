import React from 'react';
import star from '../../assets/star-20.svg';

const BannerScrollItem = ({ text }) => {
  return (
    <div className="flex flex-row items-center gap-1 whitespace-nowrap">
      <img src={star} className="w-6" alt="star icon" />
      <p className="text-[#ECF2E1]">{text}</p>
    </div>
  );
};

const BannerInfoScroll = () => {
  return (
    <div className='py-2 bg-[#0E0E10] text-[#ECF2E1] uppercase text-[0.8rem] font-[400] w-full border-y border-y-[#1C1C21] overflow-hidden'>
          <div className="flex flex-row gap-6  banner-scroll whitespace-nowrap">
      <BannerScrollItem text="Frontend development" />
      <BannerScrollItem text="Digital experiences" />
      <BannerScrollItem text="Website development" />
      <BannerScrollItem text="UX optimization" />
      <BannerScrollItem text="UX design" />
      <BannerScrollItem text="UI design" />
      <BannerScrollItem text="Product development" />
      <BannerScrollItem text="Website design" />
      <BannerScrollItem text="Website design" />

              {/* Duplicate the items here */}
                <BannerScrollItem text="Frontend development" />
        <BannerScrollItem text="Digital experiences" />
        <BannerScrollItem text="Website development" />
        <BannerScrollItem text="UX optimization" />
        <BannerScrollItem text="UX design" />
        <BannerScrollItem text="UI design" />
        <BannerScrollItem text="Product development" />
    </div>
    </div>
  );
};

export default BannerInfoScroll;
