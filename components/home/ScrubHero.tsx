"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import { HeroScrollText } from "@/components/motion";
import framesManifest from "@/content/frames-manifest.json";
import { siteConfig } from "@/lib/site-config";

const { hero } = siteConfig.colors.text;

export default function ScrubHero() {
  const [progress, setProgress] = useState(0);

  return (
    <ScrollCanvas
      frameCount={framesManifest.frameCount}
      pattern={framesManifest.frameUrlTemplate}
      padLength={4}
      scrollDistance={6}
      loadingLabel="Genesis"
      loadingVariant="L4"
      onProgress={setProgress}
    >
      <HeroScrollText
        progress={progress}
        position="bottom-left"
        textColor={hero}
        accentColor="#3a3d45"
        accentTextColor="#fbfbfa"
        chapters={[
          {
            at: 0,
            eyebrow: "Genesis AI",
            headlineLines: ["One prompt.", "A whole business."],
            subline:
              "Describe the idea. Genesis assembles brand, site, funnel, and operations as a single coherent system.",
          },
          {
            at: 0.34,
            eyebrow: "Generated as one system",
            headlineLines: ["Brand, site,", "marketing, ops."],
            subline:
              "Not five disconnected tools — one model that keeps every layer consistent with your intent.",
          },
          {
            at: 0.62,
            eyebrow: "From idea to live",
            headlineLines: ["Ship it", "this afternoon."],
            subline:
              "Go live in a single pass, then refine any layer with a sentence — forever.",
          },
          {
            at: 0.82,
            eyebrow: "Start now",
            headlineLines: ["Launch in", "minutes, not months."],
            cta: { label: siteConfig.cta.label, href: siteConfig.cta.href },
          },
        ]}
      />
    </ScrollCanvas>
  );
}
