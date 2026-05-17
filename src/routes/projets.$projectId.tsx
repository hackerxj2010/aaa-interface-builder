import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { projects } from "@/data/mockProjects";
import { Composer } from "@/components/chat/Composer";
import { ProjectFilesDropzone } from "@/components/projects/ProjectFilesDropzone";
import { ArrowLeft, MoreHorizontal, Star, Plus } from "lucide-react";

export const Route = createFileRoute("/projets/$projectId")({
  head: () => ({ meta: [{ title: "Claude — Projet" }] }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = useParams({ from: "/projets/$projectId" });
  const p = projects.find((x) => x.id === projectId);
  if (!p) return <div className="p-10 text-muted-foreground">Projet introuvable.</div>;
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-[1fr_320px]">
      <div>
        <Link to="/projets" className="mb-3 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Tous les projets
        </Link>
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h1 className="font-serif text-3xl text-foreground">{p.name}</h1>
            {p.tag && <div className="mt-1 text-[12px] text-muted-foreground">{p.tag}</div>}
          </div>
          <div className="flex items-center gap-1">
            <button className="rounded-md p-2 text-muted-foreground hover:bg-surface"><MoreHorizontal className="h-4 w-4" /></button>
            <button className="rounded-md p-2 text-muted-foreground hover:bg-surface"><Star className="h-4 w-4" /></button>
          </div>
        </div>
        <Composer placeholder="Comment puis-je vous aider ?" />
        <div className="mt-8 rounded-xl border border-border-subtle bg-surface p-8 text-center text-[13.5px] text-muted-foreground">
          Démarrez une conversation pour organiser les échanges et réutiliser les connaissances du projet.
        </div>
      </div>
      <aside className="space-y-6">
        <section className="rounded-xl border border-border-subtle p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-foreground">Instructions</h3>
            <button className="text-muted-foreground"><Plus className="h-4 w-4" /></button>
          </div>
          <p className="text-[12.5px] text-muted-foreground">{p.instructions || "Ajouter des instructions pour personnaliser les réponses de Claude."}</p>
        </section>
        <section className="rounded-xl border border-border-subtle p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-foreground">Fichiers</h3>
            <button className="text-muted-foreground"><Plus className="h-4 w-4" /></button>
          </div>
          <ProjectFilesDropzone files={p.files} />
        </section>
      </aside>
    </div>
  );
}