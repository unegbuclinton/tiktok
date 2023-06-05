import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const { userData } = useSelector((state) => state.dashboard);
  const [active, setActive] = useState(0);
  const { email, balance } = userData;
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout");
  };
  const header = [{ text: "Following" }, { text: "For You" }];
  return (
    <div className="fixed top-[15px] z-10 w-full flex gap-3 justify-center items-center py-2 mb-2">
      {header.map(({ text }, idx) => (
        <p
          key={idx}
          className={`${
            active === idx ? "border-white" : "border-transparent"
          } border-b  text-white duration-150 `}
          onClick={() => setActive(idx)}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default Notification;
