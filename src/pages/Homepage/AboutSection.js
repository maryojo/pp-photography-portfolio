import React from "react";
import star from "../../assets/star-5.svg";
import profileImg from "../../assets/profile-img.png";

const AboutSection = () => {
  return (
    <div className="py-10 md:py-20 px-5 md:px-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="uppercase text-[16px] font-[500] text-[#62646C]">
            About
          </p>
          <p className="uppercase font-medium text-2xl">I am Mary</p>
        </div>
        {/* <div>
          <button>Know more</button>
        </div> */}
      </div>
      <hr className="my-8 md:my-16 h-[1px] border-neutral-700" />
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <img src={profileImg} className="w-full" />
        </div>
        <div className="w-full md:w-1/2  rounded-lg border-[1px] border-neutral-700">
          <div className="p-7">
            <div className="flex flex-row items-center gap-2">
              <img src={star} className="w-5" />
              <p className="">Introduction</p>
            </div>
            <p className="font-light leading-7 tracking-tight">
              My journey as a design engineer has been a lifelong quest to
              capture the extraordinary in the ordinary, to freeze fleeting
              moments in time, and to share the world's beauty as I see it.
              Based in the enchanting landscapes of the USA, I find inspiration
              in every corner of this diverse and vibrant country. Join me as we
              embark on a visual odyssey, where each photograph tells a story,
              and every frame is a piece of my heart.
            </p>
          </div>
          {/* <hr className="my-10 h-[1px] border-neutral-700"/>
          <div className="p-7 pt-0">
            <p>Contact Information</p>
            <div className="grid grid-cols-2 w-full">
            <div>
              <p>Email</p>
              <p>hi@maryojo.me</p>
            </div>
            <div>
              <p>Phone</p>
              <p>emaksj</p>
            </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
