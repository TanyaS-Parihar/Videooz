import React from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "./utils/appSlice";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const dispatch = useDispatch();

  const handleCardClick = () => {
    console.log("celick", info);
    dispatch(addMovieDetails(info));
  };
  return (
    <div
      onClick={handleCardClick}
      className="p-2 m-2 w-64 shadow-lg bg-gray-100"
    >
      <img className="rounded-lg" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold text-sm py-2">{title}</li>
        <li className=" text-sm">{channelTitle}</li>
        <li className=" text-sm">{statistics.viewCount}Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
