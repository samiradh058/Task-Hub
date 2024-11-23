"use client";

export default function Error(error) {
  return (
    <>
      <h1>ERROR OCCURED!</h1>
      <p>{error.message}</p>
    </>
  );
}
