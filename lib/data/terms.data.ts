import { LegalDocument } from '@/app/components/LegalPage/types';

export const termsAndConditionsData: LegalDocument = {
  slug: 'terms-and-conditions',
  title: 'Terms & Conditions',
  eyebrow: 'Clear rules for using this site',
  summary:
    'These Terms & Conditions govern your access to and use of umarnazir.vercel.app, operated by Umar Nazir. Please read them carefully before browsing the site or requesting professional services.',
  lastUpdated: 'July 23, 2026',
  effectiveDate: 'July 23, 2026',
  related: {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  sections: [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      paragraphs: [
        'By accessing or using this website, you agree to be bound by these Terms & Conditions and the accompanying Privacy Policy. If you do not agree, please discontinue use of the site.',
        'These terms apply to visitors, prospective clients, and anyone interacting with content, forms, or contact channels provided here.',
      ],
    },
    {
      id: 'about-the-site',
      title: '2. About This Website',
      paragraphs: [
        'This website is a personal portfolio and professional presence for Umar Nazir, Software Engineer & SEO Executive. Content includes project showcases, experience, technical skills, writing, and contact options.',
        'Information on this site is provided for general informational purposes and does not automatically create a client–service provider relationship unless separately agreed in writing.',
      ],
    },
    {
      id: 'use-of-website',
      title: '3. Permitted Use',
      paragraphs: [
        'You may browse, share links to public pages, and contact me for legitimate professional inquiries. You agree not to misuse the site or its infrastructure.',
      ],
      bullets: [
        'Do not attempt to probe, scan, or test the vulnerability of the site without authorization.',
        'Do not introduce malware, spam contact forms, or automate abusive requests.',
        'Do not scrape content at a scale that impairs performance or violates applicable law.',
        'Do not misrepresent your identity when submitting inquiries.',
      ],
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property',
      paragraphs: [
        'Unless otherwise noted, the design, text, graphics, logos, code samples, case-study narratives, and overall composition of this website are owned by Umar Nazir or used under license. All rights are reserved.',
        'You may not copy, reproduce, redistribute, or create derivative works from site materials for commercial purposes without prior written consent. Fair use for personal reference or editorial commentary may apply where permitted by law.',
        'Client project visuals may include trademarks or assets belonging to third parties and are shown for portfolio demonstration only.',
      ],
    },
    {
      id: 'services',
      title: '5. Services & Engagements',
      paragraphs: [
        'Inquiries submitted through this site regarding software development, SEO, or related services are invitations to discuss potential work. Any engagement is subject to a separate agreement covering scope, fees, timelines, deliverables, and confidentiality.',
        'Quotes, timelines, and capability statements shared in early conversations are estimates until confirmed in a signed proposal or contract. Work does not begin until commercial terms are agreed.',
      ],
    },
    {
      id: 'accuracy',
      title: '6. Accuracy of Information',
      paragraphs: [
        'I strive to keep portfolio details, experience, and contact information accurate and current. However, content may contain occasional errors or become outdated. The site is provided “as is” without warranties of completeness or fitness for a particular purpose.',
        'Technology stacks, project outcomes, and third-party platform status can change; always verify critical details directly before relying on them for decisions.',
      ],
    },
    {
      id: 'external-links',
      title: '7. External Links',
      paragraphs: [
        'This website may link to GitHub repositories, live project demos, LinkedIn, WhatsApp, and other third-party resources. Those sites are operated independently. I am not responsible for their content, availability, or practices.',
        'Following an external link is at your own risk. Review the terms and privacy policies of those destinations.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '8. Limitation of Liability',
      paragraphs: [
        'To the fullest extent permitted by applicable law, Umar Nazir shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of—or inability to use—this website, including loss of data, profits, or business opportunities.',
        'If you engage professional services, liability related to those services will be defined in the applicable service agreement and may supersede this section for that engagement.',
      ],
    },
    {
      id: 'indemnity',
      title: '9. Indemnification',
      paragraphs: [
        'You agree to indemnify and hold harmless Umar Nazir from claims, damages, losses, and expenses (including reasonable legal fees) arising from your misuse of this website, violation of these terms, or infringement of any third-party rights in connection with your use of the site.',
      ],
    },
    {
      id: 'governing-law',
      title: '10. Governing Law',
      paragraphs: [
        'These Terms & Conditions are governed by the laws of India, without regard to conflict-of-law principles. Courts located in Jammu & Kashmir, India, shall have exclusive jurisdiction over disputes arising from these terms or use of this website, unless a separate service agreement specifies otherwise.',
      ],
    },
    {
      id: 'changes',
      title: '11. Changes to These Terms',
      paragraphs: [
        'These terms may be updated from time to time. The “Last updated” date reflects the latest revision. Continued use of the website after changes are posted constitutes acceptance of the revised terms. Material changes may be highlighted when practical.',
      ],
    },
    {
      id: 'contact',
      title: '12. Contact',
      paragraphs: [
        'Questions about these Terms & Conditions can be sent using the contact details on this page. For service-related contracts, please use email so we maintain a clear written record.',
      ],
    },
  ],
};
