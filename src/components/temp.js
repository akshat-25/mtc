import React from "react";
import gmaps from "../assets/gmaps.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
function Contact() {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto bg-slate-500">
        <div className="pb-8 my-2">
          <p className="text-4xl font-bold inline border-b-4 border-blue-800">
            Contact Us
          </p>
        </div>
        <div className="bg-slate-400 flex flex-col">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="pt-12 lg:pt-0 bg-green-300 flex ">
              <div className="mb-12  w-full bg-pink-200 flex flex-row justify-row">
                <div className="flex flex-row  bg-red-700 w-full">
                  <div className="">
                    <a
                      className="p-1 rounded-xl  w-20 h-20 flex items-center justify-center shadow-blue-500 hover:scale-110"
                      href="https://www.google.com/maps/@25.3334,74.6168,17z?hl=en"
                    >
                      <img className="h-20" src={gmaps} alt="" srcset="" />
                    </a>
                  </div>
                  <div className="grow ml-6 flex flex-col">
                    <p className="font-bold mb-1">Locate Us</p>
                    <p className="text-gray-500">
                      Near Panna Dhay Circle, Azad Nagar
                    </p>
                    <p className="text-gray-500">Bhilwara, Rajasthan</p>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <a
                        className="p-1 rounded-xl  w-20 h-20 flex items-center justify-center shadow-blue-500 hover:scale-110"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=email@mahalaxmitradingmtc@gmail.com"
                      >
                        <img className="h-20" src={email} alt="" srcset="" />
                      </a>
                    </div>
                    <div className="grow ml-6 flex flex-col">
                      <p className="font-bold mb-1">Email</p>
                      <p className="text-gray-500">
                        mahalaxmitradingmtc@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <a
                          className="p-1 rounded-xl  w-20 h-20 flex items-center justify-center shadow-blue-500 hover:scale-110"
                          href="/"
                        >
                          <img className="h-20" src={phone} alt="" srcset="" />
                        </a>
                      </div>
                      <div className="grow ml-6 flex flex-col">
                        <p className="font-bold mb-1">Phone</p>
                        <p className="text-gray-500">+91 9413356417</p>
                        <p className="text-gray-500">+91 9413356417</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
