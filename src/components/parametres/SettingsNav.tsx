import { Link, useParams } from "@tanstack/react-router";

export const sections = [
  { id: "general", label: "Général" },
  { id: "compte", label: "Compte" },
  { id: "confidentialite", label: "Confidentialité" },
  { id: "facturation", label: "Facturation" },
  { id: "capacites", label: "Capacités" },
  { id: "connecteurs", label: "Connecteurs" },
  { id: "claude-code", label: "Claude Code" },
];

export function SettingsNav() {
  const { section } = useParams({ from: "/parametres/$section" });
  return (
    <nav className="flex w-52 flex-col gap-0.5 py-6 pr-4">
      {sections.map((s) => (
        <Link key={s.id} to="/parametres/$section" params={{ section: s.id }}
          className={`rounded-md px-3 py-1.5 text-left text-[13.5px] ${section === s.id ? "bg-surface-elevated text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}>
          {s.label}
        </Link>
      ))}
    </nav>
  );
}