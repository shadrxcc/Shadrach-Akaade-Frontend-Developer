import React, { useState } from "react";
import img from "../../assets/lambo-removebg-preview.png";
import Modal from "./modal";
import { GrClose } from "react-icons/gr";
import Wrapper from "../wrapper";

const RocketDetails = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
        <button onClick={() => setOpen(true)}>Open</button>
          <Modal open={open}>
      <div className="text-white bg-orange-400 overflow-hidden p-2 md:p-3">
        <div className="flex justify-between">
        <h2 className="text-4xl font-bold">Falcon 2</h2>
        <button onClick={() => setOpen(false)} className="f">
          <iconify-icon width="50" icon="ep:close" style={{ color: "white" }} />
        </button>
        </div>
        
        <div className="">
          <img className="m-auto" src={img} alt="" />
        </div>
        <p className="text-center">
          "The Falcon 1 was an expendable launch system privately developed and
          manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon
          1 became the first privately-developed liquid-fuel launch vehicle to
          go into orbit around the Earth."
        </p>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3">

            <span className="flex flex-col items-center">
              <p>Boosters</p>
              <p>boosters</p>
            </span>

            <span className="flex flex-col items-center">
              <p>Stages</p>
              <p>stages</p>
            </span>

            <span className="flex flex-col items-center">
              <p>Cost per launch</p>
              <p>stages</p>
            </span>

            <span className="flex flex-col items-center">
              <p>Success rate</p>
              <p>stages</p>
            </span>

            <span className="flex flex-col items-center">
              <p>First flight</p>
              <p>stages</p>
            </span>

            <span className="flex flex-col items-center">
              <p>Country</p>
              <p>stages</p>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3">
            <span className="flex flex-col items-center">
              <p>Height</p>
              <span className="flex">
                <p>metres</p>
                <p>feet</p>
              </span>
            </span>

            <span className="flex flex-col items-center">
              <p>Diameter</p>
              <span className="flex">
                <p>metres</p>
                <p>feet</p>
              </span>
            </span>

            <span className="flex flex-col items-center">
              <p>Mass</p>
              <span className="flex">
                <p>kg</p>
                <p>lb</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </Modal>
    </Wrapper>
  
  );
};

export default RocketDetails;
