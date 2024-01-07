"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function CardSkill({ name, svg }) {
  return (
    <div
      target="_blank"
      className="w-fit m-2 text-center inline-block project-item"
    >
      <div className="border-2 my-box-shadow border-secondary-color  p-5">
        <Icon icon={svg} color="#4E4B42" width="150" height="150" />
      </div>
      <span className="text-xl my-box-shadow my-text-shadow font-bold text-secondary-color uppercase py-2 border-2 border-secondary-color block mt-3">
        {name}
      </span>
    </div>
  );
}
