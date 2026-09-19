import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './aboutus.module.css';

export const metadata: Metadata = {
  title: 'About Us | Advaitecs - Training Minds, Innovating Solutions',
  description: 'Founded in 2025, Advaitecs is dedicated to providing skill education courses, innovative tools, and training programs for schools, colleges, and enterprises.',
};

export default function AboutUsPage() {
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
              <span className={styles.heroEyebrow}>ABOUT US</span>
              <h1 className={styles.heroTitle}>
                Training Minds
                <span className={styles.heroTitleHighlight}>Innovating Solutions</span>
              </h1>
              <p className={styles.heroLeadSubtitle}>
                Empowering learners. Enabling institutions.
                <br />
                Building a smarter, brighter future.
              </p>
              <p className={styles.heroParagraph}>
                Founded in 2025, Advaitecs is dedicated to providing skill education courses, innovative tools, and training programs for schools, colleges, and enterprises. We prepare students, college graduates, and professionals with the essential skills for the future in AI and emerging technologies.
              </p>

              <div className={styles.heroButtonGroup}>
                <Link href="/Trainingprogarm" className={styles.primaryBtnBlue}>
                  <span>Our Programs</span>
                  <span>→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Contact Us</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/Aboutus.png"
                  alt="Advaitecs Team - Skills People Ideas Impact"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. 4 PILLARS (Vision, Mission, Values, Purpose)
          ========================================= */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.pillarsGrid}>
            {/* 1. Our Vision */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Our Vision</h3>
              <p className={styles.pillarDesc}>
                To provide skill education courses, tools and training programs for schools, colleges and enterprises.
              </p>
            </div>

            {/* 2. Our Mission */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Our Mission</h3>
              <p className={styles.pillarDesc}>
                To empower learners with future-ready skills through innovative education, technology and practical training.
              </p>
            </div>

            {/* 3. Our Values */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9z" />
                  <path d="M11 3 8 9l4 12 4-12-3-6" />
                  <path d="M2 9h20" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Our Values</h3>
              <p className={styles.pillarDesc}>
                Learner success &bull; Innovation
                <br />
                Integrity &bull; Inclusivity
                <br />
                Real-world impact
              </p>
            </div>

            {/* 4. Our Purpose */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Our Purpose</h3>
              <p className={styles.pillarDesc}>
                To prepare students, college graduates and professionals with the necessary skills to thrive in an AI-driven world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. BRIDGING EDUCATION AND REAL-WORLD OPPORTUNITIES
          ========================================= */}
      <section className={styles.bridgingSection}>
        <div className={styles.container}>
          <div className={styles.bridgingGrid}>
            {/* Left Col: Narrative & Action */}
            <div className={styles.bridgingLeftCol}>
              <h2 className={styles.bridgingTitle}>
                Bridging Education and Real-World Opportunities
              </h2>
              <p className={styles.bridgingDesc}>
                We combine industry expertise, modern technologies, and hands-on learning to create programs that are relevant, practical, and impactful for today&apos;s learners and tomorrow&apos;s workforce.
              </p>
              <Link href="/contact" className={styles.primaryBtnBlue}>
                <span>Our Story</span>
                <span>→</span>
              </Link>
            </div>

            {/* Center Col: Image */}
            <div className={styles.bridgingCenterCol}>
              <div className={styles.bridgingImgWrapper}>
                <img
                  src="/images/Aboutus2.png"
                  alt="A Brighter Future Through Learning - Advaitecs Student"
                  className={styles.bridgingImg}
                />
              </div>
            </div>

            {/* Right Col: 3 Target Audiences */}
            <div className={styles.bridgingRightCol}>
              {/* For Schools */}
              <div className={styles.targetCard}>
                <div className={styles.targetIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div className={styles.targetTexts}>
                  <h3 className={styles.targetTitle}>For Schools</h3>
                  <p className={styles.targetDesc}>
                    Foundational AI and Coding skills for future-ready students
                  </p>
                </div>
              </div>

              {/* For Colleges */}
              <div className={styles.targetCard}>
                <div className={styles.targetIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="9" y1="22" x2="9" y2="2" />
                    <line x1="15" y1="22" x2="15" y2="2" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="10" x2="20" y2="10" />
                    <line x1="4" y1="14" x2="20" y2="14" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </div>
                <div className={styles.targetTexts}>
                  <h3 className={styles.targetTitle}>For Colleges</h3>
                  <p className={styles.targetDesc}>
                    Practical training for engineering and computer science students and educators
                  </p>
                </div>
              </div>

              {/* For Enterprises */}
              <div className={styles.targetCard}>
                <div className={styles.targetIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className={styles.targetTexts}>
                  <h3 className={styles.targetTitle}>For Enterprises</h3>
                  <p className={styles.targetDesc}>
                    Customized upskilling programs for professionals and teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. WHAT WE DO (4 Cards Grid)
          ========================================= */}
      <section className={styles.whatWeDoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              End-to-end solutions for AI and skill education
            </p>
          </div>

          <div className={styles.whatWeDoGrid}>
            {/* Card 1: Skill Education Programs */}
            <div className={`${styles.whatWeDoCard} ${styles.cardSkillProg}`}>
              <div className={`${styles.whatWeDoIconBox} ${styles.iconGreen}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoTitle}>Skill Education Programs</h3>
              <p className={styles.whatWeDoDesc}>
                Courses in AI, Coding, Full Stack, Cloud, and more for students, graduates and professionals.
              </p>
            </div>

            {/* Card 2: SkaiMitra LMS Platform */}
            <div className={`${styles.whatWeDoCard} ${styles.cardLMS}`}>
              <div className={`${styles.whatWeDoIconBox} ${styles.iconPurple}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="2" y1="20" x2="22" y2="20" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoTitle}>SkaiMitra LMS Platform</h3>
              <p className={styles.whatWeDoDesc}>
                A comprehensive learning platform with content, assignments, assessments, progress tracking and AI-powered assistance.
              </p>
            </div>

            {/* Card 3: Workshops & Training */}
            <div className={`${styles.whatWeDoCard} ${styles.cardWorkshops}`}>
              <div className={`${styles.whatWeDoIconBox} ${styles.iconBlue}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoTitle}>Workshops &amp; Training</h3>
              <p className={styles.whatWeDoDesc}>
                Hands-on, industry-focused workshops for schools, colleges and enterprises.
              </p>
            </div>

            {/* Card 4: Innovation & Impact */}
            <div className={`${styles.whatWeDoCard} ${styles.cardImpact}`}>
              <div className={`${styles.whatWeDoIconBox} ${styles.iconViolet}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.whatWeDoTitle}>Innovation &amp; Impact</h3>
              <p className={styles.whatWeDoDesc}>
                Real-world projects, industry collaboration and continuous learning for lifelong growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. OUR IMPACT (Metrics + Slogan Callout)
          ========================================= */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Our Impact</h2>
            <p className={styles.sectionSubtitle}>
              Building future-ready learners and professionals
            </p>
          </div>

          <div className={styles.impactFlexRow}>
            {/* Metrics */}
            <div className={styles.impactMetricsGrid}>
              {/* Metric 1 */}
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className={styles.impactItemTitle}>Students</h3>
                <p className={styles.impactItemSubtitle}>Future-ready skills for tomorrow</p>
              </div>

              {/* Metric 2 */}
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 className={styles.impactItemTitle}>Educators</h3>
                <p className={styles.impactItemSubtitle}>Empowered with modern teaching tools</p>
              </div>

              {/* Metric 3 */}
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="9" y1="22" x2="9" y2="2" />
                    <line x1="15" y1="22" x2="15" y2="2" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="10" x2="20" y2="10" />
                    <line x1="4" y1="14" x2="20" y2="14" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </div>
                <h3 className={styles.impactItemTitle}>Institutions</h3>
                <p className={styles.impactItemSubtitle}>Schools, colleges and enterprises supported</p>
              </div>

              {/* Metric 4 */}
              <div className={styles.impactItem}>
                <div className={styles.impactIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </div>
                <h3 className={styles.impactItemTitle}>Opportunities</h3>
                <p className={styles.impactItemSubtitle}>Real-world skills for meaningful careers</p>
              </div>
            </div>

            {/* Slogan Graphic Callout */}
            <div className={styles.impactSloganCol}>
              <div className={styles.sloganBrushText}>
                Learn
                <br />
                Create
                <br />
                <span className={styles.sloganGreenCurve}>Belong</span>
                <br />
                Become
              </div>
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
            <h2 className={styles.ctaTitle}>Let&apos;s Build a Smarter Future Together</h2>
            <p className={styles.ctaSubtitle}>
              Partner with us to bring high-quality AI and skill education to your students, teams and communities.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact" className={styles.ctaBtnGreen}>
                <span>Get Started</span>
                <span>→</span>
              </Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
