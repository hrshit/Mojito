import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function GsapFrom() {
  useGSAP(() => {
    gsap.from("#box-from", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="">
      <h2>gsap.from()</h2>
      <div
        id="box-from"
        className="w-[70px] h-[70px] bg-amber-500 rounded-lg shrink-0"
      />
    </div>
  );
}

export default GsapFrom;
