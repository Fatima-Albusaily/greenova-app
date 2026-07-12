import Reveal from "../Ui/Reveal";
import { Quote } from "lucide-react";

import { founderMessage } from "@/app/_data/founder";

export default function FounderMessageSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4E8] py-28">

      {/* Background Decoration */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-40 top-10 h-112.5 w-112.5 rounded-full border border-[#355E3B]" />
        <div className="absolute -right-40 bottom-0 h-137.5 w-137.5 rounded-full border border-[#355E3B]" />
      </div>

      <div className="container relative mx-auto px-6">

        {/* Heading */}

        <Reveal>

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[.3em] text-[#6A994E]">
              Founder&apos;s Message
            </p>

            <h2 className="mt-5 text-5xl font-bold text-[#355E3B]">
              {founderMessage.title}
            </h2>

          </div>

        </Reveal>

        {/* Letter */}

        <Reveal delay={150}>

          <div
            className="
              relative
              mx-auto
              mt-20
              max-w-5xl
              rotate-[0.5deg]
              rounded-3xl
              border
              border-[#E8E0D0]
              bg-[#FFFDF8]
              p-8
              shadow-[0_35px_80px_rgba(0,0,0,.12)]
              md:p-12
              lg:p-16
            "
          >

            {/* Quote */}

            <Quote
              size={120}
              className="
                absolute
                left-10
                top-8
                text-[#6A994E]/10
              "
            />

            {/* Green Line */}

            <div className="mb-10 h-0.75 w-28 rounded-full bg-[#6A994E]" />

            {/* Content */}

            <div className="relative z-10 space-y-8">

              {founderMessage.description.map((paragraph) => (

                <p
                  key={paragraph}
                  className="leading-10 text-[#5F695A]"
                >
                  {paragraph}
                </p>

              ))}

            </div>

            {/* Signature */}

            <div className="mt-16 flex justify-end">

              <div className="text-right">

                <div className="mb-4 h-px w-40 bg-[#D8D8D8]" />

                <h3 className="text-2xl md:text-3xl font-bold text-[#355E3B]">
                  {founderMessage.signature.name}
                </h3>

                <p className="mt-2 text-[#6A994E]">
                  {founderMessage.signature.title}
                </p>

              </div>

            </div>

            {/* Bottom Decoration */}

            <div className="mt-14 h-1 w-full rounded-full bg-linear-to-r from-[#6A994E] via-[#8ABF5A] to-[#6A994E]" />

          </div>

        </Reveal>

      </div>

    </section>
  );
}