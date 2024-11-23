import ButtonChangeStarted from "@/components/buttonChangeStarted";
import { nameFromId } from "@/lib/apiMember";
import { getCompletedTask, getMyTask, getTasks } from "@/lib/apiTasks";
import Link from "next/link";

export default async function Tasks() {
  const { tasks, error } = await getTasks();
  const { tasks_to_me, error: erro_me } = await getMyTask();
  const { completed_task, error: erro_completed } = await getCompletedTask();

  const listStyleTask = "grid justify-center";
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
            className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md"
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
                <li className={`${listStyleTask} col-span-1`}>Deadline</li>
                <li className={`${listStyleTask} col-span-1`}>Status</li>
              </ul>
              {tasks_to_me.map((task) => {
                return (
                  <ul className={eachList} key={task.id}>
                    <li key={task.id} className={`${listStyleTask} col-span-2`}>
                      {task.name}
                    </li>
                    <li className={`${listStyleTask} col-span-3`}>
                      {task.description}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {nameFromId(task.assigned_by)}
                    </li>
                    <li className={`${listStyleTask} col-span-1`}>
                      {task.priority}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {task.created_at}
                    </li>
                    <li className={`${listStyleTask} col-span-1`}>
                      {task.deadline}
                    </li>
                    <ButtonChangeStarted task={task} />
                  </ul>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="mt-2 text-[24px] font-semibold italic text-stone-600">
              Ongoing Tasks:
            </h2>

            {/* Jasko ongoing true xa */}

            <div className="border border-stone-400 rounded-md">
              <header className={titleStyle}>
                <div className={`${listStyleTask} col-span-2`}>Task Name</div>
                <div className={`${listStyleTask} col-span-3`}>Assigned By</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned To</div>
                <div className={`${listStyleTask} col-span-1`}>Priority</div>
                <div className={`${listStyleTask} col-span-2`}>Assigned On</div>
                <div className={`${listStyleTask} col-span-2`}>Deadline</div>
              </header>

              {tasks.map((task) => {
                return (
                  <ul className={eachList} key={task.id}>
                    <li key={task.id} className={`${listStyleTask} col-span-2`}>
                      {task.name}
                    </li>
                    <li className={`${listStyleTask} col-span-3`}>
                      {task.assigned_by}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {nameFromId(task.assign_to)}
                    </li>
                    <li className={`${listStyleTask} col-span-1`}>
                      {task.priority}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {task.created_at}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {task.deadline}
                    </li>
                  </ul>
                );
              })}
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

              {completed_task?.map((task) => {
                return (
                  <ul className={eachList} key={task.id}>
                    <li key={task.id} className={`${listStyleTask} col-span-2`}>
                      {task.name}
                    </li>
                    <li className={`${listStyleTask} col-span-3`}>
                      {task.description}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {nameFromId(task.assign_to)}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {nameFromId(task.assigned_by)}
                    </li>
                    <li className={`${listStyleTask} col-span-2`}>
                      {task.created_at}
                    </li>
                    <li className={`${listStyleTask} col-span-1`}>
                      {task.priority}
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
