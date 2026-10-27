"use client";

import { useState } from "react";
import { FiPhone, FiClipboard, FiX, FiArrowUpRight } from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";
import "./FloatingContact.css";

// Replace these with Jaywant Group's official contact details.
const PHONE_NUMBER = "919XXXXXXXXX"; // Country code + number, without +
const DISPLAY_PHONE = "+91 XXXXX XXXXX";

export default function FloatingContact() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Residential",
    message: "",
  });

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitEnquiry = (event) => {
    event.preventDefault();

    const message = [
      "Hello Jaywant Group, I would like to make an enquiry.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Interested in: ${form.interest}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="jg-floating-contact" aria-label="Quick contact options">
        <a
          className="jg-float-btn jg-float-call"
          href={`tel:+${PHONE_NUMBER}`}
          aria-label={`Call Jaywant Group at ${DISPLAY_PHONE}`}
          data-tooltip="Call Us"
        >
          <FiPhone />
          <span className="jg-float-label">Call</span>
        </a>

        <button
          type="button"
          className="jg-float-btn jg-float-enquiry"
          onClick={() => setIsEnquiryOpen(true)}
          aria-label="Open enquiry form"
          data-tooltip="Send an Enquiry"
        >
          <FiClipboard />
          <span className="jg-float-label">Enquiry</span>
        </button>

        <a
          className="jg-float-btn jg-float-whatsapp"
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            "Hello Jaywant Group, I would like to know more about your projects."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Jaywant Group on WhatsApp"
          data-tooltip="WhatsApp Us"
        >
          <FaWhatsapp />
          <span className="jg-float-label">WhatsApp</span>
        </a>
      </div>

      {isEnquiryOpen && (
        <div
          className="jg-enquiry-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsEnquiryOpen(false);
            }
          }}
        >
          <div
            className="jg-enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="jg-enquiry-title"
          >
            <button
              type="button"
              className="jg-enquiry-close"
              onClick={() => setIsEnquiryOpen(false)}
              aria-label="Close enquiry form"
            >
              <FiX />
            </button>

            <span className="jg-enquiry-eyebrow">LET'S CONNECT</span>
            <h2 id="jg-enquiry-title">Make an Enquiry</h2>
            <p>
              Tell us what you are looking for. Our team can assist you with the
              right project information.
            </p>

            <form onSubmit={submitEnquiry}>
              <label htmlFor="jg-enquiry-name">Full Name *</label>
              <input
                id="jg-enquiry-name"
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Enter your full name"
                required
              />

              <label htmlFor="jg-enquiry-phone">Phone Number *</label>
              <input
                id="jg-enquiry-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateForm}
                placeholder="Enter your phone number"
                pattern="[0-9+\s()-]{8,20}"
                required
              />

              <label htmlFor="jg-enquiry-email">Email Address</label>
              <input
                id="jg-enquiry-email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateForm}
                placeholder="Enter your email address"
              />

              <label htmlFor="jg-enquiry-interest">Interested In *</label>
              <select
                id="jg-enquiry-interest"
                name="interest"
                value={form.interest}
                onChange={updateForm}
                required
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Plotting</option>
                <option>Industrial</option>
                <option>Warehousing</option>
                <option>Other</option>
              </select>

              <label htmlFor="jg-enquiry-message">Message</label>
              <textarea
                id="jg-enquiry-message"
                name="message"
                value={form.message}
                onChange={updateForm}
                placeholder="Tell us about your requirements"
                rows={3}
              />

              <button type="submit" className="jg-enquiry-submit">
                Continue on WhatsApp <FiArrowUpRight />
              </button>

              <small>
                Your enquiry details will be opened in WhatsApp for you to send.
              </small>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
