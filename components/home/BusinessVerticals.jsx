"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const verticals = [
  {
    title: "Residential",
    description:
      "Thoughtfully planned spaces designed for modern living and lasting value.",
    number: "01",
    image: "/images/business-verticals/warehouse.jpg",
  },
  {
    title: "Commercial",
    description:
      "Purpose-built spaces that support ambitious businesses and future growth.",
    number: "02",
    image: "/images/business-verticals/warehouse.jpg",
  },
  {
    title: "Plotting",
    description:
      "Strategically located land opportunities with potential for tomorrow.",
    number: "03",
    image: "/images/business-verticals/warehouse.jpg",
  },
  {
    title: "Industrial",
    description:
      "Efficient industrial developments designed around operational needs.",
    number: "04",
    image: "/images/business-verticals/warehouse.jpg",
  },
  {
    title: "Warehousing",
    description:
      "Practical, scalable spaces for storage, logistics and distribution.",
    number: "05",
    image: "/images/business-verticals/warehouse.jpg",
  },
];

const SLIDE_DURATION = 5500;
const SWIPE_THRESHOLD = 50;

export default function BusinessVerticals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  const changeSlide = useCallback((direction) => {
    setActiveIndex((current) => {
      return (current + direction + verticals.length) % verticals.length;
    });
  }, []);

  // Automatically rotate slides; restart the timer after manual navigation.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % verticals.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    startX.current = event.clientX;
    isDragging.current = false;
  };

  const handlePointerMove = (event) => {
    if (startX.current === null) return;

    if (Math.abs(event.clientX - startX.current) > 8) {
      isDragging.current = true;
    }
  };

  const handlePointerUp = (event) => {
    if (startX.current === null) return;

    const distance = event.clientX - startX.current;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      changeSlide(distance < 0 ? 1 : -1);
    }

    startX.current = null;

    // Prevent a drag from accidentally activating the Explore More link.
    if (isDragging.current) {
      window.setTimeout(() => {
        isDragging.current = false;
      }, 0);
    }
  };

  const handlePointerCancel = () => {
    startX.current = null;
    isDragging.current = false;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      changeSlide(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeSlide(-1);
    }
  };

  return (
    <section className="jg-verticals" aria-labelledby="jg-verticals-title">
      <div
        className="jg-verticals-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Jaywant Group business verticals"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <header className="jg-verticals-heading">
          <span className="jg-verticals-eyebrow">BUSINESS VERTICALS</span>

          <h2 id="jg-verticals-title" className="jg-verticals-main-title">
            Work That Speaks
            <span> for Itself.</span>
          </h2>
        </header>
        {verticals.map((vertical, index) => (
          <article
            key={vertical.title}
            className={`jg-verticals-slide ${
              index === activeIndex ? "is-active" : ""
            }`}
            aria-hidden={index !== activeIndex}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${verticals.length}: ${
              vertical.title
            }`}
            style={{
              backgroundImage: `url("${vertical.image}")`,
            }}
          >
            <div className="jg-verticals-image-overlay" />

            <div className="jg-verticals-slide-inner">
              <div className="jg-verticals-copy">
                <span className="jg-verticals-kicker">
                  JAYWANT GROUP
                  <span className="jg-verticals-kicker-line" />
                  {vertical.number} / 05
                </span>

                <h3 className="jg-verticals-category">{vertical.title}</h3>

                <p className="jg-verticals-description">
                  {vertical.description}
                </p>

                <Link
                  href="/projects"
                  className="jg-verticals-cta"
                  tabIndex={index === activeIndex ? 0 : -1}
                  aria-label={`Explore ${vertical.title} projects`}
                  onClick={(event) => {
                    if (isDragging.current) {
                      event.preventDefault();
                    }
                  }}
                >
                  <span>Explore More</span>
                  <span className="jg-verticals-cta-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
