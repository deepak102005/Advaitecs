import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './aicareer.module.css';

export const metadata: Metadata = {
  title: 'AI Career Ready Program | Advaitecs',
  description: 'A 16-week intensive program to help you master AI development from fundamentals to real-world applications. Gain practical skills to build and deploy AI solutions.',
};

export default function AICareerReadyPage() {
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
              <span className={styles.heroEyebrow}>AI SKILLS FOR A BRIGHTER TOMORROW</span>
              <h1 className={styles.heroTitle}>
                AI Career Ready Program
                <span className={styles.heroTitleHighlight}>Learn. Build. Innovate. Lead.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                A 16-week intensive program to help you master AI development from fundamentals to real-world applications. Gain the practical skills, tools and confidence to build and deploy AI solutions.
              </p>

              {/* 3 Metric Badges */}
              <div className={styles.heroBadgesRow}>
                <div className={styles.heroBadge}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>16 Weeks</span>
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
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20v-6" />
                  </svg>
                  <span>70% Hands-on Practice</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <Link href="/contact?program=aicareer" className={styles.primaryBtnGreen}>
                  <span>Enroll Now</span>
                  <span>→</span>
                </Link>
                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Talk to a Training Advisor</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/AIcareer.png"
                  alt="AI Career Ready Program - From Ideas to Intelligent Solutions"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. BECOME AN AI-READY PROFESSIONAL
          ========================================= */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Become an <span className={styles.highlightText}>AI-Ready Professional</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Gain practical, end-to-end skills to design, develop and deploy AI solutions for real-world problems.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Card 1: Learn */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Learn</h3>
              <p className={styles.pillarDesc}>
                Python, Java, AI concepts, prompt engineering and industry tools.
              </p>
            </div>

            {/* Card 2: Build */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Build</h3>
              <p className={styles.pillarDesc}>
                Develop AI agents and real-world applications with hands-on projects.
              </p>
            </div>

            {/* Card 3: Apply */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Apply</h3>
              <p className={styles.pillarDesc}>
                Use modern tools, best practices and responsible AI principles.
              </p>
            </div>

            {/* Card 4: Advance */}
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Advance</h3>
              <p className={styles.pillarDesc}>
                Be job-ready for AI roles across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. 16-WEEK LEARNING ROADMAP
          ========================================= */}
      <section className={styles.roadmapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              16-Week Learning <span className={styles.highlightText}>Roadmap</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A structured, hands-on program with real-world projects and expert guidance.
            </p>
          </div>

          <div className={styles.roadmapContainer}>
            {/* Phase 1 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapHeader}>
                <span className={styles.roadmapNumber}>1</span>
                <div className={styles.roadmapHeaderTexts}>
                  <span className={styles.roadmapWeeks}>Weeks 1 – 4</span>
                  <span className={styles.roadmapPhaseName}>Foundations</span>
                </div>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Python programming</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Data structures &amp; algorithms</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>NumPy, Pandas, Matplotlib</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Introduction to AI &amp; ML concepts</span>
                </li>
              </ul>
            </div>

            {/* Separator 1 */}
            <div className={styles.roadmapSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Phase 2 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapHeader}>
                <span className={styles.roadmapNumber}>2</span>
                <div className={styles.roadmapHeaderTexts}>
                  <span className={styles.roadmapWeeks}>Weeks 5 – 8</span>
                  <span className={styles.roadmapPhaseName}>Applied ML</span>
                </div>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Java for AI &amp; enterprise solutions</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>ML model development</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>APIs and model deployment</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Testing and live demonstration</span>
                </li>
              </ul>
            </div>

            {/* Separator 2 */}
            <div className={styles.roadmapSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Phase 3 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapHeader}>
                <span className={styles.roadmapNumber}>3</span>
                <div className={styles.roadmapHeaderTexts}>
                  <span className={styles.roadmapWeeks}>Weeks 9 – 12</span>
                  <span className={styles.roadmapPhaseName}>GenAI Systems</span>
                </div>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Prompt engineering &amp; LLMs</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>AI agents and intelligent systems</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>RAG and advanced prompting</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Safety, bias mitigation and responsible AI</span>
                </li>
              </ul>
            </div>

            {/* Separator 3 */}
            <div className={styles.roadmapSeparator}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Phase 4 */}
            <div className={styles.roadmapCard}>
              <div className={styles.roadmapHeader}>
                <span className={styles.roadmapNumber}>4</span>
                <div className={styles.roadmapHeaderTexts}>
                  <span className={styles.roadmapWeeks}>Weeks 13 – 16</span>
                  <span className={`${styles.roadmapPhaseName} ${styles.capstoneHighlight}`}>Production Capstone</span>
                </div>
              </div>
              <ul className={styles.roadmapList}>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>End-to-end AI application</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Docker and cloud deployment</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>CI/CD, monitoring and runbook</span>
                </li>
                <li className={styles.roadmapItem}>
                  <span className={styles.bulletDot}></span>
                  <span>Final project presentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. TECHNOLOGIES YOU WILL LEARN
          ========================================= */}
      <section className={styles.techSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              Technologies <span className={styles.highlightText}>You Will Learn</span>
            </h2>
          </div>

          <div className={styles.techGrid}>
            {/* 1. Python */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="28" height="28" viewBox="0 0 110 110" fill="none">
                  <path d="M54.1 2C32.1 2 33.4 11.5 33.4 11.5L33.5 21.4H54.4V24.5H23.5C11.5 24.5 2 30.6 2 45.4C2 60.3 9.4 63.6 15.6 63.6H22V54.7C22 44.4 30.6 44.4 30.6 44.4H51.4C60.2 44.4 60.9 36.3 60.9 36.3V11.2C60.9 11.2 62.7 2 54.1 2ZM42.6 9.4C44.7 9.4 46.4 11.1 46.4 13.2C46.4 15.3 44.7 17 42.6 17C40.5 17 38.8 15.3 38.8 13.2C38.8 11.1 40.5 9.4 42.6 9.4Z" fill="#366A96" />
                  <path d="M55.9 108C77.9 108 76.6 98.5 76.6 98.5L76.5 88.6H55.6V85.5H86.5C98.5 85.5 108 79.4 108 64.6C108 49.7 100.6 46.4 94.4 46.4H88V55.3C88 65.6 79.4 65.6 79.4 65.6H58.6C49.8 65.6 49.1 73.7 49.1 73.7V98.8C49.1 98.8 47.3 108 55.9 108ZM67.4 100.6C65.3 100.6 63.6 98.9 63.6 96.8C63.6 94.7 65.3 93 67.4 93C69.5 93 71.2 94.7 71.2 96.8C71.2 98.9 69.5 100.6 67.4 100.6Z" fill="#FFC331" />
                </svg>
              </div>
              <span className={styles.techLabel}>Python</span>
            </div>

            {/* 2. Java */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M8.5 19.5c3.5 1 8 0 9.5-1.5" stroke="#e11d48" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M7 21.5c4.5 1.5 11 0 13-2" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12.5 2c-1.5 2-2 3.5 0 5.5s1.5 3.5-1.5 5.5" stroke="#f97316" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M15.5 3c-1.5 2-2 3.5 0 5.5s1.5 3.5-1.5 5.5" stroke="#ea580c" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M5 16.5c0 0 3 .5 6.5.5s6.5-.5 6.5-.5-1 2-6.5 2-6.5-2-6.5-2z" fill="#0284c7" />
                </svg>
              </div>
              <span className={styles.techLabel}>Java</span>
            </div>

            {/* 3. NumPy */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#013243" fillOpacity="0.1" stroke="#013243" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 2v20" stroke="#013243" strokeWidth="1.4" />
                  <path d="M3 7l9 5 9-5" stroke="#013243" strokeWidth="1.4" />
                  <path d="M3 17l9 5 9-5" stroke="#4dabcf" strokeWidth="1.4" />
                  <circle cx="12" cy="12" r="2.5" fill="#4dabcf" />
                </svg>
              </div>
              <span className={styles.techLabel}>NumPy</span>
            </div>

            {/* 4. Pandas */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="4" height="16" rx="1.5" fill="#150458" />
                  <rect x="10" y="8" width="4" height="12" rx="1.5" fill="#ff4a00" />
                  <rect x="17" y="2" width="4" height="18" rx="1.5" fill="#150458" />
                  <circle cx="12" cy="5" r="2" fill="#ff4a00" />
                </svg>
              </div>
              <span className={styles.techLabel}>Pandas</span>
            </div>

            {/* 5. Matplotlib */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#11557c" strokeWidth="1.5" />
                  <path d="M4 14c3-6 5 4 8-2s5 4 8-1" stroke="#ff7f0e" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 16c3-3 5-1 8-5s5 1 8-3" stroke="#1f77b4" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <span className={styles.techLabel}>Matplotlib</span>
            </div>

            {/* 6. Git */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M2.5 12L12 2.5l9.5 9.5L12 21.5 2.5 12z" fill="#f05032" />
                  <circle cx="8" cy="12" r="2" fill="#ffffff" />
                  <circle cx="15" cy="8" r="2" fill="#ffffff" />
                  <circle cx="15" cy="15" r="2" fill="#ffffff" />
                  <path d="M8 12h3a4 4 0 0 1 4 4v-1" stroke="#ffffff" strokeWidth="1.6" />
                  <path d="M11 12a4 4 0 0 1 4-4" stroke="#ffffff" strokeWidth="1.6" />
                </svg>
              </div>
              <span className={styles.techLabel}>Git</span>
            </div>

            {/* 7. GitHub */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" color="#0f172a">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
              <span className={styles.techLabel}>GitHub</span>
            </div>

            {/* 8. Docker */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
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

            {/* 9. VS Code */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M17.5 2L6 11.5l-3.5-3L1 9.5l4 4-4 4 1.5 1 3.5-3 11.5 9.5 5-2.5V4.5L17.5 2z" fill="#007acc" fillOpacity="0.12" />
                  <path d="M17.5 2L7 11l-4.5-3.5L1 9l4 3.5L1 16l1.5 1.5L7 14l10.5 9 4.5-2V3.5L17.5 2zm1.5 5.5v11L11.5 12.5 19 7.5z" fill="#007acc" />
                </svg>
              </div>
              <span className={styles.techLabel}>VS Code</span>
            </div>

            {/* 10. PyCharm */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#21D789" />
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="#000000" />
                  <path d="M5 6h4.5c1.4 0 2.5 1 2.5 2.2 0 1.3-1.1 2.3-2.5 2.3H7v3.5H5V6zm2 3h2.3c.4 0 .7-.3.7-.7s-.3-.7-.7-.7H7v1.4z" fill="#ffffff" />
                  <path d="M18.5 10.5c-.3-.5-.8-.8-1.5-.8-1.4 0-2.3 1.2-2.3 2.5 0 1.4 1 2.5 2.3 2.5.7 0 1.2-.3 1.5-.8l1.4.9c-.6.8-1.6 1.4-2.9 1.4-2.4 0-4-1.8-4-4s1.6-4 4-4c1.3 0 2.3.6 2.9 1.4l-1.4.9z" fill="#21D789" />
                  <rect x="5" y="16.5" width="6" height="1.8" fill="#21D789" />
                </svg>
              </div>
              <span className={styles.techLabel}>PyCharm</span>
            </div>

            {/* 11. IntelliJ IDEA */}
            <div className={styles.techCard}>
              <div className={styles.techIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="ijGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FE2857" />
                      <stop offset="50%" stopColor="#087CFA" />
                      <stop offset="100%" stopColor="#FF318C" />
                    </linearGradient>
                  </defs>
                  <rect width="24" height="24" rx="4" fill="url(#ijGrad)" />
                  <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#000000" />
                  <path d="M6 6h2v9H6V6z" fill="#ffffff" />
                  <path d="M10 6h2v6.5c0 1.4-.9 2.5-2.2 2.5-.7 0-1.3-.3-1.6-.7l1.1-1.3c.1.2.3.4.5.4.4 0 .7-.3.7-.9V6z" fill="#ffffff" />
                  <rect x="6" y="16" width="6" height="1.8" fill="#FE2857" />
                </svg>
              </div>
              <span className={styles.techLabel}>IntelliJ IDEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. UPCOMING BATCHES & WEEKDAY SCHEDULE
          ========================================= */}
      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.scheduleGrid}>
            {/* Left Card: Upcoming Batches */}
            <div className={styles.batchesCard}>
              <div>
                <h3 className={styles.cardHeaderTitle}>Upcoming Batches</h3>
                <p className={styles.cardHeaderSubtitle}>Limited seats for focused learning</p>
              </div>

              <div className={styles.batchesPillsRow}>
                {/* Batch 1 */}
                <div className={styles.batchPill}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className={styles.batchDateText}>Dec 1, 2026</span>
                  <span className={styles.batchTypeText}>(Weekday Batch)</span>
                </div>

                {/* Batch 2 */}
                <div className={styles.batchPill}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className={styles.batchDateText}>Apr 1, 2027</span>
                  <span className={styles.batchTypeText}>(Weekday Batch)</span>
                </div>

                {/* Batch 3 */}
                <div className={styles.batchPill}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className={styles.batchDateText}>Aug 1, 2027</span>
                  <span className={styles.batchTypeText}>(Weekday Batch)</span>
                </div>
              </div>
            </div>

            {/* Right Card: Weekday Schedule */}
            <div className={styles.scheduleCard}>
              <div className={styles.scheduleCardHeader}>
                <svg className={styles.scheduleIconGreen} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className={styles.scheduleTitle}>Weekday Schedule</h3>
              </div>

              <ul className={styles.scheduleList}>
                <li className={styles.scheduleItem}>
                  <span className={styles.scheduleBullet}></span>
                  <span>Monday – Friday</span>
                </li>
                <li className={styles.scheduleItem}>
                  <span className={styles.scheduleBullet}></span>
                  <span>9:00 AM – 12:00 PM (3 hours per day)</span>
                </li>
                <li className={styles.scheduleItem}>
                  <span className={styles.scheduleBullet}></span>
                  <span>Instructor-led and guided practice</span>
                </li>
                <li className={styles.scheduleItem}>
                  <span className={styles.scheduleBullet}></span>
                  <span>Additional capstone and project work</span>
                </li>
                <li className={styles.scheduleItem}>
                  <span className={styles.scheduleBullet}></span>
                  <span>Total Duration: 16 weeks (Approximately 400 hours)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. PROGRAM HIGHLIGHTS & CAREER OPPORTUNITIES
          ========================================= */}
      <section className={styles.twoColSection}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            {/* Left Card: Program Highlights */}
            <div className={styles.cardBox}>
              <h3 className={styles.cardHeaderTitle}>Program Highlights</h3>
              
              <div className={styles.highlightsListGrid}>
                {/* Column 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Hands-on, project-based learning</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Real-world applications and use cases</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Expert mentors and industry guidance</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Access to complete learning resources</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Collaborative learning environment</span>
                  </div>
                </div>

                {/* Column 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>AI agents and generative AI</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Prompt engineering and LLMs</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Docker and cloud deployment</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Capstone project and demo day</span>
                  </div>
                  <div className={styles.highlightCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Career support and interview preparation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Career Opportunities */}
            <div className={styles.cardBox}>
              <div>
                <h3 className={styles.cardHeaderTitle}>Career Opportunities</h3>
                <p className={styles.cardHeaderSubtitle}>Launch your career as an AI professional with in-demand skills.</p>
              </div>

              {/* 5 Career Role Pills */}
              <div className={styles.careerRolesRow}>
                {/* 1. AI Engineer */}
                <div className={styles.rolePill}>
                  <div className={styles.roleIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-2 3.5V14a4 4 0 0 0 2 3.5V19a3 3 0 0 0 6 0v-1.5a4 4 0 0 0 2-3.5v-3.5A4 4 0 0 0 14 7V6a4 4 0 0 0-4-4h2z" />
                      <circle cx="9" cy="12" r="1" fill="currentColor" />
                      <circle cx="15" cy="12" r="1" fill="currentColor" />
                      <path d="M12 9v6" />
                    </svg>
                  </div>
                  <span className={styles.roleName}>AI Engineer</span>
                </div>

                {/* 2. Machine Learning Engineer */}
                <div className={styles.rolePill}>
                  <div className={styles.roleIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className={styles.roleName}>Machine Learning Engineer</span>
                </div>

                {/* 3. Prompt Engineer */}
                <div className={styles.rolePill}>
                  <div className={styles.roleIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <line x1="8" y1="9" x2="12" y2="9" />
                      <line x1="8" y1="13" x2="16" y2="13" />
                    </svg>
                  </div>
                  <span className={styles.roleName}>Prompt Engineer</span>
                </div>

                {/* 4. Data Scientist */}
                <div className={styles.rolePill}>
                  <div className={styles.roleIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                      <line x1="2" y1="20" x2="22" y2="20" />
                    </svg>
                  </div>
                  <span className={styles.roleName}>Data Scientist</span>
                </div>

                {/* 5. AI Solutions Developer */}
                <div className={styles.rolePill}>
                  <div className={styles.roleIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="5" r="3" />
                      <circle cx="6" cy="19" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="m9.5 7.5-2 9" />
                      <path d="m14.5 7.5 2 9" />
                      <path d="M9 19h6" />
                    </svg>
                  </div>
                  <span className={styles.roleName}>AI Solutions Developer</span>
                </div>
              </div>

              {/* Career Preparation Banner */}
              <div className={styles.careerPrepBanner}>
                <div className={styles.prepIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="13" y2="16" />
                  </svg>
                </div>
                <div className={styles.prepTexts}>
                  <span className={styles.prepTitle}>Career Preparation</span>
                  <span className={styles.prepDetails}>
                    Resume review &bull; Mock interviews &bull; GitHub portfolio &bull; Placement support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          7. WHO SHOULD ENROLL? & PREREQUISITES
          ========================================= */}
      <section className={styles.twoColSection}>
        <div className={styles.container}>
          <div className={styles.twoColGrid}>
            {/* Left Card: Who Should Enroll? */}
            <div className={styles.cardBox}>
              <h3 className={styles.cardHeaderTitle}>Who Should Enroll?</h3>
              <div className={styles.enrollList}>
                <div className={styles.enrollItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Students looking to build a career in AI and technology</span>
                </div>

                <div className={styles.enrollItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Educators who want to integrate AI into teaching and research</span>
                </div>

                <div className={styles.enrollItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Working professionals seeking to upskill or transition to AI roles</span>
                </div>

                <div className={styles.enrollItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Anyone passionate about building real-world AI solutions</span>
                </div>
              </div>
            </div>

            {/* Right Card: Prerequisites */}
            <div className={styles.cardBox}>
              <div className={styles.prereqHeader}>
                <svg className={styles.prereqIconBlue} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <h3 className={styles.cardHeaderTitle} style={{ margin: 0 }}>Prerequisites</h3>
              </div>
              <p className={styles.prereqText}>
                Basic programming knowledge (any language), logical thinking, and a strong interest in AI. Prior experience with Python or Java is helpful but not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. PRE-FOOTER CTA
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Your AI Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join the next batch and gain the skills to build a smarter tomorrow.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact?program=aicareer" className={styles.primaryBtnGreen}>
                <span>Enroll Now</span>
                <span>→</span>
              </Link>
              <Link href="/contact" className={styles.ctaBtnOutline}>
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>

            <div className={styles.ctaContactRow}>
              <a href="tel:+919603992299" className={styles.contactItemLink}>
                <span>📞</span>
                <span>+91 96039 92299</span>
              </a>
              <span>•</span>
              <a href="mailto:support@advaitecs.com" className={styles.contactItemLink}>
                <span>✉</span>
                <span>support@advaitecs.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
