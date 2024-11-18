"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTeam(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const description = formData.get("description");

  console.log(name, email, password, description);

  revalidatePath("/team");
  redirect("/dashboard");
}
