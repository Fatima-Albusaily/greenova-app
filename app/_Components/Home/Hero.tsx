'use client'
import { ArrowLeft, Leaf, MessageCircle } from "lucide-react";
import Link from "next/link";
import Reveal from "../Ui/Reveal";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {

  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section id="hero">
      <div className="bg-[url(/hero3.png)] pb-20 bg-center md:bg-cover flex justify-center items-center relative h-screen w-full">
        <div className="contain flex flex-col justify-between sm:m-0 h-1/2 w-full px-10 items-center">
          <p className="company-name">
            GreeNova
          </p>
          <Reveal>
            <h1 className="hero-title text-center text-h text-3xl/13 md:text-5xl/16 font-bold">
              {t.hero.titleLine1}
            <br />
              {t.hero.titleLine2}
            </h1>
          </Reveal>
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-24 bg-[#A7B89B]" />

            <Leaf
              size={18}
              className="text-[#6A994E] rotate-[-20deg]"
              strokeWidth={1.8}
            />

            <div className="h-px w-24 bg-[#A7B89B]" />
          </div>
          <Reveal delay={150}>
            <p
              className="
                max-w-lg
                md:max-w-3xl
                mx-auto
                text-xl
                leading-6
                text-[#5E6A5E]
                font-normal
                text-center
                mb-10
              "
            >
              {t.hero.description}
            </p>
          </Reveal>
          <div className="buttons flex md:flex-row flex-col gap-5">
            <Link href={'/contact'}>
              <button className="
                      md:px-6
                      px-5
                      py-4
                      rounded-4xl
                      bg-main
                      text-white
                      text-md
                      md:text-lg
                      transition-all
                      duration-300
                      hover:bg-dark-main
                      hover:-translate-y-1
                      hover:shadow-xl
                      cursor-pointer
                      flex
                      items-center
                      gap-4
                      ">
                        {t.hero.contact}
                      <MessageCircle size={20} />
              </button>
            </Link>
            <Link href={'/whous'}>
              <button className="
                        px-4.5
                        py-3.5
                        rounded-4xl
                        border-2
                        border-main
                        text-desc
                        font-semibold
                        text-md
                        md:text-lg
                        transition-all
                        duration-300
                        hover:bg-main
                        hover:text-white
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                        ">
                          {t.hero.learnMore}
                          <ArrowLeft
                            className={isRTL ? "" : "rotate-180"}
                          />
              </button>
            </Link>
            </div>
        </div>
        
      </div>
    </section>
    
  )
}
