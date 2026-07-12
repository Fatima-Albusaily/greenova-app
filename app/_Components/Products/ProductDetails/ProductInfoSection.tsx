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
} from "lucide-react";

type ProductInfoSectionProps = {
  product: Product;
};

export default function ProductInfoSection({
  product,
}: ProductInfoSectionProps) {
  const sections = [
  {
    title: "الخواص الفيزيائية",
    icon: FlaskConical,
    content: product.physicalProperties,
  },
  {
    title: "الثبات",
    icon: Atom,
    content: product.stability,
  },
  {
    title: "السمية",
    icon: TriangleAlert,
    content: product.toxicity,
  },
  {
    title: "السلامة",
    icon: ShieldCheck,
    content: product.safety,
  },
  {
    title: "التعبئة",
    icon: Package,
    content: product.packaging,
  },
  {
    title: "التخزين",
    icon: Archive,
    content: product.storage,
  },
  {
    title: "ملاحظات تنظيمية",
    icon: FileCheck,
    content: product.regulatoryNotes,
  },
];


  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Title */}

        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#6A994E]">
              Product Information
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              معلومات إضافية
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
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 leading-8 text-[#55615B]"
                        >
                          <span className="mt-3 h-2 w-2 rounded-full bg-[#6A994E]" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-8 text-[#55615B]">
                      {section.content}
                    </p>
                  )}
                </div>
              </details>
            </Reveal>
          )})}
        </div>
      </div>
    </section>
  );
}