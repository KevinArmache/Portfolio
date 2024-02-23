import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <span className="loading loading-infinity loading-lg text-[#4a473d]"></span>
    </div>
  );
}
