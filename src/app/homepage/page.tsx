'use client';

import React from 'react';
import Link from 'next/link';
import styles from './homepage.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                AI-Powered Learning.
                <br />
                Industry-Ready Skills.
                <br />
                <span className={styles.heroTitleHighlight}>Future-Ready Organizations.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Transforming education and workforce development through AI-powered technology,
                hands-on training and industry-focused learning experiences.
              </p>
            </div>

            <div className={styles.heroMedia}>
              <img
                src="/herosection.png"
                alt="Advaitecs and SkaiMitra AI Learning Platform in Classroom"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE HIGHLIGHT CARDS */}
      <section className={styles.highlightSection}>
        <div className={styles.container}>
          <div className={styles.highlightGrid}>
            {/* Card 1: SkaiMitra */}
            <div className={styles.highlightCard}>
              <div className={`${styles.cardIconCircle} ${styles.iconBlue}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
                  <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>
                Skai<span className={styles.cardTitleMitra}>Mitra</span>
              </h2>
              <p className={styles.cardDesc}>
                AI-powered education and learning platform for schools, colleges and training organizations.
              </p>
              <Link href="/Skaimitra" className={`${styles.cardActionLink} ${styles.linkBlue}`}>
                <span>Explore SkaiMitra</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Card 2: Skills Training */}
            <div className={styles.highlightCard}>
              <div className={`${styles.cardIconCircle} ${styles.iconGreen}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Skills Training</h2>
              <p className={styles.cardDesc}>
                Industry-aligned, hands-on programs designed to build in-demand technical skills and real-world expertise.
              </p>
              <Link href="/Trainingprogarm" className={`${styles.cardActionLink} ${styles.linkGreen}`}>
                <span>View Programs</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Card 3: Enterprise & Workshops */}
            <div className={styles.highlightCard}>
              <div className={`${styles.cardIconCircle} ${styles.iconPurple}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>Enterprise & Workshops</h2>
              <p className={styles.cardDesc}>
                Focused AI, Cloud, Cybersecurity and emerging-technology programs for organizations, faculty and students.
              </p>
              <Link href="/workshop" className={`${styles.cardActionLink} ${styles.linkPurple}`}>
                <span>Explore Workshops</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PLATFORM (SKAIMITRA) */}
      <section className={styles.platformSection}>
        <div className={styles.container}>
          <div className={styles.platformContainer}>
            {/* Left Side */}
            <div className={styles.platformInfo}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>OUR PLATFORM</span>
              <h2 className={styles.platformTitle}>
                Transform Teaching &amp; Learning with <span style={{ color: '#2563eb' }}>SkaiMitra</span>
              </h2>
              <p className={styles.platformSubtitle}>
                One intelligent platform for learning, teaching and academic management.
              </p>
              <p className={styles.platformDesc}>
                SkaiMitra brings educators, learners and administrators together through AI-assisted tools that simplify teaching, improve engagement and provide actionable insights.
              </p>

              <div className={styles.platformBtnRow}>
                <Link href="/Skaimitra" className={styles.primaryBtn}>
                  <span>Explore SkaiMitra</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
                <Link href="/Skaimitra/request-demo" className={styles.secondaryBtn}>
                  <span>Request a Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </Link>
              </div>

              <a href="https://edu.skaimitra.com" target="_blank" rel="noopener noreferrer" className={styles.subUrlLink}>
                edu.skaimitra.com
              </a>
            </div>

            {/* Right Side 2x3 Grid */}
            <div className={styles.featuresGrid}>
              {/* 1 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                    <path d="m14 7 3 3" />
                    <path d="M5 6v4" />
                    <path d="M19 14v4" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>AI Teaching Assistant</h3>
                  <p className={styles.featureDesc}>
                    Lesson plans, assessments, practice activities and teaching resources.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="13" y2="16" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Assignments &amp; Assessments</h3>
                  <p className={styles.featureDesc}>
                    Create, distribute, grade and analyze student work effortlessly.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Learning &amp; Study Materials</h3>
                  <p className={styles.featureDesc}>
                    Centralized access to curriculum-aligned learning resources anytime.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="2.5" />
                    <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>SkaiAssistant</h3>
                  <p className={styles.featureDesc}>
                    Your AI-powered assistant for lesson planning, content creation, insights and more.
                  </p>
                </div>
              </div>

              {/* 5 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Student Progress Insights</h3>
                  <p className={styles.featureDesc}>
                    Understand performance, learning progress and students needing additional support.
                  </p>
                </div>
              </div>

              {/* 6 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>Communication &amp; Engagement</h3>
                  <p className={styles.featureDesc}>
                    Notifications, messaging, events and parent/student communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRAINING PROGRAMS */}
      <section className={styles.trainingSection}>
        <div className={styles.container}>
          <div className={styles.trainingCardOuter}>
            {/* Header */}
            <div className={styles.sectionHeaderCenter}>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>TRAINING PROGRAMS</span>
              <h2 className={styles.sectionTitle}>
                Build Skills. Build Projects. <span style={{ color: '#2563eb' }}>Build Your Career.</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Industry-focused training for graduates and professionals who want practical skills—not just certificates.
              </p>
            </div>

            {/* 3 Columns: Course 1, Course 2, and Training Image */}
            <div className={styles.trainingContentGrid}>
              {/* Column 1: AI Career Ready */}
              <div className={styles.courseCard}>
                <div className={styles.courseCardTop}>
                  <div className={styles.courseIconBoxBlue}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a9 9 0 0 0-9 9c0 3.6 2.1 6.7 5.2 8.1L8 22h8l-.2-2.9C18.9 17.7 21 14.6 21 11a9 9 0 0 0-9-9z" />
                      <path d="M9 10a3 3 0 0 1 6 0" />
                    </svg>
                  </div>
                  <div className={styles.courseTitleWrapper}>
                    <h3 className={styles.courseTitle}>AI Career Ready</h3>
                    <span className={styles.durationBadge}>16 Weeks</span>
                  </div>
                </div>

                <p className={styles.courseSkills}>
                  Python • Machine Learning • GenAI • LLMs
                  <br />
                  APIs • RAG • AI Applications • Deployment
                </p>

                <p className={styles.courseOutcome}>
                  <strong>Outcome:</strong> Build and deploy real-world AI applications.
                </p>

                <Link href="/training/ai-career" className={styles.courseLink}>
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Column 2: Full Stack Developer */}
              <div className={styles.courseCard}>
                <div className={styles.courseCardTop}>
                  <div className={styles.courseIconBoxGreen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className={styles.courseTitleWrapper}>
                    <h3 className={styles.courseTitle}>Full Stack Developer</h3>
                    <span className={styles.durationBadge}>12 Weeks</span>
                  </div>
                </div>

                <p className={styles.courseSkills}>
                  React • Node.js • PostgreSQL • APIs
                  <br />
                  Architecture • AI-Assisted Development
                  <br />
                  Testing • Deployment
                </p>

                <p className={styles.courseOutcome}>
                  <strong>Outcome:</strong> Build a production-ready web application from requirements through deployment.
                </p>

                <Link href="/fullstack" className={styles.courseLink}>
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Column 3: Training Image */}
              <div className={styles.trainingImageWrapper}>
                <img
                  src="/training programs.png"
                  alt="Instructor teaching in modern tech laboratory"
                  className={styles.trainingImg}
                />
              </div>
            </div>

            {/* Workflow pipeline */}
            <div className={styles.pipelineBox}>
              <div className={styles.pipelineStep}>
                <svg className={styles.pipelineStepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span>Learn</span>
              </div>
              <span className={styles.pipelineArrow}>›</span>

              <div className={styles.pipelineStep}>
                <svg className={styles.pipelineStepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span>Practice</span>
              </div>
              <span className={styles.pipelineArrow}>›</span>

              <div className={styles.pipelineStep}>
                <svg className={styles.pipelineStepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span>Build</span>
              </div>
              <span className={styles.pipelineArrow}>›</span>

              <div className={styles.pipelineStep}>
                <svg className={styles.pipelineStepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Test</span>
              </div>
              <span className={styles.pipelineArrow}>›</span>

              <div className={styles.pipelineStep}>
                <svg className={styles.pipelineStepIcon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                <span>Deploy</span>
              </div>
            </div>

            {/* Centered CTA button */}
            <div className={styles.centerBtnWrapper}>
              <Link href="/Trainingprogarm" className={styles.primaryBtn}>
                <span>View All Training Programs</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TWO SPLIT CARDS (FOR COLLEGES & ENTERPRISES) */}
      <section className={styles.splitCardsSection}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            {/* Card 1: For Colleges */}
            <div className={styles.splitCard}>
              <div className={styles.splitCardContent}>
                <span className={styles.badgePillGreen}>FOR COLLEGES</span>
                <h3 className={styles.splitTitle}>
                  Prepare Students for an<br />AI-Driven Workplace
                </h3>
                <p className={styles.splitDesc}>
                  Partner with Advaitecs to supplement academic learning with practical, industry-focused technology programs.
                </p>

                <div className={styles.checklistCols}>
                  {/* Left Column */}
                  <div className={styles.checklistCol}>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>AI &amp; GenAI Workshops</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Faculty Development Programs</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Industry-Ready Bootcamps</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className={styles.checklistCol}>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Placement Readiness Programs</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconGreen} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Innovation &amp; AI Labs</span>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className={`${styles.splitActionLink} ${styles.linkGreen}`}>
                  <span>Partner With Us</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </div>

              <div className={styles.splitCardImageCol}>
                <img
                  src="/images/college/college-students.png"
                  alt="College students learning together"
                  className={styles.collegeImg}
                />
              </div>
            </div>

            {/* Card 2: For Enterprises */}
            <div className={styles.splitCard}>
              <div className={styles.splitCardContent}>
                <span className={styles.badgePillBlue}>FOR ENTERPRISES</span>
                <h3 className={styles.splitTitle}>
                  Transform Your<br />Workforce with AI
                </h3>
                <p className={styles.splitDesc}>
                  Practical, role-based workshops that help teams use AI and emerging technologies to improve productivity and innovate.
                </p>

                <div className={styles.checklistCols}>
                  {/* Left Column */}
                  <div className={styles.checklistCol}>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Generative AI for Business</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>AI for Executives &amp; Managers</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>AI for Developers</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>AI Productivity Workshop</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className={styles.checklistCol}>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Cloud &amp; DevOps Workshops</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Cybersecurity Workshops</span>
                    </div>
                    <div className={styles.checklistItem}>
                      <svg className={styles.checkIconBlue} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <polyline points="8 12 11 15 16 9" />
                      </svg>
                      <span>Custom Workforce Upskilling</span>
                    </div>
                  </div>
                </div>

                <Link href="/collegeenterpriseworkshop" className={`${styles.splitActionLink} ${styles.linkBlue}`}>
                  <span>Schedule an Enterprise Workshop</span>
                  <span className={styles.linkArrow}>→</span>
                </Link>
              </div>

              <div className={styles.splitCardImageCol}>
                <img
                  src="/images/enterprise/enterprise-team.png"
                  alt="Enterprise team collaborating with digital tablet"
                  className={styles.enterpriseImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRE-FOOTER CTA BANNER */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Your AI-Ready Organization?
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you&apos;re preparing students for future careers, transforming your workforce, or modernizing learning with SkaiMitra, Advaitecs can help.
          </p>

          <div className={styles.ctaButtonGroup}>
            <Link href="/Skaimitra" className={styles.ctaBtnOutline}>
              <span>Explore SkaiMitra</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.ctaBtnGreen}>
              <span>Start a Training Program</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className={styles.ctaBtnPurple}>
              <span>Schedule a Workshop</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
