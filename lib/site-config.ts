export interface Capability {
  id: string;
  name: string;
  description: string;
}

export const siteConfig = {
  brandName: "Genesis AI",
  tagline: "Launch a business in minutes, not months",
  description:
    "Genesis AI turns a single prompt into a production-ready business — brand, website, marketing, sales funnels, and operations, generated as one coherent system.",
  url: "https://genesis-ai.com",
  cta: { label: "Start free", href: "#start" },
  contact: {
    email: "hello@genesis-ai.com",
    location: "Fully remote — operating globally",
  },
  socials: {
    x: "https://x.com/genesisai",
    linkedin: "https://www.linkedin.com/company/genesisai",
    github: "https://github.com/genesis-ai",
  },
  colors: {
    luminance: "light",
    text: {
      hero: "#2c2f36",
      body: "rgba(58,61,69,0.78)",
      eyebrow: "#3a3d45",
      muted: "rgba(58,61,69,0.52)",
    },
  },
  nav: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "How it works", href: "#how" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  capabilities: [
    {
      id: "branding",
      name: "Branding",
      description:
        "Name, logo, palette, and voice — a complete identity system derived from your idea, not a template.",
    },
    {
      id: "website",
      name: "Website",
      description:
        "A fast, responsive marketing site generated and deployed in one pass, wired to your brand tokens.",
    },
    {
      id: "marketing",
      name: "Marketing",
      description:
        "Launch copy, campaigns, and content scheduled across channels — drafted in your voice, ready to ship.",
    },
    {
      id: "sales-funnels",
      name: "Sales funnels",
      description:
        "Landing pages, lead capture, and follow-up sequences assembled into a funnel that converts from day one.",
    },
    {
      id: "operations",
      name: "Operations",
      description:
        "Billing, CRM, and internal workflows provisioned automatically so the business runs the moment it exists.",
    },
  ] satisfies Capability[],
  process: [
    {
      step: "01",
      title: "Describe the idea",
      body: "One prompt. Genesis reads intent, market, and audience to set the foundation.",
    },
    {
      step: "02",
      title: "Watch it assemble",
      body: "Brand, site, funnel, and ops generate together as a single, consistent system.",
    },
    {
      step: "03",
      title: "Ship and iterate",
      body: "Go live in an afternoon, then refine any layer with a sentence — forever.",
    },
  ],
  footerTagline:
    "From prompt to platform. The business layer, generated.",
} as const;

export type SiteConfig = typeof siteConfig;
