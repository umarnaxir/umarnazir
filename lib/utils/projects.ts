import { Project } from '../types';

export type ProjectSort = 'newest' | 'oldest' | 'az';

/** Dropdown value: sort keys or `year:YYYY` */
export type ProjectFilterValue = ProjectSort | `year:${string}`;

export function isYearFilter(value: string): value is `year:${string}` {
  return value.startsWith('year:');
}

export function getYearFromFilter(value: `year:${string}`): string {
  return value.slice('year:'.length);
}

export function getProjectCategories(projects: Project[]): string[] {
  const set = new Set<string>();
  projects.forEach((p) => {
    const primary = p.category.split('/')[0]?.trim() || p.category;
    if (primary) set.add(primary);
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getProjectYears(projects: Project[]): string[] {
  const set = new Set(projects.map((p) => p.year));
  return Array.from(set).sort((a, b) => Number(b) - Number(a));
}

export function sortProjects(projects: Project[], sort: ProjectSort): Project[] {
  const copy = [...projects];
  switch (sort) {
    case 'oldest':
      return copy.sort((a, b) => {
        const yearDiff = Number(a.year) - Number(b.year);
        if (yearDiff !== 0) return yearDiff;
        return Number(a.number) - Number(b.number);
      });
    case 'az':
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case 'newest':
    default:
      return copy.sort((a, b) => {
        const yearDiff = Number(b.year) - Number(a.year);
        if (yearDiff !== 0) return yearDiff;
        return Number(a.number) - Number(b.number);
      });
  }
}

export function applyProjectFilter(
  projects: Project[],
  value: ProjectFilterValue
): Project[] {
  if (isYearFilter(value)) {
    const year = getYearFromFilter(value);
    return sortProjects(
      projects.filter((p) => p.year === year),
      'newest'
    );
  }
  return sortProjects(projects, value);
}

export function filterProjects(
  projects: Project[],
  opts: {
    category: string;
    year: string;
    query: string;
    sort: ProjectSort;
  }
): Project[] {
  const q = opts.query.trim().toLowerCase();
  const filtered = projects.filter((p) => {
    const primary = p.category.split('/')[0]?.trim() || p.category;
    const matchesCategory =
      opts.category === 'all' || primary === opts.category || p.category === opts.category;
    const matchesYear = opts.year === 'all' || p.year === opts.year;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesYear && matchesQuery;
  });
  return sortProjects(filtered, opts.sort);
}
