import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" border-t w-full mt-auto p-5 border-[#4E4B42]">
      <p className="text-center md:text-xl text-sm font-bold">
        Copyright © {currentYear} All rights reserved
      </p>
    </div>
  );
}
