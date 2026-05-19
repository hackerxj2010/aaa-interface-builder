import { createFileRoute } from "@tanstack/react-router";
import { EmptyState } from "@/components/chat/EmptyState";
import { Composer } from "@/components/chat/Composer";
import { QuickActionChips } from "@/components/chat/QuickActionChips";
import { UpgradeBanner } from "@/components/layout/UpgradeBanner";
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Claude — Nouvelle conversation" }] }),
  component: Index,
});

function Index() {
  const t = useT();
  return (
    <div className="flex h-full flex-1 flex-col">
      <header className="flex items-center justify-center px-6 py-3">
        <div className="rounded-full border border-border-subtle bg-surface px-3 py-1 text-[12px] text-muted-foreground">
          {t("plan.free")} · <button className="text-foreground underline">{t("nav.upgrade")}</button>
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

