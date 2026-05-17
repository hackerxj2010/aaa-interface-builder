export function UpgradeBanner() {
  return (
    <div className="mt-3 flex items-center justify-between rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-[13px]">
      <span className="text-muted-foreground">
        Vous n'avez plus de <span className="underline">messages</span> gratuits jusqu'à 21:10.
      </span>
      <button className="font-medium text-foreground underline-offset-2 hover:underline">
        Mettre à niveau
      </button>
    </div>
  );
}