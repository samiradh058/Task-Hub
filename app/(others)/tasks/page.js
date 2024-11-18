import Link from "next/link";

export default function Tasks() {
  const listStyleTask = "grid justify-center";
  const listStyleTasks = "grid px-2 justify-center";
  const eachList =
    "grid grid-cols-12 border border-stone-400 rounded-md mt-1 hover:bg-blue-200";
  const titleStyle =
    "grid grid-cols-12 border border-stone-400 rounded-md mb-2 bg-blue-400";

  return (
    <div className="grid col-span-9 px-2">
      <div className="p-2">
        <div className="flex justify-end">
          <Link
            href="/tasks/addTask"
            className="bg-green-400 px-2 py-1 rounded-md"
          >
            Add new task
          </Link>
        </div>
        <div className="overflow-y-scroll">
          <div>
            <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
              Tasks assigned to me:
            </h2>
            <div className="border border-stone-400 rounded-md">
              <ul className={titleStyle}>
                <li className={`${listStyleTask} col-span-2`}>Task Name</li>
                <li className={`${listStyleTask} col-span-3`}>Description</li>
                <li className={`${listStyleTask} col-span-2`}>Assigned By</li>
                <li className={`${listStyleTask} col-span-1`}>Priority</li>
                <li className={`${listStyleTask} col-span-2`}>Assigned On</li>
                <li className={`${listStyleTask} col-span-2`}>Deadline</li>
              </ul>

              {/* Map the received array */}
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>1</li>
                <li className={`${listStyleTasks} col-span-3`}>2</li>
                <li className={`${listStyleTasks} col-span-2`}>3</li>
                <li className={`${listStyleTasks} col-span-1`}>4</li>
                <li className={`${listStyleTasks} col-span-2`}>5</li>
                <li className={`${listStyleTasks} col-span-2`}>6</li>
              </ul>
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>11</li>
                <li className={`${listStyleTasks} col-span-3`}>22</li>
                <li className={`${listStyleTasks} col-span-2`}>33</li>
                <li className={`${listStyleTasks} col-span-1`}>44</li>
                <li className={`${listStyleTasks} col-span-2`}>55</li>
                <li className={`${listStyleTasks} col-span-2`}>66</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
              Ongoing Tasks:
            </h2>
            <div className="border border-stone-400 rounded-md">
              <header className={titleStyle}>
                <div className={`${listStyleTask} col-span-2`}>Task Name</div>
                <div className={`${listStyleTask} col-span-3`}>Assigned To</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned By</div>
                <div className={`${listStyleTask} col-span-1`}>Priority</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned On</div>
                <div className={`${listStyleTask} col-span-2`}>Deadline</div>
              </header>

              {/* Map the received array */}
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>1</li>
                <li className={`${listStyleTasks} col-span-3`}>2</li>
                <li className={`${listStyleTasks} col-span-2`}>3</li>
                <li className={`${listStyleTasks} col-span-1`}>4</li>
                <li className={`${listStyleTasks} col-span-2`}>5</li>
                <li className={`${listStyleTasks} col-span-2`}>6</li>
              </ul>
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>11</li>
                <li className={`${listStyleTasks} col-span-3`}>22</li>
                <li className={`${listStyleTasks} col-span-2`}>33</li>
                <li className={`${listStyleTasks} col-span-1`}>44</li>
                <li className={`${listStyleTasks} col-span-2`}>55</li>
                <li className={`${listStyleTasks} col-span-2`}>66</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
              Completed Tasks:
            </h2>
            <div className="border border-stone-400 rounded-md">
              <header className={titleStyle}>
                <div className={`${listStyleTask} col-span-2`}>Task Name</div>
                <div className={`${listStyleTask} col-span-3`}>Description</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned To</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned By</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned On</div>
                <div className={`${listStyleTask} col-span-1`}>Priority</div>
              </header>

              {/* Map the received array */}
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>1</li>
                <li className={`${listStyleTasks} col-span-3`}>2</li>
                <li className={`${listStyleTasks} col-span-2`}>3</li>
                <li className={`${listStyleTasks} col-span-2`}>4</li>
                <li className={`${listStyleTasks} col-span-2`}>5</li>
                <li className={`${listStyleTasks} col-span-1`}>6</li>
              </ul>
              <ul className={eachList}>
                <li className={`${listStyleTasks} col-span-2`}>11</li>
                <li className={`${listStyleTasks} col-span-3`}>22</li>
                <li className={`${listStyleTasks} col-span-2`}>33</li>
                <li className={`${listStyleTasks} col-span-2`}>44</li>
                <li className={`${listStyleTasks} col-span-2`}>55</li>
                <li className={`${listStyleTasks} col-span-1`}>66</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
