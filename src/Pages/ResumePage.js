import React from "react";
import Resume from "../Components/Resume";
import { Tooltip } from "@mui/material";

export default function ResumePage() {
  return (
    <div className="relative">
      <Tooltip title="Download Resume">
        <a
          href="/resume101-82.pdf"
          download
          className="absolute top-4 right-4 bg-gray-400 text-white px-4 py-2 rounded-full flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </a>
      </Tooltip>
      <Resume />
    </div>
  );
}
