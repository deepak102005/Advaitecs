import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './careers.module.css';

export const metadata: Metadata = {
  title: 'Careers at Advaitecs | Build Skills. Create Impact. Grow With Us.',
  description: 'Join a passionate team working on AI, skill education, training and technology solutions to create a smarter, brighter future.',
};

export default function CareersPage() {
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
              <span className={styles.heroEyebrow}>CAREERS AT ADVAITECS</span>
              <h1 className={styles.heroTitle}>
                Build Skills.
                <br />
                Create Impact.
                <span className={styles.heroTitleHighlight}>Grow With Us.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Join a passionate team working on AI, skill education, training and technology solutions to create a smarter, brighter future.
              </p>

              <div>
                <a href="#apply" className={styles.heroBtnOutline}>
                  <span>Send Your Resume</span>
                </a>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/careers.png"
                  alt="Careers at Advaitecs - Innovate Learn Build Together"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. WHY JOIN ADVAITECS? (5 Values Grid)
          ========================================= */}
      <section className={styles.whyJoinSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Why Join Advaitecs?</h2>
            <p className={styles.sectionSubtitle}>
              Be part of a mission to empower learners with future-ready skills through technology and education.
            </p>
          </div>

          <div className={styles.whyJoinGrid}>
            {/* Value 1: Meaningful Work */}
            <div className={styles.whyJoinCard}>
              <div className={styles.whyJoinIconCircleBlue}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.whyJoinTitle}>Meaningful Work</h3>
              <p className={styles.whyJoinDesc}>
                Contribute to real-world solutions in AI, education and technology.
              </p>
            </div>

            {/* Value 2: Continuous Learning */}
            <div className={styles.whyJoinCard}>
              <div className={styles.whyJoinIconCircleGreen}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <polyline points="2 8 8 2 14 8" />
                  <line x1="8" y1="2" x2="8" y2="14" />
                </svg>
              </div>
              <h3 className={styles.whyJoinTitle}>Continuous Learning</h3>
              <p className={styles.whyJoinDesc}>
                Work on new technologies and enhance your skills every day.
              </p>
            </div>

            {/* Value 3: Hands-on Innovation */}
            <div className={styles.whyJoinCard}>
              <div className={styles.whyJoinIconCircleBlue}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.whyJoinTitle}>Hands-on Innovation</h3>
              <p className={styles.whyJoinDesc}>
                Build, experiment and solve interesting problems.
              </p>
            </div>

            {/* Value 4: Growth Opportunities */}
            <div className={styles.whyJoinCard}>
              <div className={styles.whyJoinIconCircleGreen}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
                  <circle cx="19" cy="11" r="2.5" />
                  <circle cx="5" cy="11" r="2.5" />
                </svg>
              </div>
              <h3 className={styles.whyJoinTitle}>Growth Opportunities</h3>
              <p className={styles.whyJoinDesc}>
                Advance your career with new challenges and expanded responsibilities.
              </p>
            </div>

            {/* Value 5: Collaborative Culture */}
            <div className={styles.whyJoinCard}>
              <div className={styles.whyJoinIconCircleBlue}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
              <h3 className={styles.whyJoinTitle}>Collaborative Culture</h3>
              <p className={styles.whyJoinDesc}>
                Work with a supportive and talented team that values your ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. CURRENT OPENINGS (3 Job Cards)
          ========================================= */}
      <section className={styles.openingsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Current Openings</h2>
            <p className={styles.sectionSubtitle}>
              Explore opportunities to work on exciting projects in AI and Cloud technologies.
            </p>
          </div>

          <div className={styles.openingsGrid}>
            {/* Opening 1: AI Trainer & Development Support */}
            <div className={styles.openingCard}>
              <div className={styles.openingHeader}>
                <div className={styles.jobIconBoxPurple}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 3.5V14a4 4 0 0 0 2 3.5V19a3 3 0 0 0 6 0v-1.5a4 4 0 0 0 2-3.5v-3.5A4 4 0 0 0 14 7V6a4 4 0 0 0-4-4h2z" />
                    <circle cx="9" cy="12" r="1" fill="currentColor" />
                    <circle cx="15" cy="12" r="1" fill="currentColor" />
                    <path d="M12 9v6" />
                  </svg>
                </div>
                <h3 className={styles.openingTitle}>AI Trainer &amp; Development Support</h3>
              </div>

              {/* Meta Info */}
              <ul className={styles.jobMetaList}>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Vijayawada / Vizag, Andhra Pradesh</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>3 – 5 years</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Full-time, Permanent</span>
                </li>
              </ul>

              {/* Key Responsibilities */}
              <h4 className={styles.jobSubheading}>Key Responsibilities</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Conduct training on Python, Machine Learning and AI tools</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Guide students in workshops and live projects</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Develop course materials and assessments</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Provide support for AI/ML model development</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Research and explore new AI/ML technologies</span>
                </li>
              </ul>

              {/* Required Skills */}
              <h4 className={styles.jobSubheading}>Required Skills</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Python, Machine Learning, AI/ML workflows</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Node.js, Angular or React</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Data pipelines and automation</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Strong communication and mentoring skills</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Relevant degree in Computer Science, Data Science or AI</span>
                </li>
              </ul>
            </div>

            {/* Opening 2: AI Intern */}
            <div className={styles.openingCard}>
              <div className={styles.openingHeader}>
                <div className={styles.jobIconBoxGreen}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 className={styles.openingTitle}>AI Intern</h3>
              </div>

              {/* Meta Info */}
              <ul className={styles.jobMetaList}>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Vijayawada, Andhra Pradesh</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>6 months (Potential full-time role based on performance)</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>Internship certificate provided</span>
                </li>
              </ul>

              {/* Key Responsibilities */}
              <h4 className={styles.jobSubheading}>Key Responsibilities</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Assist with AI/ML model design, development and deployment</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Work on data preprocessing and feature engineering</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Research and test machine learning algorithms</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Evaluate and optimize model performance</span>
                </li>
              </ul>

              {/* Required Skills */}
              <h4 className={styles.jobSubheading}>Required Skills</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Final-year or recent graduate in CS, AI, Data Science or related field</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Python, NumPy, Pandas, Scikit-learn</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>TensorFlow or PyTorch (preferred)</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Understanding of ML concepts and statistics</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Strong analytical and team working skills</span>
                </li>
              </ul>
            </div>

            {/* Opening 3: Full Stack Trainer */}
            <div className={styles.openingCard}>
              <div className={styles.openingHeader}>
                <div className={styles.jobIconBoxBlue}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className={styles.openingTitle}>Full Stack Trainer</h3>
              </div>

              {/* Meta Info */}
              <ul className={styles.jobMetaList}>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Vijayawada, Andhra Pradesh (On-site only)</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>3 – 5 years</span>
                </li>
                <li className={styles.jobMetaItem}>
                  <svg className={styles.jobMetaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Full-time, Permanent</span>
                </li>
              </ul>

              {/* Key Responsibilities */}
              <h4 className={styles.jobSubheading}>Key Responsibilities</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Conduct training on full-stack development (MERN/MEAN or similar stack)</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Develop training materials, labs and project modules</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Guide students in hands-on projects and assessments</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Update curriculum with latest industry technologies</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Help students with certification and project readiness</span>
                </li>
              </ul>

              {/* Required Skills */}
              <h4 className={styles.jobSubheading}>Required Skills</h4>
              <ul className={styles.jobCheckList}>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Strong expertise in React, Node.js, TypeScript/JavaScript</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Databases (PostgreSQL or MongoDB)</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>API development and deployment</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Good communication and mentoring skills</span>
                </li>
                <li className={styles.jobCheckItem}>
                  <svg className={styles.checkIconBlue} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Relevant degree in Computer Science or IT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. HOW TO APPLY BANNER
          ========================================= */}
      <section id="apply" className={styles.howToApplySection}>
        <div className={styles.container}>
          <div className={styles.howToApplyCard}>
            {/* Left Col */}
            <div className={styles.applyLeft}>
              <div className={styles.applyIconCircle}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className={styles.applyTexts}>
                <h3 className={styles.applyTitle}>How to Apply</h3>
                <p className={styles.applyDesc}>
                  Send your updated resume to our HR team. Please mention the position you are applying for in the subject line.
                </p>
              </div>
            </div>

            {/* Middle Divider */}
            <div className={styles.applyDivider} />

            {/* Right Action */}
            <div className={styles.applyRight}>
              <a href="mailto:hr@advaitecs.com" className={styles.applyEmailLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hr@advaitecs.com</span>
              </a>

              <a href="mailto:hr@advaitecs.com?subject=Job%20Application%20at%20Advaitecs" className={styles.applyBtnSolid}>
                <span>Send Your Resume</span>
                <span>→</span>
              </a>
            </div>

            {/* Slogan Badge Callout */}
            <div className={styles.applySloganGraphic}>
              <div className={styles.sloganText}>
                Great
                <br />
                <span className={styles.sloganHighlight}>People Build</span>
                <br />
                Extraordinary
                <br />
                Futures
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. OUR HIRING PROCESS (4 Steps Flow)
          ========================================= */}
      <section className={styles.hiringProcessSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Our Hiring Process</h2>
          </div>

          <div className={styles.processContainer}>
            {/* Step 1 */}
            <div className={styles.processStepItem}>
              <div className={styles.processIconBox}>
                <span className={styles.processBadgeNumber}>1</span>
                <svg className={styles.processIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className={styles.processStepTitle}>Apply</span>
              <span className={styles.processStepSubtitle}>Send your resume</span>
            </div>

            {/* Separator 1 */}
            <div className={styles.processSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className={styles.processStepItem}>
              <div className={styles.processIconBox}>
                <span className={styles.processBadgeNumber}>2</span>
                <svg className={styles.processIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <span className={styles.processStepTitle}>Resume Review</span>
              <span className={styles.processStepSubtitle}>We review your profile</span>
            </div>

            {/* Separator 2 */}
            <div className={styles.processSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className={styles.processStepItem}>
              <div className={styles.processIconBox}>
                <span className={styles.processBadgeNumber}>3</span>
                <svg className={styles.processIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className={styles.processStepTitle}>Interview</span>
              <span className={styles.processStepSubtitle}>Shortlisted candidates will be contacted</span>
            </div>

            {/* Separator 3 */}
            <div className={styles.processSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className={styles.processStepItem}>
              <div className={styles.processIconBox}>
                <span className={styles.processBadgeNumber}>4</span>
                <svg className={styles.processIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className={styles.processStepTitle}>Join Our Team</span>
              <span className={styles.processStepSubtitle}>Start your journey with Advaitecs</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. PRE-FOOTER CTA
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <div className={styles.ctaTextCol}>
              <h2 className={styles.ctaTitle}>Let&apos;s Build a Smarter, More Inclusive Future</h2>
              <p className={styles.ctaSubtitle}>
                Join Advaitecs and be part of a team that believes in the power of education, technology and people.
              </p>
            </div>

            <div className={styles.ctaBadgeCol}>
              <div className={styles.ctaBadgeText}>
                Skills
                <br />
                People
                <br />
                <span className={styles.ctaBadgeHighlight}>Better Tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
