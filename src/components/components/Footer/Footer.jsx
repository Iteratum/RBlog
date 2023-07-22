import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Outlet } from "react-router-dom"
import { Disclosure } from "@headlessui/react";

export const Footer = () => {
  return (
    <>
      <Disclosure>
        <footer className="bg-gray-400 min-w-fit text-black">
          <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#f5f4f4ad] py-7">
            <h1
              className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
            md:w-2/5"
            >
              <span className="text-teal-700">Get </span> notified about our blogs published
            </h1>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="text-gray-200
              sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 bg-slate-900 rounded px-2 focus:outline-none"
              />
              <button
                className="bg-teal-400 font-semibold text-lg md:text-xl lg:text-2xl duration-300 px-5 py-2.5 font-[Poppins]
              rounded-md text-black md:w-auto w-full"
              >
                Join Us
              </button>
            </div>
          </div>
          <ItemsContainer />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
          text-center pt-2 text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl pb-8"
          >
            <span>© 2023 Iteratum. All rights reserved.</span>
            <span>Terms · Privacy Policy</span>
            <SocialIcons Icons={Icons} />
          </div>
        </footer>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </Disclosure>
    </>
    
  );
};

