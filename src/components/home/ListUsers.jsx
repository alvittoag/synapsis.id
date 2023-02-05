import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const ListUsers = ({ users }) => {
  const [search, setSearch] = useState("");

  const allData = users.filter((user) => {
    if (search === "") {
      return user;
    } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
      return user;
    }
  });

  return (
    <div className="md:w-[900px] lg:w-[250px] px-3 md:px-0 mb-10 md:mb-0  mt-8 md:mt-0  ">
      <h1 className="text-2xl  md:text-xl font-bold text-slate-700 mb-5">
        Most Users
      </h1>
      <input
        type="text"
        className="ring-1 md:py-1 md:px-1 mb-4 ring-gray-300 rounded-md w-full md:w-48 lg:w-56 py-3 px-2"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-4">
        {allData.map((user) => (
          <div key={user.id}>
            <div className="flex items-center gap-4 md:gap-2">
              <FaUserCircle className="w-10 h-10 md:w-7 md:h-7" />
              <p className="font-semibold text-lg md:text-base text-slate-700">
                {user.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
