"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const legacyStats = [
  { value: 14, suffix: "+", label: "Years of Excellence" },
  { value: 6, suffix: "+", label: "Worldwide Branches" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 1000, suffix: "+", label: "Delighted Clients" },
];

export default function OurLegacy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".legacy-stat-number");

      const animateCounters = () => {
        counters.forEach((counter) => {
          const target = Number(counter.dataset.target);

          gsap.killTweensOf(counter);
          gsap.set(counter, { textContent: 0 });

          gsap.to(counter, {
            textContent: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: () => {
              counter.textContent = Math.round(Number(counter.textContent));
            },
          });
        });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        onEnter: animateCounters,
        onEnterBack: animateCounters,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="jg-legacy"
      id="legacy"
      ref={sectionRef}
      aria-labelledby="legacy-title"
    >
      <div className="jg-legacy-inner">
        <div className="jg-legacy-heading">
          <span className="jg-legacy-eyebrow">OUR LEGACY</span>

          <h2 id="legacy-title" className="jg-legacy-title">
            A Legacy of Growth,
            <span>Built on Trust.</span>
          </h2>

          <p className="jg-legacy-subtitle">
            Creating opportunities. Building landmarks. Growing together.
          </p>
        </div>

        <div className="jg-legacy-stats">
          {legacyStats.map((stat) => (
            <div className="jg-legacy-stat" key={stat.label}>
              <div className="jg-legacy-number">
                <span className="legacy-stat-number" data-target={stat.value}>
                  {stat.value}
                </span>
                <span>{stat.suffix}</span>
              </div>

              <p className="jg-legacy-label">{stat.label}</p>
              <span className="jg-legacy-stat-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
