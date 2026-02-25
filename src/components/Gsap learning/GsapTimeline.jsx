import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function GsapTimeline() {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#timeline-box", {
      x: 250,
      duration: 1,
      ease: "power2.inOut",
    });

    timeline.to("#timeline-box", {
      y: 250,
      duration: 1,
      scale: 2,
      borderRadius: "50%",
      ease: "power2.inOut",
    });
    timeline.to("#timeline-box", {
      y: -50,
      duration: 1,
      scale: 1,
      borderRadius: "50%",
      ease: "power2.inOut",
    });
  });

  return (
    <div className="bg-neutral-800 rounded-lg p-6 text-white max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">GsapTimeline</h2>
      <p className="mb-4 leading-relaxed">
        The <span className="text-amber-400 font-mono">gsap.timeline()</span>{" "}
        method is used to create a timeline instance that can be used to manage
        multiple animations.
      </p>
      <p className="leading-relaxed">
        The <span className="text-amber-400 font-mono">gsap.timeline()</span>{" "}
        method is similar to the{" "}
        <span className="text-amber-400 font-mono">gsap.to()</span>,{" "}
        <span className="text-amber-400 font-mono">gsap.from()</span>, and{" "}
        <span className="text-amber-400 font-mono">gsap.fromTo()</span> methods,
        but the difference is that the{" "}
        <span className="text-amber-400 font-mono">gsap.timeline()</span> method
        is used to create a timeline instance that can be used to manage
        multiple animations, while the{" "}
        <span className="text-amber-400 font-mono">gsap.to()</span>,{" "}
        <span className="text-amber-400 font-mono">gsap.from()</span>, and{" "}
        <span className="text-amber-400 font-mono">gsap.fromTo()</span> methods
        are used to animate elements from their current state to a new state,
        from a new state to their current state, and from a new state to a new
        state, respectively.
      </p>

      <div>
        <div
          id="timeline-box"
          className="w-[70px] h-[70px] bg-orange-500 rounded-xl mt-4 shrink-0"
        />
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          type="button"
          className="mt-4 text-base cursor-pointer font-semibold font-['Inter'] px-4 py-2 rounded-lg bg-amber-500 text-neutral-900 hover:bg-amber-400 transition-colors"
        >
          Play timeline
        </button>
      </div>
    </div>
  );
}

export default GsapTimeline;
