"use client";

import Reveal from "../Ui/Reveal";
import { Eye, Trees } from "lucide-react";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";

export default function VisionSection() {
  const t = useTranslation();
  return (
    <section className="py-24 bg-[#F8F4E8]">

      <div className="container mx-auto px-6">

        <Reveal>

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              min-h-175
              flex
              items-center
              justify-center
              px-8
              py-20
            "
          >

            {/* Background */}

            <div
              className="
                absolute
                inset-0
                bg-[url('/about/vision.jpg')]
                bg-cover
                bg-center
                scale-105
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-black/75
              "
            />

            {/* Content */}

            <div
              className="
                relative
                z-10
                mx-auto
                max-w-5xl
                text-center
                text-white
              "
            >
             {/* Background Leaf */}

            <Trees
            className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                h-70
                w-70
                text-white/5
                pointer-events-none
                select-none
            "
            strokeWidth={1}
            />

              {/* Icon */}

              <div
                className="
                  mx-auto
                  flex
                  h-15
                  w-15
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                "
              >

                <Eye size={30} />

              </div>

              {/* Title */}

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                "
              >
                {t.about.vision.title}
              </h2>

              {/* Divider */}

              <div
                className="
                  mx-auto
                  mt-8
                  h-1
                  w-24
                  rounded-full
                  bg-[#A3D977]
                "
              />

              {/* Text */}
              <p
                className="
                  mx-auto
                  mt-12
                  max-w-4xl
                  text-lg
                  leading-[2.3]
                  text-white/90
                "
              >
                {t.about.vision.description}
              </p>

            </div>
          </div>

        </Reveal>

      </div>

    </section>
  );
}