'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Container, Text } from '../atoms';
import {
  StyledFooter,
  FooterContent,
  FooterCopyright,
  FooterTagline,
  FooterLinks,
  FooterLink,
  BackToTopPill,
} from './Footer.styles';

export interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Text variant="caption" color="tertiary" as="span">
            <FooterCopyright>
              © {currentYear} {name}
            </FooterCopyright>
          </Text>

          <FooterLinks>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
          </FooterLinks>

          <Text variant="caption" color="tertiary" as="span">
            <FooterTagline>Designed & Built with purpose</FooterTagline>
          </Text>

          <BackToTopPill onClick={scrollToTop} aria-label="Back to top">
            Back to Top
            <ArrowUp size={16} />
          </BackToTopPill>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};
