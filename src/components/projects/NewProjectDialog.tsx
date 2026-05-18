import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = { open: boolean; onOpenChange: (o: boolean) => void; onCreate?: (name: string, goal: string) => void };

export function NewProjectDialog({ open, onOpenChange, onCreate }: Props) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-border-subtle bg-background p-8 sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-normal text-foreground">Créer un projet personnel</DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-5">
          <div>
            <label className="mb-2 block text-[13.5px] text-foreground">Sur quoi travaillez-vous ?</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nommez votre projet"
              autoFocus
              className="w-full rounded-lg border border-primary bg-surface px-3 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="mb-2 block text-[13.5px] text-foreground">Qu'essayez-vous de faire ?</label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Décrivez votre projet, vos objectifs, le sujet, etc..."
              rows={4}
              className="w-full resize-none rounded-lg border border-border-subtle bg-surface px-3 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/70 focus:border-border focus:outline-none"
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end gap-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>Annuler</Button>
          <Button
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() => { onCreate?.(name || "Sans titre", goal); onOpenChange(false); setName(""); setGoal(""); }}
          >
            Créer un projet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}