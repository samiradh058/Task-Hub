import Header from "@/components/header";
import "../globals.css";

export const metadata = {
  title: "Task Management",
  description: "App to manage tasks in an enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
