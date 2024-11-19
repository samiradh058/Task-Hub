"use client";

import { useFormStatus } from "react-dom";

export default function AddButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button className=" bg-green-500 hover:bg-green-600 py-1 px-2 rounded-md">
      {pending ? "Adding" : children}
    </button>
  );
}
