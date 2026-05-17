import { ClaudeLogo } from "@/components/common/ClaudeLogo";

export function EmptyState({ greeting = "Réflexions de l'heure dorée" }: { greeting?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10">
      <ClaudeLogo size={28} className="text-primary" />
      <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">{greeting}</h1>
    </div>
  );
}