"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Show loader whenever the browser loads or refreshes the page.
    setIsLoading(true);

    const hideTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleLinkClick = (event) => {
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

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);

      if (
        url.origin !== window.location.origin ||
        !["http:", "https:"].includes(url.protocol)
      ) {
        return;
      }

      // Ignore same-page links, including section anchors.
      if (url.pathname === window.location.pathname) {
        return;
      }

      setIsLoading(true);
    };

    document.addEventListener("click", handleLinkClick, true);

    return () => {
      window.clearTimeout(hideTimer);
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  // Show the loader after the pathname changes.
  useEffect(() => {
    if (!pathname) return;

    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      setIsLoading(false);
    }
  }, [pathname]);

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
