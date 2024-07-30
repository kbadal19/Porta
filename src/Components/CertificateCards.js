import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-50 max-w-9xl overflow-hidden mt-24 ${className}`}
    >
     <h1 className="text-white mt-5 mb-16 text-4xl font-bold"> Certifications </h1>
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] transform transition-transform duration-300 hover:scale-150 hover:z-50 overflow-hidden"
            onClick={() => window.open(item.link, "_blank")}
            style={{
              background: "",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-125 rounded-md"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="p-4">
              <div className="font-bold text-xl mb-2 text-center text-white">{item.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
