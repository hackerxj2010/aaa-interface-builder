import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fields: { label: string; defaultValue?: string; type?: "select" }[] = [
  { label: "Nom complet", defaultValue: "Jean" },
  { label: "Comment souhaitez-vous que Claude vous appelle ?", defaultValue: "Create a prompt for me that say" },
  { label: "Quelle est la meilleure description de votre travail ?", type: "select" },
];

export function General() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 font-serif text-xl text-foreground">Profil</h2>
        <div className="divide-y divide-border-subtle">
          <Row label="Avatar">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-[12px] text-foreground">
              J
            </div>
          </Row>
          {fields.map((f) => (
            <Row key={f.label} label={f.label}>
              {f.type === "select" ? (
                <button className="rounded-md border border-border bg-surface px-3 py-1.5 text-[13px] text-muted-foreground">
                  Sélectionner ▾
                </button>
              ) : (
                <Input defaultValue={f.defaultValue} className="w-72" />
              )}
            </Row>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-serif text-xl text-foreground">Instructions pour Claude</h2>
        <p className="mb-3 text-[12.5px] text-muted-foreground">
          Claude gardera ces éléments à l'esprit dans les chats et Cowork, conformément aux
          directives d'Anthropic. <a className="underline">En savoir plus</a>
        </p>
        <Textarea
          placeholder="p. ex. poser des questions de clarification avant de donner des réponses détaillées"
          className="min-h-28"
        />
      </section>

      <section>
        <h2 className="mb-4 font-serif text-xl text-foreground">Préférences</h2>
        <div className="divide-y divide-border-subtle">
          <Row label="Thème">
            <span className="text-[13px] text-muted-foreground">Sombre</span>
          </Row>
          <Row label="Langue de l'interface">
            <span className="text-[13px] text-muted-foreground">Français</span>
          </Row>
        </div>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-[13.5px] text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}