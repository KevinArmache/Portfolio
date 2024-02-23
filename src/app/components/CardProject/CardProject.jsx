"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function CardProject({ name, link }) {
  useEffect(() => {
    gsap.fromTo(
      ".project-item",
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
      }
    );
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      <Link
        href={link}
        target="_blank"
        className="w-fit opacity-0 m-2 text-center inline-block project-item"
      >
        <div className="border-2 my-box-shadow border-secondary-color p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="mx-auto md:w-60 w-36"
          >
            <path
              fill="#4a473d"
              d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.983 87.983 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80a40 40 0 1 0 0 80"
            />
          </svg>
        </div>
        <span className="md:text-xl text-sm bg-[#DAD4BB] my-box-shadow my-text-shadow font-bold text-secondary-color uppercase py-2 border-2 border-secondary-color block mt-3">
          {name}
        </span>
      </Link>
    </div>
  );
}
