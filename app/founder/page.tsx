import React from 'react'
import FounderSection from '../_Components/Founder/FounderSection'
import PageHero from '../_Components/Ui/PageHero'
import QualificationsSection from '../_Components/Founder/QualificationsSection'
import BioVigorSection from '../_Components/Founder/BioVigorSection'
import FounderMessageSection from '../_Components/Founder/FounderMessageSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "عن المؤسس | GreeNova",
  description:
    "تعرف على الدكتور ممدوح البصيلي، مؤسس ورئيس مجلس إدارة جرينوفا وخبراته في مجال الزراعة العضوية.",
};

export default function page() {
  return (
    <>
        <PageHero
            subtitle="The founder"
            title="عن المؤسس"
            description=""
            />
        <FounderSection></FounderSection>
        <QualificationsSection></QualificationsSection>
        <BioVigorSection></BioVigorSection>
        <FounderMessageSection></FounderMessageSection>
    </>
  )
}
