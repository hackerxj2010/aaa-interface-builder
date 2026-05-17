import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/mockProjects";
import { FolderClosed } from "lucide-react";

export const Route = createFileRoute("/projets/")({
  head: () => ({ meta: [{ title: "Claude — Projets" }] }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="mx-auto w-full max-w-5xl px-8 py-10">
      <h1 className="mb-6 font-serif text-3xl text-foreground">Projets</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.id} to="/projets/$projectId" params={{ projectId: p.id }} className="group rounded-xl border border-border-subtle bg-surface p-4 transition hover:bg-surface-elevated">
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <FolderClosed className="h-4 w-4" />
              {p.tag && <span className="rounded-full bg-muted px-2 py-0.5 text-[11px]">{p.tag}</span>}
            </div>
            <div className="font-serif text-lg text-foreground">{p.name}</div>
            <div className="mt-1 line-clamp-2 text-[12.5px] text-muted-foreground">{p.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}