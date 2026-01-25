import { clsx as cn } from 'clsx';
import { type StyledButtonVariant } from './StyledButton';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  label: string;
  variant?: StyledButtonVariant;
}

export const Button = ({
  children,
  className,
  label,
  variant,
  ...props
}: ButtonProps) => {
  // Hide the label if the button does not receive any variant (i.e. is not used as a StyledButton)
  const labelStyles = cn(!variant && 'visuallyHidden');
  const buttonStyles = cn(styles.button, className);

  return (
    <button className={buttonStyles} {...props}>
      {children}
      <span className={labelStyles}>{label}</span>
    </button>
  );
};
