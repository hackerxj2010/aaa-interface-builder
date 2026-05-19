import { ClaudeLogo } from "@/components/common/ClaudeLogo";
import { useT } from "@/i18n/I18nProvider";

export function EmptyState({ greeting }: { greeting?: string }) {
  const t = useT();
  const text = greeting ?? t("home.greeting");
  return (
    <div className="flex items-center justify-center gap-3 py-10">
      <ClaudeLogo size={28} className="text-primary" />
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">{text}</h1>
    </div>
  );
}