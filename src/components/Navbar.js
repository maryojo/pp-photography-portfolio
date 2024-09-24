import React from "react";
import myIcon from "../assets/my-icon.svg";
import { Link } from "react-router-dom";

const Navbar = ({ showSecondSection }) => {
  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 nav-style px-10 py-5 ${
        showSecondSection ? "hidden" : "block"
      }`}
    >
      <nav className="">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={myIcon} alt="my logo" className="w-7" />
          </Link>
          <div className="flex gap-7 font-medium uppercase text-neutral-500 text-sm">
            <p>My Work</p>
            <Link to='/contact'>Contact me</Link>
            <div className="flex flex-row items-center gap-1">
              <a href="https://blog.maryojo.me" target="_blank" rel="noopener noreferrer">Blog</a>
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
