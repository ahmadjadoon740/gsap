import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Set = () => {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box) => {
        gsap.to(box, {
          x: 500 * (boxes.indexOf(box) + 5),
          rotate: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // More visible scroll start
            end: "top 5%", // Gives better scroll range
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <>
      <div className="min-h-[150vh] p-10 text-xl text-center">Scroll Down</div>

      <div className="container gap-12 p-10" ref={scrollRef}>
        <div className="w-[200px] h-[200px] bg-pink-600 text-white flex items-center justify-center m-5">
          Box 1
        </div>
        <div className="w-[200px] h-[200px] bg-red-600 text-white flex items-center justify-center m-5">
          Box 2
        </div>
      </div>

      <div className="min-h-[150vh] p-10 text-xl text-center">Scroll Up</div>
    </>
  );
};

export default Set;
