import React from "react";

const Button = ({ button, buttons, setButtons }) => {
  return (
    <button
      onClick={() => setButtons(button.name)}
      className={
        buttons === button.name
          ? "bg-purple-600 ring-1 ring-gray-400 font-semibold py-2 px-2 text-gray-100 text-lg rounded-xl"
          : "bg-gray-300 ring-1 ring-gray-400 py-2 px-2 text-slate-700 text-lg rounded-xl"
      }
    >
      {button.name}
    </button>
  );
};

export default Button;
