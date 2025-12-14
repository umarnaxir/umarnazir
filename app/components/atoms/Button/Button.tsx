'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { StyledButton, StyledButtonLink } from './Button.styles';

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
    const content = (
      <>
        {Icon && iconPosition === 'left' && <Icon size={16} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon size={16} />}
      </>
    );

    if (as === 'a' && href) {
      return (
        <StyledButtonLink
          ref={ref as React.Ref<HTMLAnchorElement>}
          $variant={variant}
          $size={size}
          $fullWidth={fullWidth}
          href={href}
          className={className}
          {...(props as any)}
        >
          {content}
        </StyledButtonLink>
      );
    }

    return (
      <StyledButton
        ref={ref as React.Ref<HTMLButtonElement>}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        className={className}
        {...props}
      >
        {content}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

