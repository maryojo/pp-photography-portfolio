import React, { useState } from "react";

const projects = [
  {
    image: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Project 1",
  },
  {
    image: "https://images.pexels.com/photos/27680937/pexels-photo-27680937/free-photo-of-a-bride-and-groom-sitting-on-a-bench-outside-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Project 2",
  },
  {
    image: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Project 3",
  },
];

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous project
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next project
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-10 px-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p className="uppercase text-[16px] font-[500] text-[#62646C]">MY WORK</p>
          <p className="uppercase font-medium text-2xl">Explore my work</p>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-row gap-2">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="rounded-full bg-gray-300 p-2 hover:bg-gray-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="rounded-full bg-gray-300 p-2 hover:bg-gray-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          {/* <button className="">Know more</button> */}
        </div>
      </div>

      {/* Project Display Section */}
      <div className="flex flex-row justify-end gap-10 items-center my-16">
        <div className="w-full md:w-2/3 h-96">
          <img
            src={projects[currentIndex].image}
            className="w-full h-full object-cover rounded-lg"
            alt={projects[currentIndex].title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
