import React, { useEffect, useState } from "react";
import { SUGGESTIONS_API } from "./utils/constants";
const TestSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch(SUGGESTIONS_API + search);
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="flex">
      <input
        value={inputValue}
        className="py-3 px-10 border-2"
        placeholder="search for...."
        onChange={(e) => {
          setInputValue(e.target.value);
          setSearch(e.target.value);
          console.log(inputValue);
        }}
      />
      <button className="py-3 px-4 border-2">Search</button>
    </div>
  );
};

export default TestSearchBar;
