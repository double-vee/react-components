import { clsx as cn } from 'clsx';
import { Button, type ButtonProps } from './Button';
import styles from './StyledButton.module.css';

export type StyledButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger';

export const StyledButton = ({
  children,
  className,
  label,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const styledButtonStyles = cn(
    styles.styledButton,
    variant && styles[variant],
    className,
  );

  return (
    <Button
      className={styledButtonStyles}
      label={label}
      variant={variant}
      {...props}>
      {children}
    </Button>
  );
};
