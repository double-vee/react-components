import { clsx as cn } from 'clsx';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  children,
  className,
  ...props
}: SectionWrapperProps) => {
  const sectionWrapperStyles = cn(styles.sectionWrapper, className);

  return (
    <div className={sectionWrapperStyles} {...props}>
      {children}
    </div>
  );
};
