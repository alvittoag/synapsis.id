import Link from "next/link";

const ListPosts = ({ posts }) => {
  return (
    <div className="px-3 md:px-28 mt-8 md:mt-0 mb-10 ">
      <div className="space-y-8 md:max-w-6xl lg:max-w-3xl">
        {posts.map((post) => (
          <div key={post.id} className="md:mb-16 mb-10  md:text-justify">
            <Link href={`/detail-post/${post.id}`}>
              <h1 className="mb-3 md:mb-5 text-xl  md:text-2xl font-bold text-slate-700">
                {post.title}
              </h1>
            </Link>
            <p className="text-slate-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPosts;
