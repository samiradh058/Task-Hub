import Header from "@/components/header";
import Bottom from "@/components/bottom";
import "../globals.css";
import SideNav from "@/components/sidenav";
import getUser from "@/lib/apiMember";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Task Management",
  description: "App to manage tasks in an enterprise",
};

export default async function RootLayout({ children }) {
  // const user = await getUser();
  // console.log(user);
  // if (!user) {
  //   redirect("/login");
  // }

  return (
    <html lang="en">
      <body className="grid grid-rows-12 h-screen">
        <Header />
        <div className="grid grid-cols-12 row-span-10">
          <SideNav />
          {children}
        </div>
        <Bottom />
      </body>
    </html>
  );
}
