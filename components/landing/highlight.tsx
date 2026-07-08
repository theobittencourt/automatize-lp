export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <em className="font-heading font-normal italic text-brand">
      {children}
    </em>
  );
}
