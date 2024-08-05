import React from "react";

export default function Contact() {
  return (
    <div className="contact-container flex flex-col md:flex-row items-center justify-center text-white p-5 z-500">
      <svg
        viewBox="0 0 24 24"
        fill="#fff"
        width="200px"
        height="200px"
        xmlns="http://www.w3.org/2000/svg"
        className="line-drawing"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.3545 22.2324C15.3344 21.7262 11.1989 20.2994 7.44979 16.5503C3.70068 12.8012 2.27383 8.66565 1.76771 6.64556C1.47684 5.48465 2.00061 4.3644 2.88872 3.73003L5.21698 2.067C6.57925 1.09394 8.47435 1.42413 9.42727 2.80057L10.8931 4.91783C11.5153 5.81657 11.3006 7.04836 10.4112 7.68371L9.24237 8.51856C9.41926 9.19516 9.96942 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5808 15.4815 14.7577L16.3164 13.5889C16.9517 12.6994 18.1835 12.4848 19.0822 13.107L21.1995 14.5728C22.5759 15.5257 22.9061 17.4208 21.9331 18.7831L20.27 21.1113C19.6357 21.9995 18.5154 22.5232 17.3545 22.2324ZM8.864 15.1361C12.2734 18.5454 16.0358 19.8401 17.8406 20.2923C18.1044 20.3584 18.4233 20.2559 18.6426 19.9489L20.3056 17.6206C20.63 17.1665 20.5199 16.5348 20.0611 16.2172L17.9438 14.7514L17.0479 16.0056C16.6818 16.5182 16.0047 16.9203 15.2163 16.7502C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.14313 11.5868 7.46222 9.76776 7.24991 8.78376C7.0798 7.99537 7.48184 7.31827 7.99442 6.95215L9.24868 6.05625L7.78288 3.93899C7.46524 3.48017 6.83354 3.37011 6.37945 3.69446L4.0512 5.3575C3.74416 5.57681 3.64165 5.89571 3.70774 6.15949C4.15992 7.96424 5.45462 11.7267 8.864 15.1361Z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="1"
            strokeDasharray="180"
            strokeDashoffset="180"
          ></path>
          <path
            d="M23 7C23 7.55228 22.5523 8 22 8C21.4477 8 21 7.55228 21 7V4.41421L16.7216 8.69265C16.331 9.08318 15.6979 9.08317 15.3073 8.69265C14.9168 8.30213 14.9168 7.66896 15.3073 7.27844L19.5858 3L17 3C16.4477 3 16 2.55228 16 2C16 1.44772 16.4477 1 17 1L21 1C22.1046 1 23 1.89543 23 3V7Z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="1"
            strokeDasharray="100"
            strokeDashoffset="100"
          ></path>
        </g>
      </svg>
      <div className="contact-info ml-8 text-left">
        <p className="text-lg">Phone: +91 9122027847</p>
        <p className="text-lg">Email: k.badal19@gmail.com</p>
        <p className="text-lg">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/kbadal19"
            className="text-blue-400"
          >
            https://www.linkedin.com/in/kbadal19
          </a>
        </p>
        <p className="text-lg">
          GitHub:{" "}
          <a href="https://github.com/kbadal19" className="text-blue-400">
            https://github.com/kbadal19
          </a>
        </p>
      </div>
    </div>
  );
}
