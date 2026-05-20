import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getProjects } from "@/data/mockProjects";
import { Composer } from "@/components/chat/Composer";
import { ProjectFilesDropzone } from "@/components/projects/ProjectFilesDropzone";
import { AddTextContentDialog } from "@/components/projects/AddTextContentDialog";
import { ArrowLeft, MoreHorizontal, Star, Plus, Lock, Upload, FileText, Github, HardDrive } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/projets/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { t, locale } = useI18n();
  const { projectId } = useParams({ from: "/projets/$projectId" });
  const projects = getProjects(locale);
  const p = projects.find((x) => x.id === projectId);
  const [textOpen, setTextOpen] = useState(false);
  if (!p) return <div className="p-10 text-muted-foreground">{t("project.notFound")}</div>;
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-8 py-10 lg:grid-cols-[1fr_340px]">
      <div>
        <Link to="/projets" className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t("project.backToAll")}
        </Link>
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="font-serif text-4xl text-foreground">{p.name}</h1>
            {p.description && <div className="mt-2 text-[13.5px] text-muted-foreground">{p.description}</div>}
          </div>
          <div className="flex items-center gap-1">
            <button className="rounded-md p-2 text-muted-foreground hover:bg-surface"><MoreHorizontal className="h-4 w-4" /></button>
            <button className="rounded-md p-2 text-muted-foreground hover:bg-surface"><Star className="h-4 w-4" /></button>
          </div>
        </div>
        <Composer placeholder={t("project.composerPlaceholder")} />
        <div className="mt-6 rounded-xl border border-border-subtle bg-surface px-8 py-10 text-center text-[13.5px] text-muted-foreground">
          {t("project.startHint")}
        </div>
      </div>
      <aside className="rounded-xl border border-border-subtle">
        <section className="border-b border-border-subtle p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-foreground">{t("project.memory")}</h3>
            <span className="inline-flex items-center gap-1 rounded-md border border-border-subtle px-2 py-0.5 text-[11px] text-muted-foreground">
              <Lock className="h-3 w-3" /> {t("project.youOnly")}
            </span>
          </div>
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            {t("project.memoryHint")}
          </p>
        </section>
        <section className="border-b border-border-subtle p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-foreground">{t("project.instructions")}</h3>
            <button className="rounded-md p-1 text-muted-foreground hover:bg-surface"><Plus className="h-4 w-4" /></button>
          </div>
          <p className="text-[12.5px] leading-relaxed text-muted-foreground">
            {p.instructions || t("project.instructionsPlaceholder")}
          </p>
        </section>
        <section className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-[14px] font-medium text-foreground">{t("project.files")}</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-md p-1 text-muted-foreground hover:bg-surface"><Plus className="h-4 w-4" /></button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuItem><Upload className="mr-2 h-4 w-4" /> {t("project.importDevice")}</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setTextOpen(true)}><FileText className="mr-2 h-4 w-4" /> {t("project.addText")}</DropdownMenuItem>
                <DropdownMenuItem><Github className="mr-2 h-4 w-4" /> GitHub</DropdownMenuItem>
                <DropdownMenuItem><HardDrive className="mr-2 h-4 w-4" /> Drive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ProjectFilesDropzone files={p.files} />
        </section>
      </aside>
      <AddTextContentDialog open={textOpen} onOpenChange={setTextOpen} />
    </div>
  );
}