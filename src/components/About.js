import React from "react";
function About() {
  return (
    <div
      name="about"
      className="w-full bg-slate-50 font-display tracking-wider"
    >
      <div className="max-w-screen px-14 flex flex-col justify-center items-center">
        <div className="pb-2 my-4">
          <p className="text-4xl inline border-b-4 border-blue-800 font-display tracking-wider">
            About Us
          </p>
        </div>

        <p className="text-xl mt-5">
          Established in the year 2000, we, “Mahalaxmi Trading Company”, are a
          renowned organization in supplying, trading and premium quality range
          of Hydraulic Valves, Pumps, Motors, Hoses, Connectors and Filters,
          Drilling & Earth moving equipments.
        </p>
        <p className="text-xl mt-10">
          Our range of products are precision engineered by making use of
          optimum grade raw material in sync with the industry laid standards
          and norms to attain maximum level of satisfaction. Furthermore, our
          professionals keep in pace with the changing market trends and demands
          of the customers,therefore are capable of customizing these products
          as per their specified requirements.
        </p>
        <p className="text-xl mt-10">
          To offer an entirely defecr-free range of products to our estemeed
          clients, we test the quality of these products before dispatching
          these industrial goods to their ends, in order to ensure their
          excellent quality and longer service life.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
