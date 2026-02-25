import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function GsapTo() {
  useGSAP(() => {
    gsap.to("#box-to", {
      x: 250,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotate: 360,
      ease: "elastic",
    });
  });
  return (
    <div className="">
      <h2>gsap.to()</h2>
      <div
        id="box-to"
        className="w-[70px] h-[70px] bg-blue-500 rounded-lg shrink-0"
      />
    </div>
  );
}

export default GsapTo;
