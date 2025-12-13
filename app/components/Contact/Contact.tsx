import React from 'react';
import { Section, Container } from '../atoms';
import { ContactHeader } from './ContactHeader/ContactHeader';
import { ContactForm } from './ContactForm/ContactForm';
import styles from './Contact.module.css';

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
    <Section id="contact" className={styles.contact}>
      <Container>
        <div className={styles.contactWrapper}>
          <ContactHeader
            sectionNumber={sectionNumber}
            headline={headline}
            description={description}
          />
          <div className={styles.contactFormSection}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

