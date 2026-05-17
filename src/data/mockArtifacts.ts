export type Artifact = {
  id: string;
  title: string;
  kind: "code" | "doc" | "image";
  language?: string;
  conversation?: string;
  updatedAt: string;
  preview?: string;
};

export const artifacts: Artifact[] = [
  { id: "a1", title: "Gemini clone", kind: "code", language: "JSX", conversation: "Building a faithful React UI", updatedAt: "il y a 1 heure" },
  { id: "a2", title: "Cours sur le théorème de Thalès", kind: "doc", conversation: "Atteindre 20/20 en mathématiques", updatedAt: "hier" },
  { id: "a3", title: "Retro Pong", kind: "code", language: "JSX", conversation: "React UI recreation", updatedAt: "il y a 2 jours" },
  { id: "a4", title: "Low-poly sportbike notes", kind: "doc", conversation: "Create a 3d low poly sportbike", updatedAt: "il y a 3 jours" },
  { id: "a5", title: "GEMINI.md", kind: "doc", conversation: "Building a faithful React UI", updatedAt: "il y a 3 jours" },
];