import React from "react";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="mt-8 pt-3 pb-2 flex flex-col bg-slate-800 text-white p-2">
      <div className="flex flex-row space-x-5 text-lg justify-center">
        <a
          className=" hover:scale-125 text-3xl"
          href="https://www.facebook.com/Mahalaxmi-Trading-Company-Bhilwara-100906727945021/"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="flex flex-col justify-center my-3 items-center">
        Copyright &copy; {footerYear} All Rights Reserved
        <div>Mahalaxmi Trading Company </div>
      </div>
    </footer>
  );
}

export default Footer;
