import { createFileRoute, useParams } from "@tanstack/react-router";
import { SettingsNav } from "@/components/parametres/SettingsNav";
import { General } from "@/components/parametres/sections/General";
import { Capacites } from "@/components/parametres/sections/Capacites";
import { SimpleSection } from "@/components/parametres/sections/Simple";
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/parametres/$section")({
  component: Settings,
});

function Settings() {
  const t = useT();
  const { section } = useParams({ from: "/parametres/$section" });
  return (
    <div className="mx-auto flex w-full max-w-5xl px-8 py-10">
      <SettingsNav />
      <div className="min-w-0 flex-1 pl-6">
        <h1 className="mb-8 font-serif text-3xl text-foreground">{t("settings.title")}</h1>
        {section === "general" && <General />}
        {section === "capacites" && <Capacites />}
        {section === "compte" && <SimpleSection title={t("settings.section.compte")} lines={[t("settings.compte.line1")]} />}
        {section === "confidentialite" && <SimpleSection title={t("settings.section.confidentialite")} lines={[t("settings.confidentialite.line1")]} />}
        {section === "facturation" && <SimpleSection title={t("settings.section.facturation")} lines={[t("settings.facturation.line1")]} />}
        {section === "connecteurs" && <SimpleSection title={t("settings.section.connecteurs")} lines={[t("settings.connecteurs.line1")]} />}
        {section === "claude-code" && <SimpleSection title={t("settings.section.claude-code")} lines={[t("settings.claudecode.line1")]} />}
      </div>
    </div>
  );
}