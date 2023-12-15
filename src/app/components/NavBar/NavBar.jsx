"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [activePage, setActivePage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Mettre à jour l'état activePage en fonction de l'URL actuelle
    setActivePage(pathname);
  }, [pathname]);
  return (
    <div className="flex border-b-2 border-black">
      <div className=" w-3/4">
        <ul className="flex p-4 items-center">
          {activePage === "/" ? (
            <li>
              <div className="border mb-1 border-secondary-color"></div>
              <Link
                className="flex justify-center items-center bg-secondary-color px-3 py-2"
                href={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 24 24"
                  className="bg-primary-color mx-2"
                >
                  <path
                    fill="#4a473d"
                    d="M21.8 13H20v8h-7v-3.33l2.79-2.79l.71.12a2.1 2.1 0 1 0 0-4.2a2.1 2.1 0 0 0-2.1 2.1l.1.71l-1.5 1.52V9.65c.66-.36 1.1-1.05 1.1-1.85A2.1 2.1 0 0 0 12 5.7a2.1 2.1 0 0 0-2.1 2.1c0 .8.44 1.49 1.1 1.85v5.48l-1.5-1.52l.1-.71a2.1 2.1 0 0 0-2.1-2.1a2.1 2.1 0 0 0-2.1 2.1A2.1 2.1 0 0 0 7.5 15l.71-.12L11 17.67V21H4v-8H2.25c-.42 0-.83 0-.83-.21c.01-.22.43-.64.86-1.07L11 3c.33-.33.67-.67 1-.67c.33 0 .67.34 1 .67l4 4V6h2v3l2.78 2.78c.4.4.81.81.82 1.02c0 .2-.4.2-.8.2M7.5 12a.9.9 0 0 1 .9.9a.9.9 0 0 1-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9m9 0c.5 0 .9.4.9.9s-.4.9-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9M12 6.9c.5 0 .9.4.9.9s-.4.9-.9.9s-.9-.4-.9-.9s.4-.9.9-.9"
                  />
                </svg>
                <span className={`font-bold mx-2 text-primary-color text-xl`}>
                  HOME
                </span>
              </Link>
              <div className="border mt-1 border-secondary-color"></div>
            </li>
          ) : (
            <li>
              <div className="border mb-1 border-transparent"></div>
              <Link
                className="flex justify-center items-center px-3 py-2"
                href={"/"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 24 24"
                  className="bg-secondary-color mx-2"
                >
                  <path
                    fill="#cdc8b0"
                    d="M21.8 13H20v8h-7v-3.33l2.79-2.79l.71.12a2.1 2.1 0 1 0 0-4.2a2.1 2.1 0 0 0-2.1 2.1l.1.71l-1.5 1.52V9.65c.66-.36 1.1-1.05 1.1-1.85A2.1 2.1 0 0 0 12 5.7a2.1 2.1 0 0 0-2.1 2.1c0 .8.44 1.49 1.1 1.85v5.48l-1.5-1.52l.1-.71a2.1 2.1 0 0 0-2.1-2.1a2.1 2.1 0 0 0-2.1 2.1A2.1 2.1 0 0 0 7.5 15l.71-.12L11 17.67V21H4v-8H2.25c-.42 0-.83 0-.83-.21c.01-.22.43-.64.86-1.07L11 3c.33-.33.67-.67 1-.67c.33 0 .67.34 1 .67l4 4V6h2v3l2.78 2.78c.4.4.81.81.82 1.02c0 .2-.4.2-.8.2M7.5 12a.9.9 0 0 1 .9.9a.9.9 0 0 1-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9m9 0c.5 0 .9.4.9.9s-.4.9-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9M12 6.9c.5 0 .9.4.9.9s-.4.9-.9.9s-.9-.4-.9-.9s.4-.9.9-.9"
                  />
                </svg>
                <span className={`font-bold mx-2 text-secondary-color text-xl`}>
                  HOME
                </span>
              </Link>
              <div className="border mt-1 border-transparent"></div>
            </li>
          )}
          {/* PROJECT */}
          {activePage === "/project" ? (
            <li>
              <div className="border mb-1 border-secondary-color"></div>
              <Link
                className="flex justify-center items-center bg-secondary-color px-3 py-2"
                href={"/project"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 512 512"
                  className="bg-primary-color mx-2"
                >
                  <path
                    fill="#4a473d"
                    d="M482.403 42.826c-10.537-8.76-24.84-4.167-43.264 11.643c-76.1 65.307-202.78 179.14-282.432 269.103l21.07 21.07c82.21-87.285 203.37-205.524 304.625-301.817zm-338.477 293.42l-17.17 17.028l22.302 22.303a2546.608 2546.608 0 0 1 16.41-17.79zm-56.796.03l-12.728 12.728l79.196 79.196l12.728-12.728zm2.942 54.185l-60.475 60.475c.372 11.49 10.708 22.336 22.628 22.627l60.474-60.474l-8.137-8.136c2.657 4.264 2.84 8.705.457 11.097c-3.124 3.123-9.554 1.758-14.363-3.05c4.808 4.808 6.174 11.24 3.05 14.363c-3.125 3.124-9.555 1.76-14.364-3.05c4.81 4.81 6.174 11.24 3.05 14.363c-3.124 3.125-9.555 1.76-14.363-3.05c4.808 4.81 6.173 11.24 3.05 14.364c-3.125 3.124-9.556 1.76-14.364-3.05c4.808 4.81 6.174 11.24 3.05 14.364c-3.125 3.124-9.555 1.76-14.364-3.05c-4.808-4.808-6.173-11.24-3.05-14.363c3.125-3.123 9.556-1.758 14.364 3.05c-4.808-4.808-6.173-11.238-3.05-14.362c3.125-3.125 9.555-1.76 14.364 3.05c-4.81-4.81-6.174-11.24-3.05-14.364c3.125-3.124 9.555-1.76 14.363 3.05c-4.808-4.81-6.173-11.24-3.05-14.364c3.125-3.124 9.556-1.76 14.364 3.05c-4.808-4.81-6.173-11.24-3.05-14.364c2.39-2.383 6.828-2.202 11.09.45z"
                  />
                </svg>

                <span className={`font-bold mx-2 text-primary-color text-xl`}>
                  PROJECT
                </span>
              </Link>
              <div className="border mt-1 border-secondary-color"></div>
            </li>
          ) : (
            <li>
              <Link
                href={"/project"}
                className=" flex justify-center items-center  px-3 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 512 512"
                  className="bg-secondary-color mx-2"
                >
                  <path
                    fill="#cdc8b0"
                    d="M482.403 42.826c-10.537-8.76-24.84-4.167-43.264 11.643c-76.1 65.307-202.78 179.14-282.432 269.103l21.07 21.07c82.21-87.285 203.37-205.524 304.625-301.817zm-338.477 293.42l-17.17 17.028l22.302 22.303a2546.608 2546.608 0 0 1 16.41-17.79zm-56.796.03l-12.728 12.728l79.196 79.196l12.728-12.728zm2.942 54.185l-60.475 60.475c.372 11.49 10.708 22.336 22.628 22.627l60.474-60.474l-8.137-8.136c2.657 4.264 2.84 8.705.457 11.097c-3.124 3.123-9.554 1.758-14.363-3.05c4.808 4.808 6.174 11.24 3.05 14.363c-3.125 3.124-9.555 1.76-14.364-3.05c4.81 4.81 6.174 11.24 3.05 14.363c-3.124 3.125-9.555 1.76-14.363-3.05c4.808 4.81 6.173 11.24 3.05 14.364c-3.125 3.124-9.556 1.76-14.364-3.05c4.808 4.81 6.174 11.24 3.05 14.364c-3.125 3.124-9.555 1.76-14.364-3.05c-4.808-4.808-6.173-11.24-3.05-14.363c3.125-3.123 9.556-1.758 14.364 3.05c-4.808-4.808-6.173-11.238-3.05-14.362c3.125-3.125 9.555-1.76 14.364 3.05c-4.81-4.81-6.174-11.24-3.05-14.364c3.125-3.124 9.555-1.76 14.363 3.05c-4.808-4.81-6.173-11.24-3.05-14.364c3.125-3.124 9.556-1.76 14.364 3.05c-4.808-4.81-6.173-11.24-3.05-14.364c2.39-2.383 6.828-2.202 11.09.45z"
                  />
                </svg>

                <span className={`font-bold mx-2 text-secondary-color text-xl`}>
                  PROJECT
                </span>
              </Link>
            </li>
          )}
          {/* ABOUT */}
          {activePage === "/about" ? (
            <li>
              <div className="border mb-1 border-secondary-color"></div>
              <Link
                className="flex justify-center items-center bg-secondary-color px-3 py-2"
                href={"/project"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 512 512"
                  className="bg-primary-color mx-2"
                >
                  <path
                    fill="#4a473d"
                    d="M259.646 33.586c-44.698 10.116-96.576 26.075-141.98 42.926c-42.563 15.796-79.721 32.796-97.816 44.22l28.634 40.006C85.45 141.836 163.58 106.833 258.87 78.725c.115-12.307.426-26.651.777-45.14zm-.755 63.922c-89.553 26.838-163.813 59.876-199.809 78.035l11.363 15.877c64.955-26.867 129.99-52.813 189.244-73.865c-.436-6.558-.686-13.057-.798-20.047m10.861 35.584c-63.467 22.407-134.187 50.745-204.494 79.949l-.063-.148c-22.345 11.147-36.325 23.22-47.084 35.552c3.174.194 6.684.262 10.803-.04c11.524-.847 26.29-3.532 42.982-7.69c33.387-8.316 74.56-22.461 115.413-38.873c40.852-16.412 81.444-35.104 113.841-52.438c20.416-10.922 37.096-21.52 48.778-30.168c-27.24-.104-57.425 6.306-80.176 13.856m18.371 43.3a1084.226 1084.226 0 0 1-16.488 8.057c6.635 4.076 11.482 10.968 14.367 18.592c3.944 10.42 4.892 22.894 2.566 35.8c-2.325 12.907-7.527 24.049-14.789 32.046s-17.434 13.233-28.275 10.888c-10.842-2.344-18.433-11.423-22.377-21.843c-3.944-10.42-4.894-22.894-2.568-35.801c1.264-7.02 3.387-13.512 6.222-19.266a1358.468 1358.468 0 0 1-32.761 13.678a1248.826 1248.826 0 0 1-43.65 16.613c11.354 20.924 27.32 38.077 51.366 50.307l9.17 4.664l-5.842 8.469c-8.506 12.333-6.783 30.624 1.875 43.974c8.659 13.35 21.871 20.897 38.64 14.395c59.434-23.047 104.228-28.81 145.775-21.113c34.839 6.454 67.127 22.398 103.834 43.81c-12.425-28.256-33.968-57.384-60.729-82.209c-33.985-31.525-76.04-56.09-116.33-64.65l-5.635-1.198l-1.271-5.617c-.802-3.538-8.001-29.713-23.1-49.595zm-29.527 22.372c-2.798.11-6.202 1.744-9.908 5.826c-4.563 5.024-8.733 13.374-10.53 23.348c-1.796 9.973-.835 19.436 1.643 25.982c2.477 6.546 5.817 9.469 8.896 10.135c3.08.666 7.182-.646 11.744-5.67c4.563-5.024 8.735-13.377 10.532-23.35c1.796-9.973.833-19.436-1.645-25.982c-2.478-6.547-5.817-9.469-8.896-10.135a7.293 7.293 0 0 0-1.836-.154m-125.414 42.4c-18.266 6.199-35.82 11.553-51.98 15.748c-4.18 24.009 9.737 55.444 19.53 71.184c36.172 26.058 68.19 52.072 126.23 70.021l-4.89-22.824c-12.567-3.576-23.285-12.214-30.234-22.93c-10.383-16.01-14.055-37.249-6.25-55.41c-23.92-14.166-40.703-33.554-52.406-55.789m-56.55 92.08c-9.031 13.247-23.97 18.894-37.823 21.772c15.285 25.397 49.541 49.906 93.216 72.103c41.305 20.993 90.376 40.17 138.215 58.6c-11.892-19.381-20.046-40.812-22.304-63.33c-86.163-20.547-125.096-57.285-171.303-89.145zm-27.696 61.57C36.052 424.224 26.8 455.703 25.279 487h198.588c-34.824-13.775-69.286-28.225-99.998-43.834c-29.2-14.84-55.252-30.589-74.933-48.352"
                  />
                </svg>

                <span className={`font-bold mx-2 text-primary-color text-xl`}>
                  ABOUT
                </span>
              </Link>
              <div className="border mt-1 border-secondary-color"></div>
            </li>
          ) : (
            <li>
              <Link
                href={"/about"}
                className=" flex justify-center items-center  px-3 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 512 512"
                  className="bg-secondary-color mx-2"
                >
                  <path
                    fill="#cdc8b0"
                    d="M259.646 33.586c-44.698 10.116-96.576 26.075-141.98 42.926c-42.563 15.796-79.721 32.796-97.816 44.22l28.634 40.006C85.45 141.836 163.58 106.833 258.87 78.725c.115-12.307.426-26.651.777-45.14zm-.755 63.922c-89.553 26.838-163.813 59.876-199.809 78.035l11.363 15.877c64.955-26.867 129.99-52.813 189.244-73.865c-.436-6.558-.686-13.057-.798-20.047m10.861 35.584c-63.467 22.407-134.187 50.745-204.494 79.949l-.063-.148c-22.345 11.147-36.325 23.22-47.084 35.552c3.174.194 6.684.262 10.803-.04c11.524-.847 26.29-3.532 42.982-7.69c33.387-8.316 74.56-22.461 115.413-38.873c40.852-16.412 81.444-35.104 113.841-52.438c20.416-10.922 37.096-21.52 48.778-30.168c-27.24-.104-57.425 6.306-80.176 13.856m18.371 43.3a1084.226 1084.226 0 0 1-16.488 8.057c6.635 4.076 11.482 10.968 14.367 18.592c3.944 10.42 4.892 22.894 2.566 35.8c-2.325 12.907-7.527 24.049-14.789 32.046s-17.434 13.233-28.275 10.888c-10.842-2.344-18.433-11.423-22.377-21.843c-3.944-10.42-4.894-22.894-2.568-35.801c1.264-7.02 3.387-13.512 6.222-19.266a1358.468 1358.468 0 0 1-32.761 13.678a1248.826 1248.826 0 0 1-43.65 16.613c11.354 20.924 27.32 38.077 51.366 50.307l9.17 4.664l-5.842 8.469c-8.506 12.333-6.783 30.624 1.875 43.974c8.659 13.35 21.871 20.897 38.64 14.395c59.434-23.047 104.228-28.81 145.775-21.113c34.839 6.454 67.127 22.398 103.834 43.81c-12.425-28.256-33.968-57.384-60.729-82.209c-33.985-31.525-76.04-56.09-116.33-64.65l-5.635-1.198l-1.271-5.617c-.802-3.538-8.001-29.713-23.1-49.595zm-29.527 22.372c-2.798.11-6.202 1.744-9.908 5.826c-4.563 5.024-8.733 13.374-10.53 23.348c-1.796 9.973-.835 19.436 1.643 25.982c2.477 6.546 5.817 9.469 8.896 10.135c3.08.666 7.182-.646 11.744-5.67c4.563-5.024 8.735-13.377 10.532-23.35c1.796-9.973.833-19.436-1.645-25.982c-2.478-6.547-5.817-9.469-8.896-10.135a7.293 7.293 0 0 0-1.836-.154m-125.414 42.4c-18.266 6.199-35.82 11.553-51.98 15.748c-4.18 24.009 9.737 55.444 19.53 71.184c36.172 26.058 68.19 52.072 126.23 70.021l-4.89-22.824c-12.567-3.576-23.285-12.214-30.234-22.93c-10.383-16.01-14.055-37.249-6.25-55.41c-23.92-14.166-40.703-33.554-52.406-55.789m-56.55 92.08c-9.031 13.247-23.97 18.894-37.823 21.772c15.285 25.397 49.541 49.906 93.216 72.103c41.305 20.993 90.376 40.17 138.215 58.6c-11.892-19.381-20.046-40.812-22.304-63.33c-86.163-20.547-125.096-57.285-171.303-89.145zm-27.696 61.57C36.052 424.224 26.8 455.703 25.279 487h198.588c-34.824-13.775-69.286-28.225-99.998-43.834c-29.2-14.84-55.252-30.589-74.933-48.352"
                  />
                </svg>

                <span className={`font-bold mx-2 text-secondary-color text-xl`}>
                  ABOUT
                </span>
              </Link>
            </li>
          )}
          {/* CONTACT */}
          {activePage === "/contact" ? (
            <li>
              <div className="border mb-1 border-secondary-color"></div>
              <Link
                className="flex justify-center items-center bg-secondary-color px-3 py-2"
                href={"/contact"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 32 32"
                  className="bg-primary-color mx-2"
                >
                  <g fill="#4a473d">
                    <path d="m20.23 8.349l-4.4 4.31c-.19.17-.2.46-.03.65c.04.05.1.08.16.11c2.06.9 3.55 2.74 4 4.94a.46.46 0 0 0 .78.22l4.16-4.34c.08-.09.13-.21.13-.33c0-.91-.47-4.86-4.42-5.68a.442.442 0 0 0-.38.12m-5.755 6.181a.5.5 0 0 0-.352.936h.001l.001.001l.018.008l.083.037c.076.035.19.093.33.176a5.58 5.58 0 0 1 1.075.842c.81.804 1.715 2.158 2.014 4.346a.5.5 0 0 0 .99-.135c-.33-2.421-1.345-3.973-2.299-4.92a6.58 6.58 0 0 0-1.27-.993a4.91 4.91 0 0 0-.573-.29l-.011-.005l-.004-.002zl-.176.468zm7.941-8.445a.5.5 0 0 1 .608-.36l-.124.484l.124-.485h.001l.002.001l.004.001l.013.004a2.146 2.146 0 0 1 .177.056c.115.04.275.1.466.19a6.21 6.21 0 0 1 1.42.92c1.064.911 2.166 2.46 2.43 5.001a.5.5 0 1 1-.994.104c-.236-2.27-1.204-3.59-2.086-4.346a5.245 5.245 0 0 0-1.191-.772a3.987 3.987 0 0 0-.468-.183l-.02-.006h-.002l-.001-.001a.5.5 0 0 1-.36-.608m2.354-2.089a.5.5 0 1 0-.377.926a6.33 6.33 0 0 1 3.901 5.125a.5.5 0 0 0 .994-.117a7.33 7.33 0 0 0-4.518-5.934M5.259 26.232c-.465-.465-.783-.976-.947-1.48c-.058-.39.144-.887.589-1.184c.436-.292 1.133-.404 2.07.064c.477.239.912.563 1.18.997c.264.425.382.978.19 1.717c-.115.437-.574.673-1.244.647c-.657-.026-1.389-.312-1.838-.761" />
                    <path d="m11.651 29.66l-.062.064c-1.882 1.882-5.415 1.4-7.89-1.075c-2.476-2.476-2.957-6.009-1.076-7.89c.065-.065.13-.126.199-.185l-.001-.001L18.48 4.759c0-.01.01-.01.01-.01a6.087 6.087 0 0 1 3.506-1.745l.567-.567a.947.947 0 0 1 1.017-.225l.054.021c1.172-.954 2.943-.924 3.99.278c.953 1.096 1.937 2.44 2.484 3.918c.553 1.491.666 3.141-.16 4.795c-.19.377-.544.86-.996 1.405a40.44 40.44 0 0 1-1.725 1.916c-1.357 1.43-3.096 3.146-4.957 4.942a808.688 808.688 0 0 1-4.475 4.278c-2.311 2.198-4.506 4.287-6.128 5.909zm12.44-26.492L9.413 18.278l-.003.008a.14.14 0 0 0 0 .057c.01.06.044.11.076.133c.736.528 1.715 1.536 2.525 3.294c.983 2.134 1.1 3.948.824 5.355c1.294-1.253 2.768-2.655 4.287-4.1a820.996 820.996 0 0 0 4.454-4.257c1.858-1.794 3.584-3.498 4.925-4.911a39.241 39.241 0 0 0 1.681-1.867c.448-.539.737-.946.87-1.214c.675-1.348.6-2.7.119-4c-.486-1.312-1.38-2.548-2.302-3.609c-.705-.81-1.989-.811-2.778 0M7.181 30.194c.3.009.61-.002.928-.037c2.546-.278 3.74-2.545 3.64-4.36c-.112-2.062-1.491-3.765-3.109-4.718c-1.602-.945-3.551-1.21-4.796-.214c-1.331 1.065-1.672 2.489-1.432 3.823c.237 1.321 1.043 2.562 2.017 3.32c1.639 1.276 3.203 1.24 4.314.527c1.089-.699 1.71-2.03 1.504-3.266c-.268-1.608-1.436-2.656-2.651-3.161a4.511 4.511 0 0 0-1.797-.364c-.55.013-1.065.16-1.394.488c-.588.589-.802 1.35-.695 2.13c.107.772.528 1.556 1.195 2.224c.551.55 1.409.876 2.172.906c.75.03 1.541-.233 1.747-1.02c.225-.86.093-1.556-.248-2.107c-.335-.541-.86-.918-1.382-1.18c-1.064-.532-1.957-.443-2.57-.033c-.146.096-.273.21-.382.336a1.92 1.92 0 0 1 .517-.902c.2-.2.564-.33 1.051-.342a4.015 4.015 0 0 1 1.594.325c1.105.46 2.117 1.39 2.35 2.783c.17 1.026-.35 2.165-1.28 2.762c-.909.582-2.242.664-3.738-.5c-.883-.688-1.618-1.822-1.832-3.015c-.212-1.179.083-2.408 1.252-3.343c1.003-.803 2.698-.65 4.23.253c1.518.894 2.764 2.465 2.864 4.315c.088 1.62-.977 3.594-3.195 3.836c-1.119.122-2.127-.08-2.9-.341a6.919 6.919 0 0 0 2.027.875" />
                  </g>
                </svg>
                <span className={`font-bold mx-2 text-primary-color text-xl`}>
                  CONTACT
                </span>
              </Link>
              <div className="border mt-1 border-secondary-color"></div>
            </li>
          ) : (
            <li>
              <Link
                href={"/contact"}
                className=" flex justify-center items-center  px-3 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="30"
                  viewBox="0 0 32 32"
                  className="bg-secondary-color mx-2"
                >
                  <g fill="#cdc8b0">
                    <path d="m20.23 8.349l-4.4 4.31c-.19.17-.2.46-.03.65c.04.05.1.08.16.11c2.06.9 3.55 2.74 4 4.94a.46.46 0 0 0 .78.22l4.16-4.34c.08-.09.13-.21.13-.33c0-.91-.47-4.86-4.42-5.68a.442.442 0 0 0-.38.12m-5.755 6.181a.5.5 0 0 0-.352.936h.001l.001.001l.018.008l.083.037c.076.035.19.093.33.176a5.58 5.58 0 0 1 1.075.842c.81.804 1.715 2.158 2.014 4.346a.5.5 0 0 0 .99-.135c-.33-2.421-1.345-3.973-2.299-4.92a6.58 6.58 0 0 0-1.27-.993a4.91 4.91 0 0 0-.573-.29l-.011-.005l-.004-.002zl-.176.468zm7.941-8.445a.5.5 0 0 1 .608-.36l-.124.484l.124-.485h.001l.002.001l.004.001l.013.004a2.146 2.146 0 0 1 .177.056c.115.04.275.1.466.19a6.21 6.21 0 0 1 1.42.92c1.064.911 2.166 2.46 2.43 5.001a.5.5 0 1 1-.994.104c-.236-2.27-1.204-3.59-2.086-4.346a5.245 5.245 0 0 0-1.191-.772a3.987 3.987 0 0 0-.468-.183l-.02-.006h-.002l-.001-.001a.5.5 0 0 1-.36-.608m2.354-2.089a.5.5 0 1 0-.377.926a6.33 6.33 0 0 1 3.901 5.125a.5.5 0 0 0 .994-.117a7.33 7.33 0 0 0-4.518-5.934M5.259 26.232c-.465-.465-.783-.976-.947-1.48c-.058-.39.144-.887.589-1.184c.436-.292 1.133-.404 2.07.064c.477.239.912.563 1.18.997c.264.425.382.978.19 1.717c-.115.437-.574.673-1.244.647c-.657-.026-1.389-.312-1.838-.761" />
                    <path d="m11.651 29.66l-.062.064c-1.882 1.882-5.415 1.4-7.89-1.075c-2.476-2.476-2.957-6.009-1.076-7.89c.065-.065.13-.126.199-.185l-.001-.001L18.48 4.759c0-.01.01-.01.01-.01a6.087 6.087 0 0 1 3.506-1.745l.567-.567a.947.947 0 0 1 1.017-.225l.054.021c1.172-.954 2.943-.924 3.99.278c.953 1.096 1.937 2.44 2.484 3.918c.553 1.491.666 3.141-.16 4.795c-.19.377-.544.86-.996 1.405a40.44 40.44 0 0 1-1.725 1.916c-1.357 1.43-3.096 3.146-4.957 4.942a808.688 808.688 0 0 1-4.475 4.278c-2.311 2.198-4.506 4.287-6.128 5.909zm12.44-26.492L9.413 18.278l-.003.008a.14.14 0 0 0 0 .057c.01.06.044.11.076.133c.736.528 1.715 1.536 2.525 3.294c.983 2.134 1.1 3.948.824 5.355c1.294-1.253 2.768-2.655 4.287-4.1a820.996 820.996 0 0 0 4.454-4.257c1.858-1.794 3.584-3.498 4.925-4.911a39.241 39.241 0 0 0 1.681-1.867c.448-.539.737-.946.87-1.214c.675-1.348.6-2.7.119-4c-.486-1.312-1.38-2.548-2.302-3.609c-.705-.81-1.989-.811-2.778 0M7.181 30.194c.3.009.61-.002.928-.037c2.546-.278 3.74-2.545 3.64-4.36c-.112-2.062-1.491-3.765-3.109-4.718c-1.602-.945-3.551-1.21-4.796-.214c-1.331 1.065-1.672 2.489-1.432 3.823c.237 1.321 1.043 2.562 2.017 3.32c1.639 1.276 3.203 1.24 4.314.527c1.089-.699 1.71-2.03 1.504-3.266c-.268-1.608-1.436-2.656-2.651-3.161a4.511 4.511 0 0 0-1.797-.364c-.55.013-1.065.16-1.394.488c-.588.589-.802 1.35-.695 2.13c.107.772.528 1.556 1.195 2.224c.551.55 1.409.876 2.172.906c.75.03 1.541-.233 1.747-1.02c.225-.86.093-1.556-.248-2.107c-.335-.541-.86-.918-1.382-1.18c-1.064-.532-1.957-.443-2.57-.033c-.146.096-.273.21-.382.336a1.92 1.92 0 0 1 .517-.902c.2-.2.564-.33 1.051-.342a4.015 4.015 0 0 1 1.594.325c1.105.46 2.117 1.39 2.35 2.783c.17 1.026-.35 2.165-1.28 2.762c-.909.582-2.242.664-3.738-.5c-.883-.688-1.618-1.822-1.832-3.015c-.212-1.179.083-2.408 1.252-3.343c1.003-.803 2.698-.65 4.23.253c1.518.894 2.764 2.465 2.864 4.315c.088 1.62-.977 3.594-3.195 3.836c-1.119.122-2.127-.08-2.9-.341a6.919 6.919 0 0 0 2.027.875" />
                  </g>
                </svg>

                <span className={`font-bold mx-2 text-secondary-color text-xl`}>
                  CONTACT
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center px-10 justify-end w-1/4">
        <div className="mx-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4a473d"
                d="M10 21q-1.65 0-2.825-1.175T6 17q0-1.65 1.175-2.825T10 13q.575 0 1.063.138t.937.412V4q0-.425.288-.712T13 3h4q.425 0 .713.288T18 4v2q0 .425-.288.713T17 7h-3v10q0 1.65-1.175 2.825T10 21"
              />
            </svg>
          </button>
        </div>
        <div className="mx-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#4e4b42"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <path
                  strokeDasharray="34"
                  strokeDashoffset="34"
                  d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="34;0"
                  />
                </path>
                <g strokeDasharray="2" strokeDashoffset="2">
                  <path d="M0 0">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.5s"
                      dur="0.2s"
                      values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                    />
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.5s"
                      dur="0.2s"
                      values="2;0"
                    />
                  </path>
                  <path d="M0 0">
                    <animate
                      fill="freeze"
                      attributeName="d"
                      begin="0.7s"
                      dur="0.2s"
                      values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                    />
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="2;0"
                    />
                  </path>
                  <animateTransform
                    attributeName="transform"
                    dur="30s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className="mx-2">
          <button className=" text-3xl">EN</button>
        </div>
      </div>
    </div>
  );
}
