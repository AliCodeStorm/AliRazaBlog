
import CategoryGrid from "@/components/HomeNativeComponents/CategoryGrid";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PricingSection from "@/components/PaymentsSection/PricingSection";
import HeroSection from "@/components/HomeNativeComponents/HeroSection";
import BlogLatestBlog from "@/components/Cards/BlogLatestBlog";
import Features from "@/components/FeaturesSections/Features";

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
