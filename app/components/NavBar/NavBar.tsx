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
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

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
  homeHref?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const NavBar: React.FC<NavBarProps> = ({
  name,
  navItems = DEFAULT_NAV_ITEMS,
  resumeUrl = '/resume/umarnazir.pdf',
  email = 'erumarnazir@gmail.com',
  phone = '+91 705-173-2616',
  homeHref = '/',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [letsTalkOpen, setLetsTalkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <StyledNavbar $mobileMenuActive={mobileMenuOpen} $scrolled={scrolled}>
      <NavbarContent>
        <Logo href={homeHref}>{name}</Logo>

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
          <ThemeToggle />
        </NavRight>

        <MobileNavRight>
          <ThemeToggle />
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
            <MobileMenuLogo href={homeHref} onClick={closeMobileMenu}>
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

