import React from 'react';
import styles from './Button.module.css';
import { LucideIcon } from 'lucide-react';

type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'as'> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      icon: Icon,
      iconPosition = 'left',
      children,
      className = '',
      as = 'button',
      href,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const content = (
      <>
        {Icon && iconPosition === 'left' && <Icon size={16} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={16} />}
      </>
    );

    if (as === 'a' && href) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classNames} href={href} {...(props as any)}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classNames} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

