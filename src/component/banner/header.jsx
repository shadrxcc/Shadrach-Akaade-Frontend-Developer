import React from "react";
import logo from "../../assets/spacex-logo-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="justify-between w-full px-4 md:px-20 text-white flex items-center">
      <p className="hidden md:block">Location: Pluto</p>
      <img className="w-[10em]" src={logo} alt="" />
      <p className="hidden md:block">12:27PM WAT</p>
      <div className="flex md:hidden flex-col items-end">
      <p className="">12:27PM</p>
      <p>Pluto</p>
      </div>
    </div>
  );
};

export default Header;
