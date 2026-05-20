import type { Locale } from "@/i18n/translations";
import { translations } from "@/i18n/translations";

export type Artifact = {
  id: string;
  title: string;
  kind: "code" | "doc" | "image";
  language?: string;
  conversation?: string;
  updatedAt: string;
  preview?: string;
};

const T = (l: Locale, k: string) => translations[l][k] ?? translations.fr[k] ?? k;

export const getArtifacts = (l: Locale): Artifact[] => [
  { id: "a1", title: T(l, "art.a1"), kind: "code", language: "JSX", updatedAt: T(l, "time.hourAgo") },
  { id: "a2", title: T(l, "art.a2"), kind: "doc", updatedAt: T(l, "time.yesterday") },
  { id: "a3", title: T(l, "art.a3"), kind: "code", language: "JSX", updatedAt: T(l, "time.2daysAgo") },
  { id: "a4", title: T(l, "art.a4"), kind: "doc", updatedAt: T(l, "time.3daysAgo") },
  { id: "a5", title: T(l, "art.a5"), kind: "doc", updatedAt: T(l, "time.3daysAgo") },
];