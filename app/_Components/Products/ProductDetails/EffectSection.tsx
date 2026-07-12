"use client";

import { Check } from "lucide-react";

import Reveal from "../../Ui/Reveal";
import type { Product } from "@/app/_data/products";

type EffectsSectionProps = {
  product: Product;
};

export default function EffectsSection({
  product,
}: EffectsSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Title */}

        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#6A994E]">
              How It Works
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              تعمل عن طريق
            </h2>
          </div>
        </Reveal>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2">
          {product.effects.map((effect, index) => (
            <Reveal key={index} delay={index * 80}>
              <div
                className="
                  flex
                  items-start
                  gap-4

                  rounded-3xl
                  border
                  border-[#E7E1CF]
                  bg-[#FCFCF9]
                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#6A994E]/30
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    bg-[#EDF6E8]
                    text-[#6A994E]
                  "
                >
                  <Check size={18} />
                </div>

                <p className="leading-8 text-[#55615B]">
                  {effect}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}