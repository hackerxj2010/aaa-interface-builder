import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ConnectorList } from "@/components/personnaliser/ConnectorList";
import { ConnectorDetail } from "@/components/personnaliser/ConnectorDetail";
import { getConnectors } from "@/data/mockConnectors";
import { Plus, Search } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/personnaliser/connecteurs")({
  component: Connecteurs,
});

function Connecteurs() {
  const { t, locale } = useI18n();
  const connectors = getConnectors(locale);
  const [selectedId, setSelectedId] = useState(connectors[0].id);
  const selected = connectors.find((c) => c.id === selectedId)!;
  return (
    <div className="flex h-full">
      <div className="w-80 border-r border-border-subtle">
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
          <h2 className="font-serif text-lg text-foreground">{t("personnaliser.connectors")}</h2>
          <div className="flex items-center gap-1">
            <button className="rounded-md p-1.5 text-muted-foreground hover:bg-surface"><Search className="h-4 w-4" /></button>
            <button className="rounded-md p-1.5 text-muted-foreground hover:bg-surface"><Plus className="h-4 w-4" /></button>
          </div>
        </div>
        <ConnectorList connectors={connectors} selectedId={selectedId} onSelect={setSelectedId} />
      </div>
      <div className="min-w-0 flex-1 overflow-auto"><ConnectorDetail connector={selected} /></div>
    </div>
  );
}