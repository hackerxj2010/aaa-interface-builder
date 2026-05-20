import { Link, useParams } from "@tanstack/react-router";
import { useT } from "@/i18n/I18nProvider";

export const sectionIds = [
  "general",
  "compte",
  "confidentialite",
  "facturation",
  "capacites",
  "connecteurs",
  "claude-code",
] as const;

export function SettingsNav() {
  const t = useT();
  const { section } = useParams({ from: "/parametres/$section" });
  return (
    <nav className="flex w-52 flex-col gap-0.5 py-6 pr-4">
      {sectionIds.map((id) => (
        <Link key={id} to="/parametres/$section" params={{ section: id }}
          className={`rounded-md px-3 py-1.5 text-left text-[13.5px] ${section === id ? "bg-surface-elevated text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}>
          {t(`settings.section.${id}` as never)}
        </Link>
      ))}
    </nav>
  );
}