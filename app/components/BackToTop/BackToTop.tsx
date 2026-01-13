'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BackToTopButton } from './BackToTop.styles';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isObserverActive, setIsObserverActive] = useState(false);
  const techStackObserverRef = useRef<IntersectionObserver | null>(null);
  const contactObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Find Tech Stack section
    const techStackElement = document.getElementById('techstack');
    // Find Contact section (last two components area)
    const contactElement = document.getElementById('contact');

    if (!techStackElement || !contactElement) {
      return;
    }

    // Observer for Contact section - shows button when near last components
    const createContactObserver = () => {
      if (contactObserverRef.current) {
        return; // Already created
      }

      contactObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1,
        }
      );

      contactObserverRef.current.observe(contactElement);
    };

    // Observer for Tech Stack - activates when user reaches it
    techStackObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsObserverActive(true);
            // Once Tech Stack is reached, start observing Contact
            createContactObserver();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Start observing Tech Stack
    techStackObserverRef.current.observe(techStackElement);

    // Cleanup function
    return () => {
      if (techStackObserverRef.current) {
        techStackObserverRef.current.disconnect();
      }
      if (contactObserverRef.current) {
        contactObserverRef.current.disconnect();
      }
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Only show button if observer is active AND contact section is visible
  if (!isObserverActive || !isVisible) {
    return null;
  }

  return (
    <BackToTopButton onClick={handleClick} aria-label="Back to top">
      <FaArrowUp />
    </BackToTopButton>
  );
};
