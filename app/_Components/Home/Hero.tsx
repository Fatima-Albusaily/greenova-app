'use client'
import { ArrowLeft, Leaf, MessageCircle } from "lucide-react";
import Link from "next/link";
import Reveal from "../Ui/Reveal";

export default function Hero() {

  return (
    <section id="hero">
      <div className="bg-[url(/hero3.png)] pb-20 bg-center md:bg-cover flex justify-center items-center relative h-screen w-full">
        <div className="contain flex flex-col justify-between mt-[3%] sm:m-0 h-1/2 w-full px-10 items-center">
          <p className="company-name">
            GreeNova
          </p>
          <Reveal>
            <h1 className="hero-title text-center text-h text-5xl/16 font-bold">
            صحة الإنسان
            <br />
            تبدأ من صحة الأرض
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
                leading-9
                text-[#5E6A5E]
                font-normal
                text-center
                mb-10
              "
            >
            لأنك لا تستحق أن تختار بين الفعالية والسلامة، نقدم حلولًا زراعية تحقق الاثنين معًا.
            </p>
          </Reveal>
          <div className="buttons flex gap-5">
            <Link href={'/contact'}>
              <button className="
                      px-9
                      md:px-12
                      py-4.5
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
                        تواصل معنا
                      <MessageCircle size={20} className="hidden md:block" />
              </button>
            </Link>
            <Link href={'/about'}>
              <button className="
                        md:px-6
                        px-5
                        py-4
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
                          تعرف على المزيد
                          <ArrowLeft
                            size={20}
                            className="hidden md:block transition-transform duration-300 group-hover:-translate-x-1"
                          />
              </button>
            </Link>
            </div>
        </div>
        
      </div>
    </section>
    
  )
}
