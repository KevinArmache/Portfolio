import localFont from "next/font/local";
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
    </main>
  );
}
