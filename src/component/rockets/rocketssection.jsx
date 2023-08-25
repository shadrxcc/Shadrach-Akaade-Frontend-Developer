import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper";
import SearchForm from "./searchform";
import Rockets from "./rockets";
import RocketDetails from "./rocketdetails";

const RocketsSection = () => {
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [open, setOpen] = useState(false);
  const [rockets, setRockets] = useState([]);
  const [filteredrockets, setFilteredRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => {
        setRockets(data);
        setFilteredRockets(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = rockets.filter((rocket) => {
      if (location && rocket.country !== location) {
        return false;
      }

      const rocketYear = new Date(rocket.first_flight).getFullYear();
      if (year && rocketYear !== parseInt(year)) {
        return false;
      }

      if (engine && rocket.engines.type !== engine) {
        return false;
      }

      return true;
    });

    setFilteredRockets(filtered);
  };

  return (
    <Wrapper id="rockets" className="py-12 flex flex-col gap-y-16">
      <h1 className="m-auto text-white text-3xl md:text-5xl">Rockets</h1>
      <SearchForm
        location={location}
        onLocation={setLocation}
        year={year}
        onYear={setYear}
        engine={engine}
        onEngine={setEngine}
        onSearch={handleSearch}
      />
      <Rockets
        setOpen={setOpen}
        location={location}
        year={year}
        engine={engine}
        filteredrockets={filteredrockets}
        onSearch={handleSearch}
      />
      <RocketDetails open={open} setOpen={() => setOpen(false)} />
    </Wrapper>
  );
};

export default RocketsSection;
