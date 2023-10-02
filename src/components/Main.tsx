import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Main() {
  return (
    <div>
      <img
        src="image/image.jpg"
        className="w-full h-screen object-cover object-right"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-4xl  text-5xl text-gray-800 font-bold ">
            hi my name is john doe
          </h1>
          <h2 className="sm:text-2xl   flex text-3xl pt-4 text-gray-800">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "devloper",
                1000,
                "coder",
                2000,
                "tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex  space-x-3">
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
