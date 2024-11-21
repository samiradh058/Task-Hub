"use server";

import { addNewTask } from "@/lib/apiTasks";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function newTask(prevState, formData) {
  const name = formData.get("name");
  const assignTo = formData.get("to");
  const priority = formData.get("priority");
  const deadline = formData.get("deadline");
  const description = formData.get("description");

  let errors = [];

  if (!name || name.trim().length === 0) {
    errors.push("Name is required!");
  }

  if (!assignTo || assignTo.trim().length === 0) {
    errors.push("Task must be assigned to someone!");
  }

  if (!priority || priority.trim().length === 0) {
    errors.push("Priority of task must be declared!");
  }

  if (!description || description.trim().length === 0) {
    errors.push("Description is required!");
  }

  if (!deadline) {
    errors.push("Deadline is not selected");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await addNewTask(name, assignTo, priority, deadline, description);

  revalidatePath("/tasks");
  redirect("/dashboard");
}
