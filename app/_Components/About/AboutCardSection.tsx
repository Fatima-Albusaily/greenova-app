"use client";

import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import Reveal from "../Ui/Reveal";
import { Leaf } from "lucide-react";

export default function AboutCardSection() {
  const t = useTranslation();
  return (
    <section className="relative overflow-hidden bg-[#F8F4E8] py-24">

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#6A994E]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#A3B18A]/10 blur-3xl" />

      <div className="container relative mx-auto px-6">

        <Reveal>

          <div className="mx-auto max-w-5xl rounded-4xl border border-[#E7E1CF] bg-white p-8 shadow-[0_15px_45px_rgba(53,94,59,.08)] md:p-14">
            <div className="flex justify-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6A994E]/10">
                <Leaf
                  size={30}
                  className="text-[#6A994E]"
                />
              </div>

            </div>

            <h2 className="mt-8 text-center card-title">
              {t.about.aboutStory.title}
            </h2>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-main" />
            
            <div
              className="
                mx-auto
                mt-10
                max-w-3xl
                space-y-6
                text-center
                leading-9
                text-[#6B7566]
              "
            >

              <p>
                {t.about.aboutStory.paragraphs[0]}
              </p>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}