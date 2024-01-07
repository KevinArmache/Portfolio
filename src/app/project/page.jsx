"use client";
import CardProject from "../components/CardProject/CardProject";
import { useEffect } from "react";
import gsap from "gsap";
import data from "../utils/json/data.json";

export default function page() {
  const text = `"Everything that lives is designed to end. They are perpetually trapped in a never-ending spiral of life and death. Is this a curse ? Or some kind of punishment ?"`;
  useEffect(() => {
    gsap.fromTo(
      ".char",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.4,
        delay: 1,
      }
    );
  }, []);
  return (
    <div className="relative">
      <div>
        <h2 className="text-secondary-color mt-10 font-bold text-3xl border-b-4 border-secondary-color my-text-shadow w-fit mx-auto px-10 py-5">
          HIS RECENT PROJECTS
        </h2>
        <p className="absolute top-1/2 left-0 transform -ml-64  w-[40%] -translate-y-1/2 -rotate-90 text-center text-2xl">
          {text.split("").map((word, index) => {
            return (
              <span className="char" key={index}>
                {word}
              </span>
            );
          })}
        </p>
      </div>
      {/* PROJECTS */}
      <div className="mt-10 flex justify-center h-fit  flex-wrap mx-auto items-center w-3/4">
        {data.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
