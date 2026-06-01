import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

const { eyebrow, hero, body, muted } = siteConfig.colors.text;

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-surface/40 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <span
            className="block text-[11px] font-medium uppercase tracking-[0.28em]"
            style={{ color: eyebrow }}
          >
            How it works
          </span>
          <h2
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tightest md:text-6xl"
            style={{ color: hero }}
          >
            Three steps from sentence to platform.
          </h2>
        </FadeUp>

        <ol className="mt-16 grid gap-12 md:grid-cols-3">
          {siteConfig.process.map((step, i) => (
            <FadeUp key={step.step} delay={i * 0.1} className="relative">
              <span
                className="font-display text-5xl font-bold tracking-tightest md:text-6xl"
                style={{ color: muted }}
              >
                {step.step}
              </span>
              <h3
                className="mt-6 font-display text-2xl font-semibold tracking-tight"
                style={{ color: hero }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: body }}>
                {step.body}
              </p>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
