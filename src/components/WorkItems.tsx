function WorkItems(props: {
  year: string;
  title: string;
  detalies: string;
  duration: string;
}) {
  const { year, title, detalies, duration } = props;
  return (
    <div className="py-3">
      <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
        <li>
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="px-2 py-1 bg-[#001b5e] text-white rounded-md ">
              {year}
            </span>
            <span className="text-[#001b5e] text-lg font-bold ">{title}</span>
            <span className="text-stone-400">{duration}</span>
          </p>

          <p className="my-2 text-base font-normal text-stone-500">
            {detalies}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default WorkItems;
