import { createFileRoute } from "@tanstack/react-router";
import { ArtifactCard } from "@/components/artifacts/ArtifactCard";
import { artifacts } from "@/data/mockArtifacts";

export const Route = createFileRoute("/artefacts")({
  head: () => ({ meta: [{ title: "Claude — Artéfacts" }] }),
  component: Artefacts,
});

function Artefacts() {
  return (
    <div className="mx-auto w-full max-w-5xl px-8 py-10">
      <h1 className="mb-6 font-serif text-3xl text-foreground">Artéfacts</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {artifacts.map((a) => <ArtifactCard key={a.id} artifact={a} />)}
      </div>
    </div>
  );
}