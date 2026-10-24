"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "/images/testimonial/jaywant-testimonial.mp4";
const THUMBNAIL_URL = "/images/testimonial/testimonial-thumbnail.jpg";

const testimonials = [
  {
    description:
      "Recently invested money in property through Jaywant Group. It was a fantastic experience with the ever-enjoyable Mr. Dinesh Rathod. We get good monthly income through industrial shed rent. We have good communication with firm representatives. I highly recommend people to invest money through Jaywant Group.",
    name: "Amatulla Dahodwala",
    project: "Pune",
  },
  {
    description:
      "It was an absolutely delightful experience working with Mr. Dinesh Rathod. I got my property and warehouse built by Jaywant Civil Works. They delivered quality construction at a reasonable cost.",
    name: "AKIL",
    project: "Pune",
  },
  {
    description:
      "I am Suresh Patel and have a small manufacturing unit in Pune. For expansion, we purchased land from Dineshji Rathod (Jaywant Group). Doing business was a great experience built on faith, trust, and clarification, which are the reputation of real businesspeople. Thank you. God bless you all.",
    name: "Suresh Patel",
    project: "Om Decor",
  },
  {
    description:
      'The experience of purchasing property in the "Gaud Dhara" project, being executed by Jaywant Group, has been a rather pleasing one. Right from the day of enquiry till the execution of documents, information or queries related to the project, documentation, or payment were promptly answered. In short, ease of doing business, integrity, and clarity were all experienced while buying my dream property.',
    name: "Ali Attarwala",
    project: "Dubai",
  },
  {
    description:
      "Excellent experience with Jaywant Group. I really appreciate the way they addressed our needs and explained the finer details about the property we wanted.",
    name: "S. Mala",
    project: "Kuwait",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const videoRef = useRef(null);
  const touchStartX = useRef(0);

  //   const activeTestimonial = testimonials[activeIndex];

  const showSlide = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  // Automatically change testimonial every 6 seconds.
  useEffect(() => {
    if (isPaused || videoOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, videoOpen]);

  // Play the video only after the popup opens.
  useEffect(() => {
    if (videoOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoOpen]);

  // Close popup with Escape.
  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeVideo();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoOpen(false);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const difference = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      showSlide(activeIndex + (difference > 0 ? 1 : -1));
    }
  };

  return (
    <>
      <section
        className="jg-testimonials"
        id="testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="jg-testimonials-inner">
          <header className="jg-testimonials-heading">
            <span className="jg-testimonials-eyebrow">TESTIMONIALS</span>

            <h2 className="jg-testimonials-title">
              Voices That <span>Inspire Us</span>
            </h2>
          </header>

          <div
            className="jg-testimonials-carousel"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Customer testimonials"
          >
            <div className="jg-testimonials-viewport">
              <div
                className="jg-testimonials-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {testimonials.map((item, index) => (
                  <article
                    className="jg-testimonials-slide"
                    key={item.name + index}
                    aria-hidden={activeIndex !== index}
                  >
                    <div className="jg-testimonials-video-wrap">
                      <button
                        type="button"
                        className="jg-testimonials-thumbnail"
                        onClick={() => setVideoOpen(true)}
                        aria-label="Watch testimonial video"
                        tabIndex={activeIndex === index ? 0 : -1}
                      >
                        <img
                          src={THUMBNAIL_URL}
                          alt="Jaywant Group video thumbnail"
                          className="jg-testimonials-thumbnail-image"
                        />

                        <span className="jg-testimonials-watch">
                          Watch Video
                          <span className="jg-testimonials-play-icon">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <circle
                                cx="12"
                                cy="12"
                                r="9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M10 8.5L15 12L10 15.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>

                    <div className="jg-testimonials-content">
                      <p className="jg-testimonials-description">
                        {item.description}
                      </p>

                      <div className="jg-testimonials-divider" />

                      <div className="jg-testimonials-person">
                        <span className="jg-testimonials-person-name">
                          {item.name}
                        </span>
                        <span className="jg-testimonials-person-project">
                          ({item.project})
                        </span>
                      </div>

                      <div className="jg-testimonials-navigation">
                        <div className="jg-testimonials-arrows">
                          <button
                            type="button"
                            className="jg-testimonials-arrow"
                            onClick={() => showSlide(activeIndex - 1)}
                            aria-label="Previous testimonial"
                          >
                            &#8592;
                          </button>

                          <button
                            type="button"
                            className="jg-testimonials-arrow"
                            onClick={() => showSlide(activeIndex + 1)}
                            aria-label="Next testimonial"
                          >
                            &#8594;
                          </button>
                        </div>

                        <span className="jg-testimonials-counter">
                          {String(activeIndex + 1).padStart(2, "0")}
                          <span>
                            {" "}
                            / {String(testimonials.length).padStart(2, "0")}
                          </span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="jg-testimonials-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial video"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
        >
          <button
            type="button"
            className="jg-testimonials-modal-close"
            onClick={closeVideo}
            aria-label="Close video"
          >
            &#10005;
          </button>

          <div className="jg-testimonials-modal-content">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              className="jg-testimonials-modal-video"
              controls
              autoPlay
              playsInline
              preload="auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
