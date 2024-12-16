import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      inertia: 0.2,
    });

    return () => locoScroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
