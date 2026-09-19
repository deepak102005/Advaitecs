import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './workshop.module.css';

export const metadata: Metadata = {
  title: 'Workshops & Training | Advaitecs - Learn Today. Build Tomorrow.',
  description: 'Hands-on, practical workshops for schools, colleges and enterprises to build real-world skills in AI, coding and modern technologies.',
};

export default function WorkshopPage() {
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
              <span className={styles.heroEyebrow}>WORKSHOPS &amp; TRAINING</span>
              <h1 className={styles.heroTitle}>
                Learn Today.
                <span className={styles.heroTitleHighlight}>Build Tomorrow.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Hands-on, practical workshops for schools, colleges and enterprises to build real-world skills in AI, coding and modern technologies.
              </p>

              {/* 4 Feature Circles */}
              <div className={styles.heroFeaturesRow}>
                {/* 1. Hands-On Learning */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Hands-On Learning</span>
                </div>

                {/* 2. Industry Experts */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Industry Experts</span>
                </div>

                {/* 3. Real-World Projects */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Real-World Projects</span>
                </div>

                {/* 4. Certificates */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="13" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                      <circle cx="12" cy="11" r="2.5" />
                      <path d="m9 16 3 5 3-5" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Certificates</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.heroButtonGroup}>
                <a href="#workshops-grid" className={styles.primaryBtnGreen}>
                  <span>Explore Workshops</span>
                  <span>→</span>
                </a>
                <Link href="/contact" className={styles.secondaryBtnOutline}>
                  <span>Talk to Our Team</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/workshopsmain.png"
                  alt="Workshops and Training - Learn Practice Build Grow Together"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. WORKSHOPS FOR EVERY LEARNER (3 Cards)
          ========================================= */}
      <section id="workshops-grid" className={styles.workshopsLearnerSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderFlex}>
            <div>
              <h2 className={styles.sectionTitle}>Workshops for Every Learner</h2>
              <p className={styles.sectionSubtitle}>
                Tailored programs for schools, colleges and enterprises to build future-ready skills.
              </p>
            </div>
            <Link href="/Trainingprogarm" className={styles.viewTrainingLink}>
              <span>View Training Programs</span>
              <span>→</span>
            </Link>
          </div>

          <div className={styles.learnerCardsGrid}>
            {/* Card 1: For Schools */}
            <div id="schools" className={styles.learnerCard}>
              <div className={styles.cardImgWrapper}>
                <img
                  src="/images/schools1.png"
                  alt="School students participating in AI & Coding workshops"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.cardIconSquare}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                    </svg>
                  </div>
                  <div className={styles.cardTitleCol}>
                    <h3 className={styles.cardCategory}>For Schools</h3>
                    <span className={styles.cardSubcategory}>AI &amp; Coding Workshops</span>
                  </div>
                </div>

                <p className={styles.cardDesc}>
                  Hands-on AI and coding workshops for Grades 6-12 using SkaiMitra LMS. Inspire creativity, critical thinking and real-world problem solving.
                </p>

                <ul className={styles.cardCheckList}>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Aligned with CBSE/ICSE curricula</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Interactive, age-appropriate content</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Projects and activity-based learning</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Certificates for Trained Teachers</span>
                  </li>
                </ul>

                <Link href="/contact?type=schools" className={styles.cardActionBtn}>
                  <span>View School Workshops</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: For Colleges */}
            <div id="colleges" className={styles.learnerCard}>
              <div className={styles.cardImgWrapper}>
                <img
                  src="/images/colleges1.png"
                  alt="College students engaged in full stack and AI training"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.cardIconSquare}>
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
                  <div className={styles.cardTitleCol}>
                    <h3 className={styles.cardCategory}>For Colleges</h3>
                    <span className={styles.cardSubcategory}>Full Stack, AI &amp; SkaiMitra</span>
                  </div>
                </div>

                <p className={styles.cardDesc}>
                  Practical workshops for engineering and computer science students and faculty. Learn modern technologies and build real-world projects.
                </p>

                <ul className={styles.cardCheckList}>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Full Stack Development</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>AI &amp; Generative AI applications</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Faculty enablement programs</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Projects, assessments and certificates</span>
                  </li>
                </ul>

                <Link href="/contact?type=colleges" className={styles.cardActionBtn}>
                  <span>View College Workshops</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: For Enterprises */}
            <div id="enterprises" className={styles.learnerCard}>
              <div className={styles.cardImgWrapper}>
                <img
                  src="/images/enterprises.png"
                  alt="Enterprise team participating in corporate training session"
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.cardIconSquare}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className={styles.cardTitleCol}>
                    <h3 className={styles.cardCategory}>For Enterprises</h3>
                    <span className={styles.cardSubcategory}>Upskill Teams for the AI Era</span>
                  </div>
                </div>

                <p className={styles.cardDesc}>
                  Customized, industry-focused workshops for professionals and teams. Drive innovation, improve productivity and accelerate digital transformation.
                </p>

                <ul className={styles.cardCheckList}>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Role-based and customized content</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Hands-on, project-based learning</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Flexible delivery (on-site/virtual/hybrid)</span>
                  </li>
                  <li className={styles.cardCheckItem}>
                    <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" fill="#059669" />
                      <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Completion certificates</span>
                  </li>
                </ul>

                <Link href="/contact?type=enterprises" className={styles.cardActionBtn}>
                  <span>View Enterprise Workshops</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. WHY CHOOSE ADVAITECS WORKSHOPS? (6 Cards)
          ========================================= */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Why Choose Advaitecs Workshops?</h2>
            <p className={styles.sectionSubtitle}>
              Practical. Flexible. Impactful.
            </p>
          </div>

          <div className={styles.whyChooseGrid}>
            {/* 1. Industry-Aligned Curriculum */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Industry-Aligned Curriculum</h3>
              <p className={styles.whyChooseDesc}>
                Designed with real-world skills and current industry trends.
              </p>
            </div>

            {/* 2. Expert Instructors */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Expert Instructors</h3>
              <p className={styles.whyChooseDesc}>
                Learn from experienced practitioners and industry experts.
              </p>
            </div>

            {/* 3. Hands-On Practice */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Hands-On Practice</h3>
              <p className={styles.whyChooseDesc}>
                Work on real projects and use cases.
              </p>
            </div>

            {/* 4. Flexible Delivery */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="2" y1="20" x2="22" y2="20" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Flexible Delivery</h3>
              <p className={styles.whyChooseDesc}>
                On-site, virtual or hybrid formats to suit your needs.
              </p>
            </div>

            {/* 5. Certificates */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <circle cx="12" cy="11" r="2.5" />
                  <path d="m9 16 3 5 3-5" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Certificates</h3>
              <p className={styles.whyChooseDesc}>
                Earn certificates to showcase your learning.
              </p>
            </div>

            {/* 6. Measurable Impact */}
            <div className={styles.whyChooseCard}>
              <div className={styles.whyChooseIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.whyChooseTitle}>Measurable Impact</h3>
              <p className={styles.whyChooseDesc}>
                Build skills that drive academic and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. HOW IT WORKS & OUTCOMES & TESTIMONIAL (3 Columns)
          ========================================= */}
      <section className={styles.howAndOutcomesSection}>
        <div className={styles.container}>
          <div className={styles.threeColsGrid}>
            {/* Box 1: How It Works */}
            <div className={styles.boxPanel}>
              <h3 className={styles.panelTitle}>How It Works</h3>
              <div className={styles.howStepsRow}>
                {/* Step 1 */}
                <div className={styles.stepItem}>
                  <div className={styles.stepNumberCircleGreen}>1</div>
                  <span className={styles.stepTitle}>Discuss</span>
                  <span className={styles.stepDesc}>Share your goals and requirements</span>
                </div>

                <div className={styles.stepArrow}>→</div>

                {/* Step 2 */}
                <div className={styles.stepItem}>
                  <div className={styles.stepNumberCircleBlue}>2</div>
                  <span className={styles.stepTitle}>Customize</span>
                  <span className={styles.stepDesc}>We design a program for your needs</span>
                </div>

                <div className={styles.stepArrow}>→</div>

                {/* Step 3 */}
                <div className={styles.stepItem}>
                  <div className={styles.stepNumberCircleBlue}>3</div>
                  <span className={styles.stepTitle}>Conduct</span>
                  <span className={styles.stepDesc}>Interactive, hands-on workshops</span>
                </div>

                <div className={styles.stepArrow}>→</div>

                {/* Step 4 */}
                <div className={styles.stepItem}>
                  <div className={styles.stepNumberCirclePurple}>4</div>
                  <span className={styles.stepTitle}>Achieve</span>
                  <span className={styles.stepDesc}>Build skills, certify and create impact</span>
                </div>
              </div>
            </div>

            {/* Box 2: Outcomes You Can Expect */}
            <div className={styles.boxPanel}>
              <h3 className={styles.panelTitle}>Outcomes You Can Expect</h3>
              <ul className={styles.outcomesList}>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Practical, job-ready skills</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Increased confidence and creativity</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Real-world project experience</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Improved academic and professional performance</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Certificates to showcase learning</span>
                </li>
                <li className={styles.outcomeItem}>
                  <svg className={styles.checkIconCircle} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="#059669" />
                    <polyline points="8 12 11 15 16 9" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Long-term support and learning resources</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Testimonial */}
            <div className={styles.testimonialPanel}>
              <div className={styles.quoteIconLarge}>“</div>
              <p className={styles.testimonialText}>
                The workshop was engaging, practical and exactly what we needed to prepare for the future.
              </p>
              <p className={styles.testimonialAuthor}>– Workshop Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. PRE-FOOTER CTA
          ========================================= */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.container}>
          <div className={styles.ctaBannerContent}>
            <h2 className={styles.ctaTitle}>Ready to Build a Brighter Future?</h2>
            <p className={styles.ctaSubtitle}>
              Let&apos;s create a customized workshop program for your school, college or organization.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="/contact" className={styles.ctaBtnGreen}>
                <span>Request a Workshop</span>
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
