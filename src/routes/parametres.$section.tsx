import { createFileRoute, useParams } from "@tanstack/react-router";
import { SettingsNav } from "@/components/parametres/SettingsNav";
import { General } from "@/components/parametres/sections/General";
import { Capacites } from "@/components/parametres/sections/Capacites";
import { SimpleSection } from "@/components/parametres/sections/Simple";

export const Route = createFileRoute("/parametres/$section")({
  head: () => ({ meta: [{ title: "Claude — Paramètres" }] }),
  component: Settings,
});

function Settings() {
  const { section } = useParams({ from: "/parametres/$section" });
  return (
    <div className="mx-auto flex w-full max-w-5xl px-8 py-10">
      <SettingsNav />
      <div className="min-w-0 flex-1 pl-6">
        <h1 className="mb-8 font-serif text-3xl text-foreground">Paramètres</h1>
        {section === "general" && <General />}
        {section === "capacites" && <Capacites />}
        {section === "compte" && <SimpleSection title="Compte" lines={["Gérez votre adresse e-mail, votre mot de passe et la sécurité de votre compte."]} />}
        {section === "confidentialite" && <SimpleSection title="Confidentialité" lines={["Contrôlez comment vos données sont utilisées et conservées."]} />}
        {section === "facturation" && <SimpleSection title="Facturation" lines={["Forfait Free actif. Mettez à niveau pour débloquer plus de messages."]} />}
        {section === "connecteurs" && <SimpleSection title="Connecteurs" lines={["Gérez vos connecteurs depuis Personnaliser > Connecteurs."]} />}
        {section === "claude-code" && <SimpleSection title="Claude Code" lines={["Configurez l'intégration Claude Code et les modèles autorisés."]} />}
      </div>
    </div>
  );
}