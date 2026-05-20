import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useT } from "@/i18n/I18nProvider";

type Props = { open: boolean; onOpenChange: (o: boolean) => void; onAdd?: (title: string, content: string) => void };

export function AddTextContentDialog({ open, onOpenChange, onAdd }: Props) {
  const t = useT();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-border-subtle bg-background p-7 sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal text-foreground">{t("addText.title")}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-4">
          <div>
            <label className="mb-2 block text-[13px] text-foreground">{t("addText.label")} <span className="text-primary">*</span></label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("addText.titlePlaceholder")}
              autoFocus
              className="w-full rounded-lg border border-primary bg-surface px-3 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13px] text-foreground">{t("addText.content")} <span className="text-primary">*</span></label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t("addText.contentPlaceholder")}
              rows={10}
              className="w-full resize-none rounded-lg border border-border-subtle bg-surface px-3 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-border focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>{t("dialog.cancel")}</Button>
          <Button
            className="bg-foreground text-background hover:bg-foreground/90"
            disabled={!title || !content}
            onClick={() => { onAdd?.(title, content); onOpenChange(false); setTitle(""); setContent(""); }}
          >
            {t("addText.submit")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}