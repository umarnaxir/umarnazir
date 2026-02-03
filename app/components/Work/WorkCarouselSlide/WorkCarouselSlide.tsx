'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, User, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/data';
import {
  CarouselSlide,
  SlideContent,
  SlideImageWrapper,
  SlideImage,
  ImageMetaBar,
  ImageMetaItem,
  DetailsCard,
  DetailsTitle,
  DetailsDescription,
  DetailsNote,
  TechnologiesLabel,
  DetailsTags,
  DetailTag,
  DetailsActions,
  DetailLinkPrimary,
} from '../Work.styles';

interface WorkCarouselSlideProps {
  project: Project;
}

function getUniqueTags(tags: string[]): string[] {
  return tags.filter((tag, index, arr) => arr.indexOf(tag) === index);
}

export const WorkCarouselSlide: React.FC<WorkCarouselSlideProps> = ({
  project,
}) => {
  const displayTags = getUniqueTags(project.tags);

  return (
    <CarouselSlide>
      <SlideContent>
        <SlideImageWrapper
          data-aos="fade-right"
          data-aos-duration="450"
          data-aos-once="false"
          data-aos-delay="0"
        >
          <ImageMetaBar>
            <ImageMetaItem>
              <Calendar size={12} />
              {project.year}
            </ImageMetaItem>
            <ImageMetaItem>
              <User size={12} />
              {project.category}
            </ImageMetaItem>
          </ImageMetaBar>
          <SlideImage>
            <Image
              src={project.imageLink || '/images/ml-jobs.png'}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </SlideImage>
        </SlideImageWrapper>

        <DetailsCard
          data-aos="fade-left"
          data-aos-duration="450"
          data-aos-once="false"
          data-aos-delay="50"
        >
          <DetailsTitle
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="false"
            data-aos-delay="100"
          >
            {project.title}
          </DetailsTitle>
          <DetailsDescription
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="false"
            data-aos-delay="150"
          >
            {project.description}
          </DetailsDescription>

          {project.note?.trim() && (
            <DetailsNote
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-once="false"
              data-aos-delay="200"
            >
              {project.note}
            </DetailsNote>
          )}

          <TechnologiesLabel
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="false"
            data-aos-delay="250"
          >
            &lt;/&gt; TECHNOLOGIES
          </TechnologiesLabel>
          <DetailsTags
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="false"
            data-aos-delay="300"
          >
            {displayTags.map((tag) => (
              <DetailTag key={tag}>{tag}</DetailTag>
            ))}
          </DetailsTags>

          <DetailsActions
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-once="false"
            data-aos-delay="350"
          >
            {project.link && (
              <DetailLinkPrimary
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <ExternalLink size={16} />
              </DetailLinkPrimary>
            )}
          </DetailsActions>
        </DetailsCard>
      </SlideContent>
    </CarouselSlide>
  );
};
