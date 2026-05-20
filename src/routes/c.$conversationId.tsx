import { createFileRoute, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { Composer } from "@/components/chat/Composer";
import { MessageBubble } from "@/components/chat/MessageBubble";
import { ArtifactPanel } from "@/components/artifacts/ArtifactPanel";
import { UpgradeBanner } from "@/components/layout/UpgradeBanner";
import { getSampleMessages, getConversations, type Message } from "@/data/mockConversations";
import { ChevronDown, PanelRightOpen } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/c/$conversationId")({
  component: Conversation,
});

function Conversation() {
  const { t, locale } = useI18n();
  const { conversationId } = useParams({ from: "/c/$conversationId" });
  const conversations = getConversations(locale);
  const title = conversations.find((c) => c.id === conversationId)?.title ?? t("conversation.title");
  const [messages, setMessages] = useState<Message[]>(() => getSampleMessages(locale));
  const [artifactOpen, setArtifactOpen] = useState(false);
  const onSend = (text: string) => {
    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", content: text },
      { id: crypto.randomUUID(), role: "assistant", content: t("conversation.demoReply") },
    ]);
  };
  return (
    <div className="flex h-full flex-1">
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border-subtle px-6 py-3">
          <button className="flex items-center gap-1.5 text-[14px] text-foreground">
            <span className="truncate">{title}</span>
            <ChevronDown className="h-4 w-4" />
          </button>
          <button onClick={() => setArtifactOpen((v) => !v)} className="rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground" aria-label={t("conversation.artifact")}>
            <PanelRightOpen className="h-4 w-4" />
          </button>
        </header>
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {messages.map((m) => <MessageBubble key={m.id} msg={m} />)}
          </div>
          <div className="px-4 pb-6">
            <Composer onSend={onSend} placeholder={t("conversation.composerPlaceholder")} />
            <UpgradeBanner />
          </div>
        </main>
      </div>
      {artifactOpen && (
        <ArtifactPanel title={t("artifact.thalesTitle")} code={"function Thales() { return null; }"} onClose={() => setArtifactOpen(false)} />
      )}
    </div>
  );
}