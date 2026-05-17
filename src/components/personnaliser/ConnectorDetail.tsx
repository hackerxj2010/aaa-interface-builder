import type { Connector } from "@/data/mockConnectors";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, HandIcon, Ban } from "lucide-react";

function Approval({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      <CheckCircle2 className={`h-4 w-4 ${value === "auto" ? "text-primary" : ""}`} />
      <HandIcon className={`h-4 w-4 ${value === "ask" ? "text-foreground" : ""}`} />
      <Ban className={`h-4 w-4 ${value === "never" ? "text-destructive" : ""}`} />
    </div>
  );
}

export function ConnectorDetail({ connector }: { connector: Connector }) {
  if (!connector.connected) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
        <h2 className="font-serif text-2xl">{connector.name}</h2>
        <p className="max-w-md text-[13.5px] text-muted-foreground">
          Ce connecteur n'est pas encore connecté. Connectez-vous pour donner à Claude
          l'accès à vos données.
        </p>
        <Button>Se connecter</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl text-foreground">{connector.name}</h2>
        <Button variant="outline" size="sm">Déconnecter</Button>
      </div>
      {connector.description && (
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">{connector.description}</p>
      )}

      <div>
        <h3 className="mb-1 text-[14px] font-medium text-foreground">Autorisations des outils</h3>
        <p className="mb-3 text-[12.5px] text-muted-foreground">
          Choisissez quand Claude est autorisé à utiliser ces outils.
        </p>
        <Accordion type="multiple" defaultValue={["read"]} className="space-y-2">
          {connector.readPermissions && (
            <AccordionItem value="read" className="rounded-lg border border-border-subtle px-3">
              <AccordionTrigger className="text-[13.5px]">
                <span>Outils en lecture seule</span>
                <span className="ml-2 rounded-full bg-surface px-2 text-[11px] text-muted-foreground">
                  {connector.readPermissions.length}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y divide-border-subtle">
                  {connector.readPermissions.map((p) => (
                    <li key={p.name} className="flex items-center justify-between py-2 text-[13px]">
                      <span className="font-mono text-muted-foreground">{p.name}</span>
                      <Approval value={p.approval} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
          {connector.writePermissions && (
            <AccordionItem value="write" className="rounded-lg border border-border-subtle px-3">
              <AccordionTrigger className="text-[13.5px]">
                <span>Outils d'écriture</span>
                <span className="ml-2 rounded-full bg-surface px-2 text-[11px] text-muted-foreground">
                  {connector.writePermissions.length}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="divide-y divide-border-subtle">
                  {connector.writePermissions.map((p) => (
                    <li key={p.name} className="flex items-center justify-between py-2 text-[13px]">
                      <span className="font-mono text-muted-foreground">{p.name}</span>
                      <Approval value={p.approval} />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  );
}