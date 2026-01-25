import { clsx as cn } from 'clsx';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  const sectionWrapperStyles = cn(styles.sectionWrapper, className);

  return <div className={sectionWrapperStyles}>{children}</div>;
};
