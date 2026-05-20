import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Plus,
  Search,
  MessagesSquare,
  FolderClosed,
  LayoutGrid,
  Code2,
  Briefcase,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ClaudeLogo } from "@/components/common/ClaudeLogo";
import { ProfileMenu } from "./ProfileMenu";
import { getFavorites, getConversations } from "@/data/mockConversations";
import { useCommandPalette } from "@/hooks/useCommandPalette";
import { useI18n } from "@/i18n/I18nProvider";

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const palette = useCommandPalette();
  const { t, locale } = useI18n();
  const favorites = getFavorites(locale);
  const conversations = getConversations(locale);

  const primary = [
    { title: t("nav.new"), url: "/", icon: Plus, exact: true },
    { title: t("nav.search"), url: "/__search", icon: Search, action: "search" as const },
    { title: t("nav.discussions"), url: "/discussions", icon: MessagesSquare },
    { title: t("nav.projects"), url: "/projets", icon: FolderClosed },
    { title: t("nav.artifacts"), url: "/artefacts", icon: LayoutGrid },
    { title: t("nav.code"), url: "/code", icon: Code2, badge: t("nav.upgrade") },
    { title: t("nav.customize"), url: "/personnaliser", icon: Briefcase },
  ];

  const isActive = (url: string) => (url === "/" ? path === "/" : path.startsWith(url));

  return (
    <Sidebar collapsible="icon" className="border-r border-border-subtle">
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <Link to="/" className="flex items-center gap-2">
            <ClaudeLogo size={22} className="text-primary" />
            {!collapsed && (
              <span className="font-serif text-2xl tracking-tight text-foreground">Claude</span>
            )}
          </Link>
          {!collapsed && <SidebarTrigger />}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {primary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild={item.action !== "search"}
                    isActive={item.action !== "search" && isActive(item.url)}
                    tooltip={item.title}
                    onClick={item.action === "search" ? () => palette.setOpen(true) : undefined}
                    className="data-[active=true]:bg-sidebar-accent"
                  >
                    {item.action === "search" ? (
                      <>
                        <item.icon className="h-4 w-4" />
                        <span className="text-[13.5px]">{item.title}</span>
                      </>
                    ) : (
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span className="flex-1 text-[13.5px]">{item.title}</span>
                        {item.badge && !collapsed && (
                          <Badge variant="secondary" className="text-[10px] font-normal">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel className="text-[11px] uppercase tracking-wider text-muted-foreground/70">
                {t("nav.favorites")}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {favorites.map((f) => (
                    <SidebarMenuItem key={f.id}>
                      <SidebarMenuButton asChild className="text-[13px]">
                        <Link to="/c/$conversationId" params={{ conversationId: f.id }}>
                          <span className="truncate">{f.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[11px] uppercase tracking-wider text-muted-foreground/70">
                {t("nav.recents")}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {conversations.slice(0, 8).map((c) => (
                    <SidebarMenuItem key={c.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={path === `/c/${c.id}`}
                        className="text-[13px]"
                      >
                        <Link to="/c/$conversationId" params={{ conversationId: c.id }}>
                          <span className="truncate">{c.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 px-1 py-1">
          <ProfileMenu collapsed={collapsed} />
          {!collapsed && (
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent"
              aria-label={t("profile.downloads")}
            >
              <Download className="h-4 w-4" />
            </button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}