/* ------------------------------------------------------------------ */
/*  Siaya Empowerment Network — site content (factual foundation)      */
/* ------------------------------------------------------------------ */

const LOCAL_IMAGE_MODULES = import.meta.glob("../../images/**/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const localImage = (folder: string, filename: string) => {
  const suffix = `/images/${folder ? `${folder}/` : ""}${filename}`;
  const match = Object.entries(LOCAL_IMAGE_MODULES).find(([path]) => path.endsWith(suffix));
  if (!match) {
    throw new Error(`Missing local image asset: ${suffix}`);
  }
  return match[1];
};

export const LOCAL_IMAGES = Object.entries(LOCAL_IMAGE_MODULES)
  .filter(([path]) => !path.endsWith("/logo.jpeg") && !path.endsWith("/logo.png"))
  .map(([path, src]) => ({
    src,
    alt: "SEN community members taking part in local action",
    folder: path.includes("/environment/")
      ? "Environment"
      : path.includes("/teambuilding/")
        ? "Team Building"
        : "Community",
  }));

const ROOT_IMAGES = [
  "WhatsApp Image 2026-09-13 at 12.15.08 PM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.08 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.10 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.16 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.17 PM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.17 PM (2).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.17 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.18 PM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.18 PM (2).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.18 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.19 PM (1).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.19 PM (2).jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.19 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 12.15.20 PM (1).jpeg",
].map((filename) => localImage("", filename));

const ENVIRONMENT_IMAGES = [
  "WhatsApp Image 2026-09-13 at 3.00.46 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.47 PM(2).jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.48 PM(1).jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.48 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.49 PM(1).jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.50 PM(1).jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.50 PM.jpeg",
].map((filename) => ({
  src: localImage("environment", filename),
  alt: "SEN community members taking practical environmental action",
}));

const COMMUNITY_IMAGES = ROOT_IMAGES.slice(4, 9).map((src) => ({
  src,
  alt: "SEN community members working together on a local initiative",
}));

const OPPORTUNITY_IMAGES = ROOT_IMAGES.slice(9, 14).map((src) => ({
  src,
  alt: "Young people learning and building pathways to opportunity with SEN",
}));

const TEAM_BUILDING_IMAGES = [
  "WhatsApp Image 2026-09-13 at 3.00.47 PM.jpeg",
  "WhatsApp Image 2026-09-13 at 3.00.47 PM(1).jpeg",
].map((filename) => ({
  src: localImage("teambuilding", filename),
  alt: "SEN members building connection through community teamwork",
}));

export const IMG = {
  heroPortrait: {
    src: localImage("", "WhatsApp Image 2026-09-13 at 12.15.36 PM (2).jpeg"),
    alt: "SEN community members gathered together in Siaya",
  },
  aerialFarms: { src: ROOT_IMAGES[1], alt: "A local landscape and community setting in Siaya County" },
  maizeField: { src: ROOT_IMAGES[2], alt: "SEN community members working together outdoors" },
  riceFarmer: { src: ROOT_IMAGES[3], alt: "A community activity supported by SEN" },
  healthNurses: { src: ROOT_IMAGES[4], alt: "Community health workers and SEN partners" },
  healthClinic: { src: ROOT_IMAGES[5], alt: "Community members receiving support through SEN outreach" },
  elderPortrait: {
    src: localImage("", "WhatsApp Image 2026-09-13 at 12.15.16 PM.jpeg"),
    alt: "A joyful SEN community member",
  },
  bramwelAsewe: {
    src: localImage("", "bramwel-asewe.png"),
    alt: "Bramwel Asewe, Chief Executive Officer and Founder of SEN",
  },
  girlFlag: { src: ROOT_IMAGES[7], alt: "A young community member taking part in SEN activities" },
  youngMen: { src: ROOT_IMAGES[8], alt: "Young people connecting through SEN programmes" },
  outdoorClass: { src: ROOT_IMAGES[9], alt: "Young people learning together with SEN" },
  classroom: { src: ROOT_IMAGES[10], alt: "Learners taking part in a community training session" },
  readingBoys: { src: ROOT_IMAGES[11], alt: "Young people engaged in learning" },
  treeSeedlings: {
    src: localImage("environment", "WhatsApp Image 2026-09-13 at 1.43.31 PM.jpeg"),
    alt: "SEN community members taking practical environmental action",
  },
};

export interface FieldImage {
  src: string;
  alt: string;
}

export interface FieldStory {
  id: string;
  date: string;
  location?: string;
  title: string;
  headline: string;
  paragraphs: string[];
  programme: { label: string; href: string };
  tag: string;
  main: FieldImage;
  gallery: FieldImage[];
}

