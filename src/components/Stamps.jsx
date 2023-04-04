import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";

const Stamps = () => {
  return (
    <div className=" flex flex-col justify-center items-center absolute bottom-28 right-3 z-10 text-[12px] text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        <AiOutlineHeart size={20} />
        <p className="mt-1">850</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <AiOutlineComment size={20} />
        <p className="mt-1">500</p>
      </div>
      {/* <div className="flex flex-col items-center mb-3">
        <img src={share} alt="comments" />
      </div> */}
    </div>
  );
};

export default Stamps;
