import React from "react";
import { Link } from "react-scroll/modules";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import mtc from "../details/mtc_logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "products",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <>
      <div className=" top-0 w-full h-20 px-4 flex items-center rounde justify-end bg-gradient-to-r to-cyan-500 from-slate-50">
        <div className=" top-0 border-gray-200 w-full h-20 px-4 flex items-center">
          <img className="h-12 mr-3 " src={mtc} alt="" srcSet="" />
          <div className="flex flex-col justify-start ">
            <span className="self-center lg:text-xl text-sm  text-blue-800 font-display tracking-wide">
              Mahalaxmi Trading Company
            </span>
            <p className="font-display tracking-wide lg:text-xl text-sm">
              GST No. 08AAPFM6552N1ZH
            </p>
          </div>
        </div>
        <ul className="md:flex hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-slate-900 font-medium hover:scale-150 duration-200 font-display tracking-wider"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-blue-800 md:hidden "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r to-cyan-400 from-slate-50 text-blue-800 ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text text-4xl font-display tracking-wide"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
