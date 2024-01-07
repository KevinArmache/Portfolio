"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Icon } from "@iconify/react";

export default function CardSkill({ name, svg }) {
  useEffect(() => {
    gsap.fromTo(
      ".skill-item",
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div
      target="_blank"
      className="w-fit m-2 text-center inline-block skill-item"
    >
      <div className="border-2 my-box-shadow border-secondary-color  p-5">
        <Icon icon={svg} color="#4E4B42" width="150" height="150" />
      </div>
      <span className="text-xl bg-[#DAD4BB] my-box-shadow my-text-shadow font-bold text-secondary-color uppercase py-2 border-2 border-secondary-color block mt-3">
        {name}
      </span>
    </div>
  );
}
