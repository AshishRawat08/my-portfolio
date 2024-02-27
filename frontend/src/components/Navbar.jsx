import React, { useState } from "react";
import Logo from "../assests/a.png";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full h-13 z-20 top-0 bg-black opacity-95">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-1 pb-0">
        <img src={Logo} alt="logo" className="w-12 h-full ml-1" />
        <div className="felx md:order-2">
          <button
            onClick={toggle}
            className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200 mr-2"
          >
            <CiMenuFries className="text-white text-lg" />
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen? "block" : "hidden"
          }`}
        >
          <ul
            className={`flex flex-col p-4 mb:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
              isOpen ? " bg-color-orange-100 bg-opacity-70" : ""
            } `}
          >
            <li>
              <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-red-600 text-white">
                Home
              </div>
            </li>

            <li>
              <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-red-600 text-white">
                About
              </div>
            </li>

            <li>
              <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-red-600 text-white">
                Projects
              </div>
            </li>

            <li>
              <div className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-red-600 text-white">
                Contact
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
