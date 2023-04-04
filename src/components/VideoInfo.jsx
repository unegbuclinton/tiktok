import React from "react";
import profile from "../assets/images/img1.jpg";
const VideoInfo = () => {
  return (
    <div className="absolute bottom-20 left-2 font-light text-white text-[9px] max-w-[205px]">
      <div className="flex gap-1 items-center mb-1">
        <img
          src={profile}
          alt=""
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <p>Joey Tribbiani.</p>
        <p className="p-1 border border-white rounded-lg">SirGregor</p>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. #Perferendis,
        doloribus.
      </p>
    </div>
  );
};

export default VideoInfo;
