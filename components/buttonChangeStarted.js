"use client";

export default function ButtonChangeStarted({ status }) {
  function changeStarted() {
    console.log("change");
  }

  return (
    <button
      className="col-span-1 ml-4 mr-2 mt-1 mb-1 bg-yellow-500 border rounded-md"
      onClick={changeStarted}
    >
      {status}
    </button>
  );
}
