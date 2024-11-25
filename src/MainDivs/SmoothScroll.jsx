import { useEffect, useRef } from 'preact/hooks';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const locoScrollInstance = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      locoScrollInstance.current = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        multiplier: 0.5,
        inertia: 0.2,
      });
    }

    return () => {
      if (locoScrollInstance.current) {
        locoScrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollContainerRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
