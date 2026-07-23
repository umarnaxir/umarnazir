import { LegalDocument } from '@/app/components/LegalPage/types';

export const privacyPolicyData: LegalDocument = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  eyebrow: 'Your data, handled with care',
  summary:
    'This Privacy Policy explains what information may be collected when you visit umarnazir.vercel.app, how it is used, and the choices available to you. This site is operated by Umar Nazir as a personal portfolio and professional presence.',
  lastUpdated: 'July 23, 2026',
  effectiveDate: 'July 23, 2026',
  related: {
    label: 'Terms & Conditions',
    href: '/terms-and-conditions',
  },
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      paragraphs: [
        'Welcome. I am Umar Nazir, a Software Engineer & SEO Executive based in Baramulla, Jammu & Kashmir, India. This website showcases my work, experience, and ways to get in touch for professional collaborations.',
        'I respect your privacy and am committed to being transparent about any data that may be processed while you browse this site or contact me. By using this website, you acknowledge the practices described in this policy.',
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      paragraphs: [
        'This portfolio is primarily informational. The types of information that may be collected fall into the categories below.',
      ],
      bullets: [
        'Contact details you voluntarily submit — such as your name, email address, phone number, and message content when you use the contact form or reach out by email or phone.',
        'Technical and usage data — such as browser type, device type, approximate location derived from IP address, pages viewed, and referring URLs, typically collected through hosting or analytics providers.',
        'Communication records — emails, call notes, or messages exchanged when you inquire about projects or services.',
      ],
    },
    {
      id: 'how-we-use-information',
      title: '3. How Information Is Used',
      paragraphs: [
        'Information is used only for legitimate professional and operational purposes related to this website and potential client engagements.',
      ],
      bullets: [
        'Responding to inquiries, project briefs, and collaboration requests.',
        'Improving site performance, accessibility, and content relevance.',
        'Maintaining security, diagnosing technical issues, and preventing abuse.',
        'Complying with applicable legal obligations when required.',
      ],
    },
    {
      id: 'cookies-analytics',
      title: '4. Cookies & Analytics',
      paragraphs: [
        'This site may use cookies, local storage (for example, to remember your theme preference), or similar technologies to support basic functionality and measure traffic.',
        'Analytics tools, if enabled, help understand aggregate visitor behavior. They do not sell your personal information. You can control cookies through your browser settings; disabling some cookies may affect certain features such as saved preferences.',
      ],
    },
    {
      id: 'third-party-services',
      title: '5. Third-Party Services',
      paragraphs: [
        'The website may rely on trusted third parties for hosting, form delivery, email, analytics, or fonts. These providers process data according to their own privacy policies.',
        'External links (GitHub, LinkedIn, project demos, and similar) lead to sites I do not control. Their privacy practices are governed by those platforms, not this policy.',
      ],
    },
    {
      id: 'data-retention',
      title: '6. Data Retention',
      paragraphs: [
        'Contact and inquiry information is retained only as long as needed to respond, manage a potential engagement, or meet legal and operational requirements. Technical logs are typically retained for shorter periods unless needed for security investigations.',
        'You may request deletion of personal information you previously shared, subject to any lawful retention needs.',
      ],
    },
    {
      id: 'your-rights',
      title: '7. Your Rights',
      paragraphs: [
        'Depending on your location, you may have rights to access, correct, update, or request deletion of personal information you have provided. You may also object to certain processing or ask for clarification about how your data is handled.',
        'To exercise these rights, contact me using the details in the Contact section below. I will respond within a reasonable timeframe.',
      ],
    },
    {
      id: 'childrens-privacy',
      title: '8. Children’s Privacy',
      paragraphs: [
        'This website is intended for a general and professional audience and is not directed at children under 13 (or the equivalent minimum age in your jurisdiction). I do not knowingly collect personal information from children. If you believe such data has been provided, please contact me so it can be removed.',
      ],
    },
    {
      id: 'security',
      title: '9. Security',
      paragraphs: [
        'Reasonable technical and organizational measures are used to protect information against unauthorized access, alteration, or disclosure. No method of transmission over the internet is completely secure; absolute security cannot be guaranteed.',
      ],
    },
    {
      id: 'policy-changes',
      title: '10. Changes to This Policy',
      paragraphs: [
        'This Privacy Policy may be updated periodically to reflect changes in practices, technology, or legal requirements. The “Last updated” date at the top of this page will be revised when changes are published. Continued use of the site after updates constitutes acknowledgment of the revised policy.',
      ],
    },
    {
      id: 'contact',
      title: '11. Contact',
      paragraphs: [
        'For privacy-related questions, data requests, or concerns about this policy, please reach out using the contact details listed on this page. Prefer email for written records of your request.',
      ],
    },
  ],
};
