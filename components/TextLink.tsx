type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function TextLink({ href, children, external, className = "" }: Props) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};
  return (
    <a
      href={href}
      {...externalProps}
      className={`relative inline-block text-ink decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-ink hover:[text-decoration-line:underline] hover:decoration-ink ${className}`}
    >
      {children}
    </a>
  );
}
