import type { Locale } from "@/i18n/translations";
import { translations } from "@/i18n/translations";

export type Project = {
  id: string;
  name: string;
  tag?: string;
  description?: string;
  instructions?: string;
  updatedAt?: string;
  example?: boolean;
  files: { name: string; type: string; size: string }[];
};

const T = (l: Locale, k: string) => translations[l][k] ?? translations.fr[k] ?? k;

export const getProjects = (l: Locale): Project[] => [
  {
    id: "hire",
    name: "hire",
    description: T(l, "proj.hire.desc"),
    instructions: "",
    updatedAt: T(l, "time.6monthsAgo"),
    files: [],
  },
  {
    id: "hire-pittman",
    name: "hire pittman",
    description: T(l, "proj.hirePittman.desc"),
    instructions: "",
    updatedAt: T(l, "time.16minAgo"),
    files: [],
  },
  {
    id: "research-notes",
    name: "My Research Notes",
    description: T(l, "proj.research.desc"),
    instructions: T(l, "proj.research.instr"),
    updatedAt: T(l, "time.3daysAgo"),
    files: [
      { name: "papers-overview.pdf", type: "PDF", size: "2.4 MB" },
      { name: "literature-review.md", type: "MD", size: "12 KB" },
    ],
  },
  {
    id: "code-review",
    name: "Code Review",
    description: T(l, "proj.codeReview.desc"),
    instructions: T(l, "proj.codeReview.instr"),
    updatedAt: T(l, "time.1weekAgo"),
    files: [{ name: "style-guide.md", type: "MD", size: "8 KB" }],
  },
  {
    id: "how-to-use-claude",
    name: "How to use Claude",
    tag: T(l, "projects.exampleTag"),
    description: T(l, "proj.howTo.desc"),
    instructions: "",
    updatedAt: T(l, "time.10monthsAgo"),
    example: true,
    files: [],
  },
];