import Link from "next/link";

export default function Tasks() {
  return (
    <div className="grid col-span-9 overflow-y-scroll">
      <div className="p-2">
        <div className="flex justify-end">
          <Link
            href="/tasks/addTask"
            className="bg-green-400 px-2 py-1 rounded-md"
          >
            Add new task
          </Link>
        </div>
        <div>
          <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
            Ongoing Projects:
          </h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div>
          <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
            Completed Projects:
          </h2>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
