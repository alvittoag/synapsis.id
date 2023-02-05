import Link from "next/link";
import { BsBookHalf } from "react-icons/bs";
const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-28 py-5 px-3">
      <div className="flex items-center justify-between">
        <Link href={"/"} passHref>
          <div className="flex items-center text-gray-100 gap-3">
            <BsBookHalf size={30} />
            <h1 className=" text-2xl md:text-3xl font-bold ">Test Synapsis</h1>
          </div>
        </Link>

        <Link href={"/user"} passHref>
          <button className="ring-2 ring-gray-100 rounded-full px-6 py-2 md:px-8 md:text-lg md:h-10 md:py-0 text-gray-100 font-bold hover:bg-[#6A64F1]">
            User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
