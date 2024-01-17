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
        <h2 className="text-secondary-color animation  opacity-0 char mt-10 font-bold md:text-3xl text-lg text-center  md:border-b-4 border-b-2 border-secondary-color my-text-shadow w-fit mx-auto md:px-10 px-5 md:py-5 py-2">
          HIS RECENT PROJECTS
        </h2>

        <p className="absolute animation top-1/2 left-0 transform -ml-64  w-[40%] -translate-y-1/2 -rotate-90 text-center text-2xl">
          {text.split("").map((word, index) => {
            return (
              <span className="char opacity-0" key={index}>
                {word}
              </span>
            );
          })}
        </p>
      </div>
      {/* PROJECTS */}
      <div className="mt-10 flex animation justify-center h-fit  flex-wrap mx-auto items-center w-3/4">
        {data.map((project) => (
          <CardProject className="" key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
