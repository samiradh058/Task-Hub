export default function Header() {
  return (
    <div className="grid row-span-2">
      <div className="flex justify-between items-center bg-blue-50">
        <div className="items-center flex flex-col justify-center ml-2">
          <img
            className="border rounded-2xl mt-1 ml-1 h-16"
            src="/logo.jpg"
            alt="Logo"
          />
          <p className="text-[18px] font-semibold text-blue-600">TaskHub</p>
        </div>
        <h2 className="text-[32px] italic text-blue-500 font-bold">
          A Complete Task Management System
        </h2>
        <div className="text-[20px] text-stone-700 font-semibold mr-4">
          Welcome back! <span className="font-bold">Mr.X</span>
        </div>
      </div>
    </div>
  );
}
