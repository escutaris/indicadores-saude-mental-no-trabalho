
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { indicators } from "@/data/indicators/index";

const CountUp: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1100;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { value: indicators.length, label: "indicadores" },
  { value: indicators.filter(i => i.category === "Reativo").length, label: "reativos" },
  { value: indicators.filter(i => i.category === "Proativo").length, label: "proativos" },
];

const HeroBanner: React.FC = () => (
  <div className="relative overflow-hidden bg-escutarisPrimary text-white">
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-dots)" />
    </svg>

    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-3 gap-4 sm:gap-12 text-center divide-x divide-white/20">
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair leading-none mb-2 tabular-nums">
              <CountUp target={value} />
            </div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/55">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroBanner;
