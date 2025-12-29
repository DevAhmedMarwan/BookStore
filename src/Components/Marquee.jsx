import React from "react";
import useDarkModeToggle from "@/Store/DarkModeToggle";
const Marquee = () => {
  const isDark = useDarkModeToggle((state) => state.isDark());
  return (
    <div>
      <div
        className={`w-[1220px] overflow-hidden rounded-sm !my-2 !py-0.5 cursor-pointer ${
          isDark ? " bg-white/20 text-white" : "bg-black/10 text-black"
        }`}
      >
        <div
          className="flex marquee marquee-hover-stop"
          style={{ animation: "marquee 15s linear infinite" }}
        >
          <span className="text-xl font-bold mx-4">
            🔥 أهلاً بيك في موقعنا — عروض مستمرة 🔥
          </span>
          <span className="text-xl font-bold mx-4">
            🔥 أهلاً بيك في موقعنا — عروض مستمرة 🔥
          </span>
          <span className="text-xl font-bold mx-4">
            🔥 أهلاً بيك في موقعنا — عروض مستمرة 🔥
          </span>
          <span className="text-xl font-bold mx-4">
            🔥 أهلاً بيك في موقعنا — عروض مستمرة 🔥
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
