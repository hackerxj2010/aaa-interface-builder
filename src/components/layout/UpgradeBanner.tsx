import { useT } from "@/i18n/I18nProvider";

export function UpgradeBanner() {
  const t = useT();
  const msg = t("banner.outOfMessages");
  const word = t("banner.messagesWord");
  const parts = msg.split(word);
  return (
    <div className="mt-3 flex items-center justify-between rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-[13px]">
      <span className="text-muted-foreground">
        {parts[0]}<span className="underline">{word}</span>{parts[1] ?? ""}
      </span>
      <button className="font-medium text-foreground underline-offset-2 hover:underline">
        {t("nav.upgrade")}
      </button>
    </div>
  );
}