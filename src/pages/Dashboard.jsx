import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import Dashboardlayout from "../components/Dashboardlayout";
import VideoCard from "../components/VideoCard";
// import ImageCard from "../components/ImageCard";
import { ImSpinner2 } from "react-icons/im";
import LazyLoad from "react-lazy-load";

import { uploadProfiles } from "../redux/DashboardSlice";
import "./pages.css";
const Dashboard = () => {
  const listener = useRef(true);
  const { isLoading, pageNumber, profiles } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (listener.current) {
      listener.current = false;
      dispatch(uploadProfiles(pageNumber));
    }
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dashboardlayout notify>
      {profiles?.map(
        (
          { URL, id, profileName, caption, comments, profileImage, likes },
          idx
        ) => {
          return (
            <LazyLoad height="100%" key={idx} offset={100} once>
              <VideoCard
                src={URL}
                id={id}
                profileImage={profileImage}
                comments={comments}
                caption={caption}
                profileName={profileName}
                likes={likes}
              />
            </LazyLoad>
          );
        }
      )}
      <div className="flex justify-center">
        {isLoading && <ImSpinner2 className="mb-5 animate-spin" />}
      </div>
    </Dashboardlayout>
  );
};

export default Dashboard;
