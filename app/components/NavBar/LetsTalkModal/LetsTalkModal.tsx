'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Phone,
  Mail,
  FileText,
  Download,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from 'lucide-react';
import {
  Overlay,
  ModalCard,
  Panel,
  Decoration,
  Grid,
  LeftCol,
  RightCol,
  Badge,
  Heading,
  ContactList,
  ContactCard,
  ContactIcon,
  ContactText,
  ContactLabel,
  ContactValue,
  ResumeRow,
  ResumeButton,
  FollowSection,
  FollowLabel,
  SocialRow,
  SocialLink,
  CloseButton,
} from './LetsTalkModal.styles';

export interface SocialItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface LetsTalkModalProps {
  onClose: () => void;
  email: string;
  phone: string;
  resumeUrl?: string;
  socials?: SocialItem[];
}

export const LetsTalkModal: React.FC<LetsTalkModalProps> = ({
  onClose,
  email,
  phone,
  resumeUrl = '/resume/umarnazir.pdf',
  socials,
}) => {
  const defaultSocials: SocialItem[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/umar-nazir19/', icon: <Linkedin /> },
    { label: 'GitHub', href: 'https://github.com/umarnaxir', icon: <Github /> },
    { label: 'X (Twitter)', href: 'https://twitter.com/umarnazir', icon: <Twitter /> },
    { label: 'Instagram', href: 'https://www.instagram.com/umarnaxir/', icon: <Instagram /> },
  ];

  const socialItems = socials ?? defaultSocials;

  const handleViewResume = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeUrl.split('/').pop() || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalCard role="dialog" aria-modal="true" aria-label="Let's talk">
        <Panel>
          <Decoration aria-hidden="true" />
          <CloseButton type="button" onClick={onClose} aria-label="Close">
            <X />
          </CloseButton>

          <Grid>
            <LeftCol>
              <Badge>Reach Me</Badge>
              <Heading>
                Let&rsquo;s build
                <br />
                something great.
              </Heading>

              <FollowSection>
                <FollowLabel>Follow</FollowLabel>
                <SocialRow>
                  {socialItems.map((social) => (
                    <SocialLink
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </SocialLink>
                  ))}
                </SocialRow>
              </FollowSection>
            </LeftCol>

            <RightCol>
              <ContactList>
                <ContactCard href={`tel:${phone.replace(/\s/g, '')}`}>
                  <ContactIcon>
                    <Phone />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Phone</ContactLabel>
                    <ContactValue>{phone}</ContactValue>
                  </ContactText>
                </ContactCard>

                <ContactCard href={`mailto:${email}`}>
                  <ContactIcon>
                    <Mail />
                  </ContactIcon>
                  <ContactText>
                    <ContactLabel>Email</ContactLabel>
                    <ContactValue>{email}</ContactValue>
                  </ContactText>
                </ContactCard>
              </ContactList>

              <ResumeRow>
                <ResumeButton type="button" onClick={handleViewResume}>
                  <FileText />
                  View Resume
                </ResumeButton>
                <ResumeButton type="button" onClick={handleDownloadResume}>
                  <Download />
                  Download
                </ResumeButton>
              </ResumeRow>
            </RightCol>
          </Grid>
        </Panel>
      </ModalCard>
    </Overlay>,
    document.body
  );
};
