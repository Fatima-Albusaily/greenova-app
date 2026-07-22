"use client";

import Reveal from "../../Ui/Reveal";
import { Bug, Check, ShieldCheck, SprayCan } from "lucide-react";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/app/_data/products";

type TargetPestsSectionProps = {
  product: Product;
};

export default function TargetPestsSection({
  product,
}: TargetPestsSectionProps) {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const pro = t.products[product.id];
  const targetPests = pro.targetPests;
  const usage = pro.usage;

  if (!targetPests && !usage) return null;

  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Target Pests */}

          {targetPests && (
            <Reveal>
            <div className="h-full rounded-4xl border border-[#E7E1CF] bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF6E8] text-[#6A994E]">
                  <Bug size={24} />
                </div>

                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.15em] text-[#6A994E] ${isRTL? "" : "hidden"}`}>
                    Target Pests
                  </p>

                  <h2 className="text-3xl font-bold text-dark-main">
                    {t.productDetails.targetPests}
                  </h2>
                </div>
              </div>

              <h3 className="mb-5 text-2xl font-bold text-dark-main">
                {targetPests.name}
              </h3>

              <p className="leading-9 text-[#55615B]">
                {targetPests.description}
              </p>
            </div>
          </Reveal>
          )}

          {/* Usage */}

          {usage && (
            <Reveal delay={150}>
            <div className="h-full rounded-4xl border border-[#E7E1CF] bg-dark-main p-8 text-white shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <SprayCan size={24} />
                </div>

                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.15em] text-main ${
                        isRTL ? "" : "hidden"
                      }`}>
                    Usage
                  </p>

                  <h2 className="text-3xl font-bold">
                    {t.productDetails.usage}
                  </h2>
                </div>
              </div>

              {typeof usage === "string" ? (
                  <p>{usage}</p>
                ) : (
                  Object.entries(usage).map(([key, value]) => (
                    <div key={key}>
                      <h4>
                        {
                          t.productDetails.usageLabels[
                            key as keyof typeof t.productDetails.usageLabels
                          ]
                        }
                      </h4>
                      <p>{value}</p>
                    </div>
                  ))
                )}
            </div>
          </Reveal>
          )}

          {/* Benefits */}

          {pro.benefits && (
            <Reveal delay={300}>
              <div className="h-full rounded-4xl border border-[#E7E1CF] bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF6E8] text-[#6A994E]">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.15em] text-main ${
                        isRTL ? "" : "hidden"
                      }`}
                    >
                      Benefits
                    </p>

                    <h2 className="text-3xl font-bold text-dark-main">
                      {t.productDetails.infoSections.benefits}
                    </h2>
                  </div>
                </div>

                <ul className="space-y-4 list-none">
                  {pro.benefits.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 leading-8 text-[#55615b]"
                    >
                      <Check />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}