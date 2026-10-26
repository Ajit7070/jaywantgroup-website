"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLinkClick = (event) => {
      // Only handle normal left-click navigation.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      // Ignore external links and non-web protocols.
      if (
        url.origin !== window.location.origin ||
        !["http:", "https:"].includes(url.protocol)
      ) {
        return;
      }

      // Ignore links that only navigate to a section on this page.
      const samePage =
        url.pathname === window.location.pathname &&
        url.search === window.location.search;

      if (samePage) return;

      setIsLoading(true);
    };

    document.addEventListener("click", handleLinkClick, true);

    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    // Allow the new route to render before hiding the loader.
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [pathname, isLoading]);

  if (!isLoading) return null;

  return (
    <div
      className="jg-page-loader"
      role="status"
      aria-label="Loading page"
      aria-live="polite"
    >
      <div className="jg-page-loader-content">
        <div className="jg-loader-icon-wrap">
          <Image
            src="/images/logo/jaywant-icon.png"
            alt=""
            width={110}
            height={110}
            priority
            className="jg-loader-icon"
          />
        </div>

        <p className="jg-loader-brand">JAYWANT GROUP</p>

        <p className="jg-loader-tagline">ONE GROUP. ENDLESS POSSIBILITIES.</p>

        <div className="jg-loader-track">
          <span className="jg-loader-progress" />
        </div>
      </div>
    </div>
  );
}
