'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import {
  StyledNavbar,
  NavbarContent,
  Logo,
  NavRight,
  NavLinks,
  NavLink,
  MobileNavRight,
  MobileNavThemeToggleButton,
  MobileNavThemeToggleThumb,
  MobileMenuButton,
  HamburgerLine,
  MobileMenu,
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuHeaderRight,
  MobileMenuLogo,
  MobileMenuCloseButton,
  MobileMenuDivider,
  MobileNavLinks,
  MobileNavLinkItem,
  MobileNavLink,
  MobileResumeLink,
  ThemeToggleButton,
  ThemeToggleThumb,
  MobileThemeToggleButton,
  MobileThemeToggleThumb,
  ResumeButton,
  ResumeModalOverlay,
  ResumeModal,
  ResumeModalTitle,
  ResumeModalText,
  ResumeModalButtons,
  ResumeModalButton,
  ResumeModalClose,
} from './NavBar.styles';

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
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}) => {
  const { theme, toggleTheme } = useTheme();
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
    window.open('/resume/umarnazir.pdf', '_blank');
    setResumeModalOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/umarnazir.pdf';
    link.download = 'umarnazir.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeModalOpen(false);
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
  };

  return (
    <StyledNavbar $mobileMenuActive={mobileMenuOpen}>
      <NavbarContent>
        <Logo href="#">{name}</Logo>

        <NavRight>
          <NavLinks>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </NavLinks>

          <ResumeButton href="#" onClick={handleResumeClick}>
            Resume
          </ResumeButton>

          <ThemeToggleButton
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            $isLight={theme === 'light'}
          >
            <ThemeToggleThumb $isLight={theme === 'light'}>
              {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
            </ThemeToggleThumb>
          </ThemeToggleButton>
        </NavRight>

        <MobileNavRight>
          <MobileNavThemeToggleButton
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            $isLight={theme === 'light'}
          >
            <MobileNavThemeToggleThumb $isLight={theme === 'light'}>
              {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
            </MobileNavThemeToggleThumb>
          </MobileNavThemeToggleButton>
          <MobileMenuButton $isOpen={mobileMenuOpen} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <HamburgerLine $index={0} $isOpen={mobileMenuOpen} />
            <HamburgerLine $index={1} $isOpen={mobileMenuOpen} />
            <HamburgerLine $index={2} $isOpen={mobileMenuOpen} />
          </MobileMenuButton>
        </MobileNavRight>
      </NavbarContent>

      <MobileMenu
        $isOpen={mobileMenuOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMobileMenu();
          }
        }}
      >
        <MobileMenuContent>
          <MobileMenuHeader>
            <MobileMenuLogo href="#" onClick={closeMobileMenu}>
              {name}
            </MobileMenuLogo>
            <MobileMenuHeaderRight>
              <MobileThemeToggleButton
                onClick={() => {
                  toggleTheme();
                }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                $isInHeader
                $isLight={theme === 'light'}
              >
                <MobileThemeToggleThumb $isLight={theme === 'light'} $isInHeader>
                  {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
                </MobileThemeToggleThumb>
              </MobileThemeToggleButton>
              <MobileMenuCloseButton onClick={closeMobileMenu} aria-label="Close menu">
                ×
              </MobileMenuCloseButton>
            </MobileMenuHeaderRight>
          </MobileMenuHeader>
          <MobileMenuDivider />
          <MobileNavLinks>
            {navItems.map((item, index) => (
              <MobileNavLinkItem key={item.href} $index={index}>
                <MobileNavLink href={item.href} onClick={closeMobileMenu}>
                  {item.label}
                </MobileNavLink>
              </MobileNavLinkItem>
            ))}
            <MobileNavLinkItem $index={navItems.length}>
              <MobileResumeLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  handleResumeClick(e as any);
                }}
              >
                Resume
              </MobileResumeLink>
            </MobileNavLinkItem>
          </MobileNavLinks>
        </MobileMenuContent>
      </MobileMenu>

      {resumeModalOpen && (
        <ResumeModalOverlay onClick={closeResumeModal}>
          <ResumeModal onClick={(e) => e.stopPropagation()}>
            <ResumeModalTitle>Resume Options</ResumeModalTitle>
            <ResumeModalText>Choose an option:</ResumeModalText>
            <ResumeModalButtons>
              <ResumeModalButton onClick={handleViewResume}>View Resume</ResumeModalButton>
              <ResumeModalButton onClick={handleDownloadResume}>Download Resume</ResumeModalButton>
            </ResumeModalButtons>
            <ResumeModalClose onClick={closeResumeModal} aria-label="Close modal">
              ×
            </ResumeModalClose>
          </ResumeModal>
        </ResumeModalOverlay>
      )}
    </StyledNavbar>
  );
};

