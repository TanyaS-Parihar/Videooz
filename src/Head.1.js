import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { SUGGESTIONS_API } from "./utils/constants";

export const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //side hamburber menu logo
  //cenmter part search
  //user
  console.log(searchQuery);
  /// Now you have to make an api call?? every time my search query changes. so for this we will use useefect
  useEffect(() => {
    //make an api call every key press but if time diff between two keypress is <200ms
    //decline th call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(SUGGESTIONS_API + searchQuery);
    const json = data.json();
    console.log(json);
  };
  const dispatch = useDispatch();

  const handleHamburgerMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" fixed z-10 p-2 flex m-2">
      <div>
        <img
          onClick={handleHamburgerMenu}
          className="w-10"
          alt="hamburger-menu"
          src="https://t3.ftcdn.net/jpg/08/07/60/08/240_F_807600892_lqVJQSAtNrGfSJCkTGmNZHZ0cqNnbOwy.jpg"
        />
      </div>
      <div>
        <img
          className="w-[150px]"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png?20170829160812"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          className="w-[250px] border-black border-2 px-2 py-4"
          type="text"
        />
        <button className="w-[50px] bg-gray-600 px-2 py-4">Search</button>
      </div>
      <div className="fixed left-52 w-[245px] bg-white rounded-md top-16  z-10">
        <ul>
          <li>abcd</li>
          <li>abcd</li>
          <li>abcd</li>
          <li>abcd</li>
          <li>abcd</li>
          <li>abcd</li>
        </ul>
      </div>
      <div className="w-[50px]">
        <img src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png" />
      </div>
    </div>
  );
};
