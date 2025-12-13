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
  phone?: string;
  github?: string;
  linkedin?: string;
}

export const ReachOut: React.FC<ReachOutProps> = ({
  email = 'erumarnazir@gmail.com',
  phone = '+917051732616',
  github = 'https://github.com/umarnaxir',
  linkedin = 'https://www.linkedin.com/in/umar-nazir19/',
}) => {
  const contactCards: ContactCard[] = [
    {
      label: 'EMAIL',
      value: email,
      href: `mailto:${email}`,
    },
    {
      label: 'PHONE',
      value: phone,
      href: `tel:${phone}`,
    },
    {
      label: 'GITHUB',
      value: 'umarnaxir',
      href: github,
    },
    {
      label: 'LINKEDIN',
      value: 'Umar Nazir',
      href: linkedin,
    },
  ];

  return (
    <section className={styles.reachOut}>
      <Container>
        <div className={styles.reachOutContent}>
          <div className={styles.reachOutHeaderWrapper}>
            <div className={styles.reachOutLine} />
            <Text variant="caption" color="secondary" className={styles.reachOutHeader}>
              OR REACH OUT DIRECTLY
            </Text>
            <div className={styles.reachOutLine} />
          </div>

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

        </div>
      </Container>
    </section>
  );
};

