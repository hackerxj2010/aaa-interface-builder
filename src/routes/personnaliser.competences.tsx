import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SkillsTree } from "@/components/personnaliser/SkillsTree";
import { skills } from "@/data/mockSkills";
import { Plus, Search } from "lucide-react";

export const Route = createFileRoute("/personnaliser/competences")({
  head: () => ({ meta: [{ title: "Claude — Compétences" }] }),
  component: Competences,
});

function Competences() {
  const skill = skills[0];
  const refsFolder = skill.tree.find((n) => n.name === "references");
  const initial = refsFolder?.children?.[0];
  const [picked, setPicked] = useState<{ name: string; content: string; language?: string } | null>(
    initial ? { name: initial.name, content: initial.content ?? "", language: initial.language } : null
  );
  return (
    <div className="flex h-full">
      <div className="w-80 border-r border-border-subtle">
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
          <h2 className="font-serif text-lg text-foreground">Compétences</h2>
          <div className="flex items-center gap-1">
            <button className="rounded-md p-1.5 text-muted-foreground hover:bg-surface"><Search className="h-4 w-4" /></button>
            <button className="rounded-md p-1.5 text-muted-foreground hover:bg-surface"><Plus className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="px-2 py-3">
          <div className="mb-2 px-2 text-[12px] text-muted-foreground">Compétences personnelles</div>
          <SkillsTree skill={skill} onPick={setPicked} selectedName={picked?.name ?? null} />
        </div>
      </div>
      <div className="min-w-0 flex-1 overflow-auto">
        <div className="border-b border-border-subtle px-6 py-3 text-[13.5px] text-foreground">{picked?.name ?? "Sélectionnez un fichier"}</div>
        <pre className="whitespace-pre-wrap px-6 py-4 text-[13px] leading-relaxed text-foreground">{picked?.content ?? ""}</pre>
      </div>
    </div>
  );
}