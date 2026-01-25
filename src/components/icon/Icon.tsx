import { clsx as cn } from 'clsx';
import styles from './IconWrapper.module.css';

type IconSize = 'small' | 'medium' | 'large';
type IconColor = 'danger' | 'success';

interface IconWrapperProps extends React.SVGAttributes<SVGElement> {
  children: React.ReactNode;
  className?: string;
  color?: IconColor;
  size?: IconSize;
}

interface IconProps {
  className?: string;
  color?: IconColor;
  path: React.ReactNode;
  size?: IconSize;
}

const IconWrapper = ({
  children,
  className,
  color,
  size = 'small',
  ...props
}: IconWrapperProps) => {
  const iconWrapperStyles = cn(
    color && styles[color],
    size && styles[size],
    className,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconWrapperStyles}
      {...props}>
      {children}
    </svg>
  );
};

export const Icon = ({ className, color, path, size }: IconProps) => {
  return (
    <IconWrapper className={className} color={color} size={size}>
      {path}
    </IconWrapper>
  );
};
