import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/I18nProvider";
import { localeNames } from "@/i18n/translations";

export function General() {
  const { t, locale } = useI18n();
  const fields: { label: string; defaultValue?: string; type?: "select" }[] = [
    { label: t("settings.general.fullName"), defaultValue: "Jean" },
    { label: t("settings.general.callYou"), defaultValue: "Create a prompt for me that say" },
    { label: t("settings.general.work"), type: "select" },
  ];
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 font-serif text-xl text-foreground">{t("settings.general.profile")}</h2>
        <div className="divide-y divide-border-subtle">
          <Row label={t("settings.general.avatar")}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-[12px] text-foreground">
              J
            </div>
          </Row>
          {fields.map((f) => (
            <Row key={f.label} label={f.label}>
              {f.type === "select" ? (
                <button className="rounded-md border border-border bg-surface px-3 py-1.5 text-[13px] text-muted-foreground">
                  {t("settings.general.select")} ▾
                </button>
              ) : (
                <Input defaultValue={f.defaultValue} className="w-72" />
              )}
            </Row>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 font-serif text-xl text-foreground">{t("settings.general.instructions")}</h2>
        <p className="mb-3 text-[12.5px] text-muted-foreground">
          {t("settings.general.instructionsHint")} <a className="underline">{t("settings.general.learnMore")}</a>
        </p>
        <Textarea
          placeholder={t("settings.general.instructionsPlaceholder")}
          className="min-h-28"
        />
      </section>

      <section>
        <h2 className="mb-4 font-serif text-xl text-foreground">{t("settings.general.preferences")}</h2>
        <div className="divide-y divide-border-subtle">
          <Row label={t("settings.general.theme")}>
            <span className="text-[13px] text-muted-foreground">{t("settings.general.themeDark")}</span>
          </Row>
          <Row label={t("settings.general.uiLanguage")}>
            <span className="text-[13px] text-muted-foreground">{localeNames[locale]}</span>
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