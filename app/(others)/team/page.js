import TeamGrid from "@/components/teamgrid";
import Link from "next/link";

export default function Team() {
  return (
    <div className="grid col-span-9 p-2">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <Link
            href="/team/addUser"
            className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md"
          >
            Add new User
          </Link>
        </div>
        <div>
          <TeamGrid />
        </div>
      </div>
    </div>
  );
}
