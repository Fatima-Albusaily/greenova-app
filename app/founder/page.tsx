import FounderSection from '../_Components/Founder/FounderSection'
import QualificationsSection from '../_Components/Founder/QualificationsSection'
import BioVigorSection from '../_Components/Founder/BioVigorSection'
import FounderMessageSection from '../_Components/Founder/FounderMessageSection'
import { Metadata } from 'next'
import FounderHero from '../_Components/Founder/FounderHero'
import { getLocale } from '@/lib/getLocale'
import { getTranslations } from '@/lib/getTranslations'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations(locale);

  return {
    title: `${t.founder.hero.title} | GreeNova`,
    description: t.founder.hero.description,
  };
}

export default function page() {
  return (
    <>
        <FounderHero></FounderHero>
        <FounderSection></FounderSection>
        <QualificationsSection></QualificationsSection>
        <BioVigorSection></BioVigorSection>
        <FounderMessageSection></FounderMessageSection>
    </>
  )
}
