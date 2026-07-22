"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";

import Reveal from "../Ui/Reveal";
import { bioVigor } from "@/app/_data/founder";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";

export default function BioVigorSection() {
  const t = useTranslation();
  const bioData = t.founder.bioVigor;
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-dark-main via-[#3D6B42] to-[#27462D] py-28">

      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-40 top-20 h-105 w-105 rounded-full border border-white" />
        <div className="absolute -right-20 bottom-0 h-130 w-130 rounded-full border border-white" />
      </div>

      <div className="container relative mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <Reveal>

            <div className="relative mx-auto h-150 w-full max-w-md">

              {/* Background Card */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[92%]
                  w-[92%]
                  rounded-[36px]
                  border
                  border-[#A7D67C]/30
                  bg-[#F8F4E8]/10
                  backdrop-blur-sm
                "
              />

              {/* Image */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-[92%]
                  w-[92%]
                  overflow-hidden
                  rounded-[36px]
                  shadow-[0_30px_70px_rgba(0,0,0,.35)]
                "
              >
                <Image
                  src={bioVigor.image}
                  alt={bioData.title}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </Reveal>

          {/* Content */}

          <Reveal delay={150}>

            <div>

              <p className="font-semibold uppercase tracking-[.3em] text-[#B9E38A]">
                Innovation
              </p>

              <h2 className="mt-5 text-5xl font-bold text-white">
                {bioData.title}
              </h2>

              <div className="mt-6 h-0.5 w-28 rounded-full bg-[#8BC34A]" />

              <div className="mt-10 space-y-6">

                {bioData.description.map((paragraph) => (

                  <div
                    key={paragraph}
                    className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/10
                      p-7
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white/15
                      hover:-translate-y-1
                    "
                  >

                    <div className="mb-5 flex items-center gap-3">

                      <div className="rounded-full bg-[#8BC34A]/20 p-2">

                        <Leaf
                          size={18}
                          className="text-[#B9E38A]"
                        />

                      </div>

                      <span className="font-semibold tracking-wide text-[#D9F2BF]">
                        BioVigor Technology
                      </span>

                    </div>

                    <p className="leading-9 text-gray-100">
                      {paragraph}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}