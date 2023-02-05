const Comments = ({ comment }) => {
  return (
    <div className=" mt-10 md:mt-14">
      <span className="font-bold text-lg text-slate-700">
        Comments : {!comment && "0"}
      </span>
      <div className="py-8">
        <h1 className="text-xl font-semibold text-slate-700">
          {comment?.name}
        </h1>
        <p>{comment?.body}</p>
      </div>
    </div>
  );
};

export default Comments;
