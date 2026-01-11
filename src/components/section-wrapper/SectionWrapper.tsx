import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <div className={`${styles.sectionWrapper} ${className}`}>{children}</div>
  );
};
