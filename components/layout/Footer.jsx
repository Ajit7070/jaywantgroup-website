"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Social Events", href: "/social-events" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "NRI Corner", href: "/nri-corner" },
  { label: "Contact", href: "/contact" },
];

const branches = [
  { label: "India", href: "/contact" },
  { label: "U.A.E.", href: "/contact" },
  { label: "Europe", href: "/contact" },
  { label: "Kuwait", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="jg-footer">
      <div className="jg-footer-main">
        <div className="jg-footer-image" aria-hidden="true" />

        <div className="jg-footer-container">
          <div className="jg-footer-grid">
            {/* Brand */}
            <div className="jg-footer-brand">
              <Link href="/" className="jg-footer-logo">
                <Image
                  src="/images/footer/jaywant-logo-whitbg.png"
                  alt="Jaywant Group"
                  width={280}
                  height={90}
                  sizes="(max-width: 767px) 220px, 280px"
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>

              <p className="jg-footer-tagline">
                One Group. Endless Possibilities.
              </p>

              <p className="jg-footer-description">
                Building opportunities through thoughtful development, strategic
                investments, and a vision for lasting growth.
              </p>

              <div className="jg-footer-socials">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="jg-footer-column">
              <h3>Quick Links</h3>
              <span className="jg-footer-heading-line" />

              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global branches */}
            <div className="jg-footer-column">
              <h3>Global Branches</h3>
              <span className="jg-footer-heading-line" />

              <ul>
                {branches.map((branch) => (
                  <li key={branch.label}>
                    <Link href={branch.href}>{branch.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="jg-footer-column jg-footer-contact">
              <h3>Get in Touch</h3>
              <span className="jg-footer-heading-line" />

              <a href="https://www.google.com/maps/search/?api=1&query=Pune%2C%20Maharashtra%2C%20India">
                <FaMapMarkerAlt />
                <span>Pune, Maharashtra, India</span>
              </a>

              <a href="mailto:info@jaywantgroup.com">
                <FaEnvelope />
                <span>info@jaywantgroup.com</span>
              </a>

              <p className="jg-footer-contact-note">
                Have a project or business enquiry? Connect with our team.
              </p>

              <a
                className="jg-footer-whatsapp"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="jg-footer-bottom">
        <div className="jg-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Jaywant Group. All rights reserved.
          </p>

          <div className="jg-footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>

          <Link href="#" className="jg-footer-back-top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
