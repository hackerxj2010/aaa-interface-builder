export type Conversation = {
  id: string;
  title: string;
  time: string;
  group: "today" | "yesterday" | "week" | "older";
};

export const conversations: Conversation[] = [
  { id: "c1", title: "Correction et amélioration d'application agent temps", time: "il y a 1 heure", group: "today" },
  { id: "c2", title: "Building a unified AI coding agent from multiple frameworks", time: "il y a 8 heures", group: "today" },
  { id: "c3", title: "React UI recreation", time: "hier", group: "yesterday" },
  { id: "c4", title: "Architecture d'agent ultra-puissant dépassant Claude Code", time: "avant-hier", group: "yesterday" },
  { id: "c5", title: "Create a 3d low poly sportbike racing game", time: "il y a 3 jours", group: "week" },
  { id: "c6", title: "Modèle IA gratuit le plus puissant", time: "il y a 4 jours", group: "week" },
  { id: "c7", title: "Atteindre 20/20 en mathématiques", time: "il y a 4 jours", group: "week" },
  { id: "c8", title: "Greeting", time: "il y a 4 jours", group: "week" },
  { id: "c9", title: "Underwater drone simulation game", time: "il y a 6 jours", group: "older" },
  { id: "c10", title: "Novel drone architecture with thermal imaging", time: "il y a 1 semaine", group: "older" },
];

export const favorites = [
  { id: "f1", title: "Building a multi-role AI agent architecture" },
  { id: "f2", title: "Compare openclaw, agent-zero frameworks" },
];

export type Message = { id: string; role: "user" | "assistant"; content: string };

export const sampleMessages: Message[] = [
  { id: "m1", role: "user", content: "Peux-tu me préparer un cours complet sur le théorème de Thalès pour des élèves de collège ?" },
  { id: "m2", role: "assistant", content: "Bien sûr ! Voici un cours structuré sur le théorème de Thalès, organisé de manière progressive et pédagogique, adapté pour des élèves de collège ou lycée.\n\nSouhaitez-vous que j'ajoute quelque chose de spécifique ? Par exemple :\n\n• Plus d'exercices avec corrections ?\n• Des démonstrations mathématiques ?\n• Des applications dans un domaine particulier ?\n• Un résumé visuel ou une fiche mémo ?" },
];