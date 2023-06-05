import React, { useEffect, useRef, useState } from "react";
import Stamps from "./Stamps";
import VideoInfo from "./VideoInfo";
import useElementOnScreen from "../hook/ElementOnScreen";
const VideoCard = ({
  src,
  profileImage,
  profileName,
  caption,
  id,
  likes,
  comments,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisibile) {
      if (!isVideoPlaying) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    } else {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  }, [isVisibile]);
  return (
    <div className="videoCard">
      <Stamps
        likes={likes}
        comments={comments}
        id={id}
        profileImage={profileImage}
      />
      <VideoInfo profileName={profileName} caption={caption} />
      <video
        ref={videoRef}
        playsInline
        muted
        loop
        preload="true"
        onClick={onVideoPress}
        className="videoCard__player"
        src={src}
        type="video/mp4"
      />
    </div>
  );
};

export default VideoCard;
