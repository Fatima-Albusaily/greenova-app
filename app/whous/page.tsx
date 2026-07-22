import AboutCardSection from '../_Components/About/AboutCardSection'
import GoalsSection from '../_Components/About/GoalsSection'
import ClosingSection from '../_Components/About/ClosingSection'
import VisionSection from '../_Components/About/VisionSection'
import { Metadata } from 'next'
import AboutHero from '../_Components/About/AboutHero'
import { getLocale } from '@/lib/getLocale'
import { getTranslations } from '@/lib/getTranslations'


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations(locale);

  return {
    title: `${t.about.hero.title} | GreeNova`,
    description: t.about.hero.description,
  };
};

export default function page() {
  return (
    <>
      <AboutHero></AboutHero>
      <AboutCardSection></AboutCardSection>
      <GoalsSection></GoalsSection>
      <VisionSection></VisionSection>
      <ClosingSection></ClosingSection>
    </>
  )
}
