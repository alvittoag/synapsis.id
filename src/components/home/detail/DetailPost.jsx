import { Comments, User } from "../../index";
const DetailPost = ({ post, user, comment }) => {
  return (
    <div className=" mt-5 md:mt-14 px-3 md:px-28">
      <h1 className="text-2xl md:text-4xl font-bold text-slate-700 mb-3 md:mb-6">
        {post.title}
      </h1>
      <p className="text-slate-600 font-semibold mb-5">{post.body}</p>
      <User user={user} />
      <Comments comment={comment} />
    </div>
  );
};

export default DetailPost;
