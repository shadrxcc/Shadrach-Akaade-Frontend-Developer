import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import RocketDetails from "./component/rockets/rocketdetails";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
