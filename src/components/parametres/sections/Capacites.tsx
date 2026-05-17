import { Switch } from "@/components/ui/switch";

const toggles: [string, string, boolean][] = [
  ["Artéfacts", "Générez du code, des documents et des designs dans une fenêtre dédiée à côté de votre conversation.", false],
  ["Artefacts propulsés par l'IA", "Créez des applications et des documents interactifs qui utilisent Claude dans l'artefact.", true],
  ["Visualisations intégrées", "Permettre à Claude de générer des visualisations interactives, des graphiques et des diagrammes directement dans la conversation.", true],
];

export function Capacites() {
  return (
    <div className="space-y-10">
      <section className="space-y-0">
        {toggles.map(([t, d, on]) => (<Row key={t} title={t} desc={d} on={on} />))}
      </section>
      <section>
        <h2 className="mb-3 font-serif text-lg text-foreground">Exécution de code et création de fichiers</h2>
        <Row title="Exécution de code et création de fichiers" desc="Claude peut exécuter du code et créer et modifier des documents, des feuilles de calcul, des présentations, des PDF et des rapports de données. Requis pour les skills." on={true} />
        <div className="mt-4 rounded-xl border border-border-subtle bg-surface p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[14px] text-foreground">Autoriser la sortie réseau</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                Autoriser Claude à accéder aux gestionnaires de paquets courants pour installer des paquets et des bibliothèques.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>
    </div>
  );
}

function Row({ title, desc, on }: { title: string; desc: string; on: boolean }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border-subtle py-4 last:border-b-0">
      <div>
        <div className="text-[14px] text-foreground">{title}</div>
        <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground">{desc}</p>
      </div>
      <Switch defaultChecked={on} />
    </div>
  );
}