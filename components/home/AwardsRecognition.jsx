"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const awards = [
  {
    id: "sakal-2019",
    year: "2019",
    title: "Sakal Excellence Award",
    image: "/images/awards/award1.png",
    description:
      "Recognition showcased by Jaywant Group. Add the verified award category and citation details here.",
    label: "Excellence",
  },
  {
    id: "economic-time",
    year: "2000",
    title: "The Economic Times — Icons of Excellence",
    image: "/images/awards/award2.png",
    description:
      "Confirm the official award title, award year, and recognition details before publishing.",
    label: "Recognition",
  },
  {
    id: "lokmat-vishwakarma",
    year: "2000",
    title: "Lokmat Vishwakarma",
    image: "/images/awards/lokmat.png",
    label: "Industry Recognition",
    description:
      'Jaywant Group was felicitated with the "Dream Builders of Pune" award, presented by Union Minister for Road Transport and Highways Nitin Gadkari, according to the supplied image.',
  },
  {
    id: "lokmat-group",
    year: "2000",
    title: "Lokmat Vishwakarma — Industry Gathering",
    image: "/images/awards/lokmat-2.png",
    label: "Industry Event",
    description:
      "A gathering of industry professionals associated with the Lokmat Vishwakarma event.",
  },
  {
    id: "economic-times",
    year: "2000",
    title: "Icons of Excellence",
    image: "/images/awards/social_events1.webp",
    label: "Economic Times",
    description:
      "Recognition as Icons of Excellence by The Economic Times, as stated in the supplied event image.",
  },
  {
    id: "economic-times-ceremony",
    year: "2000",
    title: "Icons of Excellence — Award Ceremony",
    image: "/images/awards/social_events2.webp",
    label: "Award Ceremony",
    description:
      "An award presentation associated with the Icons of Excellence recognition.",
  },
];

export default function AwardsRecognition() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showAward = useCallback((index) => {
    setActiveIndex((index + awards.length) % awards.length);
  }, []);

  useEffect(() => {
    if (isPaused || awards.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % awards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="jg-awards" id="awards">
      <div className="jg-awards-container">
        {/* <div className="jg-awards-intro">
          <div className="jg-awards-eyebrow">
            <span className="jg-awards-eyebrow-line" />
            AWARDS &amp; RECOGNITION
          </div>

          <h2 className="jg-awards-heading">
            Celebrating
            <br />
            <span>Excellence.</span>
          </h2>

          <p className="jg-awards-intro-strong">
            Honouring the milestones that define our journey.
          </p>

          <p className="jg-awards-intro-text">
            Every recognition reflects our commitment to quality, thoughtful
            development, and creating lasting value. These milestones celebrate
            the dedication and vision behind the Jaywant Group journey.
          </p>
        </div> */}
        <div className="jg-awards-top-heading">
          <span className="jg-awards-top-eyebrow">
            AWARDS &amp; RECOGNITION
          </span>

          <h2 className="jg-awards-top-title">
            Celebrating <span>Excellence.</span>
          </h2>

          <p className="jg-awards-top-subtitle">
            Honouring the milestones that define our journey.
          </p>
        </div>

        <div className="jg-awards-main">
          <div className="jg-awards-intro">
            <h2 className="jg-awards-heading">Awards</h2>

            <p className="jg-awards-intro-strong">
              Recognition that reflects our commitment to excellence.
            </p>

            <p className="jg-awards-intro-text">
              Every milestone represents our journey toward quality, thoughtful
              development, and lasting value. Explore the recognitions that
              celebrate our achievements.
            </p>
          </div>

          <div
            className="jg-awards-carousel"
            aria-roledescription="carousel"
            aria-label="Awards and recognition"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >
            <div className="jg-awards-viewport">
              <div
                className="jg-awards-track"
                style={{
                  transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
                }}
              >
                {awards.map((award, index) => (
                  <article
                    className="jg-awards-slide"
                    key={award.id}
                    aria-hidden={activeIndex !== index}
                  >
                    <div className="jg-awards-slide-image">
                      <Image
                        src={award.image}
                        alt={award.title}
                        width={900}
                        height={700}
                        className="jg-awards-image"
                        sizes="(max-width: 767px) 90vw, 40vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="jg-awards-slide-details">
                      <span className="jg-awards-slide-label">
                        {award.label}
                      </span>

                      <p className="jg-awards-year">{award.year}</p>

                      <h3 className="jg-awards-slide-title">{award.title}</h3>

                      <span className="jg-awards-detail-line" />

                      <p className="jg-awards-description">
                        {award.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="jg-awards-timeline">
              <div className="jg-awards-timeline-track" />

              {awards.map((award, index) => (
                <button
                  type="button"
                  key={award.id}
                  className={`jg-awards-timeline-item ${
                    activeIndex === index ? "is-active" : ""
                  }`}
                  onClick={() => showAward(index)}
                  aria-pressed={activeIndex === index}
                  aria-label={`Show ${award.title}, ${award.year}`}
                >
                  <span className="jg-awards-timeline-year">{award.year}</span>
                  <span className="jg-awards-timeline-dot" />
                </button>
              ))}
            </div>

            <div className="jg-awards-controls">
              <button
                type="button"
                className="jg-awards-arrow"
                onClick={() => showAward(activeIndex - 1)}
                aria-label="Previous award"
              >
                &#8592;
              </button>

              <button
                type="button"
                className="jg-awards-arrow"
                onClick={() => showAward(activeIndex + 1)}
                aria-label="Next award"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
