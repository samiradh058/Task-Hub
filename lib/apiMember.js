import { supabase } from "@/lib/supabase";

export async function getMembers() {
  const { data: members, error } = await supabase.from("members").select("*");

  return { members, error };
}

export async function Login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
    throw new Error("Error Login");
  }

  return { data };
}

// export default async function getUser() {
//   const { data: session, error: sessionError } =
//     await supabase.auth.getSession();
//   console.log("Session Data:", session, "Session Error:", sessionError);
//   if (!session) {
//     console.log("NO SESSION");
//   }

//   const { data, error } = await supabase.auth.getUser();
//   console.log("User Data:", data, "User Error:", error);
//   return data?.user || null;
// }

export async function addNewUser(name, email, password, description) {
  console.log(name, email, password, description);
  let { data: newUser, error: errorSignup } = await supabase.auth.signUp({
    email,
    password,
  });

  if (errorSignup) {
    console.log(errorSignup);
  }

  const { data, error } = await supabase
    .from("members")
    .insert([
      {
        name: name,
        created_at: new Date(),
        email: email,
        password: password,
        description: description,
      },
    ])
    .select();

  if (error) {
    console.log(error);
  }
  return data;
}

export async function idFromName(assignTo) {
  console.log(assignTo);
  let { data: member, error } = await supabase
    .from("members")
    .select("id")
    .eq("name", assignTo);

  if (error) {
    throw new Error(error.message);
  }

  console.log("Query Result:", member);

  return member[0]?.id;
}

export async function nameFromId(id) {
  console.log(id);
  let { data: member, error } = await supabase
    .from("members")
    .select("name")
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  console.log("Query Result:", member);

  return member[0]?.name;
}
