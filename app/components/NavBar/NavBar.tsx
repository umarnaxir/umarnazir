'use client';

import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  name: string;
  navItems?: NavItem[];
  resumeUrl?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
  name,
  navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen || resumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, resumeModalOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setResumeModalOpen(true);
  };

  const handleViewResume = () => {
    window.open('/resume/cv.pdf', '_blank');
    setResumeModalOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/cv.pdf';
    link.download = 'Umar_Nazir_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeModalOpen(false);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  return (
    <nav 
      className={`${styles.navbar} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}
      data-aos="fade-down"
    >
      <div className={styles.navbarContent}>
        <a href="#" className={styles.logo}>
          {name}
        </a>

        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#" onClick={handleResumeClick} className={styles.resumeButton}>
            Resume
          </a>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      <div 
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMobileMenu();
          }
        }}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <a href="#" className={styles.mobileMenuLogo} onClick={closeMobileMenu}>
              {name}
            </a>
            <button
              className={styles.mobileMenuCloseButton}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <hr className={styles.mobileMenuDivider} />
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className={styles.resumeLink}
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  handleResumeClick(e);
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div 
          className={styles.resumeModalOverlay}
          onClick={closeResumeModal}
        >
          <div 
            className={styles.resumeModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={styles.resumeModalTitle}>Resume Options</h3>
            <p className={styles.resumeModalText}>Choose an option:</p>
            <div className={styles.resumeModalButtons}>
              <button 
                className={styles.resumeModalButton}
                onClick={handleViewResume}
              >
                View Resume
              </button>
              <button 
                className={styles.resumeModalButton}
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
            </div>
            <button 
              className={styles.resumeModalClose}
              onClick={closeResumeModal}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

