import CTASection from "./_Components/Home/CTAsection";
import FeaturedProductsSection from "./_Components/Home/FeaturedComponentsSection";
import Hero from "./_Components/Home/Hero";
import Whyus from "./_Components/Home/Whyus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GreeNova | للزراعة العضوية",
  description:
    "جرينوفا شركة متخصصة في تطوير حلول الزراعة العضوية والأسمدة والمبيدات الحيوية باستخدام أحدث التقنيات لتحقيق زراعة مستدامة.",
};


export default function Home() {
  return (
   <>
    <Hero></Hero>
    <Whyus></Whyus>
    <FeaturedProductsSection></FeaturedProductsSection>
    <CTASection></CTASection>
    {/* <GoalsSection></GoalsSection> */}
   </>
  );
}
