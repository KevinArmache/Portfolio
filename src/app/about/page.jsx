"use client";
import React from "react";
import CardSkill from "../components/CardSkill/CardSkill";
import skills from "../utils/json/skills.json";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function page() {
  const text = `"Strive to build things that make a difference !"`;
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
    gsap.fromTo(
      ".animation",
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        stagger: 0.5,
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:items-start items-center relative">
      <div className="  lg:w-1/2 w-[95%] mt-10 opacity-0 animation">
        <div className="">
          <h2 className="text-secondary-color  font-bold md:text-3xl text-lg text-center  md:border-b-4 border-b-2 border-secondary-color my-text-shadow w-fit mx-auto md:px-10 px-5 md:py-5 py-2">
            WHO HE IS
          </h2>
        </div>

        <div className="mt-10 mx-auto md:w-3/4 w-[90%] my-box-shadow ">
          <div className="bg-secondary-color flex items-center  p-1  mx-auto">
            <span className="bg-last-color mx-2  h-5 w-5"></span>
            <span className="text-primary-color font-bold">SYSTEM</span>
          </div>
          <div className="bg-last-color  text-center p-10  font-bold border border-secondary-color">
            <p className="leading-loose md:text-xl text-sm">
              Hello human, his name is Kevin Armache he is from Kinshasa, in the
              Democratic Republic of Congo. Full-Stack and ReactJs web
              developer. Bachelor of Business Administration from Leadership
              Academy University Kinshasa.
            </p>
            <hr className="border-secondary-color my-5" />
            <p className="leading-loose md:text-xl text-sm">
              He participated in team projects and also alone as a freelancer
              for start-ups and for individuals or entrepreneurs.
            </p>
            <hr className="border-secondary-color my-5" />
            <p className="leading-loose md:text-xl text-sm">
              Since technology is advancing every day, he continues to learn new
              concepts on his own until today.
            </p>
          </div>
        </div>
        <div className="text-center w-3/5 mx-auto animation  m-10 flex">
          <p className=" md:text-xl text-sm text-secondary-color mx-auto">
            {text.split("").map((word, index) => {
              return (
                <span className="char" key={index}>
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      <div className="w-1/2 mt-10">
        <div>
          <h2 className="text-secondary-color opacity-0  animation font-bold md:text-3xl text-lg text-center  md:border-b-4 border-b-2 border-secondary-color my-text-shadow w-fit mx-auto md:px-10 px-5 md:py-5 py-2">
            PROFESSIONAL SKILLS
          </h2>
        </div>
        <div className="flex  animation justify-center items-center  flex-wrap mt-10  w-10/12 mx-auto">
          {skills.map((skill) => (
            <CardSkill key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
