import React from "react";
import { useState } from "react";

function Products() {
  const Photos = [
    {
      id: 1,
      image: "assets/adapters1.jpg",
      name: "",
      category: "Adapter",
    },
    {
      id: 2,
      image: "assets/adapters2.jpg",
      name: "",
      category: "Adapter",
    },
    {
      id: 3,
      image: "assets/adapters3.webp",
      name: "",
      category: "Adapter",
    },
    {
      id: 4,
      image: "assets/adapters4.jpg",
      name: "",
      category: "Adapter",
    },
    {
      id: 5,
      image: "assets/adapters5.png",
      name: "",
      category: "Adapter",
    },
    {
      id: 6,
      image: "assets/adapters6.jpg",
      name: "",
      category: "Adapter",
    },
    {
      id: 7,
      image: "assets/motor1.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 8,
      image: "assets/motor2.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 9,
      image: "assets/motor3.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 10,
      image: "assets/motor4.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 11,
      image: "assets/motor5.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 12,
      image: "assets/motor6.jpg",
      name: "",
      category: "Motor",
    },
    {
      id: 13,
      image: "assets/pump1.jpg",
      name: "0P Series ",
      category: "Pumps",
    },
    {
      id: 14,
      image: "assets/pump2.jpg",
      name: "1P Series",
      category: "Pumps",
    },
    {
      id: 44,
      image: "assets/tendum_pump.png",
      name: "Tendum Pump",
      category: "Pumps",
    },
    {
      id: 45,
      image: "assets/2P_series_pump.png",
      name: "2P Series",
      category: "Pumps",
    },

    {
      id: 15,
      image: "assets/Pump4.jpg",
      name: "Pump 4",
      category: "cast pumps",
    },
    {
      id: 42,
      image: "assets/Pump5.jpg",
      name: "Pump 5",
      category: "cast pumps",
    },
    {
      id: 16,
      image: "assets/pressure_gauge1.jpg",
      name: "",
      category: "pressure gauge",
    },
    {
      id: 17,
      image: "assets/pressure_gauge2.jpg",
      name: "",
      category: "pressure gauge",
    },
    {
      id: 18,
      image: "assets/pressure_gauge3.jpg",
      name: "",
      category: "pressure gauge",
    },
    {
      id: 19,
      image: "assets/pressure_gauge4.jpg",
      name: "",
      category: "pressure gauge",
    },
    {
      id: 20,
      image: "assets/pressure_gauge5.jpg",
      name: "",
      category: "pressure gauge",
    },
    {
      id: 21,
      image: "assets/van pump1.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 22,
      image: "assets/van pump2.jpg",
      name: "",
      category: "van pumps",
    },

    {
      id: 23,
      image: "assets/van pump3.jpg",
      name: "",
      category: "van pumps",
    },

    {
      id: 24,
      image: "assets/van pump4.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 25,
      image: "assets/van pump5.png",
      name: "",
      category: "van pumps",
    },
    {
      id: 43,
      image: "assets/yuken_1.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 55,
      image: "assets/yuken_2.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 56,
      image: "assets/yuken_3.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 57,
      image: "assets/van pump6.jpg",
      name: "",
      category: "van pumps",
    },
    {
      id: 26,
      image: "assets/oil seals1.jpg",
      name: "",
      category: "oil seals",
    },
    {
      id: 27,
      image: "assets/oil seals2.jpg",
      name: "",
      category: "oil seals",
    },
    {
      id: 28,
      image: "assets/oil seals3.jpg",
      name: "",
      category: "oil seals",
    },
    {
      id: 29,
      image: "assets/oil seals4.webp",
      name: "",
      category: "oil seals",
    },
    {
      id: 30,
      image: "assets/oil seals5.jpg",
      name: "",
      category: "oil seals",
    },
    {
      id: 31,
      image: "assets/oil seals6.jpg",
      name: "",
      category: "oil seals",
    },
    {
      id: 32,
      image: "assets/polyhydron1.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 33,
      image: "assets/polyhydron2.jpg",
      name: "",
      category: "Valves",
    },

    {
      id: 33,
      image: "assets/polyhydron3.jpg",
      name: "",
      category: "Valves",
    },

    {
      id: 34,
      image: "assets/polyhydron4.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 35,
      image: "assets/polyhydron5.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 44,
      image: "assets/polyhydron6.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 46,
      image: "assets/polyhydron_prod_1.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 44,
      image: "assets/polyhydron_prod_2.webp",
      name: "",
      category: "Valves",
    },
    {
      id: 44,
      image: "assets/polyhydron_prod_3.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 44,
      image: "assets/polyhydron_prod_4.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 44,
      image: "assets/polyhydron_prod_5.jpg",
      name: "",
      category: "Valves",
    },
    {
      id: 36,
      image: "assets/valve1.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 37,
      image: "assets/valve2.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 38,
      image: "assets/valve3.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 39,
      image: "assets/valve4.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 60,
      image: "assets/walvoil_3.png",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 61,
      image: "assets/walvoil_1.webp",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 62,
      image: "assets/walvoil_2.jpg",
      name: "",
      category: "hydraulic valves",
    },

    {
      id: 67,
      image: "assets/hy_valve_12.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 68,
      image: "assets/hy_valve_4.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 69,
      image: "assets/hy_valve_3.jpg",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 70,
      image: "assets/hy_valve_1.webp",
      name: "",
      category: "hydraulic valves",
    },
    {
      id: 40,
      image: "assets/veljan1.jpg",
      name: "",
      category: "Filters",
    },
    {
      id: 38,
      image: "assets/veljan2.jpg",
      name: "",
      category: "Filters",
    },
    {
      id: 39,
      image: "assets/veljan3.jpg",
      name: "",
      category: "Filters",
    },
    {
      id: 40,
      image: "assets/veljan4.jpg",
      name: "",
      category: "Filters",
    },
    {
      id: 41,
      image: "assets/veljan5.jpg",
      name: "",
      category: "Filters",
    },
    {
      id: 50,
      image: "assets/veljan_3.webp",
      name: "",
      category: "Filters",
    },
    {
      id: 51,
      image: "assets/veljan_1.webp",
      name: "",
      category: "Filters",
    },
    {
      id: 52,
      image: "assets/veljan_2.jpg",
      name: "",
      category: "Filters",
    },

    {
      id: 72,
      image: "assets/hydroline_5.jpg",
      name: "",
      category: "hydroline",
    },
    {
      id: 73,
      image: "assets/hydroline_2.png",
      name: "",
      category: "hydroline",
    },
    {
      id: 74,
      image: "assets/hydroline_3.jpg",
      name: "",
      category: "hydroline",
    },
    {
      id: 75,
      image: "assets/hydroline_4.jpg",
      name: "",
      category: "hydroline",
    },
    {
      id: 76,
      image: "assets/hydroline_1.jpg",
      name: "",
      category: "hydroline",
    },
    {
      id: 77,
      image: "assets/hydroline_6.jpg",
      name: "",
      category: "hydroline",
    },
    {
      id: 78,
      image: "assets/hy_valve_5.jpg",
      name: "",
      category: "cast_iron",
    },
    {
      id: 79,
      image: "assets/hy_valve_6.jpg",
      name: "",
      category: "cast_iron",
    },
    {
      id: 80,
      image: "assets/hy_valve_7.jpg",
      name: "",
      category: "cast_iron",
    },
    {
      id: 81,
      image: "assets/hy_valve_8.jpg",
      name: "",
      category: "cast_iron",
    },
    {
      id: 82,
      image: "assets/hy_valve_9.jpg",
      name: "",
      category: "cast_iron",
    },
    {
      id: 83,
      image: "assets/hy_valve_10.jpg",
      name: "",
      category: "cast_iron",
    },

    {
      id: 84,
      image: "assets/hy_valve_11.jpg",
      name: "",
      category: "cast_iron",
    },
  ];
  const categ = [
    {
      id: 10,
      name: "hydraulic valves",
      category: "hydraulic valves",
    },

    {
      id: 2,
      name: "dowty gear pumps",
      category: "Pumps",
    },
    {
      id: 6,
      name: "hydraulic motors",
      category: "Motor",
    },
    {
      id: 4,
      name: "polyhydron products",
      category: "Valves",
    },

    {
      id: 11,
      name: "hydroline products",
      category: "hydroline",
    },

    {
      id: 12,
      name: "cast iron gear pumps",
      category: "cast_iron",
    },
    {
      id: 1,
      name: "hosepipes & adapters",
      category: "Adapter",
    },

    {
      id: 8,
      name: "pressure Gauge",
      category: "pressure gauge",
    },

    {
      id: 9,
      name: "yuken van pumps & accessories",
      category: "van pumps",
    },
    {
      id: 7,
      name: "oil Seals",
      category: "oil seals",
    },

    {
      id: 5,
      name: "veljan van pumps & cartridges",
      category: "Filters",
    },
  ];

  const [cate, setCate] = useState(false);

  const [items, setItems] = useState(
    Photos.filter((currElem) => {
      return currElem.category === "hydraulic valves";
    })
  );
  const filterItem = (categItem) => {
    const updatedItems = Photos.filter((currElem) => {
      return currElem.category === categItem;
    });
    setItems(updatedItems);
  };
  const renderList = categ.map((curr) => {
    return (
      <button
        key={curr.id}
        onClick={() => filterItem(curr.category)}
        className="text-white capitalize bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full mx-2 px-3 lg:px-3 py-2.5  text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer hover:scale-110 "
      >
        {curr.name}
      </button>
    );
  });
  const handleChange = (e) => {
    setCate(filterItem(e.target.value));
  };
  return (
    <div name="products" className="max-w-screen  bg-slate-50 ">
      <div className="pb-5 pt-10 justify-center flex ">
        <p className="text-4xl inline border-b-4 border-blue-800 font-display tracking-wider">
          Our Products
        </p>
      </div>
      <ul className="lg:flex lg:flex-row lg:justify-center ml-5 justify-center flex-col md:flex hidden">
        {renderList}
      </ul>
      <div
        onClick={() => setCate(!cate)}
        className="cursor-pointer pr-4 z-10 text-blue-800 md:hidden "
      >
        {
          <div className="flex justify-center">
            <div className="relative inline-block">
              <select
                className="bg-white py-2 px-4 border border-gray-400 rounded shadow appearance-none leading-tight focus:outline-none focus:shadow-outline capitalize"
                value={renderList}
                onChange={handleChange}
              >
                <option value="">Select Product Category</option>
                {categ.map((option) => (
                  <option key={option.id} value={option.category}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" />
                </svg>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="my-3 p-10 mx-10">
        <div className="container grid grid-cols-2 gap-4 lg:gap-4 lg:grid-cols-7 ">
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <div className="">
                <div className="w-auto rounded border-double  border-4 border-gray-900 duration-150 hover:scale-105 shadow-lg shadow-cyan-700">
                  <img key={id} src={image} alt={name} srcSet="" className="" />
                  <p className="text-lg font-semibold flex justify-center transition ">
                    {" "}
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
