import React from "react";
import Button from "./Button";

const ButtonList = () => {
  //another way of doing this is creating a list
  //const list =["All","Gaming","Songs","Soccer","Fashion"...]
  //and map them and put them in one button
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Soccer" />
      <Button name="Fashion" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonList;
