import React from 'react';
import { Container, Text } from '../atoms';
import styles from './Footer.module.css';

export interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <Text variant="caption" color="tertiary" className={styles.footerCopyright}>
            © {currentYear} {name}
          </Text>
          <Text variant="caption" color="tertiary" className={styles.footerTagline}>
            Designed & Built with purpose
          </Text>
        </div>
      </Container>
    </footer>
  );
};

