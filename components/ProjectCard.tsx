type Link = { label: string; href: string };

type Props = {
  title: string;
  description: string;
  stack: string[];
  links: Link[];
};

export function ProjectCard({ title, description, stack, links }: Props) {
  return (
    <div className="rounded-xl border-[1.5px] border-[#DDDBD6] bg-bg p-7 transition-all duration-200 ease-snap hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_12px_32px_-16px_rgba(17,17,17,0.18)]">
      <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.65] text-muted">
        {description}
      </p>
      {stack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
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
