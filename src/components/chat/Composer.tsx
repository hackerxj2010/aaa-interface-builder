import { useState, type FormEvent } from "react";
import { ComposerPlusMenu } from "./ComposerPlusMenu";
import { ModelPicker } from "./ModelPicker";
import { AudioLines } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

type Props = {
  placeholder?: string;
  onSend?: (text: string) => void;
  autoFocus?: boolean;
};

export function Composer({ placeholder, onSend, autoFocus }: Props) {
  const t = useT();
  const [value, setValue] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onSend?.(text);
    setValue("");
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border-subtle bg-surface px-4 pb-2 pt-3 shadow-sm focus-within:border-border"
    >
      <textarea
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ?? t("composer.placeholder")}
        rows={2}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit(e as unknown as FormEvent);
          }
        }}
        className="block w-full resize-none bg-transparent text-[14.5px] leading-relaxed text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
      />
      <div className="mt-1 flex items-center justify-between">
        <ComposerPlusMenu />
        <div className="flex items-center gap-1">
          <ModelPicker />
          <button
            type="button"
            aria-label={t("composer.dictation")}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
          >
            <AudioLines className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}