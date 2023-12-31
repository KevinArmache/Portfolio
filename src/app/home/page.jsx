import React from "react";

export default function page() {
  return (
    <div className="flex ">
      <div className="border-2 border-secondary-color w-1/2 mt-10">
        <div>
          <h2 className="text-secondary-color font-bold text-3xl border-b-4 border-secondary-color my-text-shadow w-fit mx-auto px-10 py-5">
            AN INTRODUCTION ABOUT HIM
          </h2>
        </div>

        <div className="mt-10 mx-auto w-3/4 my-box-shadow ">
          <div className="bg-secondary-color flex items-center  p-1  mx-auto">
            <span className="bg-last-color mx-2  h-5 w-5"></span>
            <span className="text-primary-color font-bold">SYSTEM</span>
          </div>
          <div className="bg-last-color  text-center p-10  font-bold border border-secondary-color">
            <p className="leading-loose text-xl">
              This human is called Kevin Armachehe is a full-stack javascript
              developer he also has skills in UI & UX Design and he is
              constantly learning.
            </p>
            <p className="leading-loose text-xl">
              This human fell in love with programming and he at least learned
              something, he thinks… ‍his area of ​​interest is the construction
              of new technologies.
            </p>
            <p className="leading-loose text-xl">
              He is a passionate full stack software developer and he has
              experience building web application withJavaScript, Reactjs,
              Nodejs, and some other interesting libraries.
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-secondary-color w-1/2"></div>
    </div>
  );
}
