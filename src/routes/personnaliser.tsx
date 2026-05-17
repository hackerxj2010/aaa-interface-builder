import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Scroll, Blocks, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/personnaliser")({
  head: () => ({ meta: [{ title: "Claude — Personnaliser" }] }),
  component: PersonnaliserLayout,
});

function PersonnaliserLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const items = [
    { to: "/personnaliser/competences" as const, label: "Compétences", icon: Scroll },
    { to: "/personnaliser/connecteurs" as const, label: "Connecteurs", icon: Blocks },
  ];
  return (
    <div className="flex h-full flex-1">
      <aside className="w-60 border-r border-border-subtle px-3 py-6">
        <Link to="/" className="mb-4 flex items-center gap-2 px-2 text-[14px] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Personnaliser
        </Link>
        <nav className="space-y-1">
          {items.map((i) => (
            <Link key={i.to} to={i.to} className={`flex items-center gap-2 rounded-md px-3 py-2 text-[13.5px] ${path === i.to ? "bg-surface-elevated text-foreground" : "text-muted-foreground hover:bg-surface hover:text-foreground"}`}>
              <i.icon className="h-4 w-4" /> {i.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="min-w-0 flex-1"><Outlet /></div>
    </div>
  );
}