import React from "react";
import gmaps from "../details/gmaps.svg";
import phone from "../details/phone.svg";
import email from "../details/email.svg";

function Contact() {
  return (
    <div
      name="contact"
      className="max-w-screen bg-white font-display tracking-wider"
    >
      <div className="justify-center flex">
        <p className="my-10 text-4xl inline border-b-4 border-blue-800 ">
          Contact Us
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col px-5 ">
        <div className="lg:w-1/3 flex justify-start px-14">
          <a
            className="p-1 rounded-xl  w-20 h-20 flex items-center justify-center shadow-blue-500 hover:scale-110"
            href="https://www.google.com/maps/@25.3334,74.6168,17z?hl=en"
          >
            <img className="h-20" src={gmaps} alt="" srcSet="" />
          </a>
          <div className="">
            <h3 className=" mb-1 text-xl tracking-wider">Locate Us</h3>
            <p className="text-gray-500">Near Panna Dhay Circle, Azad Nagar</p>
            <p className="text-gray-500">Bhilwara 311001 , Rajasthan</p>
          </div>
        </div>

        <div className="lg:w-1/3 flex justify-start px-14 my-5">
          <a
            className="p-1 rounded-xl  w-20 h-20 flex items-center justify-center shadow-blue-500 hover:scale-110"
            href="https://www.google.com/maps/@25.3334,74.6168,17z?hl=en"
          >
            <img className="h-20" src={phone} alt="" srcSet="" />
          </a>
          <div className="">
            <h3 className=" mb-1 text-xl tracking-wider">Call Us</h3>
            <p className="text-gray-500">Dheeraj Parakh +91-9413356417</p>
            <p className="text-gray-500">Sunil Parasjar +91-9529731016</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
