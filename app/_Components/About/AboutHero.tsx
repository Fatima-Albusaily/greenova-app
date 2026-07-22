"use client";

import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import PageHero from "../Ui/PageHero";

export default function AboutHero() {
    const t = useTranslation();
    return (
        <PageHero
            subtitle={t.about.hero.subtitle}
            title={t.about.hero.title}
            description={t.about.hero.description}
          />
    )
}