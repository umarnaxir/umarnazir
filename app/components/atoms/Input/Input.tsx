'use client';

import React from 'react';
import { InputWrapper, Label, StyledInput, StyledTextarea, ErrorMessage } from './Input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledInput $error={!!error} className={className} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <StyledTextarea $error={!!error} className={className} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

