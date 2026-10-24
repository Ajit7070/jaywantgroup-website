"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    date: "12 June 2026",
    category: "Industrial Real Estate",
    title:
      "How to Contact Someone to Rent an Industrial Shed in Pune? A Complete Guide for Businesses and Investors",
    excerpt:
      "Pune has emerged as one of India's fastest-growing industrial and manufacturing hubs, attracting businesses from sectors such as automotive and e-commerce.",
    image:
      "/images/blogs/How_to_Contact_Someone_to_Rent_an_Industrial_Shed_in_Pune.png",
    alt: "Industrial shed available for businesses in Pune",
  },
  {
    id: 2,
    date: "12 June 2026",
    category: "Warehouse & Logistics",
    title:
      "Warehouse Shed in Pune Maharashtra at Best Price – Complete Guide for Businesses, Logistics Companies & Investors",
    excerpt:
      "Pune has emerged as one of India's fastest-growing industrial, logistics, and warehousing destinations.",
    image: "/images/blogs/Warehouse_Shed_In_Pune_Maharashtra_At_Best_Price.png",
    alt: "Warehouse shed in Pune, Maharashtra",
  },
  {
    id: 3,
    date: "12 June 2026",
    category: "Industrial Infrastructure",
    title:
      "Top Industrial Shed Manufacturers in Pune: A Complete Guide for Businesses, Warehouses, and Manufacturing Facilities",
    excerpt:
      "Pune has established itself as one of India's most important industrial and manufacturing destinations.",
    image: "/images/blogs/Top_Industrial_Shed_Manufacturers_in_Pune.png",
    alt: "Industrial shed and manufacturing facility",
  },
  {
    id: 4,
    date: "12 June 2026",
    category: "Industrial Construction",
    title:
      "Prefabricated & PEB Industrial Shed Construction Company: The Smart Choice for Industrial Shed Development in Pune",
    excerpt:
      "Discover how prefabricated and pre-engineered buildings can support industrial development in Pune.",
    image:
      "/images/blogs/Prefabricated_PEB_Industrial_Shed_Construction_Company_Pune.png",
    alt: "Prefabricated and PEB industrial shed construction in Pune",
  },
  {
    id: 5,
    date: "12 June 2026",
    category: "Agriculture & Infrastructure",
    title:
      "Cattle Farming Shed Service Provider from Pune: Modern Livestock Infrastructure for Sustainable Dairy and Cattle Farming",
    excerpt:
      "The success of a dairy farm, cattle farm, or livestock operation depends not only on the quality of animals but also on suitable infrastructure.",
    image: "/images/blogs/Cattle_Farming_Shed_Service_Provider_from_Pune.png",
    alt: "Modern cattle farming shed and livestock infrastructure",
  },
  {
    id: 6,
    date: "18 April 2026",
    category: "Warehouse & Logistics",
    title: "Warehouse for Rent in Chakan Pune & Prime Industrial Locations",
    excerpt:
      "Explore warehouse options in Chakan, Bhosari, Ranjangaon, Talegaon, Wagholi, Ambegaon, Vadgaon Budruk, Hinjewadi, and Warje.",
    image: "/images/blogs/Warehouse_for_Rent_in_Chakan_Pune.png",
    alt: "Warehouse facility for rent in Chakan, Pune",
  },
];

export default function FeaturedBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  //   const [visibleCount, setVisibleCount] = useState(3);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, blogs.length - visibleCount);

  const showSlide = (index) => {
    setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Adjust the number of visible cards for each screen size.
  //   useEffect(() => {
  //     const updateVisibleCount = () => {
  //       const count =
  //         window.innerWidth <= 575 ? 1 : window.innerWidth <= 991 ? 2 : 3;

  //       setVisibleCount(count);
  //       setActiveIndex((current) => Math.min(current, blogs.length - count));
  //     };

  //     updateVisibleCount();
  //     window.addEventListener("resize", updateVisibleCount);

  //     return () => window.removeEventListener("resize", updateVisibleCount);
  //   }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const count = window.innerWidth <= 575 ? 1 : 2;

      setVisibleCount(count);
      setActiveIndex((current) =>
        Math.min(current, Math.max(0, blogs.length - count))
      );
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Automatically move to the next group of blog cards.
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section className="jg-blogs" id="blogs">
      <div className="jg-blogs-inner">
        <header className="jg-blogs-heading">
          <span className="jg-blogs-eyebrow">
            <span className="jg-blogs-eyebrow-mark" aria-hidden="true">
              ✦
            </span>
            BLOGS
          </span>

          <h2 className="jg-blogs-title">
            The Insightful <span>Corner</span>
          </h2>

          <p className="jg-blogs-subtitle">
            Ideas, insights, and perspectives on property, business, and growth.
          </p>
        </header>

        <div
          className="jg-blogs-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-label="Latest blogs"
        >
          <div className="jg-blogs-viewport">
            <div
              className="jg-blogs-track"
              style={{
                width: `${(blogs.length / visibleCount) * 100}%`,
                transform: `translateX(-${
                  activeIndex * (100 / blogs.length)
                }%)`,
              }}
            >
              {blogs.map((blog) => (
                <article className="jg-blog-card" key={blog.id}>
                  <Link
                    href="/blog"
                    className="jg-blog-image-link"
                    aria-label={`Read ${blog.title}`}
                  >
                    <div className="jg-blog-image-wrap">
                      {blog.image ? (
                        <Image
                          src={blog.image}
                          alt={blog.alt}
                          fill
                          //   sizes="(max-width: 575px) 90vw, (max-width: 991px) 45vw, 30vw"
                          sizes="(max-width: 575px) 90vw, (max-width: 991px) 45vw, 48vw"
                          className="jg-blog-image"
                        />
                      ) : (
                        <div className="jg-blog-placeholder">
                          <span>JAYWANT GROUP</span>
                          <strong>Insights &amp; Ideas</strong>
                          <i>PROPERTY · BUSINESS · GROWTH</i>
                        </div>
                      )}

                      <span className="jg-blog-image-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                  </Link>

                  <div className="jg-blog-content">
                    <div className="jg-blog-meta">
                      <span className="jg-blog-date">{blog.date}</span>
                      <span className="jg-blog-category">{blog.category}</span>
                    </div>

                    <h3 className="jg-blog-title">
                      <Link href="/blog">{blog.title}</Link>
                    </h3>

                    <p className="jg-blog-excerpt">{blog.excerpt}</p>

                    <Link href="/blog" className="jg-blog-read-link">
                      Read Article <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="jg-blogs-controls">
            <div className="jg-blogs-pagination" aria-label="Carousel pages">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`jg-blogs-dot ${
                    activeIndex === index ? "is-active" : ""
                  }`}
                  onClick={() => showSlide(index)}
                  aria-label={`Show blog slide ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <div className="jg-blogs-arrows">
              <button
                type="button"
                className="jg-blogs-arrow"
                onClick={() =>
                  showSlide(activeIndex <= 0 ? maxIndex : activeIndex - 1)
                }
                aria-label="Previous blogs"
              >
                ←
              </button>

              <button
                type="button"
                className="jg-blogs-arrow"
                onClick={() =>
                  showSlide(activeIndex >= maxIndex ? 0 : activeIndex + 1)
                }
                aria-label="Next blogs"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="jg-blogs-footer">
          <p>Discover more ideas and insights from Jaywant Group.</p>
          <Link href="/blog" className="jg-blogs-read-more">
            Read More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
