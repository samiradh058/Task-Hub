export default function TeamGrid() {
  const liStyle = "bg-green-200";
  return (
    <div className="flex flex-col">
      <h2>Present team Members:</h2>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 ">
        <li className={liStyle}>1</li>
        <li className={liStyle}>2</li>
        <li className={liStyle}>3</li>
        <li className={liStyle}>4</li>
      </ul>
    </div>
  );
}
