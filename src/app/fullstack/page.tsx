import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './fullstack.module.css';

export const metadata: Metadata = {
  title: 'Full-Stack Job Ready Program | Advaitecs',
  description: 'A 12-week intensive program focused on building a production-ready application with React, Node.js, PostgreSQL and React Native.',
};

export default function FullStackPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>FULL-STACK JOB READY PROGRAM</span>
              <h1 className={styles.heroTitle}>
                Build, Test and Deploy
                <span className={styles.heroTitleHighlight}>Complete Web and Mobile Applications.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A 12-week intensive program focused on building a production-ready application with React, Node.js, PostgreSQL and React Native.
              </p>

              {/* 3 Pill Badges */}
              <div className={styles.heroBadgesRow}>
                <div className={styles.heroBadge}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>12 Weeks</span>
                </div>

                <div className={styles.heroBadge}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Approximately 400 Hours</span>
                </div>

                <div className={styles.heroBadge}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>75% Development &amp; Labs</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="/contact" className={styles.primaryBtnGreen}>
                  <span>Subscribe for the Course</span>
                  <span>→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  <span>Contact a Training Advisor</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/fullstack.png"
                  alt="Full stack training mentor and students collaborating on web and mobile development"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BECOME A PRODUCTION-READY DEVELOPER */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Become a Production-Ready <span className={styles.highlightText}>Full-Stack Developer</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Gain practical, end-to-end skills to design, develop, test and deploy real-world applications.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Design */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Design</h3>
              <p className={styles.pillarDesc}>
                Requirements, UX workflows, architecture, API contracts and relational data models.
              </p>
            </div>

            {/* Develop */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Develop</h3>
              <p className={styles.pillarDesc}>
                React web, React Native mobile, Node.js, Express and PostgreSQL.
              </p>
            </div>

            {/* Test */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Test</h3>
              <p className={styles.pillarDesc}>
                Unit, API, integration, end-to-end, security and performance testing.
              </p>
            </div>

            {/* Deploy */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Deploy</h3>
              <p className={styles.pillarDesc}>
                Docker, CI/CD, cloud environments, monitoring, backups and rollback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 12-WEEK DEVELOPMENT ROADMAP */}
      <section className={styles.roadmapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              12-Week Development <span className={styles.highlightText}>Roadmap</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A structured, hands-on program with real-world projects and expert guidance.
            </p>
          </div>

          <div className={styles.roadmapGrid}>
            {/* Phase 1 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapNumber}>1</span>
                <h3 className={styles.roadmapTitle}>Weeks 1-3 - Foundation &amp; Design</h3>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>Setup, Git workflow, Docker</li>
                <li className={styles.roadmapItem}>Requirements, architecture</li>
                <li className={styles.roadmapItem}>PostgreSQL schema, SQL and indexes</li>
              </ul>
            </div>

            <span className={styles.roadmapArrow}>›</span>

            {/* Phase 2 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapNumber}>2</span>
                <h3 className={styles.roadmapTitle}>Weeks 4-6 - Backend &amp; Web</h3>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>Node.js, Express, layered APIs</li>
                <li className={styles.roadmapItem}>Authentication, RBAC, audit history</li>
                <li className={styles.roadmapItem}>React web application</li>
              </ul>
            </div>

            <span className={styles.roadmapArrow}>›</span>

            {/* Phase 3 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapNumber}>3</span>
                <h3 className={styles.roadmapTitle}>Weeks 7-9 - Features, Mobile &amp; Testing</h3>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>Integrations, reports, file upload</li>
                <li className={styles.roadmapItem}>React Native, AI-assisted development</li>
                <li className={styles.roadmapItem}>Unit/API/database testing</li>
              </ul>
            </div>

            <span className={styles.roadmapArrow}>›</span>

            {/* Phase 4 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapCardHeader}>
                <span className={styles.roadmapNumber}>4</span>
                <h3 className={styles.roadmapTitle}>Weeks 10-12 - QA, DevOps &amp; Release</h3>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>E2E testing, accessibility, security</li>
                <li className={styles.roadmapItem}>Performance, CI/CD, staging</li>
                <li className={styles.roadmapItem}>Backup/restore and production launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES YOU WILL LEARN */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Technologies <span className={styles.highlightText}>You Will Learn</span>
            </h2>
          </div>

          <div className={styles.techGrid}>
            {/* 1. React */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="30" height="30" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                  <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
                  <g stroke="#00d8ff" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
              <span className={styles.techLabel}>React</span>
            </div>

            {/* 2. React Native */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                </svg>
              </div>
              <span className={styles.techLabel}>React Native</span>
            </div>

            {/* 3. Node.js */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l8.5 4.9v9.8L12 22l-8.5-4.9V6.9L12 2z" fill="#22c55e" fillOpacity="0.15" stroke="#16a34a" strokeWidth="1.5" />
                  <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">nde</text>
                </svg>
              </div>
              <span className={styles.techLabel}>Node.js</span>
            </div>

            {/* 4. Express */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>Express</span>
              </div>
              <span className={styles.techLabel}>Express</span>
            </div>

            {/* 5. PostgreSQL */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a9 9 0 0 0-9 9c0 4.1 2.8 7.6 6.7 8.7V22l3.3-2.2 3.3 2.2v-2.3C19.2 18.6 22 15.1 22 11a9 9 0 0 0-9-9z" />
                  <circle cx="9" cy="10" r="1" fill="currentColor" />
                  <circle cx="15" cy="10" r="1" fill="currentColor" />
                  <path d="M10 14h4" />
                </svg>
              </div>
              <span className={styles.techLabel}>PostgreSQL</span>
            </div>

            {/* 6. REST APIs */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <span className={styles.techLabel}>REST APIs</span>
            </div>

            {/* 7. Docker */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h16c.6 0 1 .4 1 1 0 3.3-2.7 6-6 6H9c-3.3 0-6-2.7-6-6 0-.6.4-1 1-1z" />
                  <rect x="7" y="9" width="2" height="2" />
                  <rect x="10" y="9" width="2" height="2" />
                  <rect x="13" y="9" width="2" height="2" />
                  <rect x="10" y="6" width="2" height="2" />
                </svg>
              </div>
              <span className={styles.techLabel}>Docker</span>
            </div>

            {/* 8. GitHub */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" color="#0f172a">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <span className={styles.techLabel}>GitHub</span>
            </div>

            {/* 9. CI/CD */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="12" r="3" />
                  <path d="m8.5 8.5 7 2.5" />
                  <path d="m8.5 15.5 7-2.5" />
                </svg>
              </div>
              <span className={styles.techLabel}>CI/CD</span>
            </div>

            {/* 10. Cloud Deployment */}
            <div className={styles.techCard}>
              <div className={styles.techIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <span className={styles.techLabel}>Cloud Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BATCHES & SCHEDULE ROW */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.scheduleGrid}>
            {/* Left Card: Upcoming Batches */}
            <div className={styles.batchesCard}>
              <div className={styles.batchesHeader}>
                <h3 className={styles.batchesTitle}>Upcoming Batches</h3>
                <span className={styles.batchesSubtitle}>Quarterly intakes • Limited cohort size</span>
              </div>

              <div className={styles.batchesPillGrid}>
                <div className={styles.batchPill}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Nov 1</span>
                </div>

                <div className={styles.batchPill}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Feb 1</span>
                </div>

                <div className={styles.batchPill}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>May 1</span>
                </div>

                <div className={styles.batchPill}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Aug 1</span>
                </div>
              </div>
            </div>

            {/* Right Card: Weekday Schedule */}
            <div className={styles.scheduleCard}>
              <div className={styles.scheduleHeader}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className={styles.scheduleTitle}>Weekday Schedule</h3>
              </div>

              <ul className={styles.scheduleList}>
                <li className={styles.scheduleItem}>Monday – Friday</li>
                <li className={styles.scheduleItem}>2:00 PM – 5:00 PM</li>
                <li className={styles.scheduleItem}>Instructor-led training and guided practice</li>
                <li className={styles.scheduleItem}>Additional capstone and team project work</li>
                <li className={styles.scheduleItem}>Weekly commitment: 30–35 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILD A COMPLETE APPLICATION & CAREER OPPORTUNITIES */}
      <section className={styles.appAndCareerSection}>
        <div className={styles.container}>
          <div className={styles.splitTwoGrid}>
            {/* Left Card: Build a Complete Production Application */}
            <div className={styles.appCard}>
              <h3 className={styles.cardSectionTitle}>Build a Complete Production Application</h3>
              <p className={styles.cardSectionDesc}>Work in teams to build a real-world application with the following capabilities:</p>

              <div className={styles.twoColChecklist}>
                {/* Column 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>At least three user roles</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Secure registration and login</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Responsive React web app</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>React Native mobile app</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Node.js and Express REST APIs</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>PostgreSQL with eight or more related entities</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Search, filtering and reports</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Notifications or third-party integration</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Automated tests</span>
                  </div>

                  <div className={styles.checklistItem}>
                    <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8 12 11 15 16 9" />
                    </svg>
                    <span>Staging and production deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Career Opportunities */}
            <div className={styles.careerCard}>
              <h3 className={styles.cardSectionTitle}>Career Opportunities</h3>
              <p className={styles.cardSectionDesc}>Launch your career as a full-stack developer with in-demand skills.</p>

              {/* 5 Job Role Boxes */}
              <div className={styles.rolesGrid}>
                {/* Role 1 */}
                <div className={styles.roleBox}>
                  <div className={styles.roleIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="2" y1="20" x2="22" y2="20" />
                    </svg>
                  </div>
                  <span className={styles.roleTitle}>Full-Stack Developer</span>
                </div>

                {/* Role 2 */}
                <div className={styles.roleBox}>
                  <div className={styles.roleIconWrapper}>
                    <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                      <circle cx="0" cy="0" r="2.05" fill="#2563eb" />
                      <g stroke="#2563eb" strokeWidth="1.2" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  <span className={styles.roleTitle}>React Developer</span>
                </div>

                {/* Role 3 */}
                <div className={styles.roleBox}>
                  <div className={styles.roleIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l8.5 4.9v9.8L12 22l-8.5-4.9V6.9L12 2z" fill="#16a34a" fillOpacity="0.15" stroke="#16a34a" strokeWidth="1.8" />
                      <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">nde</text>
                    </svg>
                  </div>
                  <span className={styles.roleTitle}>Node.js Developer</span>
                </div>

                {/* Role 4 */}
                <div className={styles.roleBox}>
                  <div className={styles.roleIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2.5" />
                      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <span className={styles.roleTitle}>Backend Developer</span>
                </div>

                {/* Role 5 */}
                <div className={styles.roleBox}>
                  <div className={styles.roleIconWrapper}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.roleTitle}>Junior Software Engineer</span>
                </div>
              </div>

              {/* Career Preparation Banner */}
              <div className={styles.careerPrepBox}>
                <svg className={styles.careerPrepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="16" x2="13" y2="16" />
                </svg>
                <div className={styles.careerPrepContent}>
                  <span className={styles.careerPrepTitle}>Career Preparation</span>
                  <span className={styles.careerPrepDesc}>GitHub portfolio • Resume review • Mock interviews • Technical presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO SHOULD ENROLL? & PREREQUISITES */}
      <section className={styles.bottomSplitSection}>
        <div className={styles.container}>
          <div className={styles.splitTwoGrid}>
            {/* Left Card: Who Should Enroll? */}
            <div className={styles.enrollCard}>
              <h3 className={styles.cardSectionTitle}>Who Should Enroll?</h3>
              <div className={styles.enrollList}>
                <div className={styles.checklistItem}>
                  <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9.5" />
                    <polyline points="8 12 11 15 16 9" />
                  </svg>
                  <span>Recent graduates with programming fundamentals</span>
                </div>

                <div className={styles.checklistItem}>
                  <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9.5" />
                    <polyline points="8 12 11 15 16 9" />
                  </svg>
                  <span>React or Node.js learners seeking job-ready experience</span>
                </div>

                <div className={styles.checklistItem}>
                  <svg className={styles.checkIconGreen} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9.5" />
                    <polyline points="8 12 11 15 16 9" />
                  </svg>
                  <span>Developers wanting PostgreSQL and production deployment skills</span>
                </div>
              </div>
            </div>

            {/* Right Card: Prerequisites */}
            <div className={styles.prereqCard}>
              <div className={styles.prereqHeader}>
                <svg className={styles.prereqIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <h3 className={styles.cardSectionTitle} style={{ margin: 0 }}>Prerequisites</h3>
              </div>
              <p className={styles.prereqText}>
                JavaScript ES6+, HTML/CSS, React basics, Node/Express basics, REST APIs, basic SQL, Git/GitHub and command-line skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER CTA BANNER */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Your Full-Stack Career?
          </h2>
          <p className={styles.ctaSubtitle}>
            Join the next cohort and build a complete application from requirements through production.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/contact" className={styles.ctaBtnGreen}>
              <span>Subscribe for the Course</span>
              <span>→</span>
            </Link>
            <Link href="/contact" className={styles.ctaBtnOutline}>
              <span>Contact Us</span>
              <span>→</span>
            </Link>
          </div>

          <div className={styles.ctaContactInfo}>
            <a href="tel:+919603992299" className={styles.ctaContactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 96039 92299</span>
            </a>
            <span>•</span>
            <a href="mailto:support@advaitecs.com" className={styles.ctaContactItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>support@advaitecs.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
