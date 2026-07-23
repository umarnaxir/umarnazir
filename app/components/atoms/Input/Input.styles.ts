import styled, { css } from 'styled-components';

export const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: ${({ $fullWidth = true }) => ($fullWidth ? '100%' : 'auto')};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme, $error }) => ($error ? '#ef4444' : theme.colors.inputBorder)};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.lg : theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all
    ${({ theme }) =>
      theme.mode === 'light'
        ? theme.transitions.smooth
        : `${theme.transitions.base} ease-out`};
  font-family: inherit;
  transform-style: preserve-3d;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) => ($error ? '#ef4444' : theme.colors.inputFocus)};
    background-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.bgSecondary : theme.colors.bgTertiary};
    transform: translateZ(5px);
    box-shadow: ${({ theme, $error }) =>
      $error
        ? '0 4px 12px rgba(239, 68, 68, 0.15)'
        : theme.mode === 'light'
          ? theme.shadows.glow
          : `0 4px 12px ${theme.colors.inputFocus}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  /* Override browser autofill (the white background on auto-select / saved values) */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.textPrimary};
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.inputBg} inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.inputBg} inset;
    caret-color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 9999s ease-out 0s;
  }
`;

export const StyledTextarea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.inputBg};
  border: 1px solid ${({ theme, $error }) => ($error ? '#ef4444' : theme.colors.inputBorder)};
  border-radius: ${({ theme }) =>
    theme.mode === 'light' ? theme.borderRadius.lg : theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: all
    ${({ theme }) =>
      theme.mode === 'light'
        ? theme.transitions.smooth
        : `${theme.transitions.base} ease-out`};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transform-style: preserve-3d;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    outline: none;
    border-color: ${({ theme, $error }) => ($error ? '#ef4444' : theme.colors.inputFocus)};
    background-color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.bgSecondary : theme.colors.bgTertiary};
    transform: translateZ(5px);
    box-shadow: ${({ theme, $error }) =>
      $error
        ? '0 4px 12px rgba(239, 68, 68, 0.15)'
        : theme.mode === 'light'
          ? theme.shadows.glow
          : `0 4px 12px ${theme.colors.inputFocus}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  /* Override browser autofill (the white background on auto-select / saved values) */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.textPrimary};
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.inputBg} inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.inputBg} inset;
    caret-color: ${({ theme }) => theme.colors.textPrimary};
    transition: background-color 9999s ease-out 0s;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: #ef4444;
`;
