"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ChairmanMessage from "@/components/about-us/ChairmanMessage";

const overviewImages = [
  {
    src: "/images/about/businesshub.webp",
    alt: "Modern commercial development",
    label: "Commercial Developments",
  },
  {
    src: "/images/about/ware-house.webp",
    alt: "Industrial warehouse infrastructure",
    label: "Industrial Infrastructure",
  },
  {
    src: "/images/legacy/legacy-warehouse.jpg",
    alt: "Jaywant Group industrial development",
    label: "Built for Growth",
  },
];

const visionImages = [
  {
    src: "/images/about/farmhouse-2.webp",
    alt: "Land development and open green spaces",
    label: "A Better Tomorrow",
  },
  {
    src: "/images/about/businesshub.webp",
    alt: "Contemporary commercial architecture",
    label: "Spaces That Inspire",
  },
  {
    src: "/images/about/ware-house.webp",
    alt: "Modern industrial infrastructure",
    label: "Sustainable Progress",
  },
];

function AboutImageCarousel({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  const showSlide = (direction) => {
    setActiveIndex(
      (current) => (current + direction + images.length) % images.length
    );
  };

  return (
    <div
      className="jg-company-carousel"
      aria-label={name}
      onMouseEnter={() => {}}
    >
      <div className="jg-company-carousel-frame">
        {images.map((image, index) => (
          <div
            className={`jg-company-carousel-slide ${
              activeIndex === index ? "is-active" : ""
            }`}
            key={image.src}
            aria-hidden={activeIndex !== index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
              className="jg-company-carousel-image"
              priority={index === 0}
            />
          </div>
        ))}

        <div className="jg-company-carousel-shade" />

        <div className="jg-company-carousel-caption">
          <span className="jg-company-carousel-caption-line" />
          <span>{images[activeIndex].label}</span>
        </div>

        <div className="jg-company-carousel-controls">
          <span className="jg-company-carousel-count">
            0{activeIndex + 1}
            <span> / 0{images.length}</span>
          </span>

          <button
            type="button"
            onClick={() => showSlide(-1)}
            aria-label={`Previous ${name} image`}
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={() => showSlide(1)}
            aria-label={`Next ${name} image`}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AboutUsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-company-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-us-page">
      <section className="about-us-hero">
        <div className="about-us-hero-overlay" />

        <div className="about-us-hero-inner jg-container">
          <div className="about-us-hero-content">
            <span className="about-us-hero-eyebrow">
              The Jaywant Group Story
            </span>

            <h1 className="about-us-hero-title">About Us</h1>

            <p className="about-us-hero-subtitle">
              Building Trust. Creating Possibilities.
            </p>

            <nav className="about-us-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>
          </div>
        </div>

        <div className="about-us-hero-accent" />
      </section>
      {/* About Jaywant Group */}
      <section className="jg-company-story" id="company-story">
        <div className="jg-company-story-inner">
          <header className="jg-company-story-heading" data-company-reveal>
            <span className="jg-company-eyebrow">
              <span className="jg-company-eyebrow-mark" />
              ABOUT JAYWANT GROUP
            </span>

            <h2 className="jg-company-main-title">
              A Vast and Vibrant <span>Portfolio</span>
            </h2>

            <p className="jg-company-heading-description">
              Building enduring spaces, creating opportunities, and growing
              together through trust, quality, and a shared vision.
            </p>
          </header>

          <div className="jg-company-grid">
            {/* Left column */}
            <div className="jg-company-copy-column">
              <article className="jg-company-overview" data-company-reveal>
                <p className="jg-company-kicker">GROW WITH US</p>

                <h3>A Legacy of Trust. A Future of Possibilities.</h3>

                <p>
                  Jaywant Group is a Pune-headquartered business group operating
                  across industrial, residential, and construction sectors. With
                  a focus on quality, responsible development, and lasting
                  relationships, the group continues to create spaces that
                  support businesses and communities.
                </p>

                <p>
                  Guided by the leadership of Mr. Dinesh C. Rathod, our approach
                  brings together practical experience, thoughtful planning, and
                  a commitment to delivering value.
                </p>
              </article>

              <article className="jg-company-principle" data-company-reveal>
                <div className="jg-company-principle-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path
                      d="M4 24S11 11 24 11s20 13 20 13-7 13-20 13S4 24 4 24Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="24" cy="24" r="2" fill="currentColor" />
                  </svg>
                </div>

                <div className="jg-company-principle-content">
                  <h3>Our Vision</h3>
                  <p>
                    To become a trusted force in industrial and real estate
                    development by creating enduring spaces, upholding high
                    standards, and contributing to sustainable growth for
                    customers, partners, and communities.
                  </p>
                </div>
              </article>

              <article className="jg-company-principle" data-company-reveal>
                <div className="jg-company-principle-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle
                      cx="20"
                      cy="26"
                      r="13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="20"
                      cy="26"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M22 24 39 7m-9 0h9v9M24 32l8 8m-4-8 4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="jg-company-principle-content">
                  <h3>Our Mission</h3>
                  <p>
                    To deliver dependable construction and development solutions
                    through quality workmanship, integrity, innovation, and
                    responsible execution—creating long-term value for customers
                    and the communities we serve.
                  </p>
                </div>
              </article>

              <article
                className="jg-company-principle jg-company-leading"
                data-company-reveal
              >
                <div className="jg-company-principle-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 3.5 30.1 16l13.8 2-10 9.8 2.4 13.8L24 35.1l-12.3 6.5 2.4-13.8-10-9.8 13.8-2L24 3.5Z" />
                  </svg>
                </div>

                <div className="jg-company-principle-content">
                  <h3>Leading the Way</h3>
                  <p>
                    What started as a humble beginning in the year 1997 for
                    Dinesh C. Rathod took shape as Jaywant Group in 2007. Over
                    the years, he continues to grow in his thoughts,
                    achievements and inspirations. Today, the group has become
                    synonymous with quality construction and high returns on
                    investments.
                  </p>
                </div>
              </article>

              <div className="jg-company-cta" data-company-reveal>
                <Link href="/projects" className="jg-company-link">
                  <span>Explore Our Projects</span>
                  <span aria-hidden="true">&#8599;</span>
                </Link>
              </div>
            </div>

            {/* Right column: two independent carousels */}
            <div className="jg-company-visual-column">
              <div data-company-reveal>
                <AboutImageCarousel
                  images={overviewImages}
                  name="Company overview"
                />
              </div>

              <div className="jg-company-vision-visual" data-company-reveal>
                <AboutImageCarousel
                  images={visionImages}
                  name="Vision and future"
                />
              </div>

              <div className="jg-company-visual-note">
                <span className="jg-company-visual-note-line" />
                <p>Building today. Shaping tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
