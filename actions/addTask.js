"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export async function addTask(prevState, formData) {
  const name = formData.get("name");
  const assignTo = formData.get("to");
  const priority = formData.get("priority");
  const deadline = formData.get("deadline");
  const description = formData.get("description");

  console.log(name, assignTo, priority, deadline, description);

  revalidatePath("/tasks");
  redirect("/dashboard");
}
