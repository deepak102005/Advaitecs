import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './privacypolicy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Advaitecs',
  description: 'Learn how Advaitecs Private Limited collects, uses, protects, and safeguards your personal information and data.',
};

export default function PrivacyPolicyPage() {
  const tableOfContents = [
    { id: 'section-1', number: '1', title: 'Scope and who we are' },
    { id: 'section-2', number: '2', title: 'Information we collect' },
    { id: 'section-3', number: '3', title: 'How we use personal information' },
    { id: 'section-4', number: '4', title: 'Cookies and similar technologies' },
    { id: 'section-5', number: '5', title: 'How we share information' },
    { id: 'section-6', number: '6', title: 'International data transfers' },
    { id: 'section-7', number: '7', title: 'Data retention' },
    { id: 'section-8', number: '8', title: 'Information security' },
    { id: 'section-9', number: '9', title: 'Your privacy rights' },
    { id: 'section-10', number: '10', title: "Children's privacy" },
    { id: 'section-11', number: '11', title: 'Third-party websites and services' },
    { id: 'section-12', number: '12', title: 'Changes to this policy' },
    { id: 'section-13', number: '13', title: 'Contact us' },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* =========================================
          HERO / HEADER SECTION
          ========================================= */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* Brand Wordmark matching exact user image */}
          <div className={styles.brandHeaderRow}>
            <div className={styles.brandWordmark}>
              <span className={styles.brandNavy}>Advai</span>
              <span className={styles.brandGreen}>tecs</span>
            </div>
            <div className={styles.brandTagline}>
              <span>Training Minds</span>
              <span>•</span>
              <span>Innovating Solutions</span>
            </div>
          </div>

          <span className={styles.eyebrow}>PRIVACY AND DATA PROTECTION</span>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>

          <div className={styles.metaRow}>
            <span className={styles.metaBadge}>Last Updated: September 19, 2026</span>
            <span>•</span>
            <span>Version 1.0</span>
            <span>•</span>
            <span>Advaitecs Private Limited</span>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTENT LAYOUT GRID
          ========================================= */}
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Table of Contents Sticky Sidebar */}
          <aside className={styles.tocSidebar}>
            <div className={styles.tocTitle}>Policy Contents</div>
            <nav>
              <ul className={styles.tocList}>
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className={styles.tocLink}>
                      <span className={styles.tocNumber}>{item.number}</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Privacy Policy Content */}
          <main className={styles.contentArea}>
            {/* Introduction & Purpose */}
            <div className={styles.introCard}>
              <p className={styles.introLead}>
                At Advaitecs, we are committed to protecting the privacy, security, and confidentiality of the information entrusted to us by schools, educators, students, parents, and administrators. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use advaitecs.com, enquiries, registrations, training, workshops and related communications.
              </p>
              <h2 className={styles.subheading} style={{ marginTop: '1.25rem' }}>
                Purpose and scope
              </h2>
              <p className={styles.introBody}>
                This Privacy Policy explains how Advaitecs Private Limited collects, uses, shares, retains and protects personal information when individuals visit our website, submit an enquiry, register for training, attend a workshop, apply for a role, or otherwise communicate with us. Separate Advaitecs products, including SkaiMitra, may provide additional privacy notices that apply to those services.
              </p>
              <div className={styles.noticeBanner}>
                <strong>Legal review note:</strong> This document is an operational draft and is not jurisdiction-specific legal advice. Before publication, it should be reviewed against Advaitecs' actual forms, vendors, cookies, payment flows, retention practices, product-specific processing and applicable legal requirements.
              </div>
            </div>

            {/* Section 1: Scope and who we are */}
            <section id="section-1" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>1</div>
                <h2 className={styles.sectionTitle}>Scope and who we are</h2>
              </div>
              <p className={styles.paragraph}>
                Advaitecs Private Limited provides technology training, workshops, consulting and education technology services. This policy applies when you interact directly with Advaitecs as a website visitor, prospective learner, participant, college or enterprise representative, job applicant, partner, vendor or customer.
              </p>
              <p className={styles.paragraph}>
                When a school, college, employer or another organization arranges a program and determines how personal information is used, that organization may have separate privacy responsibilities and its own privacy notice may also apply.
              </p>
            </section>

            {/* Section 2: Information we collect */}
            <section id="section-2" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>2</div>
                <h2 className={styles.sectionTitle}>Information we collect</h2>
              </div>
              <p className={styles.paragraph}>
                We collect information that is reasonably necessary to respond to requests, administer programs, operate our website and services, and meet business or legal obligations.
              </p>

              <h3 className={styles.subheading}>Information you provide</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Contact information:</strong> including name, email address, telephone number and postal address.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Organization information:</strong> including school, college, employer, role and business contact details.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Education and professional information:</strong> relevant to a training enquiry, registration or job application.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Program information:</strong> including training interests, preferred schedules, attendance, assessment results, feedback and certificate details.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Billing and payment-related information:</strong> processed directly or through authorized payment providers.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Communications:</strong> support requests, survey responses and other information you choose to submit.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Recruitment information:</strong> resume, qualifications, employment history and related recruitment information when you apply for a role.</div>
                </li>
              </ul>

              <h3 className={styles.subheading}>Information collected automatically</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Internet Protocol (IP) address, browser type, operating system, device type and approximate location.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Pages viewed, referring pages, links selected, date and time of access, session activity and diagnostic logs.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Cookie identifiers and similar technology data described in Section 4.</div>
                </li>
              </ul>

              <h3 className={styles.subheading}>Information received from other sources</h3>
              <p className={styles.paragraph}>
                We may receive registration, attendance or contact information from a college, employer, school, program sponsor, referral partner or service provider when that party is authorized to provide it. We may also receive information from publicly available professional sources when reasonably relevant to business communications or recruitment.
              </p>
            </section>

            {/* Section 3: How we use personal information */}
            <section id="section-3" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>3</div>
                <h2 className={styles.sectionTitle}>How we use personal information</h2>
              </div>
              <p className={styles.paragraph}>We may use personal information to:</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Respond to enquiries, consultation requests and support needs.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Process training and workshop registrations, payments, attendance and participant communications.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Deliver courses, practical projects, assessments, feedback and certificates.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Manage relationships with colleges, enterprises, schools, partners, vendors and customers.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Personalize and improve programs, website performance and service quality.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Send service notices and, where appropriate, relevant program or event updates.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Protect systems, prevent misuse, investigate security events and maintain records.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Evaluate job applications and communicate about employment opportunities.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Comply with contractual, accounting, regulatory and other legal obligations.</div>
                </li>
              </ul>
              <div className={styles.calloutBox}>
                Depending on the circumstances and applicable law, processing may be based on consent, steps requested before entering a contract, performance of a contract, legitimate business interests, or compliance with legal obligations. Where processing relies on consent, consent may be withdrawn, subject to legal or contractual limits.
              </div>
            </section>

            {/* Section 4: Cookies and similar technologies */}
            <section id="section-4" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>4</div>
                <h2 className={styles.sectionTitle}>Cookies and similar technologies</h2>
              </div>
              <p className={styles.paragraph}>
                We may use cookies and similar technologies to operate the website, remember preferences, understand usage and improve performance. The categories that may be used include:
              </p>

              <div className={styles.tableWrapper}>
                <table className={styles.cookiesTable}>
                  <thead>
                    <tr>
                      <th style={{ width: '22%' }}>Category</th>
                      <th style={{ width: '45%' }}>Purpose</th>
                      <th style={{ width: '33%' }}>User choice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className={styles.categoryTag}>Essential</span>
                      </td>
                      <td>Operate security, navigation and core website functions.</td>
                      <td>Generally required for the website to function.</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.categoryTag}>Preferences</span>
                      </td>
                      <td>Remember settings and choices.</td>
                      <td>May be controlled through browser or consent settings.</td>
                    </tr>
                    <tr>
                      <td>
                        <span className={styles.categoryTag}>Analytics</span>
                      </td>
                      <td>Understand traffic, usage and website performance.</td>
                      <td>Used subject to applicable consent requirements.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className={styles.paragraph}>
                You can manage cookies through your browser settings. Blocking essential cookies may affect website functionality. Third-party services may set their own cookies and handle information under their respective privacy policies.
              </p>
            </section>

            {/* Section 5: How we share information */}
            <section id="section-5" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>5</div>
                <h2 className={styles.sectionTitle}>How we share information</h2>
              </div>
              <p className={styles.paragraph}>We may share information only when reasonably necessary with:</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Authorized personnel:</strong> Advaitecs personnel, instructors and contractors who need the information for their work.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Service providers:</strong> trusted vendors supporting hosting, communications, customer support, payments, analytics and course delivery.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Institutions & sponsors:</strong> colleges, employers or program sponsors when they organize or fund a program and the sharing is disclosed or otherwise authorized.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Legal & compliance:</strong> professional advisers, regulators, law-enforcement bodies or other parties when required by law or reasonably necessary to protect legal rights.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Business transitions:</strong> a successor organization in connection with a merger, reorganization or transfer of business assets, subject to appropriate safeguards.</div>
                </li>
              </ul>
              <div className={styles.calloutBox}>
                <strong>No sale of personal information:</strong> Advaitecs does not sell or rent personal information for third-party advertising. Service providers are expected to use information only for agreed services and subject to applicable contractual obligations.
              </div>
            </section>

            {/* Section 6: International data transfers */}
            <section id="section-6" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>6</div>
                <h2 className={styles.sectionTitle}>International data transfers</h2>
              </div>
              <p className={styles.paragraph}>
                Advaitecs or its service providers may process or store information in countries other than the country where it was collected. Where applicable, we use reasonable contractual, technical and organizational measures designed to protect information during cross-border processing and to address relevant legal requirements.
              </p>
            </section>

            {/* Section 7: Data retention */}
            <section id="section-7" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>7</div>
                <h2 className={styles.sectionTitle}>Data retention</h2>
              </div>
              <p className={styles.paragraph}>
                We retain personal information only for as long as reasonably necessary for the purposes described in this policy. Retention periods depend on the type of record, the relationship involved and applicable contractual, accounting, security and legal requirements.
              </p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Enquiry and business communication records:</strong> retained while the relationship remains active and for a reasonable follow-up period.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Training, attendance, assessment and certificate records:</strong> retained to administer the program and verify completion.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Billing and transaction records:</strong> retained for required accounting, tax and audit periods.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div><strong>Recruitment records:</strong> retained for the relevant hiring process and a reasonable period afterward, subject to applicable law.</div>
                </li>
              </ul>
              <p className={styles.paragraph}>
                When information is no longer required, we take reasonable steps to delete, de-identify or securely dispose of it.
              </p>
            </section>

            {/* Section 8: Information security */}
            <section id="section-8" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>8</div>
                <h2 className={styles.sectionTitle}>Information security</h2>
              </div>
              <p className={styles.paragraph}>
                We use reasonable administrative, technical and organizational measures designed to protect personal information against unauthorized access, loss, alteration or disclosure. Measures may include access controls, secure communications, role-based permissions, monitoring, backups, vendor controls and staff practices appropriate to the nature of the information.
              </p>
              <div className={styles.calloutBox}>
                No method of transmission or storage is completely secure. If you believe information you provided to Advaitecs may have been compromised, please contact us promptly using the details in Section 13.
              </div>
            </section>

            {/* Section 9: Your privacy rights */}
            <section id="section-9" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>9</div>
                <h2 className={styles.sectionTitle}>Your privacy rights</h2>
              </div>
              <p className={styles.paragraph}>Depending on your location and applicable law, you may have rights to:</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Request access to personal information we hold about you.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Request correction of inaccurate or incomplete information.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Request deletion of personal information in qualifying circumstances.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Object to or request restriction of certain processing.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Request a portable copy of certain information.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Withdraw consent where processing relies on consent.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Opt out of non-essential marketing communications.</div>
                </li>
                <li className={styles.bulletItem}>
                  <div className={styles.bulletDot} />
                  <div>Contact the relevant privacy or data-protection authority.</div>
                </li>
              </ul>
              <p className={styles.paragraph}>
                To make a request, use the contact information in Section 13. We may ask for information reasonably necessary to verify your identity, protect other individuals and clarify the request. Certain rights may be limited by applicable law or by records we must retain.
              </p>
            </section>

            {/* Section 10: Children's privacy */}
            <section id="section-10" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>10</div>
                <h2 className={styles.sectionTitle}>Children's privacy</h2>
              </div>
              <p className={styles.paragraph}>
                Advaitecs' general website and professional training registration services are not directed to young children. We do not knowingly collect personal information directly from children through those services without appropriate authorization.
              </p>
              <p className={styles.paragraph}>
                When a school, college or another authorized institution arranges a program for minors, the institution is responsible for providing appropriate notices and obtaining any required parent or guardian permissions. Advaitecs uses student information only for the authorized program and related support, subject to applicable agreements and law. A parent or guardian who believes a child has provided information without appropriate authorization should contact us.
              </p>
            </section>

            {/* Section 11: Third-party websites and services */}
            <section id="section-11" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>11</div>
                <h2 className={styles.sectionTitle}>Third-party websites and services</h2>
              </div>
              <p className={styles.paragraph}>
                Our website or communications may link to third-party websites, payment providers, communication platforms or learning tools. Those services operate under their own privacy policies and terms. Advaitecs is not responsible for third-party privacy practices, and users should review the applicable notice before providing information.
              </p>
            </section>

            {/* Section 12: Changes to this policy */}
            <section id="section-12" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>12</div>
                <h2 className={styles.sectionTitle}>Changes to this policy</h2>
              </div>
              <p className={styles.paragraph}>
                We may update this policy when our services, vendors, technologies or legal obligations change. The latest version will be posted with a revised Last updated date. When appropriate, we may provide additional notice through the website, email or another suitable channel.
              </p>
            </section>

            {/* Section 13: Contact us */}
            <section id="section-13" className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionNumberBadge}>13</div>
                <h2 className={styles.sectionTitle}>Contact us</h2>
              </div>
              <p className={styles.paragraph}>
                For questions, privacy requests or concerns about how personal information is handled, please contact our privacy and data protection team:
              </p>

              <div className={styles.contactCard}>
                <div className={styles.contactGrid}>
                  <div className={styles.contactField}>
                    <span className={styles.contactLabel}>Organization</span>
                    <span className={styles.contactValue}>Advaitecs Private Limited</span>
                  </div>

                  <div className={styles.contactField}>
                    <span className={styles.contactLabel}>Email</span>
                    <a href="mailto:support@advaitecs.com" className={`${styles.contactValue} ${styles.contactLink}`}>
                      support@advaitecs.com
                    </a>
                  </div>

                  <div className={styles.contactField}>
                    <span className={styles.contactLabel}>Telephone</span>
                    <a href="tel:+919603992299" className={`${styles.contactValue} ${styles.contactLink}`}>
                      +91 96039 92299
                    </a>
                  </div>

                  <div className={styles.contactField}>
                    <span className={styles.contactLabel}>Postal Address</span>
                    <span className={styles.contactValue}>
                      Nidamanuru Poranki Main Road, Vijayawada, Andhra Pradesh 521104, India
                    </span>
                  </div>
                </div>

                <div className={styles.supportHoursBanner}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00a651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    <strong>Support hours:</strong> Monday through Friday, 9:00 AM to 5:00 PM India Standard Time (IST).
                  </span>
                </div>
              </div>
            </section>

            {/* Document Version Footer */}
            <div className={styles.versionFooter}>
              <span>Version 1.0</span>
              <span>•</span>
              <span>Effective September 19, 2026</span>
              <span>•</span>
              <span>Advaitecs Private Limited</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
