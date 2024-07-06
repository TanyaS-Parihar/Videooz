import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./utils/constants.js";
import VideoCard from "./VideoCard.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "./utils/appSlice.js";
// import { useSelector } from "react-redux";
const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setvideos] = useState();

  const [page, setPage] = useState("1");

  const getVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20${1}&regionCode=IN&key=AIzaSyAQEQKVZeXKZ0tSzpHlIrOhVVUOtwFGsjM`
    );
    const json = await data.json();
    console.log("json", json);
    const newJson = json.items;
    setvideos(newJson);
    // setvideos((prev) => (prev ? [...newJson, ...prev] : newJson));
  };

  useEffect(() => {
    getVideos();
  }, []);

  // const handleInfiniteScroll = () => {
  //   if (
  //     document.documentElement.scrollTop + window.innerHeight + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prev) => prev + 1);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfiniteScroll);

  //   return () => window.removeEventListener("scroll", handleInfiniteScroll);
  // }, []);

  //   const data = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20_page=4&regionCode=IN&key=AIzaSyDiwBOwgJEEJUBJO9jIiuMUcaIbVj0HzP0`
  //   );
  //   const json = await data.json();
  //   const jsonData = json.items;
  //   console.log("json", json);
  //   setvideos(jsonData);
  // };

  // above is for total hright jitme m presnetly element h

  //abhi present ki screenpe dikh rhi window height

  //scroll kitna krna pa drha h end tak aane ke liye
  // so basically scroll ht -inner ht = scroll top

  return (
    videos && (
      <div className="flex md:flex-row sm:flex-row flex-wrap ">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
