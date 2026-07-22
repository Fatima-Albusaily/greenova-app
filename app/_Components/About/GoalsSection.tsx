"use client";

import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import Reveal from "../Ui/Reveal";
import GoalsMap from "./GoalsMap";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GoalsSection() {
  const t = useTranslation();
  const { isRTL } = useLanguage();
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <Reveal>

            <div className="text-center">

                <p className={`section-subtitle ${isRTL? "" : "hidden" }`}>
                OUR GOALS
                </p>

                <h2 className="section-title mt-5">
                  {t.about.goal.title}
                </h2>

                <p className="page-description">
                  {t.about.goal.description}
                </p>

            </div>

        </Reveal>

        <GoalsMap></GoalsMap>

      </div>
    </section>
  );
}