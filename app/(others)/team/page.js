import TeamGrid from "@/components/teamgrid";

export default function Team() {
  return (
    <div className="grid col-span-9 p-2">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button className="bg-green-400 px-2 py-1 rounded-md">
            Add new User
          </button>
        </div>
        <div>
          <TeamGrid />
        </div>
      </div>
    </div>
  );
}
