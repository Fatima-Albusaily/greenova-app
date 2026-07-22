import { getLocale } from "@/lib/getLocale";
import CTASection from "./_Components/Home/CTAsection";
import FeaturedProductsSection from "./_Components/Home/FeaturedComponentsSection";
import Hero from "./_Components/Home/Hero";
import Whyus from "./_Components/Home/Whyus";
import type { Metadata } from "next";
import { getTranslations } from "@/lib/getTranslations";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations(locale);

  return {
    title: `${t.hero.meta.title} | GreeNova`,
    description: t.hero.meta.description,
  };
}


export default function Home() {
  return (
   <>
    <Hero></Hero>
    <Whyus></Whyus>
    <FeaturedProductsSection></FeaturedProductsSection>
    <CTASection></CTASection>
   </>
  );
}
