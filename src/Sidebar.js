import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  // const home = lazy(()=>{ import("./home")})
  return (
    <div className="p-5 shadow-lg mt-14 bg-slate-50 ">
      <ul className=" font-medium">
        <Link to="/">
          <li onClick={() => {}}>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="m-2 font-medium">Subscriptions</h1>
      <ul className="m-2">
        <li className="m-1">Music</li>
        <li className="m-1">Sports</li>
        <li className="m-1">Gaming</li>
        <li className="m-1">Movies</li>
      </ul>
      <h1 className="m-2 font-medium">Watch Later</h1>
      <ul className="m-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
