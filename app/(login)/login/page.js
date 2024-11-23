"use client";

import { Login } from "@/lib/apiMember";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { pending } = useFormStatus();

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const { data } = await Login({ email, password });
    console.log(data);

    if (data?.session) {
      console.log("Session established:", data.session);
      router.push("/dashboard");
    } else {
      console.error("Login failed: No session created.");
    }
  }

  return (
    <div className="flex justify-center mt-28">
      <form className="p-4 flex flex-col justify-center space-y-12 bg-gradient-to-br from-blue-300 to-blue-400  border rounded-lg shadow-xl border-stone-400">
        <h2 className="text-[32px] italic text-center p-4 text-stone-800">
          Login
        </h2>
        <div className="flex flex-col gap-4 text-[20px]">
          <div className="flex gap-4">
            <label className="text-stone-800" htmlFor="email">
              Email:
            </label>
            <input
              className="px-2 rounded-md focus:bg-stone-100 ml-10"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-[20px]">
            <label htmlFor="password" className="text-stone-800">
              Password:
            </label>
            <input
              className="w-full px-2 rounded-md focus:bg-slate-100"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 border-green-600 rounded-lg mx-auto text-[16px]"
        >
          {pending ? "Logging in" : "Go to App"}
        </button>
      </form>
    </div>
  );
}
