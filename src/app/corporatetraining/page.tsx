'use client';

import React from 'react';
import Link from 'next/link';
import styles from './corporatetraining.module.css';

export default function CorporateTrainingPage() {
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
              <span className={styles.heroEyebrow}>CORPORATE TRAINING</span>
              <h1 className={styles.heroTitle}>
                Future-Ready Teams
                <span className={styles.heroTitleHighlight}>for an AI-Driven World</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Customized training programs in Full-Stack Development and Artificial
                Intelligence to upskill your workforce and accelerate innovation.
              </p>

              {/* 4 Feature Badges in 2x2 Grid */}
              <div className={styles.heroFeaturesGrid}>
                {/* 1. Industry-Relevant Curriculum */}
                <div className={styles.heroFeatureItem}>
                  <svg
                    className={styles.heroFeatureIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <span>Industry-Relevant Curriculum</span>
                </div>

                {/* 2. Flexible Delivery Options */}
                <div className={styles.heroFeatureItem}>
                  <svg
                    className={styles.heroFeatureIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>Flexible Delivery Options</span>
                </div>

                {/* 3. Hands-on Project Training */}
                <div className={styles.heroFeatureItem}>
                  <svg
                    className={styles.heroFeatureIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <span>Hands-on Project Training</span>
                </div>

                {/* 4. Measurable Outcomes */}
                <div className={styles.heroFeatureItem}>
                  <svg
                    className={styles.heroFeatureIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                  <span>Measurable Outcomes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="/contact" className={styles.primaryBtnBlue}>
                  <span>Request a Proposal</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Schedule a Consultation</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/careertraining1.png"
                  alt="Corporate Training - Future-Ready Teams for an AI-Driven World"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. TWO FLAGSHIP PROGRAMS (Side-by-Side)
          ========================================= */}
      <section className={styles.programsSection}>
        <div className={styles.container}>
          <div className={styles.programsGrid}>
            {/* Card 1: Full-Stack Development Program */}
            <div className={styles.programCard}>
              <div className={styles.programHeader}>
                <div className={styles.iconSquareBlue}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className={styles.programTitleCol}>
                  <h3 className={styles.programTitle}>Full-Stack Development Program</h3>
                  <span className={styles.programTagline}>Build. Deploy. Scale.</span>
                </div>
              </div>

              <p className={styles.programDesc}>
                Equip your teams with modern full-stack development skills to design,
                build, test and deploy scalable web and mobile applications using
                industry-leading technologies.
              </p>

              <h4 className={styles.topicsHeading}>Key Topics Include:</h4>
              <ul className={styles.topicsList}>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Frontend Development (React, TypeScript)</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Backend Development (Node.js, APIs)</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Databases (PostgreSQL)</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>DevOps, CI/CD & Cloud Deployment</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Testing, QA and Best Practices</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Real-world Projects</span>
                </li>
              </ul>
            </div>

            {/* Card 2: AI Developer Program */}
            <div className={styles.programCard}>
              <div className={styles.programHeader}>
                <div className={styles.iconSquarePurple}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
                  </svg>
                </div>
                <div className={styles.programTitleCol}>
                  <h3 className={styles.programTitle}>AI Developer Program</h3>
                  <span className={styles.programTagline}>From Ideas to Intelligent Solutions</span>
                </div>
              </div>

              <p className={styles.programDesc}>
                Help your teams harness the power of Artificial Intelligence to solve
                real business problems and build next-generation applications.
              </p>

              <h4 className={styles.topicsHeading}>Key Topics Include:</h4>
              <ul className={styles.topicsList}>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>GenAI Concepts and Applications</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Prompt Engineering</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Python for AI/ML</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Data Processing and Model Development</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Building AI Applications (LLMs, APIs, RAG)</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Responsible AI and Ethics</span>
                </li>
                <li className={styles.topicItem}>
                  <svg className={styles.checkIconBlue} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Real-world Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. WHY CHOOSE ADVAITECS (5 Cards Row)
          ========================================= */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Why Choose Advaitecs for Corporate Training
            </h2>
          </div>

          <div className={styles.whyChooseGrid}>
            {/* 1. Customized for Your Needs */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Customized for Your Needs</h3>
              <p className={styles.whyChooseDesc}>
                Tailored content, use cases and projects for your industry.
              </p>
            </div>

            {/* 2. Practical & Hands-on */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Practical & Hands-on</h3>
              <p className={styles.whyChooseDesc}>
                Learn by building real solutions.
              </p>
            </div>

            {/* 3. Experienced Trainers */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Experienced Trainers</h3>
              <p className={styles.whyChooseDesc}>
                Industry experts with real-world experience.
              </p>
            </div>

            {/* 4. Flexible Delivery */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Flexible Delivery</h3>
              <p className={styles.whyChooseDesc}>
                Onsite, online or hybrid – with schedules that work for you.
              </p>
            </div>

            {/* 5. Measurable Impact */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Measurable Impact</h3>
              <p className={styles.whyChooseDesc}>
                Track learning outcomes and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. EMPOWER YOUR TEAM (Image + List + Slogan)
          ========================================= */}
      <section className={styles.empowerSection}>
        <div className={styles.container}>
          <div className={styles.empowerGrid}>
            {/* Left Image */}
            <div className={styles.empowerImgWrapper}>
              <img
                src="/images/careertraining2.png"
                alt="Empower Your Team for What's Next"
                className={styles.empowerImg}
              />
            </div>

            {/* Center Content */}
            <div className={styles.empowerContent}>
              <h2 className={styles.empowerTitle}>Empower Your Team for What&apos;s Next</h2>
              <p className={styles.empowerSubtitle}>
                Our corporate training programs are designed to help organizations:
              </p>

              <ul className={styles.empowerList}>
                <li className={styles.empowerItem}>
                  <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Upskill existing teams on modern technologies</span>
                </li>
                <li className={styles.empowerItem}>
                  <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Drive innovation and improve productivity</span>
                </li>
                <li className={styles.empowerItem}>
                  <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Build internal capabilities for AI and digital transformation</span>
                </li>
                <li className={styles.empowerItem}>
                  <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Work on real business use cases and projects</span>
                </li>
                <li className={styles.empowerItem}>
                  <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Get ongoing support and post-training resources</span>
                </li>
              </ul>
            </div>

            {/* Right Handwritten / Script Graphic */}
            <div className={styles.empowerSloganCol}>
              <div className={styles.sloganInvestText}>
                <div>Invest</div>
                <div>in People</div>
                <div>Build</div>
                <div className={styles.sloganCurveGreen}>a Brighter</div>
                <div className={styles.sloganCurveGreen}>Tomorrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. TRAINING ENGAGEMENT PROCESS (5 Steps)
          ========================================= */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Our Training Engagement Process
            </h2>
          </div>

          <div className={styles.processContainer}>
            {/* Step 1 */}
            <div className={styles.processStepItem}>
              <div className={styles.processBadgeNumber}>1</div>
              <h3 className={styles.processStepTitle}>Understand</h3>
              <p className={styles.processStepDesc}>
                We assess your goals and training needs.
              </p>
            </div>

            {/* Chevron */}
            <div className={styles.processSeparator}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className={styles.processStepItem}>
              <div className={styles.processBadgeNumber}>2</div>
              <h3 className={styles.processStepTitle}>Customize</h3>
              <p className={styles.processStepDesc}>
                We design a tailored program and plan.
              </p>
            </div>

            {/* Chevron */}
            <div className={styles.processSeparator}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className={styles.processStepItem}>
              <div className={styles.processBadgeNumber}>3</div>
              <h3 className={styles.processStepTitle}>Deliver</h3>
              <p className={styles.processStepDesc}>
                Engaging, hands-on training by experts.
              </p>
            </div>

            {/* Chevron */}
            <div className={styles.processSeparator}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className={styles.processStepItem}>
              <div className={styles.processBadgeNumber}>4</div>
              <h3 className={styles.processStepTitle}>Support</h3>
              <p className={styles.processStepDesc}>
                Ongoing guidance and learning resources.
              </p>
            </div>

            {/* Chevron */}
            <div className={styles.processSeparator}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Step 5 */}
            <div className={styles.processStepItem}>
              <div className={styles.processBadgeNumber}>5</div>
              <h3 className={styles.processStepTitle}>Grow</h3>
              <p className={styles.processStepDesc}>
                Measure outcomes and plan next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. INDUSTRIES WE SERVE (8 Icons Grid)
          ========================================= */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Industries We Serve
            </h2>
          </div>

          <div className={styles.industriesGrid}>
            {/* 1. Technology */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className={styles.industryName}>Technology</span>
            </div>

            {/* 2. Healthcare */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  <line x1="12" y1="8" x2="12" y2="14" />
                  <line x1="9" y1="11" x2="15" y2="11" />
                </svg>
              </div>
              <span className={styles.industryName}>Healthcare</span>
            </div>

            {/* 3. Financial Services */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <polyline points="4 6 10 12 14 8 20 14" />
                </svg>
              </div>
              <span className={styles.industryName}>Financial Services</span>
            </div>

            {/* 4. Manufacturing */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H2z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>
              </div>
              <span className={styles.industryName}>Manufacturing</span>
            </div>

            {/* 5. Retail & E-commerce */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className={styles.industryName}>Retail & E-commerce</span>
            </div>

            {/* 6. Education */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className={styles.industryName}>Education</span>
            </div>

            {/* 7. Government */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
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
              <span className={styles.industryName}>Government</span>
            </div>

            {/* 8. and more... */}
            <div className={styles.industryPill}>
              <div className={styles.industryIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                  <circle cx="5" cy="12" r="1.5" />
                </svg>
              </div>
              <span className={styles.industryName}>and more...</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. PRE-FOOTER CTA (Full Width Dark Banner)
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            {/* Left Col */}
            <div className={styles.ctaLeftCol}>
              <h2 className={styles.ctaTitle}>
                Let&apos;s Build a Smarter, More Capable Team Together
              </h2>
              <p className={styles.ctaSubtitle}>
                Partner with Advaitecs for customized corporate training in Full-Stack and AI.
              </p>

              <div className={styles.ctaButtonsRow}>
                <Link href="/contact" className={styles.ctaBtnGreen}>
                  <span>Request a Proposal</span>
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
            </div>

            {/* Right Col */}
            <div className={styles.ctaRightCol}>
              <div className={styles.ctaGraphicSlogan}>
                <div>People</div>
                <div>Skills</div>
                <div className={styles.ctaGraphicHighlight}>Better Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
