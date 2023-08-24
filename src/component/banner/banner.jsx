import React from "react";
import Header from "./header";
import Hero from "./hero";
import Arrowdown from "./arrowdown";

const Banner = () => {
  return (
    <div id="banner" className="">
      <Header />
      <Hero />
      <Arrowdown/>
    </div>
  );
};

export default Banner;
