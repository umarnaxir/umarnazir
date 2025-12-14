import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const SendButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamilyBody};
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.bgPrimary};
    border-color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
