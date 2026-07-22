"use client";

import type { Product } from "@/app/_data/products";
import Reveal from "../../Ui/Reveal";
import {
  ChevronDown,
  ShieldCheck,
  Package,
  FlaskConical,
  Atom,
  Archive,
  FileCheck,
  TriangleAlert,
  Clock3,
  Puzzle,
  SprayCan,
  CalendarClock,
  Beaker,
} from "lucide-react";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

type ProductInfoSectionProps = {
  product: Product;
};

export default function ProductInfoSection({
  product,
}: ProductInfoSectionProps) {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  const pro = t.products[product.id];
  const info = t.productDetails.infoSections;
  const sections = [
  {
    title: info.physicalProperties,
    icon: FlaskConical,
    content: pro.physicalProperties,
  },
  {
    title: info.stability,
    icon: Atom,
    content: pro.stability,
  },
  {
    title: info.toxicity,
    icon: TriangleAlert,
    content: pro.toxicity,
  },
  {
    title: info.safety,
    icon: ShieldCheck,
    content: pro.safety,
  },
  {
    title: info.packaging,
    icon: Package,
    content: pro.packaging,
  },
  {
    title: info.storage,
    icon: Archive,
    content: pro.storage,
  },
  {
    title: info.regulatoryNotes,
    icon: FileCheck,
    content: pro.regulatoryNotes,
  },
  {
    title: info.dosage,
    icon: Beaker,
    content: pro.dosage,
  },
  {
    title: info.applicationFrequency,
    icon: CalendarClock,
    content: pro.applicationFrequency,
  },
  {
    title: info.applicationMethod,
    icon: SprayCan,
    content: pro.applicationMethod,
  },
  {
    title: info.compatibility,
    icon: Puzzle,
    content: pro.compatibility,
  },
  {
    title: info.timing,
    icon: Clock3,
    content: pro.timing,
  },
].filter((section) => {
  if (Array.isArray(section.content)) {
    return section.content.length > 0;
  }

  return Boolean(section.content);
});

  const renderSectionContent = (
    content: (typeof sections)[number]["content"]
  ) => {
    if (Array.isArray(content)) {
      return (
        <ul className="space-y-4">
          {content.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 leading-8 text-[#55615B]"
            >
              <span className="mt-3 h-2 w-2 rounded-full bg-[#6A994E]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (typeof content === "object" && content !== null) {
      return (
        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(content).map(([key, value]) => (
              <tr
                key={key}
                className="border-b border-[#E7E1CF] last:border-none"
              >
                <td className="w-1/3 py-4 font-semibold text-dark-main">
                  {
                    t.productDetails.labels[
                      key as keyof typeof t.productDetails.labels
                    ]
                  }
                </td>

                <td className="py-4 text-[#55615B]">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

  return (
    <p className="leading-8 text-[#55615B]">
      {content}
    </p>
  );
};

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Title */}

        <Reveal>
          <div className="mb-16 text-center">
            <p className={`font-semibold uppercase tracking-[0.2em] text-main ${isRTL? "" : "hidden"}`}>
              Product Information
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              {info.title}
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto max-w-5xl space-y-5">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return(
            <Reveal key={section.title} delay={index * 80}>
              <details
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E7E1CF]
                  bg-mainbg
                "
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    px-8
                    py-6
                  "
                >
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDF6E8] text-[#6A994E]">
                        <Icon size={20} />
                    </div>

                    <h3 className="text-2xl font-bold text-dark-main">
                      {section.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className="
                      transition
                      duration-300
                      group-open:rotate-180
                    "
                  />
                </summary>

                <div className="border-t border-[#E7E1CF] px-8 py-7">
                  <div className="border-t border-[#E7E1CF] px-8 py-7">
                    {renderSectionContent(section.content)}
                  </div>     
                </div>
              </details>
            </Reveal>
          )})}
        </div>
      </div>
    </section>
  );
}