import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function GsapFromTo() {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "bounce.inOut",
      }
    );
  });
  return (
    <div className="">
      <h2>gsap.fromTo()</h2>
      <div id="red-box" className="w-[70px] h-[70px] bg-red-500 shrink-0" />
    </div>
  );
}

export default GsapFromTo;
