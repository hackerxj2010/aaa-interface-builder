import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/code")({
  head: () => ({ meta: [{ title: "Claude — Code" }] }),
  component: () => (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center px-8 py-20 text-center">
      <h1 className="font-serif text-3xl text-foreground">Claude Code</h1>
      <p className="mt-3 text-[14px] text-muted-foreground">Mettez votre forfait à niveau pour activer Claude Code.</p>
      <Button className="mt-6">Mettre à niveau</Button>
    </div>
  ),
});