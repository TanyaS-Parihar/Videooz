// import React from 'react'

// const NewQueryPage = () => {
//   return (
//     <div>NewQueryPage</div>
//   )
// }

// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeMenu } from "./utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import LiveChat from "./LiveChat";
// import CommentsContainer from "./CommentsContainer";

// const WatchPage = () => {
//   const dispatch = useDispatch();
//   //NEW HOOK
//   const [searchParams] = useSearchParams();
//   const paramId = searchParams.get("v");
//   // toh ye v ke bad ka return krega apne ko id
//   const addMovieDetails = useSelector((store) => store.app.addMovieDetails);
//   // (" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyDiwBOwgJEEJUBJO9jIiuMUcaIbVj0HzP0");
//   // const vidDetails = useSelector((store) => store.app.addMovieDetails);console.log
//   const [isDescriptionOpen, setIsDescriptionOpen] = useState();

//   useEffect(() => {
//     dispatch(closeMenu());
//   }, []);

//   const [newlikeCount, SetNewlikeCount] = useState(37544);

//   const [like, Setlike] = useState(false);

//   if (!addMovieDetails) return null;

//   const { snippet, statistics } = addMovieDetails;
//   const { channelTitle, description, title } = snippet;
//   const { viewCount, commentCount } = statistics;
//   const { likeCount } = statistics;

//   return (

//      videos &&
//       <div className="flex md:flex-row sm:flex-row flex-wrap ">
//         {videos.map((video) => (
//           <Link to={"/watch?v=" + video.id}>
//             <VideoCard key={video.id} info={video} />
//           </Link>
//         ))}</div>

//       )

// export default NewQueryPage

// const QueryCard = () => {
//   return <div>QueryCard</div>;
// };

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useParams } from "react-router-dom";
import { addQueryResults } from "./utils/querySlice";

const QueryCard = () => {
  const [queryFinal, setQueryFinal] = useState();
  const [videosId, setVideosId] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  console.log(params);

  // queryResults?.map((i) => {

  const getSearchResults = async () => {
    const data = await fetch(
      ` https://youtube.googleapis.com/youtube/v3/search?type=video&chart=mostPopular&maxResults=1&regionCode=IN&q=${params.id}&key=AIzaSyAPy2lV1HoWtFaVAVcKGpUzaaaFkSSw-qQ`
    );
    const json = await data.json();
    console.log("json.items", json.items);

    const JsonArray = json.items;

    const vidd = JsonArray.map((j) => {
      const vid = j.id?.videoId;

      console.log(vid);
      setVideosId(vid);
    });
  };
  const fetchFinalQueryResults = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videosId}&key=AIzaSyAPy2lV1HoWtFaVAVcKGpUzaaaFkSSw-qQ`
    );
    const json = await data.json();
    console.log("QueryFinal", json.items);
    setQueryFinal(json.items);
  };

  useEffect(() => {
    getSearchResults();
    fetchFinalQueryResults();
  }, [id]);
  // const id = queryResults?.map((result) => result?.id?.videoId);

  return (
    <div className="flex md:flex-row sm:flex-row flex-wrap ">
      {queryFinal &&
        queryFinal.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id.videoId} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default QueryCard;
