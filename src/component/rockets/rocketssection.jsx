import React, { useState } from "react";
import Wrapper from "../wrapper";
import SearchForm from "./searchform";
import Rockets from "./rockets";

const RocketsSection = () => {
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
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
      />
      <Rockets location={location} year={year} engine={engine} />
    </Wrapper>
  );
};

export default RocketsSection;
