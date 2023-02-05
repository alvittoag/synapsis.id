import { DetailPost } from "@/components";

const Detail = ({ post, user, comment }) => {
  return <DetailPost post={post} user={user} comment={comment} />;
};

export default Detail;

export async function getStaticPaths() {
  const resPosts = await fetch(`https://gorest.co.in/public/v2/posts`, {
    headers: {
      Authorization:
        "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
      "Content-Type": "application/json",
    },
  });
  const dataPosts = await resPosts.json();

  const allPaths = dataPosts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const resPosts = await fetch(`https://gorest.co.in/public/v2/posts/${id}`, {
    headers: {
      Authorization:
        "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
      "Content-Type": "application/json",
    },
  });
  const dataPosts = await resPosts.json();

  const resUsers = await fetch(`https://gorest.co.in/public/v2/users`, {
    headers: {
      Authorization:
        "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
      "Content-Type": "application/json",
    },
  });
  const dataUsers = await resUsers.json();
  const UserPost = dataUsers.find((user) => dataPosts.user_id === user.id);

  const resComments = await fetch("https://gorest.co.in/public/v2/comments");
  const dataComments = await resComments.json();
  const ComemntPost = dataComments.find(
    (comment) => dataPosts.id === comment.post_id
  );

  return {
    props: {
      post: dataPosts,
      user: UserPost || null,
      comment: ComemntPost || null,
    },
  };
}
