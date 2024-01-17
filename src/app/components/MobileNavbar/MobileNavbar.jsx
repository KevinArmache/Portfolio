"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };
  return (
    <div className="navbar  bg-primary-color md:hidden sm:flex">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn nav-bar-item btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4a473d"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu border-2 border-secondary-color bg-primary-color menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  onClick={closeMenu}
                  className="text-secondary-color font-bold"
                  href={"/home"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="text-secondary-color font-bold"
                  href={"/project"}
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="text-secondary-color font-bold"
                  href={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  className="text-secondary-color font-bold"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={"/home"}
          className="btn btn-ghost nav-bar-item text-xl text-secondary-color "
        >
          ケビン
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <div className="mx-2 nav-bar-item">
            <button onClick={togglePlay}>
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4E4B42"
                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4E4B42"
                    d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4v-1.73L19.73 21L21 19.73zM14 7h4V3h-6v5.18l2 2Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <audio
            ref={audioRef}
            controls={false}
            src="/assets/song/3-08 Blissful Death.mp3"
            loop
          />
        </div>
      </div>
    </div>
  );
}
