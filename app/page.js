import dynamic from 'next/dynamic';

// Use dynamic imports with ssr:false to prevent client components from executing during server-side rendering
const CategoryGrid = dynamic(() => import("@/components/HomeNativeComponents/CategoryGrid"), { ssr: false });
const NewsLetter = dynamic(() => import("@/components/NewsLetter/NewsLetter"), { ssr: false });
const PricingSection = dynamic(() => import("@/components/PaymentsSection/PricingSection"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/HomeNativeComponents/HeroSection"), { ssr: false });
const BlogLatestBlog = dynamic(() => import("@/components/Cards/BlogLatestBlog"), { ssr: false });
const Features = dynamic(() => import("@/components/FeaturesSections/Features"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <HeroSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* latest articles and blog post */}
      <BlogLatestBlog />

      {/* Category Section */}
      <CategoryGrid />

      {/* Features Section */}
      <Features/>

      {/* news letter component  */}
      <NewsLetter />
      
    </div>
  );
}
