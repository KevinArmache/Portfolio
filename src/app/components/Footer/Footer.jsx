import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center py-3 mt-5 border-t border-[#4E4B42]">
      <p className="text-center text-xl font-bold">
        Copyright © {currentYear} All rights reserved
      </p>
    </div>
  );
}
