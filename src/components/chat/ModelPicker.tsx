import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { useT } from "@/i18n/I18nProvider";

const models = ["Sonnet 4.6", "Opus 4.6", "Haiku 4.6"];

export function ModelPicker() {
  const t = useT();
  const modes = [t("model.adaptive"), t("model.extended"), t("model.fast")];
  const [model, setModel] = useState("Sonnet 4.6");
  const [mode, setMode] = useState(modes[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[13px] text-muted-foreground hover:bg-surface-elevated hover:text-foreground">
          <span className="text-foreground">{model}</span>
          <span>{mode}</span>
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{t("model.model")}</DropdownMenuLabel>
        {models.map((m) => (
          <DropdownMenuItem key={m} onSelect={() => setModel(m)}>
            {m}
            {m === model && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{t("model.mode")}</DropdownMenuLabel>
        {modes.map((m) => (
          <DropdownMenuItem key={m} onSelect={() => setMode(m)}>
            {m}
            {m === mode && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}