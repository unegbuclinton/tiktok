import React from "react";
import DashboardFooter from "./DashboardFooter";
import Notification from "./Notification";
import "../assets/styles/VideoCard.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageCounter, updateProfilesList } from "../redux/DashboardSlice";

const Dashboardlayout = ({ children, notify }) => {
  const { pageNumber } = useSelector((state) => state.dashboard);

  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const loadItems = () => {
    const container = containerRef.current;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      dispatch(pageCounter());
      dispatch(updateProfilesList(pageNumber));
    }
  };
  return (
    <div className="relative">
      {notify && <Notification />}
      <div ref={containerRef} onScroll={loadItems} className="app__video">
        {children}
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboardlayout;
