import { useRouter } from "next/router";
import React, { useState } from "react";

const CreatePost = ({ users }) => {
  const URL = "https://gorest.co.in/public/v2/posts";
  const router = useRouter();
  const Submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          user_id: user,
          title,
          body,
        }),
        headers: {
          Authorization:
            "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
          "Content-Type": "application/json",
        },
      });
      setUser(0), setBody(""), setTitle("");
      router.push({
        pathname: "/",
        query: { message: "Insert Data Succesfully" },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <form onSubmit={Submit}>
      <div className="flex flex-col gap-5 mt-10">
        <select
          onChange={(e) => setUser(e.target.value)}
          className="ring-1 ring-gray-300 py-2 px-3 rounded-lg  w-full md:max-w-xs"
        >
          <option value="default">Select User</option>
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="ring-1 ring-gray-300 rounded-lg px-3"
          cols="30"
          rows="10"
          placeholder="Insert Your Blog Post Here"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-5 bg-purple-600 px-32 py-2 font-semibold text-gray-50 rounded-lg mx-auto"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
