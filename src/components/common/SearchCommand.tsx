import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { getConversations } from "@/data/mockConversations";
import { getProjects } from "@/data/mockProjects";
import { MessagesSquare, FolderClosed } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";

export function SearchCommand() {
  const { open, setOpen } = useCommandPalette();
  const navigate = useNavigate();
  const { t, locale } = useI18n();
  const conversations = getConversations(locale);
  const projects = getProjects(locale);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t("search.placeholder")} />
      <CommandList>
        <CommandEmpty>{t("search.empty")}</CommandEmpty>
        <CommandGroup heading={t("search.discussionsHeading")}>
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
        <CommandGroup heading={t("search.projectsHeading")}>
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