export type Project = {
  id: string;
  name: string;
  tag?: string;
  description?: string;
  instructions?: string;
  files: { name: string; type: string; size: string }[];
};

export const projects: Project[] = [
  {
    id: "hire",
    name: "hire",
    tag: "bug",
    description: "Espace de travail pour le recrutement et le triage des candidatures.",
    instructions: "",
    files: [],
  },
  {
    id: "research-notes",
    name: "My Research Notes",
    description: "Notes et synthèses pour les projets de recherche en cours.",
    instructions: "Privilégie les résumés courts et cite toujours les sources.",
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
    files: [
      { name: "style-guide.md", type: "MD", size: "8 KB" },
    ],
  },
];