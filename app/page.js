import { Suspense } from 'react';

// Create simple placeholder loading states
function LoadingSection() {
  return <div className="w-full h-72 animate-pulse bg-gray-100 dark:bg-gray-800"></div>;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Wrap each section in Suspense to defer hydration */}
      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <HeroSectionWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <PricingSectionWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <BlogLatestBlogWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <CategoryGridWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <FeaturesWrapper />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        {/* @ts-expect-error Async Server Component */}
        <NewsLetterWrapper />
      </Suspense>
    </div>
  );
}

// Create separate component wrapper files for each section
async function HeroSectionWrapper() {
  const HeroSection = (await import('@/components/HomeNativeComponents/HeroSection')).default;
  return <HeroSection />;
}

async function PricingSectionWrapper() {
  const PricingSection = (await import('@/components/PaymentsSection/PricingSection')).default;
  return <PricingSection />;
}

async function BlogLatestBlogWrapper() {
  const BlogLatestBlog = (await import('@/components/Cards/BlogLatestBlog')).default;
  return <BlogLatestBlog />;
}

async function CategoryGridWrapper() {
  const CategoryGrid = (await import('@/components/HomeNativeComponents/CategoryGrid')).default;
  return <CategoryGrid />;
}

async function FeaturesWrapper() {
  const Features = (await import('@/components/FeaturesSections/Features')).default;
  return <Features />;
}

async function NewsLetterWrapper() {
  const NewsLetter = (await import('@/components/NewsLetter/NewsLetter')).default;
  return <NewsLetter />;
}
