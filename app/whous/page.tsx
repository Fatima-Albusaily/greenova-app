import PageHero from '../_Components/Ui/PageHero'
import AboutCardSection from '../_Components/About/AboutCardSection'
import GoalsSection from '../_Components/About/GoalsSection'
import ClosingSection from '../_Components/About/ClosingSection'
import VisionSection from '../_Components/About/VisionSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "من نحن | GreeNova",
  description:
    "تعرف على رؤية ورسالة جرينوفا ودورها في تطوير حلول الزراعة العضوية المستدامة.",
};

export default function page() {
  return (
    <>
      <PageHero
        subtitle="About GreeNova"
        title="من نحن"
        description="نطوّر حلولًا زراعية حديثة تجمع بين الابتكار والاستدامة، لنساعد المزارعين على تحقيق أفضل النتائج مع الحفاظ على صحة الإنسان والبيئة."
      />
      <AboutCardSection></AboutCardSection>
      <GoalsSection></GoalsSection>
      <VisionSection></VisionSection>
      <ClosingSection></ClosingSection>
    </>
  )
}
