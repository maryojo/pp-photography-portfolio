import React from "react";
import Navbar from "../../components/Navbar";
import BannerGallery from "./BannerGallery";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const ContactPage = () => {
  return (
    <div className="page pt-20">
      <Navbar />
      <BannerGallery />
      <div>
        <div className="flex flex-col gap-16 md:gap-10 px-10 py-20">
          <div className=" flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <p className="uppercase">Contact information</p>
              <p></p>
            </div>
            <div className="w-full md:w-2/3 flex flex-row gap-16 items-center">
              <div className="flex flex-row gap-3">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12c6.612 0 12-5.375 12-12S18.612 0 12 0Zm7.926 5.531a10.202 10.202 0 0 1 2.317 6.378c-.338-.065-3.722-.755-7.132-.325-.079-.17-.144-.352-.222-.534a30.535 30.535 0 0 0-.676-1.484c3.774-1.536 5.492-3.748 5.713-4.035ZM12 1.771c2.603 0 4.985.975 6.794 2.576-.182.26-1.731 2.33-5.375 3.696-1.68-3.084-3.54-5.61-3.827-6A10.424 10.424 0 0 1 12 1.77Zm-4.36.962c.273.365 2.095 2.903 3.8 5.922-4.79 1.276-9.02 1.25-9.475 1.25.664-3.176 2.812-5.818 5.675-7.172Zm-5.896 9.28v-.312c.443.013 5.414.078 10.53-1.458.299.573.572 1.158.832 1.744-.13.039-.273.078-.403.117-5.284 1.705-8.096 6.364-8.33 6.755a10.226 10.226 0 0 1-2.629-6.846ZM12 22.256c-2.369 0-4.555-.807-6.286-2.16.182-.378 2.264-4.387 8.043-6.404.026-.013.04-.013.065-.026 1.445 3.735 2.03 6.872 2.187 7.77-1.237.534-2.59.82-4.009.82Zm5.714-1.757c-.104-.625-.651-3.618-1.992-7.302 3.215-.507 6.026.326 6.378.443-.443 2.85-2.083 5.31-4.386 6.859Z"
                      fill="#EA4C89"
                      fill-rule="evenodd"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="main-grid-item-icon"
                    fill="none"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                      fill="url(#instagram__a)"
                      fill-rule="evenodd"
                    />
                    <path
                      d="M18.406 7.034a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z"
                      fill="url(#instagram__b)"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M12 0C8.741 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.125 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.882 5.882 0 0 0 4.14 23.37c.764.297 1.636.5 2.913.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.884 5.884 0 0 0 2.126-1.384 5.884 5.884 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.69.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.882 5.882 0 0 0-1.384-2.126A5.883 5.883 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.258 0 12 0Zm0 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.249 1.805-.413 2.228a3.72 3.72 0 0 1-.898 1.38c-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.85-.07c-1.169-.054-1.804-.249-2.227-.413a3.719 3.719 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.85c.053-1.169.249-1.804.413-2.227.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07Z"
                      fill="url(#instagram__c)"
                      fill-rule="evenodd"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="instagram__a"
                        x1="14.101"
                        x2="7.087"
                        y1="-1.272"
                        y2="21.899"
                      >
                        <stop stop-color="#515BD4" />
                        <stop offset=".26" stop-color="#9510B8" />
                        <stop offset=".66" stop-color="#E51804" />
                        <stop offset="1" stop-color="#FFBF00" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="instagram__b"
                        x1="14.101"
                        x2="7.087"
                        y1="-1.272"
                        y2="21.899"
                      >
                        <stop stop-color="#515BD4" />
                        <stop offset=".26" stop-color="#9510B8" />
                        <stop offset=".66" stop-color="#E51804" />
                        <stop offset="1" stop-color="#FFBF00" />
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="instagram__c"
                        x1="14.101"
                        x2="7.087"
                        y1="-1.272"
                        y2="21.899"
                      >
                        <stop stop-color="#515BD4" />
                        <stop offset=".26" stop-color="#9510B8" />
                        <stop offset=".66" stop-color="#E51804" />
                        <stop offset="1" stop-color="#FFBF00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <a href="mailto:hi@maryojo.me">hi@maryojo.me</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <p className="uppercase">Send Me a message</p>
              <p></p>
            </div>
            <form className="w-full md:w-2/3">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full border-0 bg-transparent border-b-[1px] border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none p-2"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-transparent border-0 border-b-[1px] border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none p-2"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full border-0 bg-transparent border-b-[1px] border-gray-300 focus:border-blue-500 focus:ring-0 focus:outline-none p-2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="uppercase flex flex-row gap-3 items-center">
                <p className="font-semibold text-xl ">Send message</p>
                <Button />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
