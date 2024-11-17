import ModalBackDrop from "@/components/modalbackdrop";

export default async function AddTask() {
  const labelStyle = "grid col-span-3 mt-4";
  const inputStyle =
    "grid col-span-7 rounded-sm px-2 border border-stone-200 focus:border-stone-500 focus:outline-none";

  return (
    <>
      <ModalBackDrop />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-blue-300 p-4 rounded-md">
        <h6 className="flex justify-center font-medium text-[20px]">
          Add new task
        </h6>
        <div className="grid grid-cols-10 space-y-4">
          <label htmlFor="name" className={`${labelStyle} mt-4`}>
            Name:
          </label>
          <input className={inputStyle} type="text" name="name" id="name" />
          <label htmlFor="to" className={labelStyle}>
            Assign to:
          </label>
          <select name="to" id="to" className={inputStyle}>
            <option>Ram</option>
            <option>Shyam</option>
          </select>
          <label htmlFor="priority" className={labelStyle}>
            Priority:
          </label>
          <select name="priority" id="priority" className={inputStyle}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <label htmlFor="description" className={labelStyle}>
            Description:
          </label>
          <textarea
            rows={2}
            className={inputStyle}
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button className=" bg-green-400 py-1 px-2 rounded-md">Add</button>
        </div>
      </form>
    </>
  );
}
