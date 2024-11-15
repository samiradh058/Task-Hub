import Link from "next/link";

export default function SideNav() {
  const LinkStyle = "p-2 font-[500] hover:bg-blue-300 hover:rounded-md";

  return (
    <div className="col-span-3 bg-blue-200 p-2">
      <ul className="mt-4 ml-2 text-[20px] flex flex-col">
        <Link href="/dashboard" className={LinkStyle}>
          Dashboard
        </Link>
        <Link href="/tasks" className={LinkStyle}>
          All Tasks
        </Link>
        <Link href="/team" className={LinkStyle}>
          Team
        </Link>
        <Link href="/settings" className={LinkStyle}>
          Settings
        </Link>
      </ul>
    </div>
  );
}
