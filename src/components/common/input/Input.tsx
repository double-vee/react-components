import { clsx as cn } from 'clsx';
import styles from './Input.module.css';

type InputVariant = 'complex';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export interface TextInputProps extends InputProps {
  children?: React.ReactNode;
  variant?: InputVariant;
}

const Input = ({ id, label, placeholder, className, ...props }: InputProps) => {
  const inputStyles = cn(styles.inputBase, className);

  return (
    <input
      id={id}
      aria-label={label}
      aria-placeholder={placeholder}
      placeholder={placeholder}
      className={inputStyles}
      {...props}
    />
  );
};

const InputWrapper = ({ children, className }: InputWrapperProps) => {
  return <div className={className}>{children}</div>;
};

export const TextInput = ({
  children,
  className,
  variant,
  ...props
}: TextInputProps) => {
  const inputStyles = cn(styles.inputBorder, className);
  const textIputStyles = cn(styles.inputBorder, styles.inputWrapper, className);

  if (variant === 'complex') {
    return (
      <InputWrapper className={textIputStyles}>
        {children}
        <Input {...props} />
      </InputWrapper>
    );
  }

  return <Input {...props} className={inputStyles} />;
};
