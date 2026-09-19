'use client';

import React from 'react';
import Link from 'next/link';
import styles from './collegeenterpriseworkshop.module.css';

export default function CollegeEnterpriseWorkshopPage() {
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
                COLLEGE &amp; ENTERPRISE WORKSHOPS
              </span>
              <h1 className={styles.heroTitle}>
                Build Skills for
                <span className={styles.heroTitleHighlight}>What&apos;s Next</span>
              </h1>
              <div className={styles.heroTagline}>
                Full Stack. AI. Real-World Impact.
              </div>
              <p className={styles.heroDesc}>
                Hands-on workshops for engineering and computer science students,
                college educators, and enterprise professionals. Learn, practice
                and apply modern technologies with expert guidance.
              </p>

              {/* 4 Feature Badges in 1 Row */}
              <div className={styles.heroFeaturesRow}>
                {/* 1. Hands-On Learning */}
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

                {/* 2. Industry Experts */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Industry Experts</span>
                </div>

                {/* 3. Real-World Projects */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="9" y1="18" x2="15" y2="18" />
                      <line x1="10" y1="22" x2="14" y2="22" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Real-World Projects</span>
                </div>

                {/* 4. Flexible Delivery */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureCircle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureText}>Flexible Delivery</span>
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
                  src="/images/collegemain.png"
                  alt="College and Enterprise Workshops"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. TRANSFORM LEARNING AND CAREERS (4 Cards)
          ========================================= */}
      <section className={styles.transformSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Transform Learning and Careers
            </h2>
            <p className={styles.sectionSubtitle}>
              Practical, industry-relevant workshops to build skills, explore AI, and leverage SkaiMitra for training and education.
            </p>
          </div>

          <div className={styles.transformGrid}>
            {/* 1. Learn */}
            <div className={styles.transformCard}>
              <div className={styles.transformIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className={styles.transformTitle}>Learn</h3>
              <p className={styles.transformDesc}>
                Hands-on training in Full Stack, AI and modern technologies.
              </p>
            </div>

            {/* 2. Practice */}
            <div className={styles.transformCard}>
              <div className={styles.transformIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className={styles.transformTitle}>Practice</h3>
              <p className={styles.transformDesc}>
                Work on real-world projects with expert guidance.
              </p>
            </div>

            {/* 3. Implement */}
            <div className={styles.transformCard}>
              <div className={styles.transformIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <h3 className={styles.transformTitle}>Implement</h3>
              <p className={styles.transformDesc}>
                Use modern tools and frameworks to solve real business problems.
              </p>
            </div>

            {/* 4. Advance */}
            <div className={styles.transformCard}>
              <div className={styles.transformIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.transformTitle}>Advance</h3>
              <p className={styles.transformDesc}>
                Gain career-ready skills and drive digital transformation in your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR WORKSHOP PROGRAMS (2 Cards)
          ========================================= */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.programsHeaderRow}>
            <div className={styles.programsHeaderLeft}>
              <h2 className={styles.programsTitle}>Our Workshop Programs</h2>
              <p className={styles.programsSubtitle}>
                Choose from our popular workshop modules or customize a program for your institution or organization.
              </p>
            </div>
            <Link href="/Trainingprogarm" className={styles.viewAllLink}>
              <span>View Training Programs</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <div className={styles.programsGrid}>
            {/* Card 1: Full Stack Development Workshop */}
            <div className={styles.workshopCard}>
              <div className={styles.workshopThumbWrapper}>
                <img
                  src="/images/collegemain2.png"
                  alt="Full Stack Development Workshop"
                  className={styles.workshopThumb}
                />
              </div>
              <div className={styles.workshopBody}>
                <div className={styles.workshopHeaderRow}>
                  <div className={styles.workshopIconBoxBlue}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className={styles.workshopTitleCol}>
                    <h3 className={styles.workshopCardTitle}>Full Stack Development Workshop</h3>
                    <span className={styles.workshopCardTagline}>Build Complete Web &amp; Mobile Applications</span>
                  </div>
                </div>

                <ul className={styles.workshopBulletList}>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Modern web technologies (React, Node.js)</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Database design with PostgreSQL</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Hands-on projects, testing and deployment</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Best practices and industry workflows</span>
                  </li>
                </ul>

                <Link href="/contact" className={styles.workshopLearnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: AI & Generative AI Workshop */}
            <div className={styles.workshopCard}>
              <div className={styles.workshopThumbWrapper}>
                <img
                  src="/images/collegemain1.png"
                  alt="AI & Generative AI Workshop"
                  className={styles.workshopThumb}
                />
              </div>
              <div className={styles.workshopBody}>
                <div className={styles.workshopHeaderRow}>
                  <div className={styles.workshopIconBoxBlue}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
                    </svg>
                  </div>
                  <div className={styles.workshopTitleCol}>
                    <h3 className={styles.workshopCardTitle}>AI &amp; Generative AI Workshop</h3>
                    <span className={styles.workshopCardTagline}>From Concepts to Real-World Applications</span>
                  </div>
                </div>

                <ul className={styles.workshopBulletList}>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Python for AI and machine learning</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Prompt engineering and LLMs</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Build AI agents and applications</span>
                  </li>
                  <li className={styles.workshopBulletItem}>
                    <span className={styles.bulletDot} />
                    <span>Responsible AI and ethical use cases</span>
                  </li>
                </ul>

                <Link href="/contact" className={styles.workshopLearnMoreBtn}>
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
          4. WHO CAN PARTICIPATE & WHY CHOOSE (2 Columns)
          ========================================= */}
      <section className={styles.splitTwoColsSection}>
        <div className={styles.container}>
          <div className={styles.splitTwoColsGrid}>
            {/* Col 1: Who Can Participate? */}
            <div className={styles.splitCardBox}>
              <h3 className={styles.splitCardTitle}>Who Can Participate?</h3>
              <p className={styles.splitCardSubtitle}>
                Our workshops are designed for a wide range of learners and organizations.
              </p>

              <div className={styles.audienceThreeRow}>
                {/* 1. Students */}
                <div className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h4 className={styles.audienceTitle}>Engineering &amp; Computer Science Students</h4>
                  <p className={styles.audienceDesc}>
                    Gain practical, job-ready skills and build your portfolio.
                  </p>
                </div>

                {/* 2. Educators */}
                <div className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className={styles.audienceTitle}>College Educators &amp; Faculty</h4>
                  <p className={styles.audienceDesc}>
                    Learn to integrate modern technologies and SkaiMitra into teaching and research.
                  </p>
                </div>

                {/* 3. Enterprises */}
                <div className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="9" y1="22" x2="9" y2="2" />
                      <line x1="8" y1="6" x2="8.01" y2="6" />
                      <line x1="16" y1="6" x2="16.01" y2="6" />
                      <line x1="8" y1="10" x2="8.01" y2="10" />
                      <line x1="16" y1="10" x2="16.01" y2="10" />
                      <line x1="8" y1="14" x2="8.01" y2="14" />
                      <line x1="16" y1="14" x2="16.01" y2="14" />
                      <line x1="8" y1="18" x2="8.01" y2="18" />
                      <line x1="16" y1="18" x2="16.01" y2="18" />
                    </svg>
                  </div>
                  <h4 className={styles.audienceTitle}>Enterprise Professionals</h4>
                  <p className={styles.audienceDesc}>
                    Upskill teams, drive innovation and accelerate digital transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2: Why Choose Advaitecs? */}
            <div className={styles.splitCardBox}>
              <h3 className={styles.splitCardTitle}>Why Choose Advaitecs?</h3>
              <p className={styles.splitCardSubtitle}>
                Empowering institutions and enterprises with world-class skill training.
              </p>

              <ul className={styles.whyChooseList}>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Industry-aligned, hands-on curriculum</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Experienced trainers and AI practitioners</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Real-world projects and use cases</span>
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
                  <span>Customized workshops for your needs</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Post-workshop support and learning resources</span>
                </li>
                <li className={styles.whyChooseItem}>
                  <svg className={styles.greenCheckIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
                  </svg>
                  <span>Certificate of participation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. HOW IT WORKS & POPULAR DELIVERY OPTIONS (2 Columns)
          ========================================= */}
      <section className={styles.howAndDeliverySection}>
        <div className={styles.container}>
          <div className={styles.howAndDeliveryGrid}>
            {/* Col 1: How It Works */}
            <div className={styles.splitCardBox}>
              <h3 className={styles.splitCardTitle}>How It Works</h3>
              <p className={styles.splitCardSubtitle}>
                A streamlined process to ensure seamless execution and maximum learning value.
              </p>

              <div className={styles.howStepsContainer}>
                {/* Step 1 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadgeGreen}>1</div>
                  <h4 className={styles.howStepTitle}>Discuss</h4>
                  <p className={styles.howStepDesc}>
                    Share your goals and requirements
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 2 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadgeBlue}>2</div>
                  <h4 className={styles.howStepTitle}>Customize</h4>
                  <p className={styles.howStepDesc}>
                    We design a program for your needs
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 3 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadgeBlue}>3</div>
                  <h4 className={styles.howStepTitle}>Conduct</h4>
                  <p className={styles.howStepDesc}>
                    Interactive, hands-on workshops
                  </p>
                </div>

                <div className={styles.howArrowSeparator}>→</div>

                {/* Step 4 */}
                <div className={styles.howStepItem}>
                  <div className={styles.howStepBadgePurple}>4</div>
                  <h4 className={styles.howStepTitle}>Achieve</h4>
                  <p className={styles.howStepDesc}>
                    Build skills, certify and create impact
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2: Popular Delivery Options */}
            <div className={styles.splitCardBox}>
              <h3 className={styles.splitCardTitle}>Popular Delivery Options</h3>
              <p className={styles.splitCardSubtitle}>
                Choose the model that works best for your schedule and location.
              </p>

              <div className={styles.deliveryGrid}>
                {/* Option 1: On-Site */}
                <div className={styles.deliveryCard}>
                  <div className={styles.deliveryIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="9" y1="22" x2="9" y2="2" />
                      <line x1="8" y1="6" x2="8.01" y2="6" />
                      <line x1="16" y1="6" x2="16.01" y2="6" />
                      <line x1="8" y1="10" x2="8.01" y2="10" />
                      <line x1="16" y1="10" x2="16.01" y2="10" />
                    </svg>
                  </div>
                  <h4 className={styles.deliveryTitle}>On-Site</h4>
                  <p className={styles.deliverySub}>at Your Campus/ Organization</p>
                </div>

                {/* Option 2: Virtual */}
                <div className={styles.deliveryCard}>
                  <div className={styles.deliveryIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h4 className={styles.deliveryTitle}>Virtual</h4>
                  <p className={styles.deliverySub}>Live Online Workshops</p>
                </div>

                {/* Option 3: Hybrid */}
                <div className={styles.deliveryCard}>
                  <div className={styles.deliveryIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h4 className={styles.deliveryTitle}>Hybrid</h4>
                  <p className={styles.deliverySub}>Flexible Combination</p>
                </div>

                {/* Option 4: Custom */}
                <div className={styles.deliveryCard}>
                  <div className={styles.deliveryIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <h4 className={styles.deliveryTitle}>Custom</h4>
                  <p className={styles.deliverySub}>Tailored to Your Needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. PRE-FOOTER CTA BANNER (Radiant Deep Navy)
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaTitle}>
              Let&apos;s Build a Smarter Future Together
            </h2>
            <p className={styles.ctaSubtitle}>
              Bring our workshops to your campus or organization and empower your learners and teams.
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
