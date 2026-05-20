import type { Locale } from "@/i18n/translations";
import { translations } from "@/i18n/translations";

export type Conversation = {
  id: string;
  title: string;
  time: string;
  group: "today" | "yesterday" | "week" | "older";
};

const T = (l: Locale, k: string) => translations[l][k] ?? translations.fr[k] ?? k;

const convSpec: { id: string; titleKey: string; timeKey: string; group: Conversation["group"] }[] = [
  { id: "c1", titleKey: "conv.c1", timeKey: "time.hourAgo", group: "today" },
  { id: "c2", titleKey: "conv.c2", timeKey: "time.hoursAgo", group: "today" },
  { id: "c3", titleKey: "conv.c3", timeKey: "time.yesterday", group: "yesterday" },
  { id: "c4", titleKey: "conv.c4", timeKey: "time.dayBeforeYesterday", group: "yesterday" },
  { id: "c5", titleKey: "conv.c5", timeKey: "time.3daysAgo", group: "week" },
  { id: "c6", titleKey: "conv.c6", timeKey: "time.4daysAgo", group: "week" },
  { id: "c7", titleKey: "conv.c7", timeKey: "time.4daysAgo", group: "week" },
  { id: "c8", titleKey: "conv.c8", timeKey: "time.4daysAgo", group: "week" },
  { id: "c9", titleKey: "conv.c9", timeKey: "time.6daysAgo", group: "older" },
  { id: "c10", titleKey: "conv.c10", timeKey: "time.1weekAgo", group: "older" },
];

export const getConversations = (l: Locale): Conversation[] =>
  convSpec.map((c) => ({ id: c.id, title: T(l, c.titleKey), time: T(l, c.timeKey), group: c.group }));

export const getFavorites = (l: Locale) => [
  { id: "f1", title: T(l, "fav.f1") },
  { id: "f2", title: T(l, "fav.f2") },
];

export type Message = { id: string; role: "user" | "assistant"; content: string };

export const getSampleMessages = (l: Locale): Message[] => [
  { id: "m1", role: "user", content: T(l, "msg.user1") },
  { id: "m2", role: "assistant", content: T(l, "msg.assistant1") },
];