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

export const projects: Project[] = [
  {
    id: "hire",
    name: "hire",
    description: "Espace de travail pour le recrutement et le triage des candidatures.",
    instructions: "",
    updatedAt: "il y a 6 mois",
    files: [],
  },
  {
    id: "hire-pittman",
    name: "hire pittman",
    description: "ddbdbd",
    instructions: "",
    updatedAt: "il y a 16 minutes",
    files: [],
  },
  {
    id: "research-notes",
    name: "My Research Notes",
    description: "Notes et synthèses pour les projets de recherche en cours.",
    instructions: "Privilégie les résumés courts et cite toujours les sources.",
    updatedAt: "il y a 3 jours",
    files: [
      { name: "papers-overview.pdf", type: "PDF", size: "2.4 MB" },
      { name: "literature-review.md", type: "MD", size: "12 KB" },
    ],
  },
  {
    id: "code-review",
    name: "Code Review",
    description: "Assistant de relecture de PR avec conventions internes.",
    instructions: "Réponds en français, format markdown, focus sécurité et performance.",
    updatedAt: "il y a 1 semaine",
    files: [
      { name: "style-guide.md", type: "MD", size: "8 KB" },
    ],
  },
  {
    id: "how-to-use-claude",
    name: "How to use Claude",
    tag: "Projet exemple",
    description:
      "An example project that also doubles as a how-to guide for using Claude. Chat with it to learn more about how to get the most out of chatting with Claude!",
    instructions: "",
    updatedAt: "il y a 10 mois",
    example: true,
    files: [],
  },
];