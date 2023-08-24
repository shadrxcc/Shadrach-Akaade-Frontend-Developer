import React, { useEffect, useState } from "react";
import Rocket from "./rocket";

const Rockets = (props) => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => {
        setRockets(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log();

 

  return (
    <div>
      {rockets.length === 0 ? (
        <p className="text-white font-bold text-3xl md:text-6xl text-center">
          No rockets :(
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-8 md:px-6 gap-y-8 w-full">
          {filteredRockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              rocketname={rocket.rocket_name}
              activestatus={rocket.active}
              stages={rocket.stages}
              img={rocket.flickr_images[0]}
              boosters={rocket.boosters}
              success_rate={rocket.success_rate_pct}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Rockets;
