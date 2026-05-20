import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, X } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

type Props = { title: string; code: string; onClose?: () => void };

export function ArtifactPanel({ title, code, onClose }: Props) {
  const t = useT();
  return (
    <aside className="flex h-full w-[460px] flex-col border-l border-border-subtle bg-surface">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <div className="truncate text-[14px] font-medium text-foreground">{title}</div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-8">
            <Copy className="mr-1.5 h-3.5 w-3.5" /> {t("artifact.copy")}
          </Button>
          <Button size="sm" className="h-8">{t("artifact.publish")}</Button>
          {onClose && (
            <button onClick={onClose} className="ml-1 rounded-md p-1 text-muted-foreground hover:bg-background">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      <Tabs defaultValue="preview" className="flex flex-1 flex-col">
        <TabsList className="mx-4 mt-3 self-start">
          <TabsTrigger value="preview">{t("artifact.preview")}</TabsTrigger>
          <TabsTrigger value="code">{t("artifact.code")}</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="flex-1 overflow-auto p-4">
          <div className="prose prose-invert max-w-none">
            <h2 className="font-serif">{t("artifact.thalesHeading")}</h2>
            <p>{t("artifact.thalesBody")}</p>
            <pre className="rounded-md bg-background p-3 text-[13px]">AB/AD = AC/AE = BC/DE</pre>
          </div>
        </TabsContent>
        <TabsContent value="code" className="flex-1 overflow-auto p-4">
          <pre className="rounded-md bg-background p-3 text-[12.5px] leading-relaxed text-muted-foreground">
            <code>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </aside>
  );
}