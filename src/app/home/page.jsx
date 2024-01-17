"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
export default function page() {
  const router = useRouter();
  const text = `"I never quite realized... how beautiful this world is."
  `;
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

  const ChangePage = (e) => {
    e.preventDefault();
    gsap.to(".animation", {
      duration: 0.5,
      opacity: 0,
      stagger: 0.5,
      onComplete: () => {
        router.push("/project");
      },
    });
  };

  return (
    <div className="lg:flex lg:flex-row flex flex-col items-center  relative">
      <div className="  lg:w-1/2 w-[95%] mt-10 opacity-0 animation">
        <div className="">
          <h2 className="text-secondary-color  font-bold md:text-3xl text-xl text-center  md:border-b-4 border-b-2 border-secondary-color my-text-shadow w-fit mx-auto px-10 py-5">
            AN INTRODUCTION ABOUT HIM
          </h2>
        </div>

        <div className="mt-10 mx-auto w-3/4 my-box-shadow ">
          <div className="bg-secondary-color flex items-center  p-1  mx-auto">
            <span className="bg-last-color mx-2  h-5 w-5"></span>
            <span className="text-primary-color font-bold">SYSTEM</span>
          </div>
          <div className="bg-last-color  text-center p-10  font-bold border border-secondary-color">
            <p className="leading-loose md:text-xl text-sm">
              This human is called Kevin Armache he is a full-stack Javascript
              developer he also has skills in UI & UX Design and he is
              constantly learning.
            </p>
            <p className="leading-loose md:text-xl text-sm">
              This human fell in love with programming and he at least learned
              something, he thinks… ‍his area of ​​interest is the construction
              of new technologies.
            </p>
            <p className="leading-loose md:text-xl text-sm">
              He is a passionate full stack software developer and he has
              experience building web application with JavaScript, Reactjs,
              Nodejs, and some other interesting libraries.
            </p>
          </div>
        </div>
        <div className="text-center  md:w-3/5 w-4/5 mx-auto  m-10 flex">
          <button
            onClick={ChangePage}
            className=" bg-secondary-color my-text-shadow text-primary-color font-bold md:text-xl text-sm block p-5 w-1/2"
          >
            Check some project ?
          </button>
          <Link
            href={"mailto:kevinarmache@gmail.com"}
            className="border-2 transition my-text-shadow duration-300 hover:bg-secondary-color  hover:text-primary-color text-secondary-color font-bold md:text-xl text-sm block p-5 border-secondary-color w-1/2"
          >
            Let's talk !
          </Link>
        </div>
      </div>
      <p className="lg:absolute block animation opacity-0 lg:-rotate-90 rotate-0 md:text-2xl text-sm left-1/2 top-1/2 md:transform lg:-translate-x-1/2 md:-translate-y-1/2">
        {text.split("").map((word, index) => {
          return (
            <span className="char " key={index}>
              {word}
            </span>
          );
        })}
      </p>
      <div className="w-1/2  animation">
        <div className="group border-4 relative border-secondary-color  lg:mt-20 mt-10 lg:w-3/4 w-fit   mx-auto  mb-5 p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="mx-auto lg:w-80 w-20 "
          >
            <path
              fill="#4a473d"
              d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.983 87.983 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80a40 40 0 1 0 0 80"
            />
          </svg>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  mt-10 mx-auto lg:w-1/3 w-full my-box-shadow absolute bottom-0 right-0 -mb-20 -mr-10">
            <div className="flex bg-secondary-color justify-between items-center ">
              <div className="bg-secondary-color flex items-center">
                <span className="bg-last-color my-2 ml-2 h-5 w-5"></span>
                <span className="text-primary-color my-2 mx-2 font-bold">
                  SYSTEM
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                className="m-2"
              >
                <g
                  fill="none"
                  stroke="#dad4bb"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="m42 42l-9-9M6 6l9 9zm0 36l9-9M42 6l-9 9z" />
                  <path
                    fill="#dad4bb"
                    d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"
                  />
                </g>
              </svg>
            </div>
            <div className="bg-last-color  text-center p-1  font-bold border border-secondary-color">
              <p className="leading-loose md:text-lg text-xs">
                This is not a 404 error, this human just did not want to put his
                picture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
