'use client';

import React, { useState } from 'react';
import { Section, Container } from '../atoms';
import {
  StyledFaq,
  FaqWrapper,
  FaqHeaderContent,
  FaqTitle,
  FaqSectionNumber,
  FaqHeadline,
  FaqDescription,
  AccordionList,
  AccordionItem,
  AccordionTrigger,
  AccordionIcon,
  AccordionContent,
  AccordionContentInner,
  AccordionAnswer,
} from './FAQ.styles';
import { faqData } from '@/lib/data/faq.data';

export interface FAQProps {
  sectionNumber?: string;
  headline?: string;
  description?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  sectionNumber = '04',
  headline = 'Frequently Asked Questions',
  description = 'Quick answers to common questions about working with me and what to expect.',
}) => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="faq" size="small">
      <Container>
        <StyledFaq>
          <FaqWrapper>
            <FaqHeaderContent data-aos="fade-up">
              <FaqTitle>
                <FaqSectionNumber>{sectionNumber}</FaqSectionNumber>
                <FaqHeadline>{headline}</FaqHeadline>
              </FaqTitle>
              <FaqDescription data-aos="fade-up" data-aos-delay="100">
                {description}
              </FaqDescription>
            </FaqHeaderContent>

            <AccordionList data-aos="fade-up" data-aos-delay="200">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <AccordionItem key={item.id} $isOpen={isOpen}>
                    <AccordionTrigger
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                    >
                      {item.question}
                      <AccordionIcon $isOpen={isOpen} aria-hidden>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </AccordionIcon>
                    </AccordionTrigger>
                    <AccordionContent $isOpen={isOpen} id={`faq-answer-${item.id}`} role="region" aria-labelledby={`faq-question-${item.id}`}>
                      <AccordionContentInner>
                        <AccordionAnswer>{item.answer}</AccordionAnswer>
                      </AccordionContentInner>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </AccordionList>
          </FaqWrapper>
        </StyledFaq>
      </Container>
    </Section>
  );
};
