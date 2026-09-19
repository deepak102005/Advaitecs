'use client';

import React from 'react';
import Link from 'next/link';
import styles from './schoolworkshop.module.css';

export default function SchoolWorkshopPage() {
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
              <span className={styles.heroEyebrow}>
                AI &amp; CODING WORKSHOPS FOR SCHOOLS
              </span>
              <h1 className={styles.heroTitle}>
                Empower Students
                <span className={styles.heroTitleHighlight}>
                  with Future-Ready Skills
                </span>
              </h1>
              <p className={styles.heroDesc}>
                Hands-on AI and Coding workshops for Grades 6–12 using SkaiMitra LMS.
                Inspire creativity, critical thinking and real-world problem solving.
              </p>

              {/* 4 Feature Badges in 1 Row */}
              <div className={styles.heroFeaturesRow}>
                {/* 1. Grades 6-12 */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Grades 6–12</span>
                </div>

                {/* 2. Hands-On Learning */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Hands-On Learning</span>
                </div>

                {/* 3. Industry-Aligned */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Industry-Aligned</span>
                </div>

                {/* 4. Certificate of Completion */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Certificate of Completion</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="/contact" className={styles.primaryBtnGreen}>
                  <span>Request a Workshop</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Talk to Our Team</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgContainer}>
                <img
                  src="/images/school/schoolworkshop.png"
                  alt="AI and Coding Workshops for Schools"
                  className={styles.heroImg}
                />
                <div className={styles.floatingDarkBadge}>
                  <div>Learn</div>
                  <div>Build</div>
                  <div>Create</div>
                  <div>Innovate</div>
                  <div>Together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. SKILL EDUCATION FOR A BRIGHTER TOMORROW (4 Cards)
          ========================================= */}
      <section className={styles.brighterTomorrowSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Skill Education for a Brighter Tomorrow
            </h2>
            <p className={styles.sectionSubtitle}>
              Interactive workshops powered by SkaiMitra to build AI and coding skills, aligned with CBSE/ICSE curricula and real-world applications.
            </p>
          </div>

          <div className={styles.brighterGrid}>
            {/* 1. AI Literacy */}
            <div className={styles.brighterCard}>
              <div className={styles.brighterIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.brighterTitle}>AI Literacy</h3>
              <p className={styles.brighterDesc}>
                Introduce students to AI concepts, real-world use cases and ethical AI in a fun, hands-on way.
              </p>
            </div>

            {/* 2. Coding Skills */}
            <div className={styles.brighterCard}>
              <div className={styles.brighterIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.brighterTitle}>Coding Skills</h3>
              <p className={styles.brighterDesc}>
                Learn programming through projects using Python, micro:bit and other tools.
              </p>
            </div>

            {/* 3. Project-Based Learning */}
            <div className={styles.brighterCard}>
              <div className={styles.brighterIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.brighterTitle}>Project-Based Learning</h3>
              <p className={styles.brighterDesc}>
                Build, collaborate and showcase innovative solutions to real-world problems.
              </p>
            </div>

            {/* 4. Future Ready */}
            <div className={styles.brighterCard}>
              <div className={styles.brighterIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.brighterTitle}>Future Ready</h3>
              <p className={styles.brighterDesc}>
                Develop critical thinking, creativity and digital skills for tomorrow&apos;s opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR WORKSHOP PROGRAMS (4 Cards)
          ========================================= */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.programsHeaderRow}>
            <div className={styles.programsHeaderLeft}>
              <h2 className={styles.programsTitle}>Our Workshop Programs</h2>
              <p className={styles.programsSubtitle}>
                Choose from our curated workshop modules or customize a program for your school.
              </p>
            </div>
            <Link href="/workshop" className={styles.viewAllLink}>
              <span>View All Modules</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className={styles.programsGrid}>
            {/* Card 1: Introduction to AI */}
            <div className={styles.programCard}>
              <div className={styles.programThumbWrapper}>
                <img
                  src="/images/school/Ai.png"
                  alt="Introduction to AI"
                  className={styles.programThumb}
                />
              </div>
              <div className={styles.programBody}>
                <div className={styles.programHeaderRow}>
                  <div className={styles.programIconBoxBlue}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  </div>
                  <div className={styles.programTitleCol}>
                    <h3 className={styles.programCardTitle}>Introduction to AI</h3>
                    <span className={styles.programCardGrade}>Grades 6–8</span>
                  </div>
                </div>
                <p className={styles.programDesc}>
                  Explore what AI is, how it works, and how it&apos;s used in everyday life.
                </p>
              </div>
            </div>

            {/* Card 2: Coding with Python */}
            <div className={styles.programCard}>
              <div className={styles.programThumbWrapper}>
                <img
                  src="/images/school/1.png"
                  alt="Coding with Python"
                  className={styles.programThumb}
                />
              </div>
              <div className={styles.programBody}>
                <div className={styles.programHeaderRow}>
                  <div className={styles.programIconBoxBlue}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className={styles.programTitleCol}>
                    <h3 className={styles.programCardTitle}>Coding with Python</h3>
                    <span className={styles.programCardGrade}>Grades 6–12</span>
                  </div>
                </div>
                <p className={styles.programDesc}>
                  Learn Python programming through interactive exercises and mini projects.
                </p>
              </div>
            </div>

            {/* Card 3: AI & IoT Projects */}
            <div className={styles.programCard}>
              <div className={styles.programThumbWrapper}>
                <img
                  src="/images/school/2.png"
                  alt="AI & IoT Projects"
                  className={styles.programThumb}
                />
              </div>
              <div className={styles.programBody}>
                <div className={styles.programHeaderRow}>
                  <div className={styles.programIconBoxBlue}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <path d="M9 9h6v6H9z" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="14" x2="23" y2="14" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                  </div>
                  <div className={styles.programTitleCol}>
                    <h3 className={styles.programCardTitle}>AI &amp; IoT Projects</h3>
                    <span className={styles.programCardGrade}>Grades 7–10</span>
                  </div>
                </div>
                <p className={styles.programDesc}>
                  Build hands-on projects using micro:bit/Farmbeats and real-world data.
                </p>
              </div>
            </div>

            {/* Card 4: AI for a Better World */}
            <div className={styles.programCard}>
              <div className={styles.programThumbWrapper}>
                <img
                  src="/images/school/4.png"
                  alt="AI for a Better World"
                  className={styles.programThumb}
                />
              </div>
              <div className={styles.programBody}>
                <div className={styles.programHeaderRow}>
                  <div className={styles.programIconBoxGreen}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </div>
                  <div className={styles.programTitleCol}>
                    <h3 className={styles.programCardTitle}>AI for a Better World</h3>
                    <span className={styles.programCardGrade}>Grades 6–12</span>
                  </div>
                </div>
                <p className={styles.programDesc}>
                  Apply AI and coding to solve societal challenges aligned with UN SDGs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. WHY CHOOSE & HOW IT WORKS (2 Columns)
          ========================================= */}
      <section className={styles.whyAndHowSection}>
        <div className={styles.container}>
          <div className={styles.whyAndHowGrid}>
            {/* Col 1: Why Choose SkaiMitra for Your School? */}
            <div className={styles.cardContainerBox}>
              <h3 className={styles.cardContainerTitle}>
                Why Choose SkaiMitra for Your School?
              </h3>

              <ul className={styles.whyChooseList}>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive K-12 AI curriculum (CBSE/ICSE aligned)</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive, hands-on learning experiences</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Integrated LMS for content, assignments, quizzes and certificates</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Trained facilitators and teacher enablement</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible delivery – on-site or virtual</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Progress tracking and detailed reports</span>
                </li>
              </ul>
            </div>

            {/* Col 2: How It Works */}
            <div className={styles.cardContainerBox}>
              <h3 className={styles.cardContainerTitle}>How It Works</h3>

              <div className={styles.howStepsRow}>
                {/* Step 1 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadge1}>1</div>
                  <h4 className={styles.howStepTitle}>Plan</h4>
                  <p className={styles.howStepDesc}>
                    Discuss your needs and customize the program
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 2 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadge2}>2</div>
                  <h4 className={styles.howStepTitle}>Conduct</h4>
                  <p className={styles.howStepDesc}>
                    Interactive on-site or virtual workshops
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 3 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadge3}>3</div>
                  <h4 className={styles.howStepTitle}>Engage</h4>
                  <p className={styles.howStepDesc}>
                    Hands-on projects and real-world applications
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 4 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadge4}>4</div>
                  <h4 className={styles.howStepTitle}>Grow</h4>
                  <p className={styles.howStepDesc}>
                    Certificates, reports and ongoing support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. THREE COLS: WHO CAN PARTICIPATE, OUTCOMES, QUOTE
          ========================================= */}
      <section className={styles.threeColsSection}>
        <div className={styles.container}>
          <div className={styles.threeColsGrid}>
            {/* Col 1: Who Can Participate? */}
            <div className={styles.cardContainerBox}>
              <h3 className={styles.cardContainerTitle}>Who Can Participate?</h3>

              <div className={styles.participantRow}>
                {/* 1. Students */}
                <div className={styles.participantCard}>
                  <div className={styles.participantIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className={styles.participantTexts}>
                    <span className={styles.participantTitle}>Students</span>
                    <span className={styles.participantSub}>(Grades 6–12)</span>
                  </div>
                </div>

                {/* 2. Teachers & Educators */}
                <div className={styles.participantCard}>
                  <div className={styles.participantIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className={styles.participantTexts}>
                    <span className={styles.participantTitle}>Teachers</span>
                    <span className={styles.participantSub}>&amp; Educators</span>
                  </div>
                </div>

                {/* 3. Schools */}
                <div className={styles.participantCard}>
                  <div className={styles.participantIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18" />
                      <path d="M5 21V10" />
                      <path d="M9 21V10" />
                      <path d="M15 21V10" />
                      <path d="M19 21V10" />
                      <path d="M2 10h20" />
                      <path d="M12 2 2 7h20z" />
                    </svg>
                  </div>
                  <div className={styles.participantTexts}>
                    <span className={styles.participantTitle}>Schools</span>
                    <span className={styles.participantSub}>(Private &amp; Government)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Student Outcomes */}
            <div className={styles.cardContainerBox}>
              <h3 className={styles.cardContainerTitle}>Student Outcomes</h3>

              <ul className={styles.outcomesList}>
                <li className={styles.outcomeItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Understand and apply AI concepts</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Gain practical coding and problem-solving skills</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Build innovative projects</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Develop collaboration and communication skills</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Earn certificates to showcase their learning</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Testimonial Quote Box */}
            <div className={styles.quoteCardBox}>
              <div className={styles.quoteMarksTop}>“</div>
              <p className={styles.quoteText}>
                The workshop was engaging and opened my eyes to how AI can solve real problems!
              </p>
              <span className={styles.quoteAuthor}>– Student, Grade 8</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. PRE-FOOTER CTA BANNER (Radiant Dark Blue)
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaTitle}>
              Bring AI &amp; Coding Workshops to Your School
            </h2>
            <p className={styles.ctaSubtitle}>
              Let&apos;s work together to inspire the next generation of innovators.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact" className={styles.ctaBtnGreen}>
                <span>Request a Workshop</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link href="/contact" className={styles.ctaBtnOutline}>
                <span>Contact Us</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className={styles.ctaContactInfo}>
              <a href="tel:+919603992299" className={styles.ctaContactItem}>
                <span>📞</span>
                <span>+91 96039 92299</span>
              </a>

              <a href="mailto:support@advaitecs.com" className={styles.ctaContactItem}>
                <span>✉️</span>
                <span>support@advaitecs.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
