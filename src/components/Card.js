import React, { useContext } from "react";
// import ThemeContext from "../context/ThemeContext";

const Card = ({ children }) => {
//   const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className="w-full h-full rounded-md relative p-8 border-2 bg-blue
      bg-gray-900 border-gray-800 "
    >
      {children}
    </div>
  );
};

export default Card;

//  ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"}`