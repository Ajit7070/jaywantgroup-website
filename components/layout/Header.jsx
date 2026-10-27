"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const fullMenuLinks = [
  { label: "Home", href: "/", number: "01" },
  {
    label: "About Us",
    href: "/about-us",
    number: "02",
  },
  {
    label: "Projects",
    href: "/projects",
    number: "03",
  },
  {
    label: "Case Studies",
    href: "#casestudies",
    number: "04",
  },
  {
    label: "Social Events",
    href: "#socialevents",
    number: "05",
  },
  {
    label: "Careers",
    href: "#careers",
    number: "06",
  },
  { label: "Blog", href: "#blogs", number: "07" },
  {
    label: "NRI Corner",
    href: "#nricorner",
    number: "08",
  },
  {
    label: "Contact",
    href: "#contact",
    number: "09",
  },
];

const businessLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Residential", href: "/business-verticals#residential" },
  { label: "Commercial", href: "/business-verticals#commercial" },
  { label: "Plotting", href: "/business-verticals#plotting" },
  { label: "Industrial", href: "/business-verticals#industrial" },
  { label: "Warehousing", href: "/business-verticals#warehousing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <div className="container-fluid px-4 px-lg-5">
            <button
              className={`mobile-menu-btn header-hamburger-left ${
                menuOpen ? "active" : ""
              }`}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="jaywant-full-menu"
            >
              <span />
              <span />
              <span />
            </button>

            <Link
              href="/"
              className="navbar-brand"
              onClick={closeMenu}
              aria-label="Jaywant Group home"
            >
              <Image
                src="/images/logo/jaywant-logo.png"
                alt="Jaywant Group"
                width={230}
                height={80}
                priority
                className="header-logo"
              />
            </Link>

            <div className="header-business-navigation">
              {businessLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`header-business-link ${
                    isActive(item.href.split("#")[0]) ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="header-actions">
              <Link
                href="/contact"
                className="header-contact-icon"
                aria-label="Contact Jaywant Group"
                title="Contact Us"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                </svg>
              </Link>

              {/* <button
                className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                aria-controls="jaywant-full-menu"
              >
                <span />
                <span />
                <span />
              </button> */}
            </div>
          </div>
        </nav>
      </header>

      <div
        id="jaywant-full-menu"
        className={`jg-full-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="jg-full-menu-top">
          <Link
            href="/"
            className="jg-full-menu-brand"
            onClick={closeMenu}
            aria-label="Jaywant Group home"
          >
            <Image
              src="/images/logo/jaywant-white-logo.png"
              alt="Jaywant Group — One Group Endless Possibilities"
              width={360}
              height={95}
              priority
              className="jg-full-menu-logo"
            />
          </Link>

          <button
            type="button"
            className="jg-full-menu-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <span />
            <span />
          </button>
        </div>

        <div className="jg-full-menu-content">
          <div className="jg-full-menu-heading">
            <span>EXPLORE JAYWANT GROUP</span>
            <h2>
              One Group.
              <br />
              <span>Endless Possibilities.</span>
            </h2>
          </div>

          <nav className="jg-full-menu-links" aria-label="All website pages">
            {fullMenuLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="jg-full-menu-link"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
              >
                <span className="jg-full-menu-number">{item.number}</span>
                <span className="jg-full-menu-link-label">{item.label}</span>
                <span className="jg-full-menu-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="jg-full-menu-footer">
          <span>BUILDING ACROSS POSSIBILITIES</span>
          <a href="https://www.jaywantgroup.com/contact" onClick={closeMenu}>
            LET&apos;S CONNECT <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </>
  );
}
