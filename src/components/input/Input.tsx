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

interface TextInputProps extends InputProps {
  children?: React.ReactNode;
  variant?: InputVariant;
}

const Input = ({ id, label, placeholder, className, ...props }: InputProps) => {
  return (
    <input
      id={id}
      aria-label={label}
      aria-placeholder={placeholder}
      placeholder={placeholder}
      className={`${styles.inputBase} ${className}`}
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
  if (variant === 'complex') {
    return (
      <InputWrapper
        className={`${styles.inputBorder} ${styles.inputWrapper} ${className}`}>
        <Input {...props} />
        {children}
      </InputWrapper>
    );
  }

  return <Input {...props} className={`${styles.inputBorder} ${className}`} />;
};
