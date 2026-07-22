"use client";

import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import PageHero from "../Ui/PageHero";

export default function FounderHero() {
    const t = useTranslation();

    return (
        <PageHero
            subtitle="The founder"
            title={t.founder.hero.title}
        />
    )
}