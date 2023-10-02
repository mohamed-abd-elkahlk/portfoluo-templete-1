import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
export default function Sidebar() {
  const [nav, setNanv] = useState(false);
  const handleNav = () => {
    setNanv(!nav);
    console.log(nav);
  };
  return (
    <>
      <AiOutlineMenu
        onClick={handleNav}
        className="top-4 absolute right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Project's</span>
          </a>
          <a
            onClick={handleNav}
            href="#"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">rusme</span>
          </a>
          <a
            onClick={handleNav}
            href="#"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4 cursor-pointer hover:scale-110 duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
