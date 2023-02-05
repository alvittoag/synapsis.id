import { useState } from "react";
import { Button, ListUsers, ListPosts } from "../../index";

const buttonList = [
  {
    name: "List Posts",
  },
  { name: "List Users" },
];

const AllList = ({ posts, users }) => {
  const [buttons, setButtons] = useState("List Posts");
  return (
    <>
      <div className="flex justify-center gap-8 mt-10">
        {buttonList.map((button) => (
          <Button
            key={button.name}
            button={button}
            buttons={buttons}
            setButtons={setButtons}
          />
        ))}
      </div>

      {buttons === "List Posts" ? (
        <ListPosts posts={posts} />
      ) : (
        <ListUsers users={users} />
      )}
    </>
  );
};

export default AllList;
