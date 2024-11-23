export default function TaskToMe({tasks_to_me}) {
    console.log(tasks_to_me)
    return <>{tasks_to_me.map((task) => {
        const assignedBy = await nameFromId(task.assigned_by);
        return (
          <ul className={eachList} key={task.id}>
            <li key={task.id} className={`${listStyleTask} col-span-2`}>
              {task.name}
            </li>
            <li className={`${listStyleTask} col-span-3`}>
              {task.description}
            </li>
            <li className={`${listStyleTask} col-span-2`}>
              {assignedBy}
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
      })}</>
}

