import { AiOutlineEdit } from "react-icons/ai";

const ListPostUpdate = ({
  allPost,
  setFormUpdate,
  setId,
  setUser,
  setBody,
  setTitle,
}) => {
  return (
    <>
      {allPost.map((post) => (
        <div className="mb-10 md:text-justify" key={post.id}>
          <h1 className="mb-3 md:mb-5 text-xl  md:text-2xl font-bold text-slate-700">
            {post.title}
          </h1>
          <p>{post.body}</p>
          <div
            onClick={() => [
              setFormUpdate(true),
              setId(post.id),
              setUser(post.user_id),
              setBody(post.body),
              setTitle(post.title),
            ]}
            className="flex items-center gap-1 ring-2 ring-green-600 w-[105px] px-3 rounded-md mt-4 h-8 hover:bg-green-600 hover:text-gray-50 hover:cursor-pointer"
          >
            <AiOutlineEdit size={23} />
            <p className="text-base font-bold text-slate-700 hover:text-gray-50">
              Update
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPostUpdate;
