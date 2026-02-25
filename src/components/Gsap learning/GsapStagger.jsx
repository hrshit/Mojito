import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function GsapStagger() {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      duration: 1,
      rotate: 360,
      repeat: -1,
      yoyo: true,
      borderRadius: "100%",
      rounded: "100%",
      ease: "power2.inOut",
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        from: "center",
        axis: "y",
        ease: "circ.inOut",
      },
    });
  }, []);

  return (
    <div className="bg-neutral-800 rounded-lg p-6 text-white max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">GsapStagger</h2>
      <p className="mb-4 leading-relaxed text-neutral-300">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>
      <p className="mb-4 leading-relaxed text-neutral-300">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>
      <p className="leading-relaxed text-neutral-300">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Stagger/gsap.to/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Gsap Stagger feature.
        </a>
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-200" />
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-300" />
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-400" />
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-500" />
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-600" />
          <div className="w-20 h-20 rounded-lg stagger-box bg-indigo-700" />
        </div>
      </div>
    </div>
  );
}

export default GsapStagger;
