## Goal

Rebuild the pasted 680-line monolith as a polished, modular Claude.ai-style assistant UI, covering every screen shown in the 35 screenshots. UI-only for now (no backend / no real model calls) — a faithful, production-grade frontend that can later plug into Lovable AI / Cloud.

## Scope (screens to build, from screenshots)

- Chat home — empty state "Réflexions de l'heure dorée", composer with `+` menu, model picker (Sonnet 4.6 · Adaptatif), action chips (Écrire, Apprendre, Code, Vie quotidienne, Depuis Drive), Free plan banner.
- Active conversation — message stream, user bubble vs assistant (no bg, serif "Claude" label), action row (👍 👎 copier, régénérer), artifact side-panel toggle.
- Sidebar — Logo "Claude", Nouvelle conversation, Rechercher, Discussions, Projets, Artéfacts, Code (Upgrade badge), Personnaliser, Favoris, Récents, profile footer with dropdown (email, Paramètres, Langue, Aide, Mettre à niveau, Obtenir des applications, En savoir plus, Se déconnecter).
- Discussions page — search, list of conversations grouped by time, "Sélectionner / Nouvelle conversation".
- Projets list + Projet detail — title, tag, "Comment puis-je vous aider ?" composer, Instructions panel, Fichiers panel with drop zone.
- Artéfacts page (gallery) + Artefact side-panel inside a chat (preview / code tabs, download).
- Composer `+` popover — Ajouter des fichiers, Capture, Ajouter au projet, Compétences, Connecteurs (nested: Google Drive toggle, Gérer/Ajouter connecteur, Accès aux outils), Recherche Web, Utiliser le style.
- Personnaliser — two tabs: Compétences (tree view with files: skill-creator/SKILL.md, agents/, assets/, eval-viewer/, references/schemas.md, scripts/) with markdown preview pane; Connecteurs (Web > Google Drive connected, Non connecté > Gmail, Calendar, GitHub) with permissions list (download_file_content, get_file_metadata…) and approval state icons.
- Paramètres modal/page — sections: Général, Compte, Confidentialité, Facturation, Capacités (Artéfacts, Artefacts IA, Visualisations intégrées, Exécution de code, Autoriser sortie réseau, Compétences), Connecteurs, Claude Code.
- Search modal (Cmd+K).
- Free-plan upsell banner + "Mettre à niveau" CTA.

## Architecture

```
src/
  routes/
    __root.tsx                 ← shell + SidebarProvider + QueryClient
    index.tsx                  ← /            chat home (empty state)
    c.$conversationId.tsx      ← /c/:id       active conversation
    discussions.tsx            ← /discussions
    projets.index.tsx          ← /projets
    projets.$projectId.tsx     ← /projets/:id
    artefacts.tsx              ← /artefacts
    code.tsx                   ← /code (upgrade placeholder)
    personnaliser.tsx          ← /personnaliser   (layout w/ Outlet)
    personnaliser.competences.tsx
    personnaliser.connecteurs.tsx
    parametres.tsx             ← /parametres      (layout)
    parametres.$section.tsx    ← /parametres/general|compte|...
  components/
    layout/
      AppSidebar.tsx
      ProfileMenu.tsx
      TopBar.tsx
      UpgradeBanner.tsx
    chat/
      Composer.tsx
      ComposerPlusMenu.tsx
      ModelPicker.tsx
      QuickActionChips.tsx
      MessageList.tsx
      MessageBubble.tsx
      MessageActions.tsx
      EmptyState.tsx
      ConversationHeader.tsx
    artifacts/
      ArtifactPanel.tsx
      ArtifactCard.tsx
      ArtifactGallery.tsx
    projects/
      ProjectCard.tsx
      ProjectInstructions.tsx
      ProjectFilesDropzone.tsx
    personnaliser/
      SkillsTree.tsx
      SkillFilePreview.tsx
      ConnectorList.tsx
      ConnectorDetail.tsx
      PermissionRow.tsx
    parametres/
      SettingsNav.tsx
      sections/General.tsx
      sections/Compte.tsx
      sections/Confidentialite.tsx
      sections/Facturation.tsx
      sections/Capacites.tsx
      sections/Connecteurs.tsx
      sections/ClaudeCode.tsx
    common/
      SearchCommand.tsx        ← Cmd+K dialog
      IconBadge.tsx
      SectionHeader.tsx
  data/
    mockConversations.ts
    mockProjects.ts
    mockSkills.ts
    mockConnectors.ts
    mockArtifacts.ts
  hooks/
    useSidebarState.ts
    useCommandPalette.ts
  lib/
    icons.ts                   ← typed lucide re-exports
    formatters.ts
```

All data is mock for now (typed in `src/data/*`), wired through small hooks so a backend can replace them later.

## Design system

- Dark-first Claude aesthetic: warm near-black background, off-white text, signature orange/coral accent.
- Tokens added to `src/styles.css` (oklch) — never inline hex in components:
  - `--background`, `--foreground`, `--surface`, `--surface-elevated`, `--border-subtle`
  - `--accent` (Claude coral ≈ `oklch(0.72 0.14 45)`), `--accent-foreground`
  - `--sidebar`, `--sidebar-foreground`, `--muted-foreground`
- Typography: import Google Fonts `DM Serif Display` (headings, brand) + `DM Sans` (UI/body) in `__root.tsx` head links; expose as `--font-serif` / `--font-sans`.
- Replace all hand-rolled SVGs with `lucide-react` icons (already typical in the template).
- Reuse shadcn primitives for: Dialog (Paramètres, Search), DropdownMenu (profile, + menu), Tabs (Personnaliser sections), Accordion (Connecteurs perms), Switch (capacités toggles), Tooltip, ScrollArea, Sidebar (shadcn sidebar with `collapsible="icon"`).

## Key behavior

- Sidebar persistent, collapsible to icon rail; active route highlighted via TanStack `Link` + `useRouterState`.
- Cmd/Ctrl+K opens `SearchCommand` from anywhere.
- Composer: optimistic local-only send appends a user message + canned assistant reply (placeholder) so the chat surface feels alive without a backend.
- Paramètres opens as a route (`/parametres/general`) — also reachable as a modal from the profile menu (reuses same section components).
- "Mettre à niveau" CTA is a non-functional dialog explaining the Free plan.
- Every route sets its own `head()` metadata (title + description).

## Out of scope (this iteration)

- Real LLM calls, auth, persistence — pure UI with mock data.
- Real connector OAuth, real file uploads beyond local preview.
- The "Retro Pong artifact" demo shown in shot_30 (we render a generic code/preview artifact card instead).

## Verification

- All 11 routes render without errors.
- Sidebar nav highlights match URL; Cmd+K works.
- Settings, Search, and `+` menu open/close cleanly.
- No inline hex colors in components — only semantic tokens.
- Dark theme matches screenshot tone (warm, soft contrast).
