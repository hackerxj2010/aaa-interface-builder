import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/code")({
  component: CodePage,
});

function CodePage() {
  const t = useT();
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center px-8 py-20 text-center">
      <h1 className="font-serif text-3xl text-foreground">{t("code.title")}</h1>
      <p className="mt-3 text-[14px] text-muted-foreground">{t("code.hint")}</p>
      <Button className="mt-6">{t("code.upgrade")}</Button>
    </div>
  );
}