export const FIELD_STORIES: FieldStory[] = [
  {
    id: "tree-planting",
    date: "06 June 2025",
    title: "Tree Planting",
    headline: "Planting for a more resilient future.",
    tag: "Documented field activity",
    paragraphs: [
      "On 6 June 2025, SEN members and community volunteers came together to plant trees — a practical, hands-in-the-soil act of environmental responsibility.",
      "For SEN, tree planting is both climate action and community action: restoring the land, strengthening shared purpose and investing in a more resilient future.",
    ],
    programme: {
      label: "LAND — Climate-Smart Agriculture & Environmental Sustainability",
      href: "#work",
    },
    main: {
      src: localImage("environment", "WhatsApp Image 2026-09-13 at 1.43.31 PM(1).jpeg"),
      alt: "SEN community members taking practical environmental action",
    },
    gallery: ENVIRONMENT_IMAGES.slice(1),
  },
  {
    id: "community-cleanup",
    date: "July 2025",
    location: "Kisumu County",
    title: "Community Clean-Up",
    headline: "Communities taking action.",
    tag: "Documented outreach",
    paragraphs: [
      "In July 2025, SEN worked alongside local community groups and other stakeholders in Kisumu County to take practical action against waste, blocked drainage and degraded public spaces.",
      "Together, participants cleared plastic waste, improved drainage areas, restored public spaces and mobilised communities around solid-waste challenges and environmental sustainability.",
    ],
    programme: {
      label: "LAND — Environmental Sustainability in practice",
      href: "#work",
    },
    main: {
      src: localImage("", "WhatsApp Image 2026-09-13 at 1.29.57 PM (1).jpeg"),
      alt: "SEN community members working together on a local initiative",
    },
    gallery: COMMUNITY_IMAGES.slice(1),
  },
  {
    id: "team-building",
    date: "2025",
    title: "Environmental Sustainability & Team Building",
    headline: "Building environmental responsibility together.",
    tag: "Documented field activity",
    paragraphs: [
      "A documented day of shared environmental work — SEN members and participants working side by side, learning, organising and taking responsibility for the spaces they share.",
      "Teamwork like this is the quiet infrastructure of community action: the relationships, skills and habits that make the next planting, clean-up or outreach possible.",
    ],
    programme: {
      label: "LAND — Environmental Sustainability",
      href: "#work",
    },
    main: TEAM_BUILDING_IMAGES[0],
    gallery: TEAM_BUILDING_IMAGES.slice(1),
  },
  {
    id: "youth-training",
    date: "2025",
    title: "Youth & Community Training",
    headline: "Knowledge creates opportunity.",
    tag: "Documented outreach & training",
    paragraphs: [
      "Bringing communities together around health, education and pathways to opportunity.",
      "Documented outreach and training sessions have covered HIV and AIDS education, prevention awareness, education access, youth unemployment and pathways into work — with community participation at the centre of every session.",
    ],
    programme: {
      label: "HEALTH + OPPORTUNITY — Outreach & skills training",
      href: "#work",
    },
    main: OPPORTUNITY_IMAGES[0],
    gallery: OPPORTUNITY_IMAGES.slice(1),
  },
];

export const PILLARS = {
  health: {
    num: "01",
    name: "Health",
    statement: "Healthier families begin with access, knowledge and support.",
    programme: "Community Health & HIV Prevention",
    intro:
      "Good health underpins everything else a community can do. SEN works with families and local health structures to bring knowledge, prevention and support closer to home.",
    items: [
      "Community health outreach",
      "HIV prevention education",
      "Testing linkages & referral support",
      "Maternal & child health education",
      "Community health worker support",
      "Safe spaces addressing GBV",
    ],
  },
  land: {
    num: "02",
    name: "Land",
    statement: "Resilient communities start with resilient livelihoods.",
    programme: "Climate-Smart Agriculture & Environmental Sustainability",
    intro:
      "Most families in Siaya depend on the land. SEN supports farmers and communities to grow more with less risk — and to protect the environment that feeds everyone.",
    items: [
      "Climate-smart farming",
      "Farmer training & extension",
      "Improved seeds & tools",
      "Water conservation",
      "Tree planting",
      "Environmental sustainability",
      "Food security",
      "Livelihood improvement",
    ],
  },
  opportunity: {
    num: "03",
    name: "Opportunity",
    statement: "Give young people the skills to shape their own future.",
    programme: "Youth Skills & Education Support",
    intro:
      "Siaya's youngest generation is its greatest asset. SEN opens routes from classroom to career — keeping children learning and equipping young people to earn.",
    items: [
      "Vocational training",
      "Entrepreneurship skills",
      "Start-up mentoring & support",
      "Youth employment pathways",
      "Education access",
      "School retention",
      "Support for vulnerable children",
      "Girls' education",
    ],
  },
};

export interface ImpactStat {
  low?: number;
  high?: number;
  word?: string;
  label: string;
  desc: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    low: 5000,
    high: 8000,
    label: "Residents reached",
    desc: "through integrated programmes in selected communities",
  },
  {
    low: 1000,
    high: 1500,
    label: "Smallholder farmers trained & supported",
    desc: "with climate-smart skills, inputs and follow-up",
  },
  {
    low: 2000,
    high: 3000,
    label: "People reached through health services",
    desc: "community health, HIV prevention and related services",
  },
  {
    low: 500,
    high: 800,
    label: "Young people equipped with skills",
    desc: "vocational, entrepreneurship and enterprise skills",
  },
  {
    word: "Hundreds",
    label: "Vulnerable children supported",
    desc: "through improved school retention and child welfare",
  },
];

export const PATHWAYS = [
  {
    num: "01",
    title: "Partner with SEN",
    desc: "Collaborate on health, agriculture, education or youth initiatives.",
  },
  {
    num: "02",
    title: "Support a programme",
    desc: "Help support farmer training, health outreach, youth skills or education initiatives.",
  },
  {
    num: "03",
    title: "Share your expertise",
    desc: "Offer professional skills, mentorship or technical support.",
  },
  {
    num: "04",
    title: "Connect us",
    desc: "Introduce SEN to organisations, businesses, networks and development partners.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Field Stories", href: "#stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Where We Work", href: "#where" },
  { label: "Get Involved", href: "#involved" },
];

export const CONTACT = {
  address: "Siaya Town, Siaya County, Kenya",
  phone1: "+254 731 270 315",
  phone2: "+254 702 239 662",
  email: "sitakimya@gmail.com",
};

export const GREENPEACE_THEMES = [
  "Education access",
  "HIV/AIDS awareness & prevention",
  "Youth employment pathways",
  "Climate justice",
  "Waste reduction",
  "Advocacy",
  "Sustainable environmental management",
  "Practical green solutions",
];
