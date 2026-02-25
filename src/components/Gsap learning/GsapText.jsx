import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function GsapText() {
  useGSAP(() => {
    gsap.to("#gsap-text", {
      text: "Hello World",
      duration: 1,
      ease: "power2.inOut",
    });
  }, {});
  return (
    <div className="bg-neutral-800 rounded-lg p-6 text-white max-w-2xl w-full">
      <h2
        id="gsap-text"
        className="text-2xl font-bold mb-4  opacity-0 translate-y-10"
      >
        GsapText
      </h2>
      <p
        id="gsap-text-p"
        className="text-sm text-neutral-300 opacity-0 translate-y-10"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
    </div>
  );
}

export default GsapText;
