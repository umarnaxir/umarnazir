import styled, { css } from 'styled-components';
import { TextVariant, TextColor, TextWeight } from './Text';

export const StyledText = styled.p<{
  $variant?: TextVariant;
  $color?: TextColor;
  $weight?: TextWeight;
}>`
  margin: 0;

  ${({ $variant = 'body' }) => {
    switch ($variant) {
      case 'h1':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
          line-height: 1.1;
          letter-spacing: -0.02em;

          @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
          }
        `;
      case 'h2':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
          line-height: 1.2;
          letter-spacing: -0.01em;

          @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
          }
        `;
      case 'h3':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.3;

          @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
          }
        `;
      case 'h4':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.4;

          @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.typography.fontSize.xl};
          }
        `;
      case 'h5':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.4;
        `;
      case 'h6':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
          font-size: ${({ theme }) => theme.typography.fontSize.xl};
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
          line-height: 1.5;
        `;
      case 'body':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyBody};
          font-size: ${({ theme }) => theme.typography.fontSize.base};
          line-height: 1.6;
        `;
      case 'bodyLarge':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyBody};
          font-size: ${({ theme }) => theme.typography.fontSize.lg};
          line-height: 1.6;
        `;
      case 'bodySmall':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyBody};
          font-size: ${({ theme }) => theme.typography.fontSize.sm};
          line-height: 1.5;
        `;
      case 'caption':
        return css`
          font-family: ${({ theme }) => theme.typography.fontFamilyBody};
          font-size: ${({ theme }) => theme.typography.fontSize.xs};
          line-height: 1.4;
        `;
    }
  }}

  ${({ $color = 'primary' }) => {
    switch ($color) {
      case 'primary':
        return css`
          color: ${({ theme }) => theme.colors.textPrimary};
        `;
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.colors.textSecondary};
        `;
      case 'tertiary':
        return css`
          color: ${({ theme }) => theme.colors.textTertiary};
        `;
      case 'accent':
        return css`
          color: ${({ theme }) => theme.colors.accent};
        `;
    }
  }}

  ${({ $weight }) => {
    if (!$weight) return '';
    switch ($weight) {
      case 'normal':
        return css`
          font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
        `;
      case 'medium':
        return css`
          font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        `;
      case 'semibold':
        return css`
          font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
        `;
      case 'bold':
        return css`
          font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
        `;
    }
  }}
`;
