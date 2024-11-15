import Header from "@/components/header";
import Bottom from "@/components/bottom";
import "../globals.css";
import SideNav from "@/components/sidenav";

export const metadata = {
  title: "Task Management",
  description: "App to manage tasks in an enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <div className="grid grid-cols-12 h-[540px]">
          <SideNav />
          {children}
        </div>
        <Bottom />
      </body>
    </html>
  );
}
