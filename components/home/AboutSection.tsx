import Image from "next/image";
import { FadeUp } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";
import assetManifest from "@/content/asset-manifest.json";

const { eyebrow, hero, body } = siteConfig.colors.text;

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-bg px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <FadeUp>
          <span
            className="block text-[11px] font-medium uppercase tracking-[0.28em]"
            style={{ color: eyebrow }}
          >
            About
          </span>
          <h2
            className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tightest md:text-5xl"
            style={{ color: hero }}
          >
            The business layer, generated.
          </h2>
          <div className="mt-6 space-y-5 text-lg" style={{ color: body }}>
            <p>
              Starting a business has always meant stitching together a dozen
              tools and the people to run them. Genesis collapses that work into
              a single generative pass.
            </p>
            <p>
              One model reads your intent, then produces brand, website,
              marketing, funnels, and operations as parts of the same system —
              consistent by construction, not by coordination.
            </p>
            <p>
              We&apos;re a fully remote team building the layer that turns ideas
              into running businesses. {siteConfig.contact.location}.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <Image
              src={assetManifest.images["scene-1-end"]}
              alt="A luminous platinum lattice self-assembling in a pearl-white studio void"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
