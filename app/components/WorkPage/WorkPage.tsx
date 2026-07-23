'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { LayoutGrid, List, ExternalLink } from 'lucide-react';
import { Footer } from '../Footer/Footer';
import { WhatsAppButton } from '../WhatsApp/WhatsApp';
import { GalaxyBackground } from '../GalaxyBackground/GalaxyBackground';
import { Project, portfolioData } from '@/lib/data';
import {
  applyProjectFilter,
  getProjectYears,
  ProjectFilterValue,
} from '@/lib/utils/projects';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  WorkPageShell,
  WorkHeroBand,
  WorkHeroBackground,
  WorkPageInner,
  WorkHero,
  WorkEyebrow,
  WorkTitle,
  WorkSubtitle,
  WorkCount,
  WorkCountLabel,
  WorkCountBlock,
  Toolbar,
  SearchRow,
  ToolbarControls,
  ViewToggle,
  ViewToggleButton,
  ProjectGrid,
  ProjectCard,
  CardMedia,
  CardOverlay,
  CardIndex,
  CardBody,
  CardContent,
  CardMeta,
  CardTitle,
  CardDescription,
  VisitLink,
} from './WorkPage.styles';

type ViewMode = 'grid' | 'list';

export const WorkPage: React.FC = () => {
  const { personal, projects } = portfolioData;
  const [filter, setFilter] = useState<ProjectFilterValue>('newest');
  const [view, setView] = useState<ViewMode>('grid');

  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  const years = useMemo(() => getProjectYears(projects), [projects]);
  const sorted = useMemo(
    () => applyProjectFilter(projects, filter),
    [projects, filter]
  );

  const setCardRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) cardRefs.current.set(id, el);
    else cardRefs.current.delete(id);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-animate]', {
        y: 36,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const ordered = Array.from(
      grid.querySelectorAll<HTMLElement>('[data-project-card]')
    );
    if (!ordered.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ordered,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
          overwrite: 'auto',
        }
      );
    }, grid);

    // Layout height changes between grid/list — keep page scroll metrics in sync
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });

    return () => ctx.revert();
  }, [sorted, view]);

  const onCardEnter = (id: string) => {
    const el = cardRefs.current.get(id);
    if (!el) return;
    gsap.to(el, {
      y: -4,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const onCardLeave = (id: string) => {
    const el = cardRefs.current.get(id);
    if (!el) return;
    gsap.to(el, {
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const openProject = (project: Project) => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <WorkPageShell>
      <WorkHeroBand ref={heroRef}>
        <WorkHeroBackground>
          <GalaxyBackground />
        </WorkHeroBackground>
        <WorkHero>
          <WorkEyebrow data-hero-animate>Portfolio archive</WorkEyebrow>
          <WorkTitle data-hero-animate>Work</WorkTitle>
          <WorkSubtitle data-hero-animate>
            A curated collection of products, platforms, and sites I have shipped.
            <br />
            Browse every build in one place.
          </WorkSubtitle>
          <WorkCountBlock data-hero-animate>
            <WorkCount>{String(projects.length).padStart(2, '0')}</WorkCount>
            <WorkCountLabel>Total projects</WorkCountLabel>
          </WorkCountBlock>
        </WorkHero>
      </WorkHeroBand>

      <WorkPageInner>
        <Toolbar>
          <SearchRow>
            <ToolbarControls>
              <Select
                value={filter}
                onValueChange={(value) =>
                  setFilter(value as ProjectFilterValue)
                }
              >
                <SelectTrigger className="w-[158px]" aria-label="Sort and filter">
                  <SelectValue placeholder="Sort projects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sort</SelectLabel>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="az">A to Z</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Year</SelectLabel>
                    {years.map((year) => (
                      <SelectItem key={year} value={`year:${year}`}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <ViewToggle role="group" aria-label="Layout">
                <ViewToggleButton
                  type="button"
                  $active={view === 'grid'}
                  onClick={() => setView('grid')}
                  aria-label="Grid view"
                  aria-pressed={view === 'grid'}
                >
                  <LayoutGrid size={14} />
                </ViewToggleButton>
                <ViewToggleButton
                  type="button"
                  $active={view === 'list'}
                  onClick={() => setView('list')}
                  aria-label="List view"
                  aria-pressed={view === 'list'}
                >
                  <List size={14} />
                </ViewToggleButton>
              </ViewToggle>
            </ToolbarControls>
          </SearchRow>
        </Toolbar>

        <ProjectGrid ref={gridRef} $view={view}>
          {sorted.map((project, index) => {
            return (
              <ProjectCard
                key={project.id}
                ref={(el) => setCardRef(project.id, el)}
                data-project-card
                $view={view}
                tabIndex={0}
                role="link"
                aria-label={`${project.title}, open live link`}
                onMouseEnter={() => onCardEnter(project.id)}
                onMouseLeave={() => onCardLeave(project.id)}
                onClick={() => openProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <CardMedia $view={view}>
                  <Image
                    src={project.imageLink || '/images/work/mljobs.png'}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={
                      view === 'list'
                        ? '(max-width: 768px) 88px, 140px'
                        : '(max-width: 900px) 100vw, 50vw'
                    }
                    priority={index < 2}
                  />
                  <CardOverlay $view={view} />
                  <CardIndex $view={view}>{String(index + 1).padStart(2, '0')}</CardIndex>
                </CardMedia>
                <CardBody $view={view}>
                  <CardContent $view={view}>
                    <CardMeta $view={view}>
                      <span>{project.year}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                    </CardMeta>
                    <CardTitle $view={view}>{project.title}</CardTitle>
                    <CardDescription $view={view}>{project.description}</CardDescription>
                  </CardContent>
                  {project.link ? (
                    <VisitLink
                      $view={view}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live link
                      <ExternalLink size={12} />
                    </VisitLink>
                  ) : null}
                </CardBody>
              </ProjectCard>
            );
          })}
        </ProjectGrid>
      </WorkPageInner>

      <Footer name={personal.name} />
      <WhatsAppButton />
    </WorkPageShell>
  );
};
