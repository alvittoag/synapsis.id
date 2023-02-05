import { BsFillPeopleFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Jumbotron = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:px-28 md:py-20 px-3 py-8 md:pb-24">
      <div className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-100 space-y-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-serif">Blog Post </h1>
          <Typewriter
            options={{
              strings: [
                "List :",
                "Comment :",
                "User : ",
                "Detail : ",
                "Crud :",
              ],
              autoStart: true,
              loop: true,
            }}
          />{" "}
        </div>
        <h1 className="max-w-md md:max-w-none">
          Test to pass Front-End Engineer at{" "}
          <a
            href="https://synapsis.id/"
            className="underline underline-offset-8"
          >
            Synapsis.id
          </a>
        </h1>
      </div>
      <div className=" mt-8 md:mt-5">
        <p className="text-gray-50 font-semibold text-lg text-justify">
          Made using the JavaScript Programming Language with the NEXT.js
          Framework and the styling Framework using Tailwind CSS.
        </p>
        <div className="flex items-center gap-2 py-4 md:py-0 text-gray-50 font-semibold">
          <BsFillPeopleFill />
          <p className="underline underline-offset-4">
            <a href="https://www.linkedin.com/in/alvittoag">
              Alvitto Aprilian Gumay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
