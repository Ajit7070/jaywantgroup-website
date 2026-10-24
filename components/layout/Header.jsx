"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClass = (href, extraClass = "") =>
    `nav-link ${isActive(href) ? "active" : ""} ${extraClass}`.trim();

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container-fluid px-4 px-lg-5">
          {/* Logo */}
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <Image
              src="/images/logo/jaywant-logo.png"
              alt="Jaywant Group"
              width={230}
              height={80}
              priority
              className="header-logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <div className={`main-navigation ${menuOpen ? "open" : ""}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={navLinkClass("/")}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/about")}
                  href="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/projects")}
                  href="/projects"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/business-verticals")}
                  href="/business-verticals"
                  onClick={closeMenu}
                >
                  Business Verticals
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/legacy")}
                  href="/legacy"
                  onClick={closeMenu}
                >
                  Our Legacy
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/blogs")}
                  href="/blogs"
                  onClick={closeMenu}
                >
                  Blogs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={navLinkClass("/contact", "contact-btn")}
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
