import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Ball = () => {
  useGSAP(() => {
    gsap.to(".div", {
      y: 0,
      rotate: 360,
      borderRadius: "100%",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  });

  return (
    <>
      <div className="container justify-center flex flex-wrap gap-2">
        <div className="div w-[50px] h-[50px] bg-amber-300">fg</div>
        <div className="div w-[50px] h-[50px] bg-amber-400">fg</div>
        <div className="div w-[50px] h-[50px] bg-amber-500">fg</div>
        <div className="div w-[50px] h-[50px] bg-amber-600">vb</div>
        <div className="div w-[50px] h-[50px] bg-amber-700">vb</div>
        <div className="div w-[50px] h-[50px] bg-amber-800">vb</div>
        <div className="div w-[50px] h-[50px] bg-amber-900">vb</div>
      </div>
    </>
  );
};

export default Ball;
