import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

const { eyebrow, hero, body } = siteConfig.colors.text;

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-bg px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <span
            className="block text-[11px] font-medium uppercase tracking-[0.28em]"
            style={{ color: eyebrow }}
          >
            Capabilities
          </span>
          <h2
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tightest md:text-6xl"
            style={{ color: hero }}
          >
            Every layer of a business, generated together.
          </h2>
          <p
            className="mt-6 max-w-xl text-lg"
            style={{ color: body }}
          >
            Genesis doesn&apos;t hand you five disconnected tools. It produces one
            coherent system where brand, product, and operations stay in sync.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-surface md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.capabilities.map((cap, i) => (
            <FadeUp
              key={cap.id}
              delay={(i % 3) * 0.08}
              className="group bg-bg p-8 transition-colors hover:bg-surface/40"
            >
              <span
                className="font-mono text-xs tabular-nums"
                style={{ color: siteConfig.colors.text.muted }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-5 font-display text-xl font-semibold tracking-tight"
                style={{ color: hero }}
              >
                {cap.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: body }}>
                {cap.description}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
