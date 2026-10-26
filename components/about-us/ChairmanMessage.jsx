"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const statistics = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Branches Worldwide" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 1000, suffix: "+", label: "Delighted Clients" },
];

function AnimatedStat({ value, suffix, label, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    let frameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [active, value]);

  return (
    <div className="jg-chairman-stat">
      <div className="jg-chairman-stat-number">
        <span>{count.toLocaleString("en-IN")}</span>
        <span>{suffix}</span>
      </div>
      <p>{label}</p>
      <span className="jg-chairman-stat-rule" />
    </div>
  );
}

export default function ChairmanMessage() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`jg-chairman ${hasEntered ? "jg-chairman-visible" : ""}`}
      aria-labelledby="jg-chairman-title"
    >
      <div className="jg-chairman-backdrop" aria-hidden="true" />
      <div className="jg-chairman-inner">
        <div className="jg-chairman-content">
          <span className="jg-chairman-eyebrow">
            <span />
            WORDS FROM THE CHAIRMAN
          </span>

          <h2 id="jg-chairman-title" className="jg-chairman-title">
            Creating Landmarks
            <br />
            For A Better <span>Tomorrow.</span>
          </h2>

          <div className="jg-chairman-divider" />

          <blockquote className="jg-chairman-quote">
            At Jaywant Group, we take great pride in the work we do and the
            projects we deliver. They are a testimony to what can be achieved
            when brilliant minds come together with a vision to make a
            difference in the world we live. Keen attention to detail, superior
            quality, maximization of resources and elegant aesthetics are the
            highest standards we demand in our industrial, residential and
            commercial projects. The entire process from design to execution,
            delivery and renting is designed to make our clients’ experience
            smooth, satisfying and unmatched.
          </blockquote>

          <div className="jg-chairman-signoff">
            <div>
              <p className="jg-chairman-name">Mr. Dinesh C. Rathod</p>
              <p className="jg-chairman-role">Founder &amp; Chairman</p>
            </div>

            <Image
              src="/images/about-us/dinesh-sir-sign-2.gif"
              alt="Dinesh C. Rathod's signature"
              width={180}
              height={90}
              unoptimized
              className="jg-chairman-signature"
            />
          </div>
        </div>

        <div className="jg-chairman-portrait-wrap">
          <div className="jg-chairman-portrait-frame">
            <Image
              src="/images/about-us/dinesh-sir.jpeg"
              alt="Mr. Dinesh C. Rathod, Founder and Chairman of Jaywant Group"
              fill
              priority={false}
              sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 42vw"
              className="jg-chairman-portrait"
            />
          </div>

          <div className="jg-chairman-portrait-caption">
            <span className="jg-chairman-caption-line" />
            <span>Leadership. Trust. Progress.</span>
          </div>
          <span className="jg-chairman-image-accent" />
        </div>
      </div>

      <div className="jg-chairman-stats">
        {statistics.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} active={hasEntered} />
        ))}
      </div>
    </section>
  );
}
