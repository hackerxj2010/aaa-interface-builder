import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";
import { Settings, Globe, HelpCircle, ArrowUpCircle, Download, Info, LogOut } from "lucide-react";

export function ProfileMenu({ collapsed }: { collapsed: boolean }) {
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
              <span className="text-[11px] text-muted-foreground">Forfait Free</span>
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
            <Settings className="mr-2 h-4 w-4" /> Paramètres
            <span className="ml-auto text-[11px] text-muted-foreground">⇧⌃,</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Globe className="mr-2 h-4 w-4" /> Langue
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" /> Obtenir de l'aide
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-primary focus:text-primary">
          <ArrowUpCircle className="mr-2 h-4 w-4" /> Mettre à niveau l'abonnement
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" /> Obtenir des applications et extensions
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Info className="mr-2 h-4 w-4" /> En savoir plus
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" /> Se déconnecter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}