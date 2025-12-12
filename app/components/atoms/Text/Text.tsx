import React from 'react';
import styles from './Text.module.css';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'bodyLarge'
  | 'bodySmall'
  | 'caption';

export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'accent';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export interface TextProps {
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'primary',
  weight,
  as,
  children,
  className = '',
}) => {
  // Map variant to HTML tag name
  const getTagName = (): keyof React.JSX.IntrinsicElements => {
    if (as) {
      return as;
    }
    if (variant === 'h1' || variant === 'h2' || variant === 'h3' || 
        variant === 'h4' || variant === 'h5' || variant === 'h6') {
      return variant;
    }
    return 'p';
  };

  const Component = getTagName();
  
  const classNames = [
    styles.text,
    styles[variant],
    styles[color],
    weight && styles[weight],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return React.createElement(Component, { className: classNames }, children);
};
