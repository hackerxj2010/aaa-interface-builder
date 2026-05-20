import { createFileRoute } from "@tanstack/react-router";
import { ArtifactCard } from "@/components/artifacts/ArtifactCard";
import { getArtifacts } from "@/data/mockArtifacts";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/artefacts")({
  component: Artefacts,
});

function Artefacts() {
  const { t, locale } = useI18n();
  const artifacts = getArtifacts(locale);
  return (
    <div className="mx-auto w-full max-w-5xl px-8 py-10">
      <h1 className="mb-6 font-serif text-3xl text-foreground">{t("artifacts.title")}</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {artifacts.map((a) => <ArtifactCard key={a.id} artifact={a} />)}
      </div>
    </div>
  );
}