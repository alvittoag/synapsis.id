import { useState } from "react";
import { ButtonUserPage, CreatePost, DeletePost, UpdatePage } from "../index";

const Crud = [
  { name: "Create Post" },
  { name: "Delete Post" },
  { name: "Update Post" },
];

const UserPage = ({ users, posts }) => {
  const [button, setButton] = useState("Create Post");
  const [allPost, setAllPost] = useState(posts);

  return (
    <div className="px-3 md:px-28 mt-8 md:mt-14 mb-14">
      <div className="flex gap-6 items-center">
        {Crud.map((cr) => (
          <ButtonUserPage
            setButton={setButton}
            button={button}
            cr={cr}
            key={cr.name}
          />
        ))}
      </div>
      {button === "Create Post" && <CreatePost users={users} />}
      {button === "Delete Post" && (
        <DeletePost posts={posts} allPost={allPost} setAllPost={setAllPost} />
      )}
      {button === "Update Post" && (
        <UpdatePage
          posts={posts}
          allPost={allPost}
          setAllPost={setAllPost}
          users={users}
        />
      )}
    </div>
  );
};

export default UserPage;
