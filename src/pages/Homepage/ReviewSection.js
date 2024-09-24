import React from "react";
import profileImg from "../../assets/profile-img.png";

const ReviewSection = () => {
  return (
    <div className="py-10 px-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="uppercase text-[16px] font-[500] text-[#62646C]">
            MY WORK
          </p>
          <p className="uppercase font-medium text-2xl">Explore my work</p>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-row gap-2">
            <button className="rounded-full">d</button>
            <button className="rounded-full">d</button>
          </div>
          <button className="">Know more</button>
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center my-16">
        <div className="grid grid-cols-3 gap-10">
          <div className="h-[48] rounded-lg">
          <img src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="h-[48] rounded-lg">
          <img src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className="w-full h-full object-cover rounded-lg"/>
          </div>
          <div className="h-[48] rounded-lg">
          <img src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
