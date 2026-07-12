"use client";

import type { Product } from "@/app/_data/products";
import Reveal from "../../Ui/Reveal";
import { ArrowDown, Sparkles } from "lucide-react";

type ModeOfActionSectionProps = {
  product: Product;
};

export default function ModeOfActionSection({
  product,
}: ModeOfActionSectionProps) {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Title */}

        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#6A994E]">
              Mode of Action
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              آلية العمل
            </h2>
          </div>
        </Reveal>

        {/* Timeline */}

        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {product.modeOfAction.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-center"
            >
              <Reveal delay={index * 150}>
                <div
                  className="
                    w-full
                    rounded-4xl
                    border
                    border-[#E7E1CF]
                    bg-mainbg
                    p-8
                  "
                >
                  <p className="leading-9 text-[#55615B]">
                    {paragraph}
                  </p>
                </div>
              </Reveal>

              {index !== product.modeOfAction.paragraphs.length - 1 && (
                <ArrowDown
                  className="my-6 text-[#6A994E]"
                  size={28}
                />
              )}
            </div>
          ))}
        </div>

        {/* Result */}

        <Reveal delay={300}>
          <div
            className="
              mx-auto
              mt-16
              max-w-5xl

              rounded-[36px]

              bg-dark-main

              p-10

              text-white

              shadow-xl
            "
          >
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="text-[#CFE7C4]" size={26} />

              <h3 className="text-3xl font-bold">
                النتيجة
              </h3>
            </div>

            <p className="leading-9 text-white/90">
              {product.modeOfAction.result}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}