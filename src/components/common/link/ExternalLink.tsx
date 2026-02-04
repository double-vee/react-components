import { clsx as cn } from 'clsx';
import styles from './ExternalLink.module.css';

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
  const linkStyles = cn(styles.link, className);

  return (
    <a href={href} target="_blank" className={linkStyles} {...props}>
      {children}
    </a>
  );
};
