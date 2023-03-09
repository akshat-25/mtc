import React from "react";
import { Link } from "react-scroll";

function Home() {
  const images = [
    {
      id: 1,
      image: "assets/yuken.gif",
    },

    {
      id: 2,
      image: "assets/walvoil.png",
    },
    {
      id: 3,
      image: "assets/hydrocontrol.png",
    },
    {
      id: 4,
      image: "assets/do.png",
    },

    {
      id: 5,
      image: "assets/danfoss.png",
    },
    {
      id: 6,
      image: "assets/polyhydrone.png",
    },
    {
      id: 7,
      image: "assets/hydroline.png",
    },
    {
      id: 8,
      image: "assets/premco.png",
    },

    {
      id: 9,
      image: "assets/veljan.png",
    },
    {
      id: 10,
      image: "assets/ms.png",
    },
    {
      id: 11,
      image: "assets/casappa.png",
    },

    {
      id: 12,
      image: "assets/parker.jpg",
    },
  ];
  return (
    <div
      name="home"
      className=" top-0 bg-white border-gray-200 w-full h-screen flex justify-between items-center rounded dark:bg-gray-900 bg-gradient-to-r to-cyan-500 from-slate-50 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row ">
        <div className="flex flex-col items-center justify-center">
          <p className="lg:text-6xl text-black items-center md:text-4xl text-2xl md:justify-center md:items-center justify-center font-display tracking-wider mt-28 ">
            Mahalaxmi Trading Company
          </p>
          <p className="text-blue-900 py-4 max-w-screen md:text-2xl sm:text-sm font-display tracking-wide">
            A House of Hydraulic & Earth moving spares
          </p>

          <div className="flex items-center">
            <Link
              to="products"
              duration={500}
              className=" group text-white w-fit lg:px-6 lg:py-3 lg:mx-1 lg:my-2 flex items-center rounded-full bg-blue-900 cursor-pointer p-2 mr-2"
            >
              Products
            </Link>

            <a
              href="https://drive.google.com/file/d/1Gfx3F729RTK2f_pdIeF3h0hB7tfxgstj/view?usp=share_link"
              duration={500}
              className="  text-white w-fit lg:mx-5 lg:px-6 lg:py-3 lg:my-2 flex items-center rounded-full bg-blue-900 cursor-pointer p-2 mx-1"
            >
              Download Brochure
            </a>
            <Link
              to="contact"
              duration={500}
              className="  text-white w-fit lg:px-6 lg:py-3 lg:my-2 flex items-center rounded-full bg-blue-900 cursor-pointer p-2 ml-2"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:mt-15 lg:pt-16 mt-10 mx-5 ">
            <div className="container grid grid-cols-3 gap-3 lg:gap-4 lg:grid-cols-6 ">
              {images.map((elem) => {
                return (
                  <div className="">
                    <div className="w-auto border-gray-900 duration-150 ">
                      <img
                        key={elem.id}
                        src={elem.image}
                        alt=""
                        srcSet=""
                        className="px-3 pt-3 py-3"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
