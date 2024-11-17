"use client";

import { useRouter } from "next/navigation";

export default function ModalBackDrop() {
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 bg-[rgba(0,0,0,0.75)] w-full h-full"
      onClick={router.back}
    ></div>
  );
}
