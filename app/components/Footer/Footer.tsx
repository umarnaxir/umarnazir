'use client';

import React from 'react';
import { Container, Text } from '../atoms';
import { StyledFooter, FooterContent, FooterCopyright, FooterTagline } from './Footer.styles';

export interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter data-aos="fade-up">
      <Container>
        <FooterContent>
          <Text variant="caption" color="tertiary" as="span">
            <FooterCopyright>© {currentYear} {name}</FooterCopyright>
          </Text>
          <Text variant="caption" color="tertiary" as="span">
            <FooterTagline>Designed & Built with purpose</FooterTagline>
          </Text>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

