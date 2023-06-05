import React from "react";
import { useNavigate } from "react-router-dom";
import { BiMessageAltMinus, BiUser } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";

const DashboardFooter = () => {
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  return (
    <div className="flex text-white text-xs font-normal justify-evenly items-center gap-8 fixed bottom-0 bg-black h-[4rem] w-full z-20">
      <div className="flex flex-col items-center">
        <AiFillHome color="#fff" size={22} />
        <p>Home</p>
      </div>
      <div className="flex flex-col items-center">
        <FaUserFriends color="#fff" size={22} />
        <p>Friends</p>
      </div>
      <BsPlusSquareFill color="#fff" size={26} />
      <div className="flex flex-col items-center">
        <BiMessageAltMinus color="#fff" size={22} />
        <p>Inbox</p>
      </div>
      <div className="flex flex-col items-center">
        <BiUser color="#fff" size={22} />
        <p>Profile</p>
      </div>
    </div>
  );
};

export default DashboardFooter;
