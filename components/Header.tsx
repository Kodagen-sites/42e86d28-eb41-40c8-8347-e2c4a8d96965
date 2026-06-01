"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "bg-bg/80 shadow-[0_1px_0_rgba(58,61,69,0.08),0_12px_40px_-12px_rgba(58,61,69,0.18)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-display text-base font-bold tracking-tightest text-graphite"
        >
          {siteConfig.brandName}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-graphite/65 transition-colors hover:text-graphite"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          as="a"
          href={siteConfig.cta.href}
          className="inline-flex items-center rounded-full bg-graphite px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          {siteConfig.cta.label}
        </MagneticButton>
      </nav>
    </header>
  );
}
