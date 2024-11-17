"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  const LinkStyle = "p-2 font-[500] hover:bg-blue-300 hover:rounded-md";

  let activeClass;

  if (path.startsWith(href)) {
    activeClass = "bg-blue-400 rounded-md";
  }

  return (
    <Link className={`${LinkStyle} ${activeClass}`} href={href}>
      {children}
    </Link>
  );
}
