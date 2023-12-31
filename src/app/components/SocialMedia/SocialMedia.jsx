import React from "react";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="py-5  absolute container-social-media ">
      <Link href="https://www.instagram.com/kevinarmache/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="bg-[#4E4B42] p-1 "
        >
          <g
            fill="none"
            stroke="#cdc8b0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              strokeDasharray="66"
              strokeDashoffset="66"
              d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="66;132"
              />
            </path>
            <path
              strokeDasharray="26"
              strokeDashoffset="26"
              d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.4s"
                values="26;0"
              />
            </path>
          </g>
          <circle cx="17" cy="7" r="1.5" fill="#cdc8b0" fillOpacity="0">
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="1.1s"
              dur="0.4s"
              values="0;1"
            />
          </circle>
        </svg>
      </Link>
      <br />
      <Link className="" href="https://github.com/KevinArmache">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          className="bg-[#4E4B42] p-1"
        >
          <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
            <g fill="#fff">
              <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
              <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
            </g>
          </mask>
          <g
            fill="none"
            stroke="#cdc8b0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path
              strokeDasharray="30"
              strokeDashoffset="30"
              d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="30;0"
              />
            </path>
            <path strokeDasharray="10" strokeDashoffset="10" d="M9 19">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.7s"
                dur="0.2s"
                values="10;0"
              />
              <animate
                attributeName="d"
                dur="3s"
                repeatCount="indefinite"
                values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
              />
            </path>
          </g>
          <rect
            width="8"
            height="4"
            x="8"
            y="11"
            fill="#cdc8b0"
            mask="url(#lineMdGithubLoop0)"
          >
            <animate
              attributeName="y"
              dur="10s"
              keyTimes="0;0.45;0.46;0.54;0.55;1"
              repeatCount="indefinite"
              values="11;11;7;7;11;11"
            />
          </rect>
        </svg>
      </Link>
      <div className="icon-hidden">
        <br />
        <Link href="https://www.linkedin.com/in/kevin-armache-313733aa/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="bg-[#4E4B42] p-1"
          >
            <circle cx="4" cy="4" r="2" fill="#cdc8b0" fillOpacity="0">
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                dur="0.4s"
                values="0;1"
              />
            </circle>
            <g
              fill="none"
              stroke="#cdc8b0"
              strokeLinecap="round"
              strokeWidth="4"
            >
              <path strokeDasharray="12" strokeDashoffset="12" d="M4 10V20">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
              <path strokeDasharray="12" strokeDashoffset="12" d="M10 10V20">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.2s"
                  values="12;0"
                />
              </path>
              <path
                strokeDasharray="24"
                strokeDashoffset="24"
                d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.5s"
                  values="24;0"
                />
              </path>
            </g>
          </svg>
        </Link>
        <br />
        <Link href="mailto:kevinarmache@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="bg-[#4E4B42] p-1"
          >
            <g
              fill="none"
              stroke="#cdc8b0"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <rect
                width="18"
                height="14"
                x="3"
                y="5"
                strokeDasharray="64"
                strokeDashoffset="64"
                rx="1"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="64;0"
                />
              </rect>
              <path
                strokeDasharray="24"
                strokeDashoffset="24"
                d="M3 6.5L12 12L21 6.5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.4s"
                  values="24;0"
                />
              </path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
