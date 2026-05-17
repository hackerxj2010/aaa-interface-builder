import { PenLine, GraduationCap, Code2, Coffee } from "lucide-react";

const driveSvg = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <path fill="#3777e3" d="M6 22 1 13 6 4h12l5 9-5 9z" />
    <path fill="#ffcf63" d="m15 4 8 14h-7l-4-7z" />
    <path fill="#11a861" d="m1 13 5-9h6L7 13z" />
  </svg>
);

const chips = [
  { label: "Écrire", icon: <PenLine className="h-4 w-4" /> },
  { label: "Apprendre", icon: <GraduationCap className="h-4 w-4" /> },
  { label: "Code", icon: <Code2 className="h-4 w-4" /> },
  { label: "Vie quotidienne", icon: <Coffee className="h-4 w-4" /> },
  { label: "Depuis Drive", icon: driveSvg },
];

export function QuickActionChips() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {chips.map((c) => (
        <button
          key={c.label}
          className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 text-[13px] text-muted-foreground transition hover:bg-surface-elevated hover:text-foreground"
        >
          {c.icon}
          {c.label}
        </button>
      ))}
    </div>
  );
}