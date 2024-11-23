"use server";

import { addNewUser } from "@/lib/apiMember";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTeam(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const description = formData.get("description");

  console.log(name, email, password, description);

  await addNewUser(name, email, password, description);

  revalidatePath("/team");
  redirect("/dashboard");
}
