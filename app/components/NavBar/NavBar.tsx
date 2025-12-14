'use client';

import React, { useState, useEffect } from 'react';
import {
  StyledNavbar,
  NavbarContent,
  Logo,
  NavRight,
  NavLinks,
  NavLink,
  MobileMenuButton,
  HamburgerLine,
  MobileMenu,
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuLogo,
  MobileMenuCloseButton,
  MobileMenuDivider,
  MobileNavLinks,
  MobileNavLinkItem,
  MobileNavLink,
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
        </NavRight>

        <MobileMenuButton $isOpen={mobileMenuOpen} onClick={toggleMobileMenu} aria-label="Toggle menu">
          <HamburgerLine $index={0} $isOpen={mobileMenuOpen} />
          <HamburgerLine $index={1} $isOpen={mobileMenuOpen} />
          <HamburgerLine $index={2} $isOpen={mobileMenuOpen} />
        </MobileMenuButton>
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
            <MobileMenuCloseButton onClick={closeMobileMenu} aria-label="Close menu">
              ×
            </MobileMenuCloseButton>
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
              <MobileNavLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  handleResumeClick(e as any);
                }}
              >
                Resume
              </MobileNavLink>
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

