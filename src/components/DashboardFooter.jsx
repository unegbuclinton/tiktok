import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import profile from "../assets/images/img1.jpg";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex justify-center items-center gap-8 fixed bottom-0 bg-black h-[4rem] w-full z-20">
      <RiHome5Line color="#fff" size={22} />
      <BsSearch color="#fff" size={22} />
      <BiMessageSquareAdd color="#fff" size={22} />
      <MdVideoLibrary color="#fff" size={22} />
      <div className="relative rounded-full w-[30px] h-[30px]">
        <img
          src={profile}
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <span className="w-[5px] h-[5px] bg-red-600 rounded-full absolute -bottom-19 left-[50%] translate-x-0 -translate-y-[50%]"></span>
      </div>
    </div>
  );
};

export default DashboardFooter;
