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

export function ComposerPlusMenu() {
  const [web, setWeb] = useState(true);
  const [drive, setDrive] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Plus d'options"
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="top" className="w-72">
        <DropdownMenuItem>
          <Paperclip className="mr-2 h-4 w-4" />
          Ajouter des fichiers ou des photos
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Camera className="mr-2 h-4 w-4" />
          Prendre une capture d'écran
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <FolderPlus className="mr-2 h-4 w-4" /> Ajouter au projet
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-56">
            <DropdownMenuItem>hire</DropdownMenuItem>
            <DropdownMenuItem>My Research Notes</DropdownMenuItem>
            <DropdownMenuItem>Code Review</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Scroll className="mr-2 h-4 w-4" /> Compétences
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Blocks className="mr-2 h-4 w-4" /> Connecteurs
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-72">
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-[13px]">Google Drive</span>
              <Switch checked={drive} onCheckedChange={setDrive} />
            </div>
            <DropdownMenuItem>Ajouter depuis Google Drive</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Gérer les connecteurs</DropdownMenuItem>
            <DropdownMenuItem>+ Ajouter un connecteur</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-0.5">
              <span>Accès aux outils</span>
              <span className="text-[11px] text-muted-foreground">Charger les outils si nécessaire</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <div
          className="flex items-center px-2 py-1.5 text-[13px] text-primary"
          onClick={(e) => e.preventDefault()}
        >
          <Globe className="mr-2 h-4 w-4" />
          <span className="flex-1">Recherche Web</span>
          <button onClick={() => setWeb(!web)} aria-label="toggle web">
            {web && <Check className="h-4 w-4" />}
          </button>
        </div>
        <DropdownMenuItem>
          <Feather className="mr-2 h-4 w-4" /> Utiliser le style
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}