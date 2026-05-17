import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { conversations } from "@/data/mockConversations";
import { projects } from "@/data/mockProjects";
import { MessagesSquare, FolderClosed } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export function SearchCommand() {
  const { open, setOpen } = useCommandPalette();
  const navigate = useNavigate();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Rechercher dans les discussions et projets…" />
      <CommandList>
        <CommandEmpty>Aucun résultat.</CommandEmpty>
        <CommandGroup heading="Discussions">
          {conversations.map((c) => (
            <CommandItem
              key={c.id}
              value={c.title}
              onSelect={() => {
                setOpen(false);
                navigate({ to: "/c/$conversationId", params: { conversationId: c.id } });
              }}
            >
              <MessagesSquare className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="flex-1 truncate">{c.title}</span>
              <span className="text-[11px] text-muted-foreground">{c.time}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projets">
          {projects.map((p) => (
            <CommandItem
              key={p.id}
              value={p.name}
              onSelect={() => {
                setOpen(false);
                navigate({ to: "/projets/$projectId", params: { projectId: p.id } });
              }}
            >
              <FolderClosed className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="flex-1 truncate">{p.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}