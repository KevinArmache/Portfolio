"use client";
import CardProject from "../components/CardProject/CardProject";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import data from "../utils/json/data.json";

gsap.registerPlugin(ScrollTrigger);
export default function page() {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const width = 100 * data.length;

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

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${100 * data.length - 100}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          // markers: true,
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="relative">
      <div>
        <h2 className="text-secondary-color animation  opacity-0 char mt-10 font-bold md:text-3xl text-lg text-center  md:border-b-4 border-b-2 border-secondary-color my-text-shadow w-fit mx-auto md:px-10 px-5 md:py-5 py-2">
          HIS RECENT PROJECTS
        </h2>
      </div>
      {/* PROJECTS */}
      <div ref={triggerRef} className=" overflow-hidden">
        <div
          ref={sectionRef}
          className={`animation border-2 flex items-center w-[${width}vw] h-screen`}
        >
          {data.map((project) => (
            <CardProject key={project.id} {...project} />
          ))}
        </div>
      </div>

      <p className="md:absolute block animation md:top-1/2 md:left-0 md:transform md:-ml-64  md:w-[40%] w-[80%] md:-translate-y-1/2 md:-rotate-90 text-center md:text-2xl text-sm mx-auto md:p-0 p-5">
        {text.split("").map((word, index) => {
          return (
            <span className="char opacity-0" key={index}>
              {word}
            </span>
          );
        })}
      </p>
    </div>
  );
}

// export default function Home() {
//   const trigger = useRef(null);
//   const section = useRef(null);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       section.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           markers: true,
//           trigger: trigger.current,
//           start: "top top",
//           end: "1000 top",
//           scrub: true,
//           pin: true,
//         },
//       }
//     );

//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <main>
//       <div ref={trigger} className="h-screen">
//         <div
//           ref={section}
//           className="relative flex w-[300vw] h-screen border-2"
//         >
//           <div className="section section1 bg-contain bg-center   bg-[url('/assets/1.jpg')]  h-screen  w-screen"></div>
//           <div className="section section2 bg-contain bg-[url('/assets/2.jpg')]  h-screen  w-screen"></div>
//           <div className="section section3 bg-contain bg-[url('/assets/3.jpg')]  h-screen  w-screen"></div>
//         </div>
//       </div>
//       <div className="section section3 bg-contain bg-[url('/assets/3.jpg')]  h-screen  w-screen"></div>
//     </main>
//   );
// }
