"use client";

import { updateStatus } from "@/lib/apiTasks";
import { revalidatePath } from "next/cache";

export default function ButtonChangeStarted({ task }) {
  async function changeStarted(e) {
    await updateStatus(e.target.value, task);
  }

  return (
    <select
      value={task.status}
      onChange={changeStarted}
      className="col-span-1 ml-4 mr-2 mt-1 mb-1 bg-yellow-500 focus:bg-white border rounded-md"
    >
      <option value="Completed">C</option>
      <option value="Started">S</option>
      <option value="Pending">P</option>
    </select>
  );
}
