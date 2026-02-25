import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function GsapScrollTrigger() {
  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach((box, index) => {
        gsap.to(box, {
          x: 100 * (boxes.indexOf(box) + 5),
          rotate: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 10%",
            scrub: true,
            // toggleActions: "play none none reverse",
          },
          ease: "power2.inOut",
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div className="bg-neutral-800 rounded-lg p-6 text-white max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-4">GsapScrollTrigger</h2>
      <p className="mb-4 leading-relaxed text-neutral-300">
        ScrollTrigger lets you run GSAP animations when the user scrolls. You
        define a trigger element and scroll positions (e.g. when it enters the
        viewport), and the animation plays or reverses based on scroll.
      </p>
      <p className="mb-6 leading-relaxed text-neutral-300">
        Scroll down to see the box below animate in when it enters the viewport.
        Scroll back up and it will reverse.
      </p>

      {/* Spacer so there is room to scroll */}
      <div className="h-96" />
      <div className="h-96" />

      <div className="flex justify-center" ref={scrollRef}>
        <div
          id="scroll-trigger-box"
          className="w-24 h-24 rounded-xl bg-cyan-500 shrink-0"
        />
        <div
          id="scroll-trigger-box"
          className="w-24 h-24 rounded-xl bg-cyan-100 shrink-0"
        />
      </div>

      <div className="h-96" />
    </div>
  );
}

export default GsapScrollTrigger;
