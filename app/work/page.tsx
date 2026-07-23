import type { Metadata } from 'next';
import { WorkPage } from '../components/WorkPage/WorkPage';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Browse all projects by Umar Nazir — web apps, platforms, and digital products built with Next.js, React, and modern stacks.',
  alternates: {
    canonical: 'https://umarnazir.vercel.app/work',
  },
  openGraph: {
    title: 'Work | Umar Nazir',
    description:
      'Browse all projects by Umar Nazir — web apps, platforms, and digital products.',
    url: 'https://umarnazir.vercel.app/work',
  },
};

export default function WorkRoutePage() {
  return <WorkPage />;
}
