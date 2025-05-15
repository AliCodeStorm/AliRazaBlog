import { Suspense } from 'react';

// Simple loading placeholder
function LoadingContact() {
  return <div className="w-full h-screen animate-pulse bg-gray-100 dark:bg-gray-800"></div>;
}

export default function ContactPage() {
  return (
    <Suspense fallback={<LoadingContact />}>
      {/* @ts-expect-error Async Server Component */}
      <ContactContentWrapper />
    </Suspense>
  );
}

// Server component wrapper for the client component
async function ContactContentWrapper() {
  // Dynamically import the client component
  const ContactSection = (await import('./ContactClientComponent')).default;
  return <ContactSection />;
}
