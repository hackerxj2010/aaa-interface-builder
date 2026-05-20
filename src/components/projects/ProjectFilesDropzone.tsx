import { FilePlus2 } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";
export function ProjectFilesDropzone({ files }: { files: { name: string; type: string; size: string }[] }) {
  const t = useT();
  if (files.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-surface p-8 text-center">
        <FilePlus2 className="h-6 w-6 text-muted-foreground" />
        <p className="text-[13px] text-muted-foreground">{t("project.dropzone")}</p>
      </div>
    );
  return (
    <ul className="space-y-2">
      {files.map((f) => (
        <li key={f.name} className="flex items-center justify-between rounded-md border border-border-subtle bg-surface px-3 py-2 text-[13px]">
          <span className="truncate text-foreground">{f.name}</span>
          <span className="text-muted-foreground">{f.type} · {f.size}</span>
        </li>
      ))}
    </ul>
  );
}