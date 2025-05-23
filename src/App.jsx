import { useState } from "react";
import Card from "./components/Card.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import datas from "../data";

const App = () => {
  const [active, setActive] = useState("Daily");

  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="md:h-[100vh] sm:w-[80%] md:w-full sm:mx-auto flex flex-col md:flex-row items-center justify-center mt-10 md:m-0">
      <div className="flex flex-col md:flex-row md:w-[90%]">
        <ProfileCard active={active} setActive={setActive} options={options} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-16 md:gap-y-16 md:gap-x-4 lg:gap-y-22 md:ml-4 w-full">
          {datas.map((data) => (
            <Card
              active={active}
              title={data.title}
              color={data.color}
              timeframes={data.timeframes}
              imageLocation={data.imageLocation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
