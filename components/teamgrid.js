export default function TeamGrid() {
  const liStyle = "bg-green-200 p-1";
  return (
    <div className="flex flex-col p-2">
      <h2 className="font-bold text-[20px] mb-4">Present team Members:</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 overflow-y-scroll">
        {/* Map the array of the team */}
        <li className={liStyle}>
          <img src="bg.jpg" alt="Image of person" className="w-full h-40" />
          <h2 className="mt-2 font-semibold text-[18px]">Name of the member</h2>
          <p>Short desription of the person</p>
        </li>
        <li className={liStyle}>
          <img src="bg.jpg" alt="Image of person" className="w-full h-40" />
          <h2 className="mt-2 font-semibold text-[18px]">Name of the member</h2>
          <p>Short desription of the person</p>
        </li>
        <li className={liStyle}>
          <img src="bg.jpg" alt="Image of person" className="w-full h-40" />
          <h2 className="mt-2 font-semibold text-[18px]">Name of the member</h2>
          <p>Short desription of the person</p>
        </li>
        <li className={liStyle}>
          <img src="bg.jpg" alt="Image of person" className="w-full h-40" />
          <h2 className="mt-2 font-semibold text-[18px]">Name of the member</h2>
          <p>Short desription of the person</p>
        </li>
      </ul>
    </div>
  );
}
