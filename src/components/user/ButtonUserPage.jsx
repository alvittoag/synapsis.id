import React from "react";

const ButtonUserPage = ({ setButton, cr, button }) => {
  return (
    <button
      key={cr.name}
      onClick={() => setButton(cr.name)}
      className={
        button === cr.name
          ? "text-lg font-bold text-slate-600 ring-2 ring-purple-600 py-1 px-1 md:px:-2 md:py-2 rounded-lg hover:bg-blue-500 hover:text-gray-50"
          : "text-lg font-bold text-slate-600 duration-500"
      }
    >
      {cr.name}
    </button>
  );
};

export default ButtonUserPage;
