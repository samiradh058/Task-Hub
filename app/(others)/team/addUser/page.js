import ModalBackRefresh from "@/components/modalBackRefresh";

export default function AddUser() {
  const labelStyle = "grid col-span-3 mt-4";
  const inputStyle =
    "grid col-span-7 rounded-sm px-2 border border-stone-200 focus:border-stone-500 focus:outline-none";

  return (
    <>
      <ModalBackRefresh />
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-blue-300 p-4 rounded-md">
        <h6 className="flex justify-center font-medium text-[20px]">
          Add new user
        </h6>
        <div className="grid grid-cols-10 space-y-4">
          <label htmlFor="name" className={`${labelStyle} mt-4`}>
            Name:
          </label>
          <input className={inputStyle} type="name" id="name" name="name" />
          <label htmlFor="email" className={labelStyle}>
            Email:
          </label>
          <input className={inputStyle} type="email" id="email" name="email" />
          <label htmlFor="password" className={labelStyle}>
            Password:
          </label>
          <input
            className={inputStyle}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="flex justify-center mt-6">
          <button className=" bg-green-400 py-1 px-2 rounded-md">Add</button>
        </div>
      </form>
    </>
  );
}
