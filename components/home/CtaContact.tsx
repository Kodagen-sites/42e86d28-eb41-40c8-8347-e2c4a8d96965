import { FadeUp, MagneticButton } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

export default function CtaContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-graphite px-6 py-28 text-bg md:py-40"
    >
      <div id="start" className="absolute -top-24" aria-hidden />
      <div className="mx-auto max-w-4xl text-center">
        <FadeUp>
          <span
            className="block text-[11px] font-medium uppercase tracking-[0.28em] text-bg/55"
          >
            Start free
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tightest md:text-7xl">
            Launch a business in minutes, not months.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-bg/70">
            Describe the idea once. Genesis builds the rest — and you refine any
            layer with a sentence, forever.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              as="a"
              href={siteConfig.cta.href}
              className="inline-flex items-center rounded-full bg-bg px-8 py-3.5 text-sm font-medium text-graphite transition-opacity hover:opacity-90"
            >
              {siteConfig.cta.label}
            </MagneticButton>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-bg/65 underline-offset-4 transition-colors hover:text-bg hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-bg/40">
            {siteConfig.contact.location}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
