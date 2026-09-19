import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '6rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginTop: '1rem', marginBottom: '2rem' }}>
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          backgroundColor: '#0066ff',
          color: '#ffffff',
          padding: '0.75rem 1.75rem',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
