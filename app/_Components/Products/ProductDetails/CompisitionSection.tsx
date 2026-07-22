"use client";

import { Product } from "@/app/_data/products";
import Reveal from "../../Ui/Reveal";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

type CompositionSectionProps = {
  product: Product;
};

export default function CompositionSection({
  product,
}: CompositionSectionProps) {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const pro = t.products[product.id]
  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">
        {/* Title */}

        <Reveal>
          <div className="mb-16 text-center">
            <p className={`font-semibold uppercase tracking-[0.2em] text-[#6A994E] ${isRTL? "" : "hidden"}`}>
              Composition
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              {t.productDetails.compisition}
            </h2>
          </div>
        </Reveal>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-2">
          {pro.composition.map((item, index) => (
            <Reveal key={index} delay={index * 70}>
              <div
                className="
                  h-full
                  rounded-[28px]
                  border
                  border-[#E7E1CF]
                  bg-white
                  p-8

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#6A994E]/30
                  hover:shadow-lg
                "
              >
                <span className="text-4xl font-bold text-[#6A994E]/20">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <p className="mt-5 leading-8 text-[#55615B]">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}