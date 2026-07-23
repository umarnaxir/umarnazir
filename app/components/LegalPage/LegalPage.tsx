'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import { Footer } from '../Footer/Footer';
import { WhatsAppButton } from '../WhatsApp/WhatsApp';
import { GalaxyBackground } from '../GalaxyBackground/GalaxyBackground';
import { portfolioData } from '@/lib/data';
import { LegalDocument } from './types';
import {
  LegalShell,
  LegalBackground,
  LegalContent,
  ReadingProgress,
  LegalInner,
  LegalHero,
  LegalEyebrow,
  LegalTitle,
  LegalSummary,
  MetaRow,
  MetaChip,
  LayoutGrid,
  TocAside,
  TocLabel,
  TocList,
  TocLink,
  ContentColumn,
  SectionBlock,
  SectionHeading,
  SectionParagraph,
  BulletList,
  BulletItem,
  ContactPanel,
  ContactPanelTitle,
  ContactPanelText,
  ContactGrid,
  ContactCard,
  ContactCardStatic,
  ContactCardLabel,
  ContactCardValue,
  ContactActions,
  ActionButton,
  ActionLink,
  RelatedRow,
  RelatedText,
  RelatedLink,
} from './LegalPage.styles';

interface LegalPageProps {
  content: LegalDocument;
}

export const LegalPage: React.FC<LegalPageProps> = ({ content }) => {
  const { personal } = portfolioData;
  const [activeId, setActiveId] = useState(content.sections[0]?.id ?? '');
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const readingMinutes = useMemo(() => {
    const text = [
      content.summary,
      ...content.sections.flatMap((s) => [
        s.title,
        ...s.paragraphs,
        ...(s.bullets ?? []),
      ]),
    ].join(' ');
    const words = text.trim().split(/\s+/).length;
    return Math.max(3, Math.ceil(words / 200));
  }, [content]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        window.document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = content.sections
      .map((s) => window.document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [content.sections]);

  const scrollToSection = useCallback((id: string) => {
    const el = window.document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      toast.success('Email copied');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy email');
    }
  };

  const phoneHref = `tel:${personal.phone.replace(/\s+/g, '')}`;
  const mailHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `${content.title} inquiry`
  )}`;

  return (
    <LegalShell>
      <LegalBackground>
        <GalaxyBackground />
      </LegalBackground>
      <ReadingProgress $progress={progress} aria-hidden="true" />

      <LegalContent>
      <LegalInner>
        <LegalHero>
          <LegalEyebrow>{content.eyebrow}</LegalEyebrow>
          <LegalTitle>{content.title}</LegalTitle>
          <LegalSummary>{content.summary}</LegalSummary>
          <MetaRow>
            <MetaChip>Effective {content.effectiveDate}</MetaChip>
            <MetaChip>Updated {content.lastUpdated}</MetaChip>
            <MetaChip>~{readingMinutes} min read</MetaChip>
          </MetaRow>
        </LegalHero>

        <LayoutGrid>
          <TocAside>
            <TocLabel>On this page</TocLabel>
            <TocList aria-label="Table of contents">
              {content.sections.map((section) => (
                <TocLink
                  key={section.id}
                  type="button"
                  $active={activeId === section.id}
                  onClick={() => scrollToSection(section.id)}
                  aria-current={activeId === section.id ? 'true' : undefined}
                >
                  {section.title}
                </TocLink>
              ))}
            </TocList>
          </TocAside>

          <ContentColumn>
            {content.sections.map((section) => (
              <SectionBlock
                key={section.id}
                id={section.id}
                $active={activeId === section.id}
              >
                <SectionHeading>{section.title}</SectionHeading>
                {section.paragraphs.map((paragraph) => (
                  <SectionParagraph key={paragraph.slice(0, 48)}>
                    {paragraph}
                  </SectionParagraph>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <BulletList>
                    {section.bullets.map((bullet) => (
                      <BulletItem key={bullet.slice(0, 48)}>{bullet}</BulletItem>
                    ))}
                  </BulletList>
                )}
              </SectionBlock>
            ))}

            <ContactPanel id="get-in-touch">
              <ContactPanelTitle>Get in touch</ContactPanelTitle>
              <ContactPanelText>
                Questions about this {content.title.toLowerCase()} or how your
                information is handled? Reach {personal.name} directly using the
                details below.
              </ContactPanelText>

              <ContactGrid>
                <ContactCard href={mailHref}>
                  <ContactCardLabel>
                    <Mail size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Email
                  </ContactCardLabel>
                  <ContactCardValue>{personal.email}</ContactCardValue>
                </ContactCard>

                <ContactCard href={phoneHref}>
                  <ContactCardLabel>
                    <Phone size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Phone
                  </ContactCardLabel>
                  <ContactCardValue>{personal.phone}</ContactCardValue>
                </ContactCard>

                <ContactCardStatic>
                  <ContactCardLabel>
                    <MapPin size={12} style={{ display: 'inline', marginRight: 6 }} />
                    Location
                  </ContactCardLabel>
                  <ContactCardValue>{personal.location}</ContactCardValue>
                </ContactCardStatic>
              </ContactGrid>

              <ContactActions>
                <ActionButton type="button" onClick={copyEmail}>
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Copied' : 'Copy email'}
                </ActionButton>
                <ActionLink href={mailHref}>
                  <Mail size={15} />
                  Email now
                </ActionLink>
                <ActionLink href={phoneHref}>
                  <Phone size={15} />
                  Call now
                </ActionLink>
              </ContactActions>
            </ContactPanel>

            <RelatedRow>
              <RelatedText>Also review the related legal page.</RelatedText>
              <RelatedLink href={content.related.href}>
                {content.related.label} →
              </RelatedLink>
            </RelatedRow>
          </ContentColumn>
        </LayoutGrid>
      </LegalInner>

      <Footer name={personal.name} />
      <WhatsAppButton />
      </LegalContent>
    </LegalShell>
  );
};
