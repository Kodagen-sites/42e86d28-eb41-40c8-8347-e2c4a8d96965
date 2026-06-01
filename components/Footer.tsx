import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface bg-bg px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tightest text-graphite"
          >
            {siteConfig.brandName}
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-graphite/60">
            {siteConfig.footerTagline}
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <nav className="flex flex-col gap-3 text-sm">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-graphite/60 transition-colors hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-surface pt-6 text-xs text-graphite/45 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {siteConfig.brandName}. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="transition-colors hover:text-graphite">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-graphite">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
