import { Suspense } from 'react';

// Simple loading placeholder
function LoadingPayment() {
  return <div className="w-full h-screen animate-pulse bg-gray-100 dark:bg-gray-800"></div>;
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<LoadingPayment />}>
      {/* @ts-expect-error Async Server Component */}
      <PaymentFormWrapper />
    </Suspense>
  );
}

// Server component wrapper for the client component
async function PaymentFormWrapper() {
  // Dynamically import the client component
  const PaymentForm = (await import('./PaymentClientComponent')).default;
  return <PaymentForm />;
}
