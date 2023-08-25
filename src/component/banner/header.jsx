import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/spacex-logo-svgrepo-com.svg";
import { gsap } from "gsap";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const timeRef = useRef(null);
  const logoRef = useRef(null)


  useEffect(() => {
    const time = timeRef.current;
    gsap.fromTo(
      time,
      {
        opacity: 0,
        x: -70,
      },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
    
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="justify-between w-full max-w-7xl mx-auto px-4 md:px-20 text-white flex items-center">
      <p className="hidden md:block">Location: Pluto</p>
      <img ref={logoRef} className="w-[10em]" src={logo} alt="" />
      <p ref={timeRef} className="hidden md:block">
        {time.toLocaleTimeString()}
      </p>
      <div ref={timeRef} className="flex md:hidden flex-col items-end">
        <p className="">{time.toLocaleTimeString()}</p>
        <p>Pluto</p>
      </div>
    </div>
  );
};

export default Header;
