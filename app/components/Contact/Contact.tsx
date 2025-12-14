'use client';

import React from 'react';
import { Section, Container } from '../atoms';
import { ContactHeader } from './ContactHeader/ContactHeader';
import { ContactForm } from './ContactForm/ContactForm';
import { StyledContact, ContactWrapper, ContactFormSection } from './Contact.styles';

export interface ContactProps {
  sectionNumber?: string;
  headline?: string;
  description?: string;
}

export const Contact: React.FC<ContactProps> = ({
  sectionNumber = '04',
  headline = "Let's Build Something Together",
  description = 'Open to collaboration on research projects, open-source contributions, healthcare AI initiatives, or consulting opportunities.',
}) => {
  return (
    <Section id="contact">
      <Container>
        <StyledContact>
          <ContactWrapper>
            <ContactHeader
              sectionNumber={sectionNumber}
              headline={headline}
              description={description}
            />
            <ContactFormSection>
              <ContactForm />
            </ContactFormSection>
          </ContactWrapper>
        </StyledContact>
      </Container>
    </Section>
  );
};

