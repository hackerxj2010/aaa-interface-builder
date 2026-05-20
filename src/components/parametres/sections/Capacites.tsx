import { Switch } from "@/components/ui/switch";
import { useT } from "@/i18n/I18nProvider";

export function Capacites() {
  const t = useT();
  const toggles: [string, string, boolean][] = [
    [t("capacites.artifacts.title"), t("capacites.artifacts.desc"), false],
    [t("capacites.aiArtifacts.title"), t("capacites.aiArtifacts.desc"), true],
    [t("capacites.viz.title"), t("capacites.viz.desc"), true],
  ];
  return (
    <div className="space-y-10">
      <section className="space-y-0">
        {toggles.map(([title, d, on]) => (<Row key={title} title={title} desc={d} on={on} />))}
      </section>
      <section>
        <h2 className="mb-3 font-serif text-lg text-foreground">{t("capacites.exec.title")}</h2>
        <Row title={t("capacites.exec.title")} desc={t("capacites.exec.desc")} on={true} />
        <div className="mt-4 rounded-xl border border-border-subtle bg-surface p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[14px] text-foreground">{t("capacites.network.title")}</div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                {t("capacites.network.desc")}
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