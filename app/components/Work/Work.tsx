'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/data';
import {
  WorkSection,
  WorkPin,
  WorkInner,
  WorkHeaderRow,
  WorkTitle,
  WorkCounter,
  CardsStage,
  ProjectCard,
  CardMedia,
  MediaBadge,
  CardContent,
  ProjectNav,
  ProjectNavItem,
  ProjectNavNumber,
  ProjectNavTitle,
  CardDetails,
  DetailsCategory,
  DetailsTitle,
  DetailsDescription,
  DetailsTags,
  DetailTag,
  DetailsActions,
  ViewLiveButton,
  AllWorkLink,
  ScrollRail,
  ScrollDots,
  ScrollDot,
} from './Work.styles';

gsap.registerPlugin(ScrollTrigger);

export interface WorkProps {
  sectionNumber?: string;
  projects: Project[];
  /** Max projects shown on the home selected-work section. Rest live on /work. */
  previewLimit?: number;
}

const DEFAULT_PREVIEW_LIMIT = 6;

function uniqueTags(tags: string[]): string[] {
  return tags.filter((tag, index, arr) => arr.indexOf(tag) === index);
}

function padIndex(index: number): string {
  return String(index + 1).padStart(2, '0');
}

export const Work: React.FC<WorkProps> = ({
  projects,
  previewLimit = DEFAULT_PREVIEW_LIMIT,
}) => {
  const previewProjects = useMemo(
    () => projects.slice(0, previewLimit),
    [projects, previewLimit]
  );
  const total = previewProjects.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const pinRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const activeIndexRef = useRef(0);

  const setIndex = useCallback((index: number) => {
    const next = Math.max(0, Math.min(total - 1, index));
    if (activeIndexRef.current === next) return;
    activeIndexRef.current = next;
    setActiveIndex(next);
  }, [total]);

  const showCard = useCallback(
    (nextIndex: number, direction: 1 | -1 = 1) => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      if (!cards.length || total <= 0) return;

      const next = Math.max(0, Math.min(total - 1, nextIndex));
      const prev = activeIndexRef.current;
      if (next === prev) return;

      const outgoing = cards[prev];
      const incoming = cards[next];
      if (!outgoing || !incoming) {
        setIndex(next);
        return;
      }

      setIndex(next);

      const offset = 64 * direction;

      gsap.killTweensOf(cards);
      gsap.set(incoming, {
        autoAlpha: 0,
        y: offset,
        zIndex: 2,
      });
      gsap.set(outgoing, { zIndex: 1 });

      gsap
        .timeline({
          defaults: { duration: 0.6, ease: 'power3.inOut' },
          onComplete: () => {
            cards.forEach((card, i) => {
              gsap.set(card, {
                autoAlpha: i === next ? 1 : 0,
                y: 0,
                zIndex: i === next ? 2 : 0,
              });
            });
          },
        })
        .to(outgoing, { autoAlpha: 0, y: -offset }, 0)
        .to(incoming, { autoAlpha: 1, y: 0 }, 0);
    },
    [setIndex, total]
  );

  const goTo = useCallback(
    (index: number) => {
      if (total <= 0) return;
      const next = Math.max(0, Math.min(total - 1, index));
      const st = scrollTriggerRef.current;

      if (st && total > 1) {
        const progress = next / Math.max(total - 1, 1);
        const scrollTarget = st.start + (st.end - st.start) * progress;
        window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        return;
      }

      showCard(next, next >= activeIndexRef.current ? 1 : -1);
    },
    [showCard, total]
  );

  useEffect(() => {
    const pin = pinRef.current;
    const stage = stageRef.current;
    if (!pin || !stage || total <= 0) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    // Stack every full card in the same fixed slot
    gsap.set(cards, { autoAlpha: 0, y: 0, zIndex: 0 });
    gsap.set(cards[0], { autoAlpha: 1, y: 0, zIndex: 2 });
    activeIndexRef.current = 0;
    setActiveIndex(0);

    if (total === 1) {
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    let lastIndex = 0;

    const st = ScrollTrigger.create({
      trigger: pin,
      start: 'top top',
      // One viewport of scroll distance per card step
      end: () => `+=${window.innerHeight * total}`,
      pin: true,
      pinSpacing: true,
      scrub: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      snap: {
        snapTo: (value) => {
          const step = 1 / total;
          return Math.round(value / step) * step;
        },
        duration: { min: 0.15, max: 0.35 },
        ease: 'power1.inOut',
      },
      onUpdate: (self) => {
        const idx = Math.min(
          total - 1,
          Math.floor(self.progress * total + 0.001)
        );

        if (idx !== lastIndex) {
          const direction: 1 | -1 = idx > lastIndex ? 1 : -1;
          lastIndex = idx;
          showCard(idx, direction);
        }
      },
    });

    scrollTriggerRef.current = st;
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      st.kill();
      scrollTriggerRef.current = null;
      gsap.killTweensOf(cards);
    };
  }, [total, showCard, previewProjects]);

  if (!previewProjects.length) return null;

  const totalLabel = String(total).padStart(2, '0');
  const activeProject = previewProjects[activeIndex] ?? previewProjects[0];

  return (
    <WorkSection id="work">
      <WorkPin ref={pinRef}>
        <WorkInner>
          <WorkHeaderRow>
            <WorkTitle>Selected projects</WorkTitle>
            <WorkCounter>
              {padIndex(activeIndex)} / {totalLabel}
            </WorkCounter>
          </WorkHeaderRow>

          <CardsStage ref={stageRef}>
            {previewProjects.map((project, cardIndex) => {
              const tags = uniqueTags(project.tags).slice(0, 5);
              return (
                <ProjectCard
                  key={project.id}
                  ref={(el) => {
                    cardRefs.current[cardIndex] = el;
                  }}
                >
                  <CardMedia>
                    <MediaBadge>{project.category}</MediaBadge>
                    <Image
                      src={project.imageLink || '/images/work/mljobs.png'}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      priority={cardIndex === 0}
                    />
                  </CardMedia>

                  <CardContent>
                    <ProjectNav aria-label="Selected projects">
                      {previewProjects.map((navProject, navIndex) => (
                        <ProjectNavItem
                          key={navProject.id}
                          type="button"
                          $active={navIndex === cardIndex}
                          onClick={() => goTo(navIndex)}
                          aria-current={
                            navIndex === cardIndex ? 'true' : undefined
                          }
                        >
                          <ProjectNavNumber>
                            {navProject.number}
                          </ProjectNavNumber>
                          <ProjectNavTitle>{navProject.title}</ProjectNavTitle>
                        </ProjectNavItem>
                      ))}
                    </ProjectNav>

                    <CardDetails>
                      <DetailsCategory>{project.category}</DetailsCategory>
                      <DetailsTitle>{project.title}</DetailsTitle>
                      <DetailsDescription>
                        {project.description}
                      </DetailsDescription>
                      <DetailsTags>
                        {tags.map((tag) => (
                          <DetailTag key={tag}>{tag}</DetailTag>
                        ))}
                      </DetailsTags>
                      <DetailsActions>
                        {project.link && (
                          <ViewLiveButton
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View live
                            <ExternalLink size={15} />
                          </ViewLiveButton>
                        )}
                        <AllWorkLink href="/work">
                          All work
                          <ArrowUpRight size={16} />
                        </AllWorkLink>
                      </DetailsActions>
                    </CardDetails>
                  </CardContent>
                </ProjectCard>
              );
            })}
          </CardsStage>

          <ScrollRail>
            <ScrollDots>
              {previewProjects.map((project, index) => (
                <ScrollDot
                  key={project.id}
                  type="button"
                  $active={index === activeIndex}
                  onClick={() => goTo(index)}
                  aria-label={`Go to project ${project.number}`}
                />
              ))}
            </ScrollDots>
          </ScrollRail>
        </WorkInner>
      </WorkPin>

      <span className="sr-only" aria-live="polite">
        Project {padIndex(activeIndex)} of {totalLabel}: {activeProject.title}
      </span>
    </WorkSection>
  );
};
