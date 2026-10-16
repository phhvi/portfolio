export const links = {
  email: "phanhavi136@gmail.com",
  github: "https://github.com/phhvi",
  linkedin: "https://linkedin.com/in/viphanha",
  spotifyProfile: "https://open.spotify.com/user/31duswxllhh3k37ixh2rlffkhdh4",
  cv: "/Vi_Phan_CV.pdf",
};

export const now = [
  "Finishing NAB's StarCamp programme in Ho Chi Minh City",
  "Building Rainbow Shine — a private map of memories for two",
  "Learning Java, and re-learning NestJS properly this time",
  "Cycling by the beach whenever I'm back in Da Nang",
  "Reading The Midnight Library, again",
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
      "A private space for two people to pin the places they've been and what happened there. Born from a paper map I kept years ago. Map first, melancholy on purpose.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Leaflet"],
    href: "https://github.com/phhvi/rainbow-shine-client",
    tone: "pink",
  },
  {
    title: "Modeling portfolio",
    kind: "Creative · side quest",
    status: "Half-finished",
    blurb:
      "A quieter corner for the other side of me — a photographic portfolio for modeling work, built as a small static site. Coming soon.",
    stack: ["Next.js", "Tailwind"],
    tone: "paper",
  },
  {
    title: "Job board",
    kind: "Full-stack · learning",
    status: "Done",
    blurb: "A classic client + server job board, built to learn how the two halves talk to each other.",
    stack: ["React", "Node.js"],
    href: "https://github.com/phhvi/job-board",
    tone: "paper",
  },
];

export const experience = [
  {
    org: "National Australia Bank — StarCamp",
    role: "Software Engineering Intern",
    when: "Jul – Oct 2026",
    note: "Micro-frontend banking product; GraphQL BFF; de-facto BA; led team code reviews.",
  },
  {
    org: "National Australia Bank — WeCamp",
    role: "Full-Stack Trainee",
    when: "Mar – May 2026",
    note: "Led a team of 5; 2nd place MVP of the cohort.",
  },
  {
    org: "Visiolusion",
    role: "Frontend Developer",
    when: "Aug – Dec 2025",
    note: "Workflow UIs for a law firm's email-triage platform, used daily by ~50 legal staff.",
  },
  {
    org: "DataHouse Asia",
    role: "Frontend Developer",
    when: "Feb 2024 – Feb 2025",
    note: "Three responsive websites and two ERP modules in React + TypeScript.",
  },
  {
    org: "DataHouse Asia",
    role: "Salesforce Developer",
    when: "Nov 2022 – Jan 2024",
    note: "US-government CAMA and Disability Compensation projects — LWC, Aura, Apex.",
  },
];

