"use client";

import Reveal from "../../Ui/Reveal";
import { FlaskConical } from "lucide-react";

import { Product } from "@/app/_data/products";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

type AnalysisSectionProps = {
  product: Product;
};

export default function AnalysisSection({
  product,
}: AnalysisSectionProps) {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  const analysis = t.products[product.id].analysis;

  if (!analysis) {
    return null;
  }

  const rows = [
    {
      label: t.productDetails.analysis.organicMatter,
      value: analysis.organicMatter,
    },
    {
      label: t.productDetails.analysis.organicCarbon,
      value: analysis.organicCarbon,
    },
    {
      label: t.productDetails.analysis.cnRatio,
      value: analysis.cnRatio,
    },
    {
      label: t.productDetails.analysis.ph,
      value: analysis.ph,
    },
    {
      label: t.productDetails.analysis.nitrogen,
      value: analysis.nitrogen,
    },
    {
      label: t.productDetails.analysis.phosphorus,
      value: analysis.phosphorus,
    },
    {
      label: t.productDetails.analysis.potassium,
      value: analysis.potassium,
    },
    {
      label: t.productDetails.analysis.calcium,
      value: analysis.calcium,
    },
    {
      label: t.productDetails.analysis.magnesium,
      value: analysis.magnesium,
    },
    {
      label: t.productDetails.analysis.sulfur,
      value: analysis.sulfur,
    },
  ].filter((row) => row.value);

  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">

        <Reveal>
          <div className="mb-16 text-center">

            <p
              className={`font-semibold uppercase tracking-[0.2em] text-main ${
                isRTL ? "" : "hidden"
              }`}
            >
              Chemical Analysis
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              {t.productDetails.analysis.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-desc">
              {t.productDetails.analysis.description}
            </p>

          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="
              mx-auto
              max-w-4xl
              overflow-hidden
              rounded-[36px]
              border
              border-[#E7E1CF]
              bg-white
              shadow-sm
            "
          >
            <div className="flex items-center gap-4 border-b border-[#E7E1CF] bg-[#EDF6E8] px-8 py-6">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-main">
                <FlaskConical size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-dark-main">
                  {t.productDetails.analysis.cardTitle}
                </h3>

                
              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead className="bg-mainbg">

                  <tr>

                    <th className="border-b border-[#E7E1CF] px-8 py-5 text-start font-bold text-dark-main">
                      {t.productDetails.analysis.parameter}
                    </th>

                    <th className="border-b border-[#E7E1CF] px-8 py-5 text-end font-bold text-dark-main">
                      {t.productDetails.analysis.value}
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {rows.map((row) => (

                    <tr
                      key={row.label}
                      className="transition-colors hover:bg-[#F8F4E8]"
                    >

                      <td className="border-b border-[#E7E1CF] px-8 py-5 font-medium text-desc">
                        {row.label}
                      </td>

                      <td className="border-b border-[#E7E1CF] px-8 py-5 text-end font-bold text-dark-main">
                        {row.value}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}