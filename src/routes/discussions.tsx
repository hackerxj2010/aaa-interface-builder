import { createFileRoute, Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { conversations } from "@/data/mockConversations";
import { useState } from "react";

export const Route = createFileRoute("/discussions")({
  head: () => ({ meta: [{ title: "Claude — Discussions" }] }),
  component: Discussions,
});

function Discussions() {
  const [q, setQ] = useState("");
  const filtered = conversations.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="mx-auto w-full max-w-4xl px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-3xl text-foreground">Discussions</h1>
        <div className="flex gap-2">
          <Button variant="outline">Sélectionner des conversations</Button>
          <Button asChild><Link to="/">Nouvelle conversation</Link></Button>
        </div>
      </div>
      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher des conversations…" className="pl-9" />
      </div>
      <ul className="divide-y divide-border-subtle">
        {filtered.map((c) => (
          <li key={c.id}>
            <Link to="/c/$conversationId" params={{ conversationId: c.id }} className="flex items-center justify-between py-3 hover:bg-surface/50">
              <span className="text-[14px] text-foreground">{c.title}</span>
              <span className="text-[12px] text-muted-foreground">{c.time}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}