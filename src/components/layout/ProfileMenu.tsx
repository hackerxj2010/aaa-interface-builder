import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";
import { Settings, Globe, HelpCircle, ArrowUpCircle, Download, Info, LogOut } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { locales, localeNames, type Locale } from "@/i18n/translations";

export function ProfileMenu({ collapsed }: { collapsed: boolean }) {
  const { locale, setLocale, t } = useI18n();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex flex-1 items-center gap-2 rounded-md p-1.5 text-left hover:bg-sidebar-accent">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-muted text-[12px] text-foreground">J</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-[13px] font-medium text-sidebar-foreground">Jean</span>
              <span className="text-[11px] text-muted-foreground">{t("plan.free")}</span>
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" className="w-64">
        <DropdownMenuLabel className="font-normal text-muted-foreground">
          hackermechatronicrobotengineer@…
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/parametres/$section" params={{ section: "general" }}>
            <Settings className="mr-2 h-4 w-4" /> {t("profile.settings")}
            <span className="ml-auto text-[11px] text-muted-foreground">⇧⌃,</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Globe className="mr-2 h-4 w-4" /> {t("profile.language")}
            <span className="ml-auto text-[11px] text-muted-foreground">{localeNames[locale]}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup
              value={locale}
              onValueChange={(v) => setLocale(v as Locale)}
            >
              {locales.map((l) => (
                <DropdownMenuRadioItem key={l} value={l}>
                  {localeNames[l]}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" /> {t("profile.help")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-primary focus:text-primary">
          <ArrowUpCircle className="mr-2 h-4 w-4" /> {t("profile.upgrade")}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" /> {t("profile.apps")}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Info className="mr-2 h-4 w-4" /> {t("profile.learnMore")}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" /> {t("profile.logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}