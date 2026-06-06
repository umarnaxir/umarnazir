'use client';

import React, { useState, useEffect } from 'react';
import {
  StyledNavbar,
  NavbarContent,
  Logo,
  NavRight,
  NavLinks,
  NavLink,
  MobileNavRight,
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
  ResumeButton,
} from './NavBar.styles';
import { LetsTalkModal } from './LetsTalkModal/LetsTalkModal';

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  name: string;
  navItems?: NavItem[];
  resumeUrl?: string;
  email?: string;
  phone?: string;
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
  resumeUrl = '/resume/umarnazir.pdf',
  email = 'sd.umarnazir@gmail.com',
  phone = '+91 705-173-2616',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [letsTalkOpen, setLetsTalkOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen || letsTalkOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, letsTalkOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openLetsTalk = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setLetsTalkOpen(true);
  };

  const closeLetsTalk = () => {
    setLetsTalkOpen(false);
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

          <ResumeButton href="#" onClick={openLetsTalk}>
            Let&rsquo;s Talk
          </ResumeButton>
        </NavRight>

        <MobileNavRight>
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
                  setLetsTalkOpen(true);
                }}
              >
                Let&rsquo;s Talk
              </MobileResumeLink>
            </MobileNavLinkItem>
          </MobileNavLinks>
        </MobileMenuContent>
      </MobileMenu>

      {letsTalkOpen && (
        <LetsTalkModal
          onClose={closeLetsTalk}
          email={email}
          phone={phone}
          resumeUrl={resumeUrl}
        />
      )}
    </StyledNavbar>
  );
};

