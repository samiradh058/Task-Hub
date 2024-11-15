import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center mt-28">
      <form className="p-4 flex flex-col justify-center space-y-12 bg-gradient-to-br from-blue-300 to-blue-400  border rounded-lg shadow-xl border-stone-400">
        <h2 className="text-[32px] italic text-center p-4 text-stone-800">
          Login
        </h2>
        <div className="flex flex-col gap-4 text-[20px]">
          <div className="flex gap-4">
            <label className="text-stone-800" htmlFor="name">
              Username:
            </label>
            <input
              className="px-2 rounded-md focus:bg-stone-100"
              type="text"
              id="name"
              name="name"
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
              required
            />
          </div>
        </div>
        <Link
          href="./dashboard"
          className="bg-green-500 hover:bg-green-600 px-4 py-2 border-green-600 rounded-lg mx-auto text-[16px]"
          type="submit"
        >
          Go to App
        </Link>
      </form>
    </div>
  );
}
