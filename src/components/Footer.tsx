'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Dynamic ambient wave and glow effect at bottom */}
      <div className={styles.ambientGlow} />
      <div className={styles.waveOverlay} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.footerBrandWrapper}>
                <img
                  src="/images/logo/advaitecs-icon.png"
                  alt="Advaitecs Logo"
                  className={styles.footerLogo}
                />
                <div className={styles.footerBrandText}>
                  <span className={styles.footerBrandName}>Advaitecs</span>
                  <span className={styles.footerBrandTagline}>Training Minds, Innovating Solutions.</span>
                </div>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Empowering learners with AI and skill education for a smarter, brighter future.
            </p>
            <div className={styles.socialRow}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/advaitecs/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/advaitecs?igsh=MTU5eXBzZGNrbXVrbg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Advaitecs-Private-Limited/61584401930206/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialBtn}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/Aboutus" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/careers" className={styles.footerLink}>Careers</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><Link href="/privacypolicy" className={styles.footerLink}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* SkaiMitra Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>SkaiMitra</h3>
            <ul className={styles.linkList}>
              <li><Link href="/Skaimitra" className={styles.footerLink}>Overview</Link></li>
              <li><Link href="/schoolworkshop" className={styles.footerLink}>For Schools</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Request Demo</Link></li>
            </ul>
          </div>

          {/* Training Programs Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Training Programs</h3>
            <ul className={styles.linkList}>
              <li><Link href="/fullstack" className={styles.footerLink}>Full-Stack Job Ready</Link></li>
              <li><Link href="/AICAREER" className={styles.footerLink}>AI Career Ready</Link></li>
              <li><Link href="/Trainingprogarm" className={styles.footerLink}>All Programs</Link></li>
              <li><Link href="/customprograms" className={styles.footerLink}>Custom Programs</Link></li>
            </ul>
          </div>

          {/* Workshops Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Workshops</h3>
            <ul className={styles.linkList}>
              <li><Link href="/workshop" className={styles.footerLink}>All Workshops</Link></li>
              <li><Link href="/schoolworkshop" className={styles.footerLink}>For Schools</Link></li>
              <li><Link href="/collegeenterpriseworkshop" className={styles.footerLink}>For Colleges & Enterprises</Link></li>
              <li><Link href="/corporatetraining" className={styles.footerLink}>Corporate Training</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <div className={styles.contactList}>
              <a href="tel:+919603992299" className={styles.contactItem}>
                <svg className={styles.contactIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 96039 92299</span>
              </a>

              <a href="mailto:support@advaitecs.com" className={styles.contactItem}>
                <svg className={styles.contactIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>support@advaitecs.com</span>
              </a>
            </div>
          </div>

          {/* Our Offices Column */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Our Offices</h3>
            <div className={styles.officesContainer}>
              {/* India */}
              <div className={styles.officeBlock}>
                <div className={styles.countryHeader}>
                  <svg className={styles.mapPinIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className={styles.countryName}>India</span>
                </div>
                <ul className={styles.cityList}>
                  <li>Vijayawada(head office)</li>
                  <li>Visakhapatnam</li>
                  <li>Hyderabad</li>
                </ul>
              </div>

              {/* USA */}
              <div className={styles.officeBlock}>
                <div className={styles.countryHeader}>
                  <svg className={styles.mapPinIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className={styles.countryName}>USA</span>
                </div>
                <ul className={styles.cityList}>
                  <li>Austin, Texas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 Advaitecs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
