import { Suspense } from 'react';

// Simple loading placeholder
function LoadingAbout() {
  return <div className="w-full h-screen animate-pulse bg-gray-100 dark:bg-gray-800"></div>;
}

export default function AboutPage() {
  return (
    <Suspense fallback={<LoadingAbout />}>
      {/* @ts-expect-error Async Server Component */}
      <AboutContentWrapper />
    </Suspense>
  );
}

// Server component wrapper for the client component
async function AboutContentWrapper() {
  // Dynamically import the client component
  const ModernHeroSection = (await import('./AboutClientComponent')).default;
  return <ModernHeroSection />;
}
