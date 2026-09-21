'use client';

import React from 'react';
import Link from 'next/link';
import styles from './customprograms.module.css';

export default function CustomProgramsPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>CUSTOM TRAINING PROGRAMS</span>
              <h1 className={styles.heroTitle}>
                Programs Designed
                <span className={styles.heroTitleHighlight}>Around Your Goals</span>
              </h1>
              <p className={styles.heroDesc}>
                Tailored technology training for enterprises, colleges and professional
                teams—aligned to your people, priorities and technology environment.
              </p>

              {/* 3 Badges Row */}
              <div className={styles.heroBadgesRow}>
                <div className={styles.heroBadgeItem}>
                  <span className={styles.heroBadgeIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </span>
                  <span>Custom Curriculum</span>
                </div>

                <div className={styles.heroBadgeItem}>
                  <span className={styles.heroBadgeIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span>Flexible Schedules</span>
                </div>

                <div className={styles.heroBadgeItem}>
                  <span className={styles.heroBadgeIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span>Practical Projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="/contact" className={styles.primaryBtnGreen}>
                  <span>Schedule a Consultation</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Contact Our Team</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <img
                src="/images/custom programs.png"
                alt="Custom Training Programs Campus and Enterprise"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CORE TRAINING AREAS (4 Cards)
          ========================================= */}
      <section className={styles.coreAreasSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Explore Our Core Training Areas</h2>
            <p className={styles.sectionSubtitle}>
              In-demand technologies and skills, tailored to your learning objectives.
            </p>
          </div>

          <div className={styles.coreGrid}>
            {/* Card 1: AI & Generative AI */}
            <div className={styles.coreCard}>
              <div className={styles.coreIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  <circle cx="18" cy="5" r="2" fill="currentColor" />
                  <circle cx="18" cy="19" r="2" fill="currentColor" />
                  <circle cx="6" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.coreTitle}>AI &amp; Generative AI</h3>
              <p className={styles.coreDesc}>
                Machine learning, prompt engineering, LLM APIs, RAG, agents and responsible AI.
              </p>
            </div>

            {/* Card 2: Full-Stack Development */}
            <div className={styles.coreCard}>
              <div className={styles.coreIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.coreTitle}>Full-Stack Development</h3>
              <p className={styles.coreDesc}>
                React, TypeScript, Node.js, APIs, PostgreSQL, testing and deployment.
              </p>
            </div>

            {/* Card 3: Cloud & DevOps */}
            <div className={styles.coreCard}>
              <div className={styles.coreIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <h3 className={styles.coreTitle}>Cloud &amp; DevOps</h3>
              <p className={styles.coreDesc}>
                Cloud foundations, Docker, CI/CD, deployment and monitoring.
              </p>
            </div>

            {/* Card 4: Cybersecurity */}
            <div className={styles.coreCard}>
              <div className={styles.coreIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h3 className={styles.coreTitle}>Cybersecurity</h3>
              <p className={styles.coreDesc}>
                Security awareness, application security, cloud security and secure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. CUSTOMIZE EVERY PART (6 Cards)
          ========================================= */}
      <section className={styles.customizeSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Customize Every Part of the Program</h2>
            <p className={styles.sectionSubtitle}>
              We work with you to design a program that fits your goals, audience and environment.
            </p>
          </div>

          <div className={styles.customizeGrid}>
            {/* Card 1: Curriculum */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Curriculum</h3>
              <p className={styles.customizeDesc}>
                Tailored content for your goals and audience.
              </p>
            </div>

            {/* Card 2: Practical Projects */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Practical Projects</h3>
              <p className={styles.customizeDesc}>
                Real-world, hands-on projects and case studies.
              </p>
            </div>

            {/* Card 3: Schedule & Pace */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <circle cx="8" cy="14" r="1" fill="currentColor" />
                  <circle cx="12" cy="14" r="1" fill="currentColor" />
                  <circle cx="16" cy="14" r="1" fill="currentColor" />
                  <circle cx="8" cy="18" r="1" fill="currentColor" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Schedule &amp; Pace</h3>
              <p className={styles.customizeDesc}>
                Flexible formats and durations to suit your team.
              </p>
            </div>

            {/* Card 4: Assessments */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Assessments</h3>
              <p className={styles.customizeDesc}>
                Quizzes, projects and skill validation.
              </p>
            </div>

            {/* Card 5: Technology Stack */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Technology Stack</h3>
              <p className={styles.customizeDesc}>
                Use your preferred tools or our recommendations.
              </p>
            </div>

            {/* Card 6: Certification & Support */}
            <div className={styles.customizeCard}>
              <div className={styles.customizeIconCircle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className={styles.customizeTitle}>Certification &amp; Support</h3>
              <p className={styles.customizeDesc}>
                Completion certificates and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. FIVE-STEP PROCESS (5 Steps Horizontal)
          ========================================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Our Five-Step Program Design Process</h2>
            <p className={styles.sectionSubtitle}>
              A collaborative approach to create a high-impact learning experience.
            </p>
          </div>

          <div className={styles.processContainer}>
            {/* Step 1: Discover */}
            <div className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processStepNumber}>1</span>
                <span className={styles.processStepTitle}>Discover</span>
              </div>
              <div className={styles.processIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className={styles.processDesc}>
                Audience, needs and success measures.
              </p>
            </div>

            {/* Separator 1 */}
            <div className={styles.processArrow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 2: Design */}
            <div className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processStepNumber}>2</span>
                <span className={styles.processStepTitle}>Design</span>
              </div>
              <div className={styles.processIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <p className={styles.processDesc}>
                Curriculum, projects and schedule
              </p>
            </div>

            {/* Separator 2 */}
            <div className={styles.processArrow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 3: Deliver */}
            <div className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processStepNumber}>3</span>
                <span className={styles.processStepTitle}>Deliver</span>
              </div>
              <div className={styles.processIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h20v14H2z" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <circle cx="7" cy="8" r="1.5" fill="currentColor" />
                  <path d="M9 13l-2-3-2 3" />
                </svg>
              </div>
              <p className={styles.processDesc}>
                Instructor-led training and guided practice
              </p>
            </div>

            {/* Separator 3 */}
            <div className={styles.processArrow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 4: Demonstrate */}
            <div className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processStepNumber}>4</span>
                <span className={styles.processStepTitle}>Demonstrate</span>
              </div>
              <div className={styles.processIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <polyline points="3 8 12 2 21 8" />
                </svg>
              </div>
              <p className={styles.processDesc}>
                Projects, assessments and practical evidence
              </p>
            </div>

            {/* Separator 4 */}
            <div className={styles.processArrow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 5: Reinforce */}
            <div className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processStepNumber}>5</span>
                <span className={styles.processStepTitle}>Reinforce</span>
              </div>
              <div className={styles.processIconWrapper}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5" />
                  <path d="M12 22a4 4 0 0 1-4-4c0-1.5.8-2.8 2-3.5" />
                  <path d="M22 12a4 4 0 0 1-4 4c-1.5 0-2.8-.8-3.5-2" />
                  <path d="M2 12a4 4 0 0 1 4-4c1.5 0 2.8.8 3.5 2" />
                </svg>
              </div>
              <p className={styles.processDesc}>
                Feedback, reporting and continued support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. FLEXIBLE DELIVERY OPTIONS (4 Cards)
          ========================================= */}
      <section className={styles.deliverySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Flexible Delivery Options</h2>
            <p className={styles.sectionSubtitle}>
              Choose the format that works best for your team.
            </p>
          </div>

          <div className={styles.deliveryGrid}>
            {/* Card 1: In Person */}
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className={styles.deliveryTitle}>In Person</h3>
              <p className={styles.deliveryDesc}>
                On-site training at your location.
              </p>
            </div>

            {/* Card 2: Live Online */}
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="2" y1="20" x2="22" y2="20" />
                </svg>
              </div>
              <h3 className={styles.deliveryTitle}>Live Online</h3>
              <p className={styles.deliveryDesc}>
                Interactive live sessions with expert instructors.
              </p>
            </div>

            {/* Card 3: Hybrid */}
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <circle cx="8" cy="10" r="2" />
                  <circle cx="16" cy="10" r="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className={styles.deliveryTitle}>Hybrid</h3>
              <p className={styles.deliveryDesc}>
                A blended mix of in-person and online learning.
              </p>
            </div>

            {/* Card 4: Train the Trainer */}
            <div className={styles.deliveryCard}>
              <div className={styles.deliveryIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h20v14H2z" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <circle cx="7" cy="8" r="1.5" fill="currentColor" />
                  <path d="M9 13l-2-3-2 3" />
                </svg>
              </div>
              <h3 className={styles.deliveryTitle}>Train the Trainer</h3>
              <p className={styles.deliveryDesc}>
                Enable your internal teams to deliver and sustain learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. ENTERPRISE & COLLEGE COMPARISON CARDS
          ========================================= */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.comparisonGrid}>
            {/* Card 1: Programs for Enterprises */}
            <div className={styles.enterpriseCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Programs for Enterprises</h3>
                <p className={styles.cardSubtitle}>
                  Build skilled, future-ready teams and drive business impact.
                </p>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>AI productivity for teams</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Executive AI programs</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Developer upskilling</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Workforce transformation</span>
                  </div>
                </div>

                <div className={styles.cardGraphicCol}>
                  <svg className={styles.buildingIllustration} viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Skyscraper 1 (Tall) */}
                    <rect x="95" y="25" width="65" height="145" rx="3" fill="#1e3a8a" />
                    {/* Skyscraper 1 Windows */}
                    <rect x="105" y="38" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="122" y="38" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="139" y="38" width="8" height="8" rx="1" fill="#93c5fd" />
                    
                    <rect x="105" y="55" width="8" height="8" rx="1" fill="#93c5fd" />
                    <rect x="122" y="55" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="139" y="55" width="8" height="8" rx="1" fill="#60a5fa" />

                    <rect x="105" y="72" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="122" y="72" width="8" height="8" rx="1" fill="#93c5fd" />
                    <rect x="139" y="72" width="8" height="8" rx="1" fill="#60a5fa" />

                    <rect x="105" y="89" width="8" height="8" rx="1" fill="#93c5fd" />
                    <rect x="122" y="89" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="139" y="89" width="8" height="8" rx="1" fill="#93c5fd" />

                    <rect x="105" y="106" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="122" y="106" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="139" y="106" width="8" height="8" rx="1" fill="#60a5fa" />

                    <rect x="105" y="123" width="8" height="8" rx="1" fill="#93c5fd" />
                    <rect x="122" y="123" width="8" height="8" rx="1" fill="#60a5fa" />
                    <rect x="139" y="123" width="8" height="8" rx="1" fill="#93c5fd" />

                    {/* Skyscraper 2 (Medium Front Left) */}
                    <rect x="50" y="65" width="50" height="105" rx="3" fill="#2563eb" />
                    <rect x="60" y="78" width="7" height="7" rx="1" fill="#ffffff" />
                    <rect x="74" y="78" width="7" height="7" rx="1" fill="#bfdbfe" />
                    <rect x="87" y="78" width="7" height="7" rx="1" fill="#ffffff" />

                    <rect x="60" y="93" width="7" height="7" rx="1" fill="#bfdbfe" />
                    <rect x="74" y="93" width="7" height="7" rx="1" fill="#ffffff" />
                    <rect x="87" y="93" width="7" height="7" rx="1" fill="#bfdbfe" />

                    <rect x="60" y="108" width="7" height="7" rx="1" fill="#ffffff" />
                    <rect x="74" y="108" width="7" height="7" rx="1" fill="#ffffff" />
                    <rect x="87" y="108" width="7" height="7" rx="1" fill="#ffffff" />

                    <rect x="60" y="123" width="7" height="7" rx="1" fill="#bfdbfe" />
                    <rect x="74" y="123" width="7" height="7" rx="1" fill="#ffffff" />
                    <rect x="87" y="123" width="7" height="7" rx="1" fill="#ffffff" />

                    {/* Entrance door */}
                    <rect x="70" y="145" width="12" height="25" fill="#1e3a8a" />
                    
                    {/* Base line */}
                    <line x1="20" y1="170" x2="180" y2="170" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Programs for Colleges */}
            <div className={styles.collegeCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Programs for Colleges</h3>
                <p className={styles.cardSubtitle}>
                  Prepare students with industry-relevant skills and real-world experience.
                </p>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.checklist}>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Student workshops and short courses</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Faculty development programs</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Industry-ready bootcamps</span>
                  </div>
                  <div className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" fill="#10b981" stroke="none" />
                        <polyline points="8 12 11 15 16 9" stroke="#ffffff" />
                      </svg>
                    </span>
                    <span>Placement readiness and career support</span>
                  </div>
                </div>

                <div className={styles.cardGraphicCol}>
                  <svg className={styles.buildingIllustration} viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ground base */}
                    <line x1="20" y1="165" x2="180" y2="165" stroke="#86efac" strokeWidth="3" strokeLinecap="round" />

                    {/* Central building */}
                    <rect x="75" y="70" width="50" height="95" fill="#2563eb" />
                    
                    {/* Triangular roof pediment */}
                    <path d="M70 70L100 40L130 70Z" fill="#1e3a8a" />
                    
                    {/* Clock tower / Dome */}
                    <rect x="94" y="25" width="12" height="15" fill="#1e3a8a" />
                    <circle cx="100" cy="22" r="6" fill="#60a5fa" />
                    <line x1="100" y1="16" x2="100" y2="10" stroke="#1e3a8a" strokeWidth="2" />
                    <circle cx="100" cy="55" r="4" fill="#ffffff" />

                    {/* Left wing */}
                    <rect x="35" y="95" width="40" height="70" fill="#3b82f6" />
                    <rect x="42" y="105" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="58" y="105" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="42" y="125" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="58" y="125" width="8" height="12" rx="1" fill="#dbeafe" />

                    {/* Right wing */}
                    <rect x="125" y="95" width="40" height="70" fill="#3b82f6" />
                    <rect x="134" y="105" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="150" y="105" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="134" y="125" width="8" height="12" rx="1" fill="#dbeafe" />
                    <rect x="150" y="125" width="8" height="12" rx="1" fill="#dbeafe" />

                    {/* Main arched entrance */}
                    <path d="M92 165V135A8 8 0 0 1 108 135V165Z" fill="#1e3a8a" />

                    {/* Central windows */}
                    <rect x="85" y="85" width="8" height="12" rx="1" fill="#ffffff" />
                    <rect x="107" y="85" width="8" height="12" rx="1" fill="#ffffff" />
                    <rect x="85" y="105" width="8" height="12" rx="1" fill="#ffffff" />
                    <rect x="107" y="105" width="8" height="12" rx="1" fill="#ffffff" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. PRE-FOOTER CTA BANNER
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <div className={styles.ctaBgPattern} />
            <h2 className={styles.ctaTitle}>Ready to Build Your Custom Program?</h2>
            <p className={styles.ctaSubtitle}>
              Tell us about your audience, goals and preferred schedule.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact" className={styles.ctaBtnGreen}>
                <span>Schedule a Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className={styles.ctaBtnBlueOutline}>
                <span>Contact Us</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className={styles.ctaContactInfoRow}>
              <a href="tel:+919603992299" className={styles.ctaContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 96039 92299</span>
              </a>

              <a href="mailto:support@advaitecs.com" className={styles.ctaContactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>support@advaitecs.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
