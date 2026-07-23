export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: LegalSection[];
  related: {
    label: string;
    href: string;
  };
}
