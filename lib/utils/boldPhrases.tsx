import React from 'react';

/** Phrases to bold in hero description and about content (longer first to avoid partial matches). */
export const BOLD_PHRASES = [
  'Software Engineer & SEO Executive',
  'React.js, Next.js, TypeScript, React Native',
  'Software Development, SEO Optimization',
  'Computer Science Engineering',
  'full-stack development',
  'Software Engineer',
  'SEO Executive',
  'Mobile Applications',
  'SEO-optimized',
  'SEO optimization',
  'SEO best practices',
  'Websites',
  'open-source',
  'React Native',
  'React.js',
  'Next.js',
  'TypeScript',
  'Firebase',
  'APIs',
] as const;

/**
 * Splits text and wraps any of the given phrases in <strong>.
 * Phrases are matched longest-first to avoid overlapping issues.
 */
export function boldPhrases(
  text: string,
  phrases: readonly string[] = BOLD_PHRASES
): React.ReactNode {
  if (!text) return null;

  const sorted = [...phrases].filter(Boolean).sort((a, b) => b.length - a.length);
  let earliest: { phrase: string; index: number } | null = null;

  for (const phrase of sorted) {
    const index = text.indexOf(phrase);
    if (index === -1) continue;
    if (earliest === null || index < earliest.index) {
      earliest = { phrase, index };
    }
  }

  if (earliest === null) return text;

  const { phrase, index } = earliest;
  return (
    <>
      {boldPhrases(text.slice(0, index), phrases)}
      <strong>{phrase}</strong>
      {boldPhrases(text.slice(index + phrase.length), phrases)}
    </>
  );
}
