import type { Connector } from "@/data/mockConnectors";
import { Globe, Mail, Calendar, Github, HardDrive } from "lucide-react";

const iconFor = (id: string) => {
  switch (id) {
    case "gdrive": return HardDrive;
    case "gmail": return Mail;
    case "gcal": return Calendar;
    case "github": return Github;
    default: return Globe;
  }
};

export function ConnectorList({
  connectors,
  selectedId,
  onSelect,
}: {
  connectors: Connector[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const web = connectors.filter((c) => c.category === "web");
  const disconnected = connectors.filter((c) => c.category === "disconnected");

  const Row = ({ c }: { c: Connector }) => {
    const Icon = iconFor(c.id);
    const active = selectedId === c.id;
    return (
      <button
        onClick={() => onSelect(c.id)}
        className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-[13.5px] ${
          active ? "bg-surface-elevated text-foreground" : "text-foreground hover:bg-surface-elevated"
        }`}
      >
        <Icon className="h-4 w-4 text-muted-foreground" />
        {c.name}
      </button>
    );
  };

  return (
    <div className="space-y-4 p-2">
      <div>
        <div className="flex items-center gap-2 px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
          Web
        </div>
        {web.map((c) => <Row key={c.id} c={c} />)}
      </div>
      <div>
        <div className="flex items-center gap-2 px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
          Non connecté
        </div>
        {disconnected.map((c) => <Row key={c.id} c={c} />)}
      </div>
    </div>
  );
}