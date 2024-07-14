import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
const QueryPage = () => {
  const [queryFinal, setQueryFinal] = useState();
  const queryResults = useSelector((store) => store?.query?.addQueryResults);

  const id = queryResults?.map((result) => result?.id?.videoId);

  const fetchFinalQueryResults = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAPy2lV1HoWtFaVAVcKGpUzaaaFkSSw-qQ`
    );
    const json = await data.json();

    setQueryFinal(json.items);
  };
  useEffect(() => {
    fetchFinalQueryResults();
  }, [queryResults]);

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

export default QueryPage;
