import React from 'react';
import { Container, Text } from '../atoms';
import styles from './ReachOut.module.css';

export interface ContactCard {
  label: string;
  value: string;
  href?: string;
}

export interface ReachOutProps {
  email?: string;
  github?: string;
  linkedin?: string;
}

export const ReachOut: React.FC<ReachOutProps> = ({
  email = 'erumarnazir@gmail.com',
  github = '@umarnazir',
  linkedin = '/in/umarnazir',
}) => {
  const contactCards: ContactCard[] = [
    {
      label: 'EMAIL',
      value: email,
      href: `mailto:${email}`,
    },
    {
      label: 'GITHUB',
      value: github,
      href: `https://github.com/${github.replace('@', '')}`,
    },
    {
      label: 'LINKEDIN',
      value: linkedin,
      href: `https://linkedin.com${linkedin}`,
    },
  ];

  return (
    <section className={styles.reachOut}>
      <Container>
        <div className={styles.reachOutContent}>
          <Text variant="caption" color="secondary" className={styles.reachOutHeader}>
            OR REACH OUT DIRECTLY
          </Text>

          <div className={styles.contactCards}>
            {contactCards.map((card, index) => (
              <div key={index} className={styles.contactCard}>
                <Text variant="caption" color="secondary" className={styles.cardLabel}>
                  {card.label}
                </Text>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.label !== 'EMAIL' ? '_blank' : undefined}
                    rel={card.label !== 'EMAIL' ? 'noopener noreferrer' : undefined}
                    className={styles.cardLink}
                  >
                    <Text variant="body" className={styles.cardValue}>
                      {card.value}
                    </Text>
                  </a>
                ) : (
                  <Text variant="body" className={styles.cardValue}>
                    {card.value}
                  </Text>
                )}
              </div>
            ))}
          </div>

          <div className={styles.visualIndicator}>
            <div className={styles.cursorIndicator}>
              <div className={styles.cursorDot} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

