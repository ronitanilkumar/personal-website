type Link = { label: string; href: string };

type Props = {
  title: string;
  description: string;
  stack: string[];
  links: Link[];
};

export function ProjectCard({ title, description, stack, links }: Props) {
  return (
    <div className="py-10 border-t border-border first:border-t-0 first:pt-0">
      <h3 className="text-[22px] font-semibold leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-[1.7] text-muted">{description}</p>
      {stack.length > 0 && (
        <p className="mt-4 font-mono text-[12px] tracking-tight text-soft">
          {stack.join("  ·  ")}
        </p>
      )}
      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((l, i) => {
            const primary = i === 0;
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className={
                  primary
                    ? "inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-1.5 text-[13px] font-medium text-bg transition-opacity duration-200 hover:opacity-80"
                    : "inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-1.5 text-[13px] font-medium text-ink transition-colors duration-200 hover:border-ink/40"
                }
              >
                {l.label}
                <span aria-hidden="true">&rarr;</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
