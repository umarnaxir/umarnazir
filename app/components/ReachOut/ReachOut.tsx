'use client';

import React from 'react';
import { Container, Text } from '../atoms';
import {
  StyledReachOut,
  ReachOutContent,
  ReachOutHeaderWrapper,
  ReachOutLine,
  ReachOutHeader,
  ContactCards,
  ContactCard,
  CardLabel,
  CardValue,
  CardLink,
} from './ReachOut.styles';

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
  email = 'sd.umarnazir@gmail.com',
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
    <StyledReachOut>
      <Container>
        <ReachOutContent>
          <ReachOutHeaderWrapper data-aos="fade-up">
            <ReachOutLine />
            <Text variant="caption" color="secondary" as="span">
              <ReachOutHeader>OR REACH OUT DIRECTLY</ReachOutHeader>
            </Text>
            <ReachOutLine />
          </ReachOutHeaderWrapper>

          <ContactCards>
            {contactCards.map((card, index) => (
              <ContactCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Text variant="caption" color="secondary" as="span">
                  <CardLabel>{card.label}</CardLabel>
                </Text>
                {card.href ? (
                  <CardLink
                    href={card.href}
                    target={card.label !== 'EMAIL' ? '_blank' : undefined}
                    rel={card.label !== 'EMAIL' ? 'noopener noreferrer' : undefined}
                  >
                    <Text variant="body" as="span">
                      <CardValue>{card.value}</CardValue>
                    </Text>
                  </CardLink>
                ) : (
                  <Text variant="body" as="span">
                    <CardValue>{card.value}</CardValue>
                  </Text>
                )}
              </ContactCard>
            ))}
          </ContactCards>
        </ReachOutContent>
      </Container>
    </StyledReachOut>
  );
};

