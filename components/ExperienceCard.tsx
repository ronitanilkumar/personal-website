type Props = {
  org: string;
  orgHref?: string;
  role: string;
  date: string;
  description: string;
  meta?: string;
  logoSrc?: string;
};

export function ExperienceCard({
  org,
  orgHref,
  role,
  date,
  description,
  meta,
  logoSrc,
}: Props) {
  return (
    <div className="py-10 border-t border-border first:border-t-0 first:pt-0">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-3">
          {logoSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              alt=""
              loading="lazy"
              className="h-7 w-7 rounded-md object-cover"
            />
          )}
          {orgHref ? (
            <a
              href={orgHref}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[22px] font-semibold leading-tight text-ink transition-colors duration-200 hover:text-muted"
            >
              {org}
            </a>
          ) : (
            <h3 className="text-[22px] font-semibold leading-tight text-ink">
              {org}
            </h3>
          )}
        </div>
        <span className="text-[13px] text-soft shrink-0 pt-1">{date}</span>
      </div>
      <p className="mt-2 text-[14px] text-muted">{role}</p>
      <p className="mt-4 text-[15px] leading-[1.7] text-muted max-w-[65%]">
        {description}
      </p>
      {meta && <p className="mt-3 text-[13px] text-soft italic">{meta}</p>}
    </div>
  );
}
