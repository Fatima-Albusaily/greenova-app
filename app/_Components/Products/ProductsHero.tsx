"use client";

import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import Reveal from "../Ui/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsHero() {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[url('/hero3.png')]
        bg-cover
        bg-center
        text-center
      "
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-dark-main/70" />

      <div className="relative container mx-auto flex min-h-[55vh] justify-center items-center px-6 pt-36 pb-20">
        <div className="max-w-3xl text-white">
          <Reveal>
            <p className={`font-semibold uppercase tracking-[0.2em] text-[#CFE7C4] ${isRTL? "" : "hidden"}`}>
              Products
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-6xl">
              {t.productsPage.hero.title}
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-lg leading-9 text-white/90">
              {t.productsPage.hero.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}