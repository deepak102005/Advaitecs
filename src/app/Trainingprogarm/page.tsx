import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './training.module.css';

export const metadata: Metadata = {
  title: 'Training Programs | Advaitecs',
  description: 'Industry-focused, hands-on training programs designed to prepare graduates and professionals for real-world technology careers.',
};

export default function TrainingProgramPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>SKILLS TRAINING PROGRAMS</span>
              <h1 className={styles.heroTitle}>
                Build Skills. Build Projects.
                <span className={styles.heroTitleHighlight}>Build Your Career.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Industry-focused, hands-on training programs designed to prepare graduates and professionals for real-world technology careers.
              </p>
              <div className={styles.heroButtonGroup}>
                <Link href="#programs" className={styles.primaryBtn}>
                  <span>Explore Programs</span>
                  <span>→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  <span>Talk to an Advisor</span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/Trainingprograms (2).png"
                  alt="Students engaged in tech training with mentor"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR CAREER PATH */}
      <section id="programs" className={styles.careerPathSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Choose Your <span className={styles.highlightText}>Career Path</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Two industry-focused programs to help you build in-demand skills and launch your technology career.
            </p>
          </div>

          <div className={styles.careerCardsGrid}>
            {/* Card 1: AI Career Ready */}
            <div className={styles.careerCard}>
              <div className={styles.careerCardTop}>
                <div className={styles.cardHeaderLeft}>
                  <div className={styles.careerIconBoxBlue}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a9 9 0 0 0-9 9c0 3.6 2.1 6.7 5.2 8.1L8 22h8l-.2-2.9C18.9 17.7 21 14.6 21 11a9 9 0 0 0-9-9z" />
                      <path d="M9 10a3 3 0 0 1 6 0" />
                      <circle cx="12" cy="11" r="1" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className={styles.careerCardTitle}>AI Career Ready</h3>
                </div>
                <span className={styles.durationBadgeBlue}>16 Weeks</span>
              </div>

              <p className={styles.careerCardTagline}>
                Build and deploy real-world AI applications.
              </p>

              <p className={styles.careerCardSkills}>
                Python • Machine Learning • Generative AI • LLMs • APIs •<br />
                RAG • AI Applications • Deployment
              </p>

              <Link href="/AICAREER" className={styles.careerCardBtn}>
                <span>View AI Program</span>
                <span>→</span>
              </Link>
            </div>

            {/* Card 2: Full Stack Developer */}
            <div className={styles.careerCard}>
              <div className={styles.careerCardTop}>
                <div className={styles.cardHeaderLeft}>
                  <div className={styles.careerIconBoxGreen}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <h3 className={styles.careerCardTitle}>Full Stack Developer</h3>
                </div>
                <span className={styles.durationBadgeGreen}>12 Weeks</span>
              </div>

              <p className={styles.careerCardTagline}>
                Build a production-ready web application from requirements through deployment.
              </p>

              <p className={styles.careerCardSkills}>
                React • Node.js • PostgreSQL • REST APIs • Architecture •<br />
                AI-Assisted Development • Testing • Deployment
              </p>

              <Link href="/fullstack" className={styles.careerCardBtn}>
                <span>View Full Stack Program</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEARN BY BUILDING */}
      <section className={styles.learnSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Learn by <span className={styles.highlightText}>Building</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Every program follows the complete project lifecycle—from requirements and design through development, QA and production deployment.
            </p>
          </div>

          <div className={styles.pipelineBox}>
            {/* 1. Learn */}
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineIconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h4 className={styles.pipelineStepTitle}>Learn</h4>
              <p className={styles.pipelineStepDesc}>
                Understand concepts and best practices
              </p>
            </div>

            <span className={styles.pipelineArrow}>›</span>

            {/* 2. Practice */}
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineIconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h4 className={styles.pipelineStepTitle}>Practice</h4>
              <p className={styles.pipelineStepDesc}>
                Apply your knowledge with guided exercises
              </p>
            </div>

            <span className={styles.pipelineArrow}>›</span>

            {/* 3. Build */}
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineIconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h4 className={styles.pipelineStepTitle}>Build</h4>
              <p className={styles.pipelineStepDesc}>
                Develop real-world projects
              </p>
            </div>

            <span className={styles.pipelineArrow}>›</span>

            {/* 4. Test */}
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineIconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4 className={styles.pipelineStepTitle}>Test</h4>
              <p className={styles.pipelineStepDesc}>
                Validate with testing and code reviews
              </p>
            </div>

            <span className={styles.pipelineArrow}>›</span>

            {/* 5. Deploy */}
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineIconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h4 className={styles.pipelineStepTitle}>Deploy</h4>
              <p className={styles.pipelineStepDesc}>
                Launch to production and showcase your work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM COMPARISON TABLE */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Program <span className={styles.highlightText}>Comparison</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Compare the two programs and choose the right path for your goals.
            </p>
          </div>

          <div className={styles.comparisonTableCard}>
            <div className={styles.tableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th className={styles.thFeature}>Feature</th>
                    <th className={styles.thAi}>
                      <div className={styles.thHeaderContent}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a9 9 0 0 0-9 9c0 3.6 2.1 6.7 5.2 8.1L8 22h8l-.2-2.9C18.9 17.7 21 14.6 21 11a9 9 0 0 0-9-9z" />
                          <path d="M9 10a3 3 0 0 1 6 0" />
                        </svg>
                        <span>AI Career Ready</span>
                      </div>
                    </th>
                    <th className={styles.thFullStack}>
                      <div className={styles.thHeaderContent}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <span>Full Stack Developer</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td className={styles.tdFeature}>Duration</td>
                    <td className={styles.tdAi}><strong>16 Weeks</strong></td>
                    <td className={styles.tdFullStack}><strong>12 Weeks</strong></td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className={styles.tdFeature}>Best For</td>
                    <td className={styles.tdAi}>
                      Graduates and professionals interested in AI and machine learning careers.
                    </td>
                    <td className={styles.tdFullStack}>
                      Graduates and professionals who want to build modern web applications.
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr>
                    <td className={styles.tdFeature}>Core Technologies</td>
                    <td className={styles.tdAi}>
                      Python, Machine Learning, Generative AI, LLMs, APIs, RAG, AI Applications, Deployment
                    </td>
                    <td className={styles.tdFullStack}>
                      React, Node.js, PostgreSQL, REST APIs, Architecture, AI-Assisted Development, Testing, Deployment
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr>
                    <td className={styles.tdFeature}>Hands-On Projects</td>
                    <td className={styles.tdAi}>
                      Build and deploy real-world AI applications including LLM-based solutions.
                    </td>
                    <td className={styles.tdFullStack}>
                      Build a complete full stack web application from requirements through deployment.
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr>
                    <td className={styles.tdFeature}>Career Outcomes</td>
                    <td className={styles.tdAi}>
                      AI Developer, GenAI Developer, Machine Learning Associate
                    </td>
                    <td className={styles.tdFullStack}>
                      Full Stack Developer, React Developer, Node.js Developer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU WILL EXPERIENCE */}
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              What You Will <span className={styles.highlightText}>Experience</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A flexible, practical and supportive learning experience designed for your success.
            </p>
          </div>

          <div className={styles.experienceGrid}>
            {/* Card 1 */}
            <div className={styles.experienceCard}>
              <div className={styles.expIconBoxBlue}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className={styles.expContent}>
                <h4 className={styles.expTitle}>Expert-Led Training</h4>
                <p className={styles.expDesc}>
                  Learn from experienced technology professionals.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.experienceCard}>
              <div className={styles.expIconBoxGreen}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                  <line x1="9" y1="16" x2="13" y2="16" />
                </svg>
              </div>
              <div className={styles.expContent}>
                <h4 className={styles.expTitle}>Guided Practice</h4>
                <p className={styles.expDesc}>
                  Apply each concept through structured practice.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.experienceCard}>
              <div className={styles.expIconBoxPurple}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className={styles.expContent}>
                <h4 className={styles.expTitle}>Real-World Projects</h4>
                <p className={styles.expDesc}>
                  Build portfolio-ready applications.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.experienceCard}>
              <div className={styles.expIconBoxIndigo}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div className={styles.expContent}>
                <h4 className={styles.expTitle}>Career Preparation</h4>
                <p className={styles.expDesc}>
                  Resume, interview and project presentation support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FLEXIBLE LEARNING OPTIONS */}
      <section className={styles.optionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Flexible <span className={styles.highlightText}>Learning Options</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Choose the learning mode that works best for you.
            </p>
          </div>

          <div className={styles.optionsGrid}>
            {/* Option 1: Classroom */}
            <div className={styles.optionCard}>
              <div className={styles.optionIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className={styles.optionContent}>
                <h3 className={styles.optionTitle}>Classroom</h3>
                <p className={styles.optionDesc}>
                  Learn at our training center with in-person faculty interaction.
                </p>
              </div>
            </div>

            {/* Option 2: Live Online */}
            <div className={styles.optionCard}>
              <div className={styles.optionIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className={styles.optionContent}>
                <h3 className={styles.optionTitle}>Live Online</h3>
                <p className={styles.optionDesc}>
                  Join live interactive sessions from anywhere in India.
                </p>
              </div>
            </div>

            {/* Option 3: Hybrid */}
            <div className={styles.optionCard}>
              <div className={styles.optionIconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className={styles.optionContent}>
                <h3 className={styles.optionTitle}>Hybrid</h3>
                <p className={styles.optionDesc}>
                  Combine classroom and online learning for maximum flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRE-FOOTER CTA BANNER */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Ready to Start Your Technology Career?
          </h2>
          <p className={styles.ctaSubtitle}>
            Speak with our training advisor and choose the program that fits your goals.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/contact" className={styles.ctaBtnGreen}>
              <span>Enroll Now</span>
              <span>→</span>
            </Link>
            <Link href="/contact" className={styles.ctaBtnDetails}>
              <span>Request Program Details</span>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
