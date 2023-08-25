import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import { ScrollToTop } from "./component/ScrollToTop";

const RouteSwitch = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:rocket_id" element={<App />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
