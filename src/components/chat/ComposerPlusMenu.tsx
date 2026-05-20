import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Paperclip,
  Camera,
  FolderPlus,
  Scroll,
  Blocks,
  Globe,
  Feather,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useT } from "@/i18n/I18nProvider";

export function ComposerPlusMenu() {
  const t = useT();
  const [web, setWeb] = useState(true);
  const [drive, setDrive] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t("composerPlus.moreOptions")}
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="top" className="w-72">
        <DropdownMenuItem>
          <Paperclip className="mr-2 h-4 w-4" />
          {t("composerPlus.addFiles")}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Camera className="mr-2 h-4 w-4" />
          {t("composerPlus.screenshot")}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FolderPlus className="mr-2 h-4 w-4" /> {t("composerPlus.addToProject")}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <DropdownMenuItem>hire</DropdownMenuItem>
            <DropdownMenuItem>My Research Notes</DropdownMenuItem>
            <DropdownMenuItem>Code Review</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Scroll className="mr-2 h-4 w-4" /> {t("composerPlus.skills")}
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Blocks className="mr-2 h-4 w-4" /> {t("composerPlus.connectors")}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-72">
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-[13px]">Google Drive</span>
              <Switch checked={drive} onCheckedChange={setDrive} />
            </div>
            <DropdownMenuItem>{t("composerPlus.addFromDrive")}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{t("composerPlus.manageConnectors")}</DropdownMenuItem>
            <DropdownMenuItem>{t("composerPlus.addConnector")}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-0.5">
              <span>{t("composerPlus.toolsAccess")}</span>
              <span className="text-[11px] text-muted-foreground">{t("composerPlus.toolsAccessHint")}</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <div
          className="flex items-center px-2 py-1.5 text-[13px] text-primary"
          onClick={(e) => e.preventDefault()}
        >
          <Globe className="mr-2 h-4 w-4" />
          <span className="flex-1">{t("composerPlus.webSearch")}</span>
          <button onClick={() => setWeb(!web)} aria-label={t("composerPlus.toggleWeb")}>
            {web && <Check className="h-4 w-4" />}
          </button>
        </div>
        <DropdownMenuItem>
          <Feather className="mr-2 h-4 w-4" /> {t("composerPlus.useStyle")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}