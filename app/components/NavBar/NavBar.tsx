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
  resumeUrl = '#',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}>
      <div className={styles.navbarContent}>
        <a href="#" className={styles.logo}>
          {name}
        </a>

        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={resumeUrl} className={styles.resumeButton}>
          Resume
        </a>

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
          <a href="#" className={styles.mobileMenuLogo} onClick={closeMobileMenu}>
            {name}
          </a>
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
                href={resumeUrl}
                className={styles.resumeLink}
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

