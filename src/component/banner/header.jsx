import React, { useEffect, useState } from "react";
import logo from "../../assets/spacex-logo-svgrepo-com.svg";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="justify-between w-full px-4 md:px-20 text-white flex items-center">
      <p className="hidden md:block">Location: Pluto</p>
      <img className="w-[10em]" src={logo} alt="" />
      <p className="hidden md:block">{time.toLocaleTimeString()}</p>
      <div className="flex md:hidden flex-col items-end">
        <p className="">{time.toLocaleTimeString()}</p>
        <p>Pluto</p>
      </div>
    </div>
  );
};

export default Header;
