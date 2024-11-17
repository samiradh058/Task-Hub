import Link from "next/link";
import NavLink from "./links";

export default function SideNav() {
  return (
    <div className="col-span-3 bg-blue-200 p-2">
      <ul className="mt-4 ml-2 text-[20px] flex flex-col">
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/tasks">All Tasks</NavLink>
        <NavLink href="/team">Team</NavLink>
        <NavLink href="/settings">Settings</NavLink>
      </ul>
    </div>
  );
}
