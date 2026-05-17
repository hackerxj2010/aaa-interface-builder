import type { Artifact } from "@/data/mockArtifacts";
import { Code2, FileText, Image as ImageIcon, Download } from "lucide-react";

const iconFor = (kind: Artifact["kind"]) =>
  kind === "code" ? Code2 : kind === "image" ? ImageIcon : FileText;

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  const Icon = iconFor(artifact.kind);
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-3 transition hover:bg-surface-elevated">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] text-foreground">{artifact.title}</div>
        <div className="truncate text-[12px] text-muted-foreground">
          {artifact.kind === "code" ? `Code · ${artifact.language ?? "JSX"}` : "Document"} ·{" "}
          {artifact.updatedAt}
        </div>
      </div>
      <button
        className="rounded-md p-2 text-muted-foreground opacity-0 transition hover:bg-background hover:text-foreground group-hover:opacity-100"
        aria-label="Télécharger"
      >
        <Download className="h-4 w-4" />
      </button>
    </div>
  );
}