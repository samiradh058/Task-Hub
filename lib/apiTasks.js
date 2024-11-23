"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

//Read

export async function getTasks() {
  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*")
    .neq("status", "Completed");

  return { tasks, error };
}

export async function getMyTask() {
  const { data: tasks_to_me, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("assign_to", 1)
    .neq("status", "Completed");
  return { tasks_to_me, error };
}

export async function getCompletedTask() {
  const { data: completed_task, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("status", "Completed");

  return { completed_task, error };
}

export async function myPending() {
  const { data: my_pending, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("assign_to", 1)
    .neq("status", "Completed");

  return { my_pending, error };
}

//Update

export async function updateStatus(newStatus, task) {
  const { data, error } = await supabase
    .from("tasks")
    .update({ status: newStatus })
    .eq("id", task.id)
    .select();

  if (error) {
    throw new Error("Error while changing status");
  }
  revalidatePath("/tasks");
}

export async function addNewTask(
  name,
  assignTo,
  priority,
  deadline,
  description
) {
  console.log(assignTo);
  const { data, error } = await supabase
    .from("tasks")
    .upsert([
      {
        name: name,
        created_at: new Date(),
        assign_to: assignTo,
        priority: priority,
        deadline: new Date(deadline),
        description: description,
        assigned_by: 1,
        status: "Pending",
      },
    ])
    .select();

  if (error) {
    console.log(error);
  }

  revalidatePath("/tasks");
}
