import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
