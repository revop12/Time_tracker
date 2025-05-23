import { useState } from "react";

const Card = ({ title, color, timeframes, active, imageLocation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="transition-all duration-[800ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:scale-105 h-[10.5rem] w-[19.625rem] sm:w-110 md:w-full relative md:mt-0 rounded-xl">
      <div className={`h-[30%] ${color} rounded-xl flex justify-end pr-5`}>
        <img
          className="object-cover"
          src={imageLocation}
          width={80}
          alt={title}
        />
      </div>
      <div className="w-[19.625rem] sm:w-110 md:w-full absolute top-9 bg-gradient-to-br from-yellow-100 to-purple-100 rounded-xl z-2 sm:px-4 sm:py-4">
        <div className="flex justify-between items-center p-4 relative">
          <h1 className="lg:text-xl font-extrabold">{title}</h1>
          <div
            className="hover:cursor-pointer scale-130 border-1 p-2 rounded-3xl hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 ease-in-out relative"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img src="./src/assets/icon-ellipsis.svg" alt="Menu" />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-28 bg-transparent backdrop-blur-sm rounded-2xl shadow-lg z-10">
                <ul className="p-2 flex sm:flex-col text-sm">
                  <li className="p-2 hover:bg-purple-50 rounded-2xl cursor-pointer">
                    Edit
                  </li>
                  <li className="p-2 hover:bg-purple-50 rounded-2xl cursor-pointer">
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between sm:flex-col items-center sm:items-start px-4 py-2 gap-4">
          <h1 className="font-light text-2xl sm:text-3xl lg:text-6xl">
            {timeframes[active].current}hrs
          </h1>
          <p className="font-bold bg-gradient-to-r from-red-400 to-gray-900 bg-clip-text text-transparent">
            Last Week - {timeframes[active].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
