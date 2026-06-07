type Link = { label: string; href: string };

type Props = {
  title: string;
  description: string;
  stack: string[];
  links: Link[];
};

export function ProjectCard({ title, description, stack, links }: Props) {
  const primaryLink = links[0];

  return (
    <div className="group py-10 border-t border-border first:border-t-0 first:pt-0">
      <div className="flex items-start justify-between gap-6">
        {primaryLink ? (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[22px] font-semibold leading-tight text-ink transition-colors duration-200 hover:text-muted"
          >
            {title}
          </a>
        ) : (
          <h3 className="text-[22px] font-semibold leading-tight text-ink">{title}</h3>
        )}
        {primaryLink && (
          <a
            href={primaryLink.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} on ${primaryLink.label}`}
            className="shrink-0 pt-1.5 text-muted transition-all duration-200 ease-snap group-hover:translate-x-0.5 group-hover:text-ink"
          >
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
      <p className="mt-3 text-[15px] leading-[1.7] text-muted">{description}</p>
      {stack.length > 0 && (
        <p className="mt-4 font-mono text-[12px] tracking-tight text-soft">
          {stack.join("  ·  ")}
        </p>
      )}
    </div>
  );
}
