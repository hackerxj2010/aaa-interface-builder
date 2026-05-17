export function SimpleSection({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="space-y-4">
      <h2 className="font-serif text-xl text-foreground">{title}</h2>
      {lines.map((l, i) => (<p key={i} className="text-[13.5px] text-muted-foreground">{l}</p>))}
    </div>
  );
}