import React from "react";
import CountUp from "react-countup";
function Customer() {
  return (
    <>
      <div className="bg-blue-200 py-10 ">
        <div className="flex lg:flex-row justify-around flex-col">
          <div className="">
            <h2 className=" text-2xl flex justify-center">Products Range</h2>
            <CountUp
              className="text-2xl font-display flex justify-center"
              end={300}
              duration={5}
            />
          </div>
          <div>
            <h2 className="text-2xl tracking-wider flex justify-center">
              Satisfied Customers
            </h2>
            <CountUp
              className="text-2xl  font-display flex justify-center"
              end={3000}
              duration={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
