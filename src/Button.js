import React from "react";

const Button = ({ name }) => {
  return (
    <div className="px-5 py-2 m-2 font-bold bg-orange-500 border-2 border-orange-700 rounded-xl ">
      {name}
    </div>
  );
};

export default Button;
