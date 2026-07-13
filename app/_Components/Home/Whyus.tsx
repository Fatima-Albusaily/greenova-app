import React from 'react'
import { Handshake, ShieldCheck, Sprout, Zap } from 'lucide-react'
import Reveal from '../Ui/Reveal'
import WhyUsCard from '../Ui/WhyUsCard'

export default function Whyus() {
  return (
    <section className="py-28 bg-mainbg">

        <div className="container mx-auto px-6">

            <div className="text-center">

                <p className="section-subtitle">
                    Why GreeNova
                </p>

                <Reveal>
                    <h2 className="mt-4 text-5xl font-bold text-desc leading-tight">
                    لماذا GreeNova؟
                    </h2>
                </Reveal>

                <Reveal delay={150}>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#6B7566] section-description">
                    نجمع بين الابتكار الزراعي والجودة والالتزام، لنقدم حلولًا
                    حديثة تساعدك على تحقيق أفضل النتائج بطريقة آمنة ومستدامة.
                    </p>
                </Reveal>

            </div>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 my-28 px-5 md:px-20">

            <Reveal delay={200}>
                <WhyUsCard
                href="/products"
                icon={ShieldCheck}
                title="حلول آمنة"
                description="حلول زراعية تراعي صحة الإنسان وتحافظ على البيئة."
                />
            </Reveal>

            <Reveal delay={350}>
                <WhyUsCard
                href="/products"
                icon={Sprout}
                title="استدامة"
                description="نساعدك على بناء مستقبل زراعي أكثر استدامة."
                />
            </Reveal>

            <Reveal delay={500}>
                <WhyUsCard
                href="/products"
                icon={Zap}
                title="نتائج فعّالة"
                description="تقنيات حديثة تحقق أداءً عاليًا وإنتاجية أفضل."
                />
            </Reveal>

            <Reveal delay={650}>
                <WhyUsCard
                href="/products"
                icon={Handshake}
                title="دعم مستمر"
                description="نرافقك في كل خطوة من الاستشارة حتى التنفيذ."
                />
            </Reveal>

        </div>
    </section>
  )
}
