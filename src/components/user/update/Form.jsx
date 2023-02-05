import React from "react";

const Form = ({
  Update,
  checkUser,
  users,
  title,
  setTitle,
  setUser,
  body,
  setBody,
}) => {
  return (
    <form onSubmit={Update}>
      <div className="flex flex-col gap-5 mt-10">
        <select
          onChange={(e) => setUser(e.target.value)}
          className="ring-1 ring-gray-300 py-2 px-3 rounded-lg w-full md:max-w-xs"
        >
          <option value={checkUser?.id}>
            {checkUser?.name ? checkUser.name : "Select User"}
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <input
          className="ring-1 ring-gray-300 py-2 px-3 max-w-xl rounded-lg"
          type="text"
          placeholder="Insert Your Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="ring-1 ring-gray-300 rounded-lg px-3"
          cols="30"
          rows="10"
          value={body}
          placeholder="Insert Your Blog Post Here"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-5 bg-purple-600 px-32 py-2 font-semibold text-gray-50 rounded-lg mx-auto"
        >
          Update Post
        </button>
      </div>
    </form>
  );
};

export default Form;
