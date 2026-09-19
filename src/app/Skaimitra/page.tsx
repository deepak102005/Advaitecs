'use client';

import React from 'react';
import Link from 'next/link';
import styles from './skaimitra.module.css';

export default function SkaiMitraPage() {
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
              {/* SkaiMitra Brand Row */}
              <div className={styles.skaiMitraBrandRow}>
                <img
                  src="/images/SkaiMitra_LogoV2.0.jpg"
                  alt="SkaiMitra Logo"
                  className={styles.skaiMitraLogoIcon}
                />
                <div className={styles.skaiMitraBrandText}>
                  <div className={styles.skaiMitraBrandName}>
                    <span className={styles.brandSkai}>Skai</span>
                    <span className={styles.brandMitra}>Mitra</span>
                  </div>
                  <span className={styles.skaiMitraTagline}>
                    Smart Learning. Stronger Tomorrow
                  </span>
                </div>
              </div>

              {/* Eyebrow */}
              <span className={styles.heroEyebrow}>
                AI-POWERED LEARNING FOR FUTURE-READY SCHOOLS
              </span>

              {/* Main Headline */}
              <h1 className={styles.heroTitle}>
                Learn. Create. Grow
                <br />
                with SkaiMitra.
              </h1>

              {/* Subtitle */}
              <p className={styles.heroSubtitle}>
                SkaiMitra brings AI &amp; Coding skill education, learning resources,
                assignments, assessments, progress tracking and AI-powered
                assistance into one learning platform.
              </p>

              {/* 4 Feature Badges */}
              <div className={styles.heroFeaturesRow}>
                {/* 1. AI & Coding Skills */}
                <div className={styles.heroFeaturePill}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <rect x="9" y="9" width="6" height="6" />
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
                  <span className={styles.heroFeatureLabel}>AI &amp; Coding Skills</span>
                </div>

                {/* 2. Interactive Learning */}
                <div className={styles.heroFeaturePill}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Interactive Learning</span>
                </div>

                {/* 3. AI-Powered LMS */}
                <div className={styles.heroFeaturePill}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>AI-Powered LMS</span>
                </div>

                {/* 4. Progress Tracking */}
                <div className={styles.heroFeaturePill}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Progress Tracking</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="#skills" className={styles.primaryBtnGreen}>
                  <span>Explore SkaiMitra</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link href="/contact" className={styles.secondaryBtnBlueOutline}>
                  <span>Request a Demo</span>
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
                  src="/images/Skaimitra/herosection.png"
                  alt="SkaiMitra AI-Powered Learning"
                  className={styles.heroImg}
                />

                {/* Floating Steps Card on Top Right */}
                <div className={styles.floatingStepsBadge}>
                  <div className={styles.floatingStepItem}>
                    <svg className={styles.floatingStepIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    <span>Learn</span>
                  </div>
                  <div className={styles.floatingStepItem}>
                    <svg className={styles.floatingStepIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                    <span>Practice</span>
                  </div>
                  <div className={styles.floatingStepItem}>
                    <svg className={styles.floatingStepIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="9" y1="18" x2="15" y2="18" />
                      <line x1="10" y1="22" x2="14" y2="22" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                    <span>Create</span>
                  </div>
                  <div className={styles.floatingStepItem}>
                    <svg className={styles.floatingStepIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                    <span>Achieve</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. ONE PLATFORM. COMPLETE LEARNING EXPERIENCE.
          ========================================= */}
      <section className={styles.onePlatformSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              One Platform. Complete Learning Experience.
            </h2>
            <p className={styles.sectionSubtitle}>
              Everything your school needs to deliver AI and Coding education, engage learners, and drive real results.
            </p>
          </div>

          <div className={styles.fourPillarsGrid}>
            {/* 1. Learn */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Learn</h3>
              <p className={styles.pillarDesc}>
                Structured AI &amp; Coding curriculum and digital resources.
              </p>
            </div>

            {/* 2. Practice */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Practice</h3>
              <p className={styles.pillarDesc}>
                Assignments, exercises, quizzes and guided activities.
              </p>
            </div>

            {/* 3. Create */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Create</h3>
              <p className={styles.pillarDesc}>
                Hands-on coding, AI, IoT and real-world projects.
              </p>
            </div>

            {/* 4. Track */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconCircle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Track</h3>
              <p className={styles.pillarDesc}>
                Attendance, assessments, grades, progress and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. SKILL EDUCATION WITH SKAIMITRA (4 Cards)
          ========================================= */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Skill Education with SkaiMitra
            </h2>
            <p className={styles.sectionSubtitle}>
              CBSE/ICSE-oriented skill learning in AI and Coding for Grades 6-12
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {/* Card 1: Artificial Intelligence */}
            <div className={styles.skillCard}>
              <div className={styles.skillThumbnailWrapper}>
                <img
                  src="/images/Skaimitra/ai.png"
                  alt="Artificial Intelligence"
                  className={styles.skillThumbnail}
                />
              </div>
              <div className={styles.skillBody}>
                <div className={styles.skillHeaderRow}>
                  <div className={styles.skillIconBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
                    </svg>
                  </div>
                  <h3 className={styles.skillTitle}>Artificial Intelligence</h3>
                </div>
                <ul className={styles.skillBulletList}>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>AI foundations and AI domains</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Prompt engineering</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Responsible AI</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Real-world applications</span>
                  </li>
                </ul>
                <Link href="/contact" className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Coding & Computational Thinking */}
            <div className={styles.skillCard}>
              <div className={styles.skillThumbnailWrapper}>
                <img
                  src="/images/Skaimitra/coding.png"
                  alt="Coding and Computational Thinking"
                  className={styles.skillThumbnail}
                />
              </div>
              <div className={styles.skillBody}>
                <div className={styles.skillHeaderRow}>
                  <div className={styles.skillIconBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h3 className={styles.skillTitle}>Coding &amp; Computational Thinking</h3>
                </div>
                <ul className={styles.skillBulletList}>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Programming fundamentals</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Python and coding activities</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Problem solving and algorithms</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Project development</span>
                  </li>
                </ul>
                <Link href="/contact" className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Hands-On Projects */}
            <div className={styles.skillCard}>
              <div className={styles.skillThumbnailWrapper}>
                <img
                  src="/images/Skaimitra/hands on projects.png"
                  alt="Hands-On Projects"
                  className={styles.skillThumbnail}
                />
              </div>
              <div className={styles.skillBody}>
                <div className={styles.skillHeaderRow}>
                  <div className={styles.skillIconBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  </div>
                  <h3 className={styles.skillTitle}>Hands-On Projects</h3>
                </div>
                <ul className={styles.skillBulletList}>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Build real-world solutions</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>AI, IoT and creative projects</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Collaborate and innovate</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Showcase your learning</span>
                  </li>
                </ul>
                <Link href="/contact" className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 4: Teacher Enablement */}
            <div className={styles.skillCard}>
              <div className={styles.skillThumbnailWrapper}>
                <img
                  src="/images/Skaimitra/teacher.png"
                  alt="Teacher Enablement"
                  className={styles.skillThumbnail}
                />
              </div>
              <div className={styles.skillBody}>
                <div className={styles.skillHeaderRow}>
                  <div className={styles.skillIconBox}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className={styles.skillTitle}>Teacher Enablement</h3>
                </div>
                <ul className={styles.skillBulletList}>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Lesson planning and teaching resources</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Assignments and assessments</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>AI-assisted support</span>
                  </li>
                  <li className={styles.skillBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Professional development</span>
                  </li>
                </ul>
                <Link href="/contact" className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. EVERYTHING SCHOOLS NEED IN ONE LMS (12 Tiles)
          ========================================= */}
      <section className={styles.lmsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Everything Schools Need in One LMS
            </h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive platform to manage teaching, learning, and school operations.
            </p>
          </div>

          <div className={styles.lmsGrid}>
            {/* 1. Course & Learning Resources */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Course &amp; Learning Resources</p>
            </div>

            {/* 2. Lesson Plans */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Lesson Plans</p>
            </div>

            {/* 3. Assignments & Question Bank */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  <line x1="12" y1="11" x2="12" y2="17" />
                  <line x1="9" y1="14" x2="15" y2="14" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Assignments &amp; Question Bank</p>
            </div>

            {/* 4. Assessments & Grading */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12h4" />
                  <path d="M10 8l-2 8" />
                  <path d="M10 8l2 8" />
                  <path d="M15 11v4" />
                  <path d="M13 13h4" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Assessments &amp; Grading</p>
            </div>

            {/* 5. Attendance */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <polyline points="9 16 11 18 15 14" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Attendance</p>
            </div>

            {/* 6. Reports & Analytics */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Reports &amp; Analytics</p>
            </div>

            {/* 7. Communications */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Communications</p>
            </div>

            {/* 8. Parent Engagement */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Parent Engagement</p>
            </div>

            {/* 9. Skai Assistant */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Skai Assistant</p>
            </div>

            {/* 10. Rubrics & AI-Assisted Grading */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Rubrics &amp; AI-Assisted Grading</p>
            </div>

            {/* 11. Mobile Application */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>Mobile Application</p>
            </div>

            {/* 12. User & Token Management */}
            <div className={styles.lmsCard}>
              <div className={styles.lmsIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="4" />
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="19" cy="11" r="2" />
                  <path d="M19 13v2" />
                </svg>
              </div>
              <p className={styles.lmsCardTitle}>User &amp; Token Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. BUILT FOR EVERY USER (4 Profile Cards)
          ========================================= */}
      <section className={styles.usersSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Built for Every User</h2>
          </div>

          <div className={styles.usersGrid}>
            {/* 1. Students */}
            <div className={styles.userProfileCard}>
              <img
                src="/images/Skaimitra/studentprofile.png"
                alt="Students"
                className={styles.userAvatar}
              />
              <div className={styles.userInfoCol}>
                <h3 className={styles.userRoleTitle}>Students</h3>
                <p className={styles.userRoleDesc}>
                  Learn, practice, submit work, take assessments and track progress.
                </p>
              </div>
            </div>

            {/* 2. Teachers */}
            <div className={styles.userProfileCard}>
              <img
                src="/images/Skaimitra/teacherprofile.png"
                alt="Teachers"
                className={styles.userAvatar}
              />
              <div className={styles.userInfoCol}>
                <h3 className={styles.userRoleTitle}>Teachers</h3>
                <p className={styles.userRoleDesc}>
                  Plan lessons, share resources, create assignments and assessments, and monitor learning.
                </p>
              </div>
            </div>

            {/* 3. School Administrators */}
            <div className={styles.userProfileCard}>
              <img
                src="/images/Skaimitra/schoolAdmin profile.png"
                alt="School Administrators"
                className={styles.userAvatar}
              />
              <div className={styles.userInfoCol}>
                <h3 className={styles.userRoleTitle}>School Administrators</h3>
                <p className={styles.userRoleDesc}>
                  Manage users, curriculum, attendance, reports, communications and AI access.
                </p>
              </div>
            </div>

            {/* 4. Parents */}
            <div className={styles.userProfileCard}>
              <img
                src="/images/Skaimitra/parent profile.png"
                alt="Parents"
                className={styles.userAvatar}
              />
              <div className={styles.userInfoCol}>
                <h3 className={styles.userRoleTitle}>Parents</h3>
                <p className={styles.userRoleDesc}>
                  Stay informed about attendance, performance, assignments, events and school communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. THREE-COLUMN SECTION
          (How SkaiMitra Supports, Why Choose, Outcomes)
          ========================================= */}
      <section className={styles.triColSection}>
        <div className={styles.container}>
          <div className={styles.triColGrid}>
            {/* Col 1: How SkaiMitra Supports Skill Learning */}
            <div className={styles.triColCard}>
              <h3 className={styles.colCardTitle}>
                How SkaiMitra Supports Skill Learning
              </h3>

              <div className={styles.processStepsVertical}>
                {/* Step 1 */}
                <div className={styles.processStepRow}>
                  <div className={styles.processStepCircleNumber}>1</div>
                  <div className={styles.processStepContent}>
                    <h4 className={styles.processStepHeading}>Plan</h4>
                    <p className={styles.processStepText}>
                      Configure courses, classes, users and learning resources.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={styles.processStepRow}>
                  <div className={styles.processStepCircleNumber}>2</div>
                  <div className={styles.processStepContent}>
                    <h4 className={styles.processStepHeading}>Teach</h4>
                    <p className={styles.processStepText}>
                      Deliver instructor-led learning with digital content and activities.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={styles.processStepRow}>
                  <div className={styles.processStepCircleNumber}>3</div>
                  <div className={styles.processStepContent}>
                    <h4 className={styles.processStepHeading}>Practice &amp; Assess</h4>
                    <p className={styles.processStepText}>
                      Assignments, quizzes, projects, rubrics and feedback.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={styles.processStepRow}>
                  <div className={styles.processStepCircleNumber}>4</div>
                  <div className={styles.processStepContent}>
                    <h4 className={styles.processStepHeading}>Improve</h4>
                    <p className={styles.processStepText}>
                      Progress reports, analytics, AI insights, and targeted support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Why Choose SkaiMitra? */}
            <div className={styles.triColCard}>
              <h3 className={styles.colCardTitle}>
                Why Choose SkaiMitra?
              </h3>

              <ul className={styles.checkListWhy}>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Integrated LMS + AI tools</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>AI &amp; Coding skill education</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Structured learning resources</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Hands-on, project-based learning</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Teacher and administrator workflows</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Assessments, rubrics and progress reports</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Parent communication and engagement</span>
                </li>
                <li className={styles.checkItemWhy}>
                  <svg className={styles.checkIconCircleGreen} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible school implementation</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Learning Outcomes + For Schools Box */}
            <div className={styles.triColCard}>
              <h3 className={styles.colCardTitle}>
                Learning Outcomes
              </h3>

              <ul className={styles.outcomesList}>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Understand AI concepts</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Develop coding and problem-solving skills</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Build real-world projects</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Use AI responsibly</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Collaborate and communicate</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.outcomeIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Build a portfolio of learning evidence</span>
                </li>
              </ul>

              {/* For Schools Card Box */}
              <div className={styles.forSchoolsBox}>
                <div className={styles.schoolIconBox}>
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
                <div className={styles.forSchoolsContent}>
                  <h4 className={styles.forSchoolsTitle}>For Schools</h4>
                  <span className={styles.forSchoolsSub}>
                    Grades 6-12 | Teachers | Administrators | Parents
                  </span>
                  <p className={styles.forSchoolsDesc}>
                    A complete solution for AI and Coding skill education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. PRE-FOOTER CTA (Full Width Radiant Dark Banner)
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaTitle}>
              Build Future-Ready Skills with SkaiMitra
            </h2>
            <p className={styles.ctaSubtitle}>
              Bring AI, Coding and intelligent learning tools into one connected school experience.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact" className={styles.ctaBtnGreen}>
                <span>Request a Demo</span>
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 96039 92299</span>
              </a>

              <a href="mailto:support@advaitecs.com" className={styles.ctaContactItem}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
