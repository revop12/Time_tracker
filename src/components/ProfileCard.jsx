const ProfileCard = ({ active, setActive, options }) => {
  return (
    <div className="transition-all duration-[800ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:scale-105 cubic-beizer mx-auto md:mx-0 w-[19.625rem] sm:w-110 md:w-[15.625rem] relative h-[12.5rem] md:h-[25rem] rounded-lg shadow-lg flex flex-col justify-between mb-5 md:mb-0">
      <div className="bg-gradient-to-br from-yellow-100 to-purple-200 z-1 rounded-xl flex justify-around p-2 h-[70%] md:flex-col">
        <div className="sm:ml-7 flex items-center">
          <div className="p-[3px] bg-gradient-to-tr to-yellow-600 from-purple-400 rounded-full">
            <img
              src="/assets/image-jeremy.png"
              alt="Jeremy"
              className="bg-white rounded-full w-[70px] sm:w-[80px]"
            />
          </div>
        </div>

        <div className="sm:ml-7 flex flex-col justify-center">
          <p className="font-semibold">Report for</p>
          <h1 className="sm:text-4xl text-2xl font-light">Jeremy Robson</h1>
        </div>
      </div>

      <div className="bg-gradient-to-bl from-purple-200 to-yellow-100 h-[8.75rem] rounded-xl absolute bottom-0 left-0 right-0">
        <div className="md:ml-7 mt-24 md:mt-8 flex justify-around md:flex-col md:gap-3">
          {options.map((option) => (
            <p
              key={option}
              className={`hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all 0.5s ease-in-out cursor-pointer font-semibold ${
                active === option
                  ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-gray-500 to-zinc-800 bg-clip-text text-transparent"
              }`}
              onClick={() => setActive(option)}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
