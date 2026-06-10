'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/utils/whatsapp';
import { WhatsAppFab, WhatsAppNavLink } from './WhatsApp.styles';

const LABEL = 'Chat on WhatsApp';

/** Floating WhatsApp button (replaces the theme-toggle FAB). */
export const WhatsAppButton: React.FC = () => (
  <WhatsAppFab
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={LABEL}
    title={LABEL}
  >
    <FaWhatsapp />
  </WhatsAppFab>
);

/** Inline WhatsApp icon for the navbar. */
export const WhatsAppNavButton: React.FC = () => (
  <WhatsAppNavLink
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={LABEL}
    title={LABEL}
  >
    <FaWhatsapp />
  </WhatsAppNavLink>
);
