import React from "react";
import CountUp from "react-countup";
function Customer() {
  return (
    <>
      <div className="bg-blue-200 py-10">
        <div className="flex lg:flex-row justify-around flex-col">
          <div className="">
            <h2 className=" text-2xl flex justify-center">Products Range</h2>
            <div className="flex flex-row justify-center">
              <CountUp
                className="text-2xl font-display flex justify-center"
                end={300}
                duration={5}
              />
              <h1 className="ml-1 -mt-1 text-3xl font-semibold">+</h1>
            </div>
          </div>
          <div>
            <h2 className="text-2xl tracking-wider flex justify-center bg">
              Satisfied Customers
            </h2>
            <div className="flex flex-row justify-center">
              <CountUp
                className="text-2xl font-display flex justify-center"
                end={3500}
                duration={5}
              />
              <h1 className="ml-1 -mt-1 text-3xl font-semibold">+</h1>
            </div>
            {/* <h1 className="text-4xl">+</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
