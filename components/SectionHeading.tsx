type Props = {
  counter: string;
  children: React.ReactNode;
};

export function SectionHeading({ counter, children }: Props) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-[12px] text-soft">{counter}</span>
        <span className="text-[12px] uppercase tracking-[0.2em] text-soft font-medium">
          {children}
        </span>
      </div>
      <hr className="border-border" />
    </div>
  );
}
