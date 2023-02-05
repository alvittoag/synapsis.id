import { UserPage } from "@/components";

const User = ({ users, posts }) => {
  return <UserPage users={users} posts={posts} />;
};

export default User;

export async function getServerSideProps() {
  const resUsers = await fetch(`https://gorest.co.in/public/v2/users`, {
    headers: {
      Authorization:
        "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
      "Content-Type": "application/json",
    },
  });
  const dataUsers = await resUsers.json();

  const resPosts = await fetch("https://gorest.co.in/public/v2/posts", {
    headers: {
      Authorization:
        "Bearer 87e000ad77072d306a17b62d17566486247c44a34a13f0541fa79745640d09cb",
      "Content-Type": "application/json",
    },
  });
  const dataPosts = await resPosts.json();

  return {
    props: { users: dataUsers, posts: dataPosts },
  };
}
