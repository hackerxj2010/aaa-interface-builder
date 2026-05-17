import { ClaudeLogo } from "@/components/common/ClaudeLogo";
import { Copy, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import type { Message } from "@/data/mockConversations";

export function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-6`}>
      {!isUser && (
        <div className="mb-2 flex items-center gap-2">
          <ClaudeLogo size={16} className="text-primary" />
          <span className="font-serif text-[13px] text-muted-foreground">Claude</span>
        </div>
      )}
      <div
        className={
          isUser
            ? "max-w-[72%] rounded-2xl bg-surface px-4 py-2.5 text-[14.5px] leading-relaxed text-foreground"
            : "max-w-[88%] whitespace-pre-wrap text-[14.5px] leading-relaxed text-foreground"
        }
      >
        {msg.content}
      </div>
      {!isUser && (
        <div className="mt-2 flex gap-1 opacity-60">
          {[ThumbsUp, ThumbsDown, Copy, RotateCcw].map((Icon, i) => (
            <button
              key={i}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}