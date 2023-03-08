import React, { useState, useEffect } from "react";

const images = [
  {
    id: 3,
    path: "assets/yuken.gif",
  },

  {
    id: 7,
    path: "assets/walvoil.png",
  },
  {
    id: 4,
    path: "assets/hydrocontrol.png",
  },
  {
    id: 10,
    path: "assets/do.png",
  },

  {
    id: 2,
    path: "assets/danfoss.png",
  },
  {
    id: 1,
    path: "assets/polyhydrone.png",
  },
  {
    id: 9,
    path: "assets/hydroline.png",
  },
  {
    id: 5,
    path: "assets/premco.png",
  },

  {
    id: 8,
    path: "assets/veljan.png",
  },
  {
    id: 6,
    path: "assets/ms.png",
  },
  {
    id: 11,
    path: "assets/casappa.png",
  },

  {
    id: 12,
    path: "assets/parker.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="relative w-full bg-red-700">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image.path}
            alt="Not Available"
            className="w-full h-full object-cover bg-red-200"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
