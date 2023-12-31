import Link from "next/link";

export default function page() {
  return (
    <div className="flex ">
      <div className="w-1/2 mt-10">
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
              This human is called Kevin Armache he is a full-stack Javascript
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
              experience building web application with JavaScript, Reactjs,
              Nodejs, and some other interesting libraries.
            </p>
          </div>
        </div>
        <div className="text-center w-3/5 mx-auto  m-10 flex">
          <Link
            href=""
            className=" bg-secondary-color text-primary-color font-bold text-xl block p-5 w-1/2"
          >
            Check some project ?
          </Link>
          <Link
            href={""}
            className="border-2 transition duration-300 hover:bg-secondary-color  hover:text-primary-color text-secondary-color font-bold text-xl block p-5 border-secondary-color w-1/2"
          >
            Let's talk !
          </Link>
        </div>
      </div>
      <div className="border-2 border-secondary-color w-1/2"></div>
    </div>
  );
}
