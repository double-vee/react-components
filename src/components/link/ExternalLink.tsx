interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
}

export const ExternalLink = ({
  children,
  className,
  href,
  ...props
}: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" className={className} {...props}>
      {children}
    </a>
  );
};
