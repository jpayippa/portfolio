export function Tags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="text-muted flex flex-wrap gap-x-3 gap-y-1 text-[14px]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
