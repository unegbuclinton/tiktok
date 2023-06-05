import React from "react";
import profile from "../assets/images/img1.jpg";
const VideoInfo = ({ caption, profileName }) => {
  return (
    <div className="absolute bottom-10 left-2 font-light text-white text-[9px] max-w-[205px]">
      <div className="flex gap-1 items-center mb-1">
        <p>{profileName}</p>
      </div>
      <p>{caption}</p>
    </div>
  );
};

export default VideoInfo;
