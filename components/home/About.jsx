"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import "./About.css";

const aboutImages = [
  {
    src: "/images/about/businesshub.webp",
    alt: "Modern commercial building",
    label: "Commercial Spaces",
  },
  {
    src: "/images/about/farmhouse-2.webp",
    alt: "Open land and residential development",
    label: "Land Development",
  },
  {
    src: "/images/about/ware-house.webp",
    alt: "Industrial warehouse building",
    label: "Industrial Infrastructure",
  },
  // {
  //   src: "/images/about/jaywant-building.png",
  //   alt: "Jaywant Group industrial building",
  //   label: "Jaywant Group",
  // },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="jg-about" id="about">
      <div className="jg-about-inner">
        <div className="jg-about-visual">
          <div className="jg-about-image-frame">
            {aboutImages.map((item, index) => (
              <div
                className={`jg-about-slide ${
                  activeIndex === index ? "is-active" : ""
                }`}
                key={item.src}
                aria-hidden={activeIndex !== index}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 991px) 100vw, 55vw"
                  className="jg-about-image"
                  priority={index === 0}
                />
              </div>
            ))}

            <div className="jg-about-image-caption">
              <span className="jg-about-caption-dot" />
              <span>{aboutImages[activeIndex].label}</span>
              <span className="jg-about-counter">
                0{activeIndex + 1} / 0{aboutImages.length}
              </span>
            </div>
          </div>
        </div>

        <div className="jg-about-panel">
          <div className="jg-about-copy">
            <span className="jg-about-eyebrow">
              <span className="jg-about-eyebrow-line" />
              ABOUT JAYWANT GROUP
            </span>

            <h2 className="jg-about-title">
              Constructing a
              <br />
              <span>Prosperous Future.</span>
            </h2>

            {/* <p className="jg-about-intro">
              Growth, guided by vision. Progress, built on trust.
            </p> */}

            <div className="jg-about-divider" />

            <p className="jg-about-description">
              Ever since its inception in 2007, Jaywant Group has flourished
              under the leadership of its Chairman, Mr. Dinesh C. Rathod.
              Headquartered in Pune, the group focuses on industrial,
              residential and contractual projects.
            </p>

            <p className="jg-about-description jg-about-secondary">
              Our commitment extends to workforce training, environmental
              awareness, recycling construction waste and quality assurance
              across our work.
            </p>

            <Link href="/about-us" className="jg-about-link">
              <span>Discover Our Story</span>
              <span className="jg-about-link-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="jg-about-pagination" aria-label="About image slides">
          {aboutImages.map((item, index) => (
            <button
              type="button"
              key={item.src}
              className={`jg-about-dot ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}: ${item.label}`}
              aria-pressed={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
