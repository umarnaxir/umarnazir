'use client';

import React, { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../atoms';
import { WorkHeader } from './WorkHeader/WorkHeader';
import { WorkCarouselSlide } from './WorkCarouselSlide/WorkCarouselSlide';
import { Project } from '@/lib/data';
import {
  StyledWork,
  CarouselViewport,
  CarouselTrack,
  CarouselNav,
  PlayArrowsRow,
  PlayPauseButton,
  DotsAndCounter,
  CarouselDots,
  Dot,
  CarouselCounter,
  NavArrows,
  NavArrowButton,
} from './Work.styles';

export interface WorkProps {
  sectionNumber?: string;
  projects: Project[];
}

const AUTOPLAY_INTERVAL_MS = 5000;

export const Work: React.FC<WorkProps> = ({
  sectionNumber = '01',
  projects,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const total = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + total) % total);
    },
    [total]
  );

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (!isPlaying || total <= 1) return;
    const id = setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPlaying, goNext, total]);

  useEffect(() => {
    AOS.refresh();
  }, [currentIndex]);

  if (!projects.length) return null;

  return (
    <Section id="work">
      <StyledWork data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
        <WorkHeader sectionNumber={sectionNumber} title="Selected projects I've built." />
        <CarouselViewport>
          <CarouselTrack $offset={-currentIndex * 100}>
            {projects.map((project) => (
              <WorkCarouselSlide key={project.id} project={project} />
            ))}
          </CarouselTrack>
        </CarouselViewport>
        <CarouselNav>
            <DotsAndCounter>
              <CarouselCounter>
                {currentIndex + 1}/{total}
              </CarouselCounter>
              <CarouselDots>
                {projects.map((_, index) => (
                  <Dot
                    key={index}
                    type="button"
                    $active={index === currentIndex}
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </CarouselDots>
            </DotsAndCounter>
            <PlayArrowsRow>
              <PlayPauseButton
                type="button"
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} />
                )}
              </PlayPauseButton>
              <NavArrows>
                <NavArrowButton
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous project"
                  disabled={total <= 1}
                >
                  <ChevronLeft size={20} />
                </NavArrowButton>
                <NavArrowButton
                  type="button"
                  onClick={goNext}
                  aria-label="Next project"
                  disabled={total <= 1}
                >
                  <ChevronRight size={20} />
                </NavArrowButton>
              </NavArrows>
            </PlayArrowsRow>
        </CarouselNav>
      </StyledWork>
    </Section>
  );
};
