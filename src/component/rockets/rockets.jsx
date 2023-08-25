import React, { useEffect, useState } from "react";
import Rocket from "./rocket";
import { Link } from "react-router-dom";

const Rockets = (props) => {
//   const [rockets, setRockets] = useState([]);
//   const [filteredrockets, setFilteredRockets] = useState([]);

//   useEffect(() => {
//     fetch("https://api.spacexdata.com/v3/rockets")
//       .then((response) => response.json())
//       .then((data) => {
//         setRockets(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//  useEffect(() => {
//   const filtered = rockets.filter((rocket) => {
//     if (props.location && rocket.country !== props.location) {
//       return false;
//     }

//     const rocketYear = new Date(rocket.first_flight).getFullYear();
//     if (props.year && rocketYear !== parseInt(props.year)) {
//       return false;
//     }

//     if (props.engine && rocket.engines.type !== props.engine) {
//       return false;
//     }

//     return true;
//   });

//   setFilteredRockets(filtered)
//  }, [props.location, props.year, props.engine, rockets])

  

  return (
    <div className="max-w-7xl mx-auto">
      {props.filteredrockets.length === 0 ? (
        <div className="flex flex-col gap-y-3 items-center">
          <p className="text-white font-bold text-3xl md:text-6xl text-center">
            No rockets match your search :(
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-white rounded-lg m-auto text-xl border-white border bg-slate-600 px-10 py-6"
          >
            Please refresh
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-8 px-2 md:px-6 gap-y-8 w-full">
          {props.filteredrockets.map((rocket) => (
            <Link to={`/${rocket.rocket_id}`}>
              <Rocket
                setOpen={props.setOpen}
                key={rocket.id}
                rocketname={rocket.rocket_name}
                activestatus={rocket.active}
                stages={rocket.stages}
                img={rocket.flickr_images[0]}
                boosters={rocket.boosters}
                success_rate={rocket.success_rate_pct}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rockets;
