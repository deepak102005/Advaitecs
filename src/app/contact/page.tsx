'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What training programs do you offer?',
    answer:
      'We offer intensive, industry-focused programs including our 16-Week AI Career Ready Program and 12-Week Full Stack Web & Mobile Development Program, designed for students, graduates, and professionals.',
  },
  {
    question: 'Do you offer online classes?',
    answer:
      'Yes, we offer both live instructor-led online sessions and hybrid modes for select programs, complete with hands-on labs, guided mentoring, and project reviews.',
  },
  {
    question: 'How can schools partner with Advaitecs?',
    answer:
      'Schools can partner with us to implement SkaiMitra, our AI-powered learning management platform, or request customized workshops and STEM training modules for teachers and students.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Our primary office is located in Vijayawada (Head Office), Andhra Pradesh, India. We also provide hybrid delivery and corporate training across multiple institutional campuses.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can reach our dedicated support team via email at support@advaitecs.com or call us directly at +91 96039 92299 during business hours (Monday to Saturday, 9:00 AM – 6:00 PM IST).',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      });
    }, 4000);
  };

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
              <span className={styles.heroEyebrow}>LET&apos;S CONNECT</span>
              <h1 className={styles.heroTitle}>
                Contact Us
                <span className={styles.heroTitleHighlight}>We&apos;re here to help.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Have questions about our training programs, SkaiMitra, workshops or partnerships? Reach out to us, and our team will get back to you soon.
              </p>

              {/* 4 Feature Circles */}
              <div className={styles.heroFeaturesRow}>
                {/* 1. Ask Questions */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Ask Questions</span>
                </div>

                {/* 2. Get Program Details */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Get Program Details</span>
                </div>

                {/* 3. Explore Partnerships */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Explore Partnerships</span>
                </div>

                {/* 4. Find the Right Solution */}
                <div className={styles.heroFeatureItem}>
                  <div className={styles.heroFeatureIconCircle}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="4" r="2" />
                      <circle cx="12" cy="20" r="2" />
                      <circle cx="4" cy="12" r="2" />
                      <circle cx="20" cy="12" r="2" />
                      <line x1="12" y1="6" x2="12" y2="9" />
                      <line x1="12" y1="15" x2="12" y2="18" />
                      <line x1="6" y1="12" x2="9" y2="12" />
                      <line x1="15" y1="12" x2="18" y2="12" />
                    </svg>
                  </div>
                  <span className={styles.heroFeatureLabel}>Find the Right Solution</span>
                </div>
              </div>
            </div>

            {/* Right Media */}
            <div className={styles.heroMedia}>
              <div className={styles.heroImgWrapper}>
                <img
                  src="/images/contacus.png"
                  alt="Advaitecs Support - Training Minds Innovating Solutions"
                  className={styles.heroImg}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. GET IN TOUCH (Form & Contact Info Card)
          ========================================= */}
      <section id="get-in-touch" className={styles.getInTouchSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionSubtitle}>
              Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className={styles.getInTouchGrid}>
            {/* Left Card: Contact Form */}
            <div className={styles.formCard}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Thank You for Reaching Out!
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.formGrid}>
                  {/* Row 1: Full Name & Email */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Full Name <span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Email Address <span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Inquiry Type */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Inquiry Type <span className={styles.requiredAsterisk}>*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className={styles.formSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="training">Training Programs</option>
                        <option value="skaimitra">SkaiMitra for Schools</option>
                        <option value="workshops">Workshops &amp; Corporate Training</option>
                        <option value="partnerships">Partnerships &amp; Collaborations</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Message <span className={styles.requiredAsterisk}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you...."
                      required
                      className={styles.formTextarea}
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={styles.formSubmitBtn}>
                    <span>Send Message</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Card: Contact Information */}
            <div className={styles.contactInfoCard}>
              <div>
                <h3 className={styles.contactInfoTitle}>Contact Information</h3>
                <p className={styles.contactInfoSubtitle}>
                  Reach out to us directly through any of the following channels.
                </p>

                <div className={styles.contactDetailsList}>
                  {/* Phone */}
                  <div className={styles.contactDetailItem}>
                    <div className={styles.detailIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className={styles.detailTexts}>
                      <span className={styles.detailLabel}>Phone</span>
                      <a href="tel:+919603992299" className={styles.detailLink}>
                        +91 96039 92299
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.contactDetailItem}>
                    <div className={styles.detailIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className={styles.detailTexts}>
                      <span className={styles.detailLabel}>Email</span>
                      <a href="mailto:support@advaitecs.com" className={styles.detailLink}>
                        support@advaitecs.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className={styles.contactDetailItem}>
                    <div className={styles.detailIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className={styles.detailTexts}>
                      <span className={styles.detailLabel}>Address</span>
                      <span className={styles.detailValue}>
                        Advaitecs Private Limited<br />
                        Vijayawada (Head Office), Andhra Pradesh, India
                      </span>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className={styles.contactDetailItem}>
                    <div className={styles.detailIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className={styles.detailTexts}>
                      <span className={styles.detailLabel}>Business Hours</span>
                      <span className={styles.detailValue}>
                        Mon – Sat: 9:00 AM – 6:00 PM<br />
                        (India Standard Time)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className={styles.followUsSection}>
                <h4 className={styles.followUsTitle}>Follow Us</h4>
                <p className={styles.followUsSubtitle}>
                  Stay updated with our latest news, programs and events.
                </p>

                <div className={styles.socialIconsRow}>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={styles.socialIconBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className={styles.socialIconBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42c-.86.23-1.53.91-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.54 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={styles.socialIconBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className={styles.socialIconBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. HOW CAN WE HELP YOU? (4 Cards Grid)
          ========================================= */}
      <section className={styles.helpSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionTitle}>
              How Can <span className={styles.highlightText}>We Help You?</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Whether you&apos;re a student, educator, school or enterprise, we&apos;re ready to support you.
            </p>
          </div>

          <div className={styles.helpCardsGrid}>
            {/* Card 1: Training Programs */}
            <div className={styles.helpCard}>
              <div className={styles.helpIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <h3 className={styles.helpCardTitle}>Training Programs</h3>
              <p className={styles.helpCardDesc}>
                Get details about upcoming batches, curriculum and fees.
              </p>
              <Link href="/Trainingprogarm" className={styles.helpCardLink}>
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>

            {/* Card 2: SkaiMitra for Schools */}
            <div className={styles.helpCard}>
              <div className={styles.helpIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2z" />
                  <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                </svg>
              </div>
              <h3 className={styles.helpCardTitle}>SkaiMitra for Schools</h3>
              <p className={styles.helpCardDesc}>
                Explore how SkaiMitra can transform learning at your school.
              </p>
              <Link href="/Skaimitra" className={styles.helpCardLink}>
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>

            {/* Card 3: Workshops & Corporate Training */}
            <div className={styles.helpCard}>
              <div className={styles.helpIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.helpCardTitle}>Workshops &amp; Corporate Training</h3>
              <p className={styles.helpCardDesc}>
                Customized programs for colleges and enterprises.
              </p>
              <Link href="/workshop" className={styles.helpCardLink}>
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>

            {/* Card 4: Partnerships & Collaborations */}
            <div className={styles.helpCard}>
              <div className={styles.helpIconBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
              <h3 className={styles.helpCardTitle}>Partnerships &amp; Collaborations</h3>
              <p className={styles.helpCardDesc}>
                Let&apos;s work together to create greater impact.
              </p>
              <Link href="#get-in-touch" className={styles.helpCardLink}>
                <span>Learn More</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. OUR LOCATION & FREQUENTLY ASKED QUESTIONS
          ========================================= */}
      <section className={styles.locationFaqSection}>
        <div className={styles.container}>
          <div className={styles.locationFaqGrid}>
            {/* Left Card: Our Location */}
            <div className={styles.colBox}>
              <h3 className={styles.colHeaderTitle}>Our Location</h3>
              <p className={styles.colHeaderSubtitle}>
                Visit us at our office in Vijayawada, Andhra Pradesh.
              </p>

              <div className={styles.mapContainer}>
                {/* SVG Visual Map of Vijayawada Area */}
                <svg className={styles.mapSvgWrapper} viewBox="0 0 500 280" preserveAspectRatio="xMidYMid slice">
                  {/* Background map land */}
                  <rect width="500" height="280" fill="#f4f3f0" />

                  {/* Krishna River with curve */}
                  <path
                    d="M-20 180 Q100 230 220 270 L240 300 L-20 300 Z"
                    fill="#aadaff"
                  />
                  <path
                    d="M-20 160 Q120 210 240 285 L-20 285 Z"
                    fill="#90caff"
                    opacity="0.6"
                  />
                  <text x="100" y="240" fill="#3b82f6" fontSize="12" fontStyle="italic" fontWeight="500" transform="rotate(18, 100, 240)">
                    Krishna River
                  </text>

                  {/* Roads network */}
                  {/* Main highway */}
                  <path d="M-10 100 L510 120" stroke="#ffffff" strokeWidth="9" />
                  <path d="M-10 100 L510 120" stroke="#fcd34d" strokeWidth="4" />

                  {/* Secondary roads */}
                  <path d="M80 -10 L140 280" stroke="#ffffff" strokeWidth="6" />
                  <path d="M220 -10 L200 280" stroke="#ffffff" strokeWidth="6" />
                  <path d="M350 -10 L370 280" stroke="#ffffff" strokeWidth="6" />
                  <path d="M40 40 L450 70" stroke="#ffffff" strokeWidth="5" />
                  <path d="M120 180 L480 200" stroke="#ffffff" strokeWidth="5" />
                  <path d="M180 80 Q260 140 340 160" stroke="#e2e8f0" strokeWidth="3" />

                  {/* Route 305 Badge */}
                  <rect x="420" y="145" width="22" height="14" rx="3" fill="#f59e0b" />
                  <text x="431" y="156" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">305</text>

                  {/* Area Labels */}
                  <text x="140" y="55" fill="#334155" fontSize="15" fontWeight="700">Vijayawada</text>
                  <text x="120" y="75" fill="#64748b" fontSize="12" fontWeight="600">Vijayawada</text>
                  <text x="210" y="185" fill="#64748b" fontSize="10" fontWeight="600" letterSpacing="0.05em">GOVERNORPET</text>
                  <text x="330" y="225" fill="#475569" fontSize="10" fontWeight="600">BENZ CIRCLE</text>
                  <text x="380" y="130" fill="#475569" fontSize="10" fontWeight="600">KANURU</text>
                </svg>

                {/* Prominent Red Pin Marker */}
                <a
                  href="https://maps.google.com/?q=Vijayawada+Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapPinMarker}
                  title="Open in Google Maps"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#dc2626">
                    <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                  <div className={styles.mapPinBadge}>
                    <div>Advaitecs Private Limited</div>
                    <div style={{ color: '#64748b', fontSize: '0.68rem', fontWeight: 500 }}>Vijayawada</div>
                  </div>
                </a>

                {/* Map UI Controls */}
                <div className={styles.mapZoomControls}>
                  <button type="button" className={styles.mapZoomBtn} aria-label="Zoom in">+</button>
                  <button type="button" className={styles.mapZoomBtn} aria-label="Zoom out">&minus;</button>
                </div>

                <div className={styles.googleLogoBadge}>
                  Google
                </div>
              </div>
            </div>

            {/* Right Card: Frequently Asked Questions */}
            <div className={styles.colBox}>
              <h3 className={styles.colHeaderTitle}>Frequently Asked Questions</h3>
              <p className={styles.colHeaderSubtitle}>Quick answers to common questions.</p>

              <div className={styles.faqList}>
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className={styles.faqItem}>
                      <button
                        type="button"
                        className={styles.faqQuestionBtn}
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <svg
                          className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className={styles.faqAnswerBox}>
                          <p style={{ margin: 0 }}>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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
            <h2 className={styles.ctaTitle}>Let&apos;s Build a Brighter Future Together</h2>
            <p className={styles.ctaSubtitle}>
              Have a question or ready to get started? We&apos;d love to hear from you.
            </p>

            <div className={styles.ctaButtonsRow}>
              <Link href="#get-in-touch" className={styles.ctaBtnGreen}>
                <span>Send Us a Message</span>
                <span>→</span>
              </Link>
              <a href="tel:+919603992299" className={styles.ctaBtnOutline}>
                <span>Call Us</span>
                <span>+91 96039 92299</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
