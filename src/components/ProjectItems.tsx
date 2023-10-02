function ProjectItems(props: { img: string; title: string }) {
  const { img, title } = props;
  return (
    <div className="flex relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl  group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
      <img src={img} alt="" className="group-hover:opacity-10 rounded-xl" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h1 className="text-4xl text-white  text-center tracking-wider">
          {" "}
          {title}
        </h1>
        <p className="text-center pb-4 pt-t text-white">react js</p>
        <a href="/">
          <p className="bg-white text-gray-700 font-bold cursor-pointer text-center p-3 rounded-lg ">
            more info
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItems;
