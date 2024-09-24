import React, { useState } from "react";
import star from "../../assets/star-5.svg";
import profileImg from "../../assets/profile-img.png";

// Content data array
const contentData = [
  {
    title: "Introduction",
    text: "My journey as a design engineer has been a lifelong quest to capture the extraordinary in the ordinary...",
    image: profileImg,
  },
  {
    title: "Skills",
    text: "I specialize in UX/UI design, frontend development, and creating intuitive digital experiences...",
    image: profileImg, // You can replace this with different images if needed
  },
  {
    title: "Projects",
    text: "I have worked on various projects across multiple domains, including web development, mobile apps...",
    image: profileImg,
  },
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? contentData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === contentData.length - 1 ? 0 : prevIndex + 1));
  };

  const { title, text, image } = contentData[currentIndex];

  return (
    <div className="py-10 px-10">
      <div className="flex flex-row justify-start items-center">
        <div>
          <p className="uppercase text-[16px] font-[500] text-[#62646C]">
            Services
          </p>
          <p className="uppercase font-medium text-2xl">The things I do</p>
        </div>
        {/* <div className="flex flex-row gap-7">
          <div className="flex flex-row gap-2">
            <button className="rounded-full" onClick={handlePreviousClick}>
              <svg
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </button>
            <button className="rounded-full" onClick={handleNextClick}>
              <svg
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center my-16 content">
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div>
            <div className="flex flex-row items-center gap-3">
              <img src={star} className="w-5" alt="star icon" />
              <p>Website Design & Development</p>
            </div>
            <p className="font-light leading-7 tracking-tight text-neutral-400">
              {text}
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-3">
              <img src={star} className="w-5" alt="star icon" />
              <p>Frontend Development</p>
            </div>
            <p className="font-light leading-7 tracking-tight text-neutral-400">
              {text}
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-3">
              <img src={star} className="w-5" alt="star icon" />
              <p>UI/UX Design</p>
            </div>
            <p className="font-light leading-7 tracking-tight text-neutral-400">
              {text}
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center gap-3">
              <img src={star} className="w-5" alt="star icon" />
              <p>No-Code Development</p>
            </div>
            <p className="font-light leading-7 tracking-tight text-neutral-400">
              {text}
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <img src={image} className="w-full" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
