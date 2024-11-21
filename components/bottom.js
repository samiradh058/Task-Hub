import { myPending } from "@/lib/apiTasks";

export default async function Bottom() {
  const { my_pending, error } = await myPending();

  return (
    <div className="grid row-span-2">
      <div className="bg-stone-400 flex justify-center items-center">
        <p className="text-[20px] py-2">
          Number of tasks for me:{" "}
          <span className="font-bold">{my_pending.length}</span>
        </p>
      </div>
    </div>
  );
}
