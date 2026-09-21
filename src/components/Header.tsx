'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface NavDropdownItem {
  label: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [workshopsOpen, setWorkshopsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trainingRef = useRef<HTMLDivElement>(null);
  const workshopsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (trainingRef.current && !trainingRef.current.contains(event.target as Node)) {
        setTrainingOpen(false);
      }
      if (workshopsRef.current && !workshopsRef.current.contains(event.target as Node)) {
        setWorkshopsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const trainingItems: NavDropdownItem[] = [
    { label: 'Full Stack Developer', href: '/fullstack' },
    { label: 'AI Career Ready', href: '/AICAREER' },
    { label: 'Custom Programs', href: '/customprograms' },
  ];

  const workshopItems: NavDropdownItem[] = [
    { label: 'For Schools', href: '/schoolworkshop' },
    { label: 'For Colleges & Enterprises', href: '/collegeenterpriseworkshop' },
    { label: 'Corporate Training', href: '/corporatetraining' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <img
            src="/images/logo/advaitecs-logo.png"
            alt="Advaitecs Logo Icon"
            className={styles.logoImage}
          />
          <div className={styles.brandTextWrapper}>
            <span className={styles.brandName}>Advaitecs</span>
            <span className={styles.brandTagline}>Training Minds, Innovating Solutions.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}
          >
            Home
          </Link>
          <Link
            href="/Skaimitra"
            className={`${styles.navLink} ${pathname === '/Skaimitra' ? styles.activeLink : ''}`}
          >
            SkaiMitra
          </Link>

          {/* Training Programs Dropdown */}
          <div
            className={styles.dropdownWrapper}
            ref={trainingRef}
            onMouseEnter={() => setTrainingOpen(true)}
            onMouseLeave={() => setTrainingOpen(false)}
          >
            <Link
              href="/Trainingprogarm"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${trainingOpen ? styles.dropdownActive : ''} ${(pathname?.startsWith('/Trainingprogarm') || pathname?.startsWith('/training') || pathname?.startsWith('/fullstack') || pathname?.startsWith('/AICAREER')) ? styles.activeLink : ''}`}
              onClick={() => setTrainingOpen(false)}
            >
              Training Programs
              <svg
                className={`${styles.chevron} ${trainingOpen ? styles.chevronRotated : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {trainingOpen && (
              <div className={styles.dropdownMenu}>
                {trainingItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={styles.dropdownItem}
                    onClick={() => setTrainingOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Workshops Dropdown */}
          <div
            className={styles.dropdownWrapper}
            ref={workshopsRef}
            onMouseEnter={() => setWorkshopsOpen(true)}
            onMouseLeave={() => setWorkshopsOpen(false)}
          >
            <Link
              href="/workshop"
              className={`${styles.navLink} ${styles.dropdownTrigger} ${workshopsOpen ? styles.dropdownActive : ''} ${(pathname?.startsWith('/workshop') || pathname?.startsWith('/corporatetraining') || pathname?.startsWith('/collegeenterpriseworkshop') || pathname?.startsWith('/schoolworkshop')) ? styles.activeLink : ''}`}
              onClick={() => setWorkshopsOpen(false)}
            >
              Workshops
              <svg
                className={`${styles.chevron} ${workshopsOpen ? styles.chevronRotated : ''}`}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>

            {workshopsOpen && (
              <div className={styles.dropdownMenu}>
                {workshopItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={styles.dropdownItem}
                    onClick={() => setWorkshopsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/Aboutus" className={`${styles.navLink} ${pathname?.startsWith('/Aboutus') ? styles.activeLink : ''}`}>
            About Us
          </Link>

          <Link href="/careers" className={`${styles.navLink} ${pathname?.startsWith('/careers') ? styles.activeLink : ''}`}>
            Careers
          </Link>

          <Link href="/contact" className={`${styles.navLink} ${pathname?.startsWith('/contact') ? styles.activeLink : ''}`}>
            Contact
          </Link>

          {/* Divider */}
          <div className={styles.navDivider} />

          {/* Phone Action */}
          <a href="tel:+919603992299" className={styles.phoneButton}>
            <div className={styles.phoneIconCircle}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className={styles.phoneNumber}>+91 96039 92299</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/Skaimitra" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            SkaiMitra
          </Link>

          <div className={styles.mobileDropdownSection}>
            <Link
              href="/Trainingprogarm"
              className={styles.mobileSectionTitle}
              onClick={() => setMobileMenuOpen(false)}
            >
              Training Programs →
            </Link>
            {trainingItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.mobileSubLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.mobileDropdownSection}>
            <Link
              href="/workshop"
              className={styles.mobileSectionTitle}
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshops →
            </Link>
            {workshopItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.mobileSubLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/Aboutus" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/careers" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>

          <a href="tel:+919603992299" className={styles.mobilePhoneButton}>
            <div className={styles.phoneIconCircle}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>+91 96039 92299</span>
          </a>
        </div>
      )}
    </header>
  );
}
