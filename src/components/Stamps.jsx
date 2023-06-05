import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getUserData, likeAPost } from "../redux/DashboardSlice";

const Stamps = ({ likes, id, comments, profileImage }) => {
  const { userData } = useSelector((state) => state.dashboard);
  const { limit, nextTime } = userData;
  const dispatch = useDispatch();
  const [forLike, setForLike] = useState(false);
  const formatDate = dayjs(nextTime).format("ddd DD/MM hh:mm");
  const getLike = (id) => {
    setForLike((prev) => !prev);
    dispatch(likeAPost(id)).then(() => {
      dispatch(getUserData());
      if (!limit) return;
      toast.error(
        `You have reached your 100 likes daily limit! Come back at ${formatDate}`
      );
    });
  };
  return (
    <div className=" flex flex-col justify-center gap-2 items-center absolute bottom-7 right-3 z-10 text-sm text-white font-medium">
      <div className="flex flex-col items-center mb-3">
        {!forLike && <AiOutlineHeart size={23} onClick={() => getLike(id)} />}
        {forLike && (
          <AiFillHeart size={23} color="#e81405" onClick={() => getLike(id)} />
        )}
        <p className="mt-1">{likes}</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <TfiComment size={20} />
        <p className="mt-1">{comments}</p>
      </div>
      <div className="flex flex-col items-center mb-3">
        <FiSend size={22} />
        <p className="mt-1">425</p>
      </div>
      <img
        src={profileImage}
        alt=""
        className="w-[30px] h-[30px] rounded-full object-cover"
      />
    </div>
  );
};

export default Stamps;
