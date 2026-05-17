import { createFileRoute } from "@tanstack/react-router";
import { EmptyState } from "@/components/chat/EmptyState";
import { Composer } from "@/components/chat/Composer";
import { QuickActionChips } from "@/components/chat/QuickActionChips";
import { UpgradeBanner } from "@/components/layout/UpgradeBanner";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Claude — Nouvelle conversation" }] }),
  component: Index,
});

function Index() {
  return (
    <div className="flex h-full flex-1 flex-col">
      <header className="flex items-center justify-center px-6 py-3">
        <div className="rounded-full border border-border-subtle bg-surface px-3 py-1 text-[12px] text-muted-foreground">
          Forfait Free · <button className="text-foreground underline">Mettre à niveau</button>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 pb-10">
        <EmptyState />
        <div className="mt-6">
          <Composer autoFocus />
          <UpgradeBanner />
          <QuickActionChips />
        </div>
      </main>
    </div>
  );
}

