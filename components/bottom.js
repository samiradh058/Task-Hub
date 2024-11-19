import { myPending } from "@/lib/apiTasks";

export default async function Bottom() {
  const { my_pending, error } = await myPending();
  console.log(my_pending);

  return (
    <div className="grid row-span-2">
      <div className="bg-stone-400 flex justify-center items-center">
        <p className="text-[20px] py-2">
          Number of pending tasks: <span className="font-bold">X</span>
        </p>
      </div>
    </div>
  );
}
