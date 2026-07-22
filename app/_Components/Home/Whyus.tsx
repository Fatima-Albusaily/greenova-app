"use client";

import { Handshake, ShieldCheck, Sprout, Zap } from 'lucide-react'
import Reveal from '../Ui/Reveal'
import WhyUsCard from '../Ui/WhyUsCard'
import { useTranslation } from '@/app/_Hooks/hooks/useTranslation';

export default function Whyus() {
    const t = useTranslation();
    
  return (
    <section className="py-28 bg-mainbg">

        <div className="container mx-auto px-6">

            <div className="text-center">

                <p className="section-subtitle">
                    {t.whyUs.subtitle}
                </p>

                <Reveal>
                    <h2 className="mt-4 text-5xl font-bold text-desc leading-tight">
                        {t.whyUs.title}
                    </h2>
                </Reveal>

                <Reveal delay={150}>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#6B7566] section-description">
                        {t.whyUs.description}
                    </p>
                </Reveal>

            </div>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 my-28 px-5 md:px-20">

            <Reveal delay={200}>
                <WhyUsCard
                href="/products"
                icon={ShieldCheck}
                title={t.whyUs.cards.safety.title}
                description={t.whyUs.cards.safety.description}
                />
            </Reveal>

            <Reveal delay={350}>
                <WhyUsCard
                href="/products"
                icon={Sprout}
                title={t.whyUs.cards.sustainability.title}
                description={t.whyUs.cards.sustainability.description}
                />
            </Reveal>

            <Reveal delay={500}>
                <WhyUsCard
                href="/products"
                icon={Zap}
                title={t.whyUs.cards.efficiency.title}
                description={t.whyUs.cards.efficiency.description}
                />
            </Reveal>

            <Reveal delay={650}>
                <WhyUsCard
                href="/products"
                icon={Handshake}
                title={t.whyUs.cards.support.title}
                description={t.whyUs.cards.support.description}
                />
            </Reveal>

        </div>
    </section>
  )
}
