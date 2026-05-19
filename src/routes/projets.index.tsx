import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/mockProjects";
import { Search, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { NewProjectDialog } from "@/components/projects/NewProjectDialog";

export const Route = createFileRoute("/projets/")({
  head: () => ({ meta: [{ title: "Claude — Projets" }] }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = useMemo(
    () => projects.filter((p) => p.name.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  return (
    <div className="mx-auto w-full max-w-5xl px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-3xl text-foreground">Projets</h1>
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-muted-foreground">Trier par</span>
          <button className="flex items-center gap-1.5 rounded-md border border-border-subtle bg-surface px-3 py-1.5 text-[13px] text-foreground hover:bg-surface-elevated">
            Activité <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <Button onClick={() => setOpen(true)} className="bg-foreground text-background hover:bg-foreground/90">
            Nouveau projet
          </Button>
        </div>
      </div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher des projets…"
          className="w-full rounded-lg border border-border-subtle bg-surface py-2.5 pl-10 pr-3 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-border focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to="/projets/$projectId"
            params={{ projectId: p.id }}
            className="group flex min-h-[170px] flex-col rounded-xl border border-border-subtle bg-surface p-5 transition hover:bg-surface-elevated"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="font-serif text-xl text-foreground">{p.name}</span>
              {p.tag && (
                <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{p.tag}</span>
              )}
            </div>
            <p className="line-clamp-3 flex-1 text-[13px] leading-relaxed text-muted-foreground">{p.description}</p>
            {p.updatedAt && (
              <div className="mt-4 text-[12px] text-muted-foreground/70">Mis à jour {p.updatedAt}</div>
            )}
          </Link>
        ))}
      </div>
      <NewProjectDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}