const User = ({ user }) => {
  return (
    <>
      {user ? (
        <span className="font-bold text-slate-800 underline underline-offset-8">
          Created by `{user?.name}`
        </span>
      ) : (
        <span className="font-bold text-slate-800 underline underline-offset-8">
          Author Not Found
        </span>
      )}
    </>
  );
};

export default User;
