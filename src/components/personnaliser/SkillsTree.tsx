import type { Skill, SkillNode } from "@/data/mockSkills";
import { ChevronDown, ChevronRight, Folder, FileText, Scroll } from "lucide-react";
import { useState } from "react";

type SelectedFile = { name: string; content: string; language?: string };

function Node({
  node,
  depth,
  onPick,
  selectedName,
}: {
  node: SkillNode;
  depth: number;
  onPick: (f: SelectedFile) => void;
  selectedName: string | null;
}) {
  const [open, setOpen] = useState(depth < 1);
  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] text-foreground hover:bg-surface-elevated"
          style={{ paddingLeft: 8 + depth * 14 }}
        >
          {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          <Folder className="h-4 w-4 text-muted-foreground" />
          <span>{node.name}</span>
        </button>
        {open &&
          node.children?.map((c) => (
            <Node key={c.name} node={c} depth={depth + 1} onPick={onPick} selectedName={selectedName} />
          ))}
      </div>
    );
  }
  const isActive = selectedName === node.name;
  return (
    <button
      onClick={() => onPick({ name: node.name, content: node.content ?? "", language: node.language })}
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] ${
        isActive ? "bg-surface-elevated text-foreground" : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
      }`}
      style={{ paddingLeft: 22 + depth * 14 }}
    >
      <FileText className="h-3.5 w-3.5" />
      <span>{node.name}</span>
    </button>
  );
}

export function SkillsTree({
  skill,
  onPick,
  selectedName,
}: {
  skill: Skill;
  onPick: (f: SelectedFile) => void;
  selectedName: string | null;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13.5px] font-medium text-foreground">
        <Scroll className="h-4 w-4 text-primary" />
        {skill.name}
      </div>
      {skill.tree.map((n) => (
        <Node key={n.name} node={n} depth={1} onPick={onPick} selectedName={selectedName} />
      ))}
    </div>
  );
}