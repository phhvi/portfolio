export const links = {
  email: "phanhavi136@gmail.com",
  github: "https://github.com/phhvi",
  linkedin: "https://www.linkedin.com/in/viphanha",
  spotifyProfile: "https://open.spotify.com/user/31duswxllhh3k37ixh2rlffkhdh4",
  cv: "/Vi_Phan_CV.pdf",
};

export const now = [
  "Looking for my next team in Ho Chi Minh City, fresh out of NAB's StarCamp programme",
  "Building Rainbow Shine — a private map of memories for two",
  "Learning Java, and going deeper on NestJS and PostgreSQL",
  "Cycling by the beach whenever I'm back in Da Nang",
  "On the nightstand: The Midnight Library and The Design of Everyday Things",
];

export const playlists = [
  { id: "66klFLTjW0f5d9W7AtF8bf", name: "twenty-six" },
  { id: "4r5FWC3iq8pJnuck4fYAFF", name: "under the dim street light" },
  { id: "6l9MzGlNMjjd3fFkxsTtEU", name: "spring in Hoi An" },
  { id: "1pobAjFFX9pRn0OXYh4qEK", name: "sai gon once again" },
  { id: "11nNzSgt40qvWcDUf07HDY", name: "french taste" },
];

export type Project = {
  title: string;
  kind: string;
  status: string;
  blurb: string;
  stack: string[];
  href?: string;
  tone: "pink" | "paper";
};

export const projects: Project[] = [
  {
    title: "Rainbow Shine",
    kind: "Full-stack · side project",
    status: "In progress",
    blurb:
      "A private space for two people to pin the places they've been — the date, the where, what happened, a few photos. The map comes first; everything else hangs off it.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Leaflet"],
    href: "https://github.com/phhvi/rainbow-shine-client",
    tone: "pink",
  },
  {
    title: "Modeling portfolio",
    kind: "Creative · side quest",
    status: "Half-finished",
    blurb:
      "A quieter corner for the other side of me — a photographic portfolio for modeling work, built as a small static site. Not online yet.",
    stack: ["Next.js", "Tailwind"],
    tone: "paper",
  },
  {
    title: "Job board",
    kind: "Learning · course project",
    status: "Done",
    blurb: "A client + server job board built while following a GraphQL course, to see how the two halves talk to each other.",
    stack: ["React", "Node.js", "GraphQL"],
    href: "https://github.com/phhvi/job-board",
    tone: "paper",
  },
];

export const experience = [
  {
    org: "National Australia Bank — StarCamp",
    role: "Software Engineering Intern",
    when: "Jul – Oct 2026",
    note: "Built frontend features for a banking capstone on NAB's micro-frontend platform, helped build its GraphQL BFF, wrote up the requirements when nobody else did, and ran the team's front-end code reviews.",
  },
  {
    org: "National Australia Bank — WeCamp",
    role: "Full-Stack Trainee",
    when: "Mar – May 2026",
    note: "Led a team of five from an empty repo to a working demo; we took 2nd place MVP in the cohort.",
  },
  {
    org: "Visiolusion",
    role: "Frontend Developer",
    when: "Aug – Dec 2025",
    note: "Built the workflow screens of a German law firm's email-triage platform in Next.js — the part ~50 legal staff open every day.",
  },
  {
    org: "DataHouse Asia",
    role: "Frontend Developer",
    when: "Feb 2024 – Feb 2025",
    note: "Three responsive websites and two ERP modules in React and TypeScript, plus a lot of patient performance work on a slow dashboard.",
  },
  {
    org: "DataHouse Asia",
    role: "Salesforce Developer",
    when: "Nov 2022 – Jan 2024",
    note: "Salesforce (LWC, Aura, Apex) for US-government clients: a county property-appraisal system and a state disability-compensation portal.",
  },
];

