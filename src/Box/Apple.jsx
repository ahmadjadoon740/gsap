import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Apple = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#box", {
      x: 250,
      rotate: 360,
      borderRadius: "50%",
      duration: 2,
      ease: "back.inOut",
    });
    timeline.to("#box", {
      y: 250,
      scale: 2,
      rotate: 360,
      borderRadius: "100%",
      ease: "back.inOut",
    });
    timeline.to("#box", {
      x: 500,
      scale: 1.5,
      rotate: -360,
      duration: 2,
      borderRadius: 8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div
        id="box"
        className="w-20 h-20 bg-red-600 flex items-center justify-center rounded-lg"
      >
        77
      </div>

      <button
        className="block mx-auto  bg-amber-800 text-white p-5"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Pause
      </button>
    </>
  );
};

export default Apple;
