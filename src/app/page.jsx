import localFont from "next/font/local";
import Link from "next/link";
const rodin = localFont({
  // src: "./utils/fonts/Rodin-Font/FOT-Rodin Pro DB.otf",
  src: "./utils/fonts/Rodin-Font/FOT-RodinPro-Bold.otf",
});

export default function Home() {
  return (
    <main>
      <h1
        className={` ${rodin.className} mt-14 text-center text-5xl drop-shadow-2xl`}
      >
        Glory To Mankind
      </h1>
      <div className="text-center">
        <h3 className={` ${rodin.className} text-center text-3xl `}>
          Welcome{" "}
          <span className="bg-secondary-color p-1 font-bold text-primary-color">
            human
          </span>
        </h3>
      </div>

      <div className="mt-10 mx-auto w-1/2">
        <div className="bg-secondary-color flex items-center  p-1  mx-auto">
          <span className="bg-last-color mx-2  h-5 w-5"></span>
          <span className="text-primary-color font-bold">SYSTEM</span>
        </div>
        <div className="bg-last-color p-2 text-center  font-bold border border-secondary-color">
          <p className="leading-loose text-2xl">
            Hi human, this site is the presentation of the portfolio of the
            human who is represented in the name of Kevin Armache, who is the
            author of the creation of this website in the following sections we
            will talk about him and what he has already had to achieve in what
            is called web development which is an area related to the creation
            of websites and web applications through programming languages.
          </p>
          <p className="leading-loose text-2xl">
            you will also see finished projects that Kevin has already had to
            realize for the moment I let you discover the portfolio, good visit
            dear human.
          </p>
        </div>
      </div>

      <div className="mx-auto text-center  w-2/3">
        <Link href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            className="mx-auto mt-10"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M0 0h24v24H0z" />
              <path
                fill="#4e4b42"
                d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6.387 5.21a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32L13.585 11H8l-.117.007A1 1 0 0 0 8 13h5.585l-2.292 2.293l-.083.094a1 1 0 0 0 1.497 1.32l4-4l.073-.082l.074-.104l.052-.098l.044-.11l.03-.112l.017-.126L17 12l-.007-.118l-.029-.148l-.035-.105l-.054-.113l-.071-.111a1.008 1.008 0 0 0-.097-.112l-4-4z"
              />
            </g>
          </svg>
        </Link>
        <div className="h-px bg-black w-full mt-5 mb-10"></div>
        <p>This website was inspired by the game Nier Automata</p>
      </div>
    </main>
  );
}
