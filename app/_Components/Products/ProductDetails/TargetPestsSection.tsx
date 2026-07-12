"use client";

import type { Product } from "@/app/_data/products";
import Reveal from "../../Ui/Reveal";
import { Bug, SprayCan } from "lucide-react";

type TargetPestsSectionProps = {
  product: Product;
};

export default function TargetPestsSection({
  product,
}: TargetPestsSectionProps) {
  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Target Pests */}

          <Reveal>
            <div className="h-full rounded-4xl border border-[#E7E1CF] bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF6E8] text-[#6A994E]">
                  <Bug size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6A994E]">
                    Target Pests
                  </p>

                  <h2 className="text-3xl font-bold text-dark-main">
                    الآفات المستهدفة
                  </h2>
                </div>
              </div>

              <h3 className="mb-5 text-2xl font-bold text-dark-main">
                {product.targetPests.name}
              </h3>

              <p className="leading-9 text-[#55615B]">
                {product.targetPests.description}
              </p>
            </div>
          </Reveal>

          {/* Usage */}

          <Reveal delay={150}>
            <div className="h-full rounded-4xl border border-[#E7E1CF] bg-dark-main p-8 text-white shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <SprayCan size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#CFE7C4]">
                    Usage
                  </p>

                  <h2 className="text-3xl font-bold">
                    طريقة الاستخدام
                  </h2>
                </div>
              </div>

              <p className="text-lg leading-9 text-white/90">
                {product.usage}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}