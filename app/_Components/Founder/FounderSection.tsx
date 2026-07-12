import Image from "next/image";
import Reveal from "../Ui/Reveal";
import { founder } from "@/app/_data/founder";

export default function FounderSection() {
  return (
    <section className="bg-white py-24">

      <div className="container mx-auto px-6">

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
                  border-[#D9E3D2]
                  bg-[#F8F4E8]
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
                  shadow-[0_30px_60px_rgba(0,0,0,.15)]
                "
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </Reveal>

          {/* Content */}

          <Reveal delay={150}>

            <div>

              <p className="font-semibold uppercase tracking-[.25em] text-[#6A994E]">
                Founder
              </p>

              <h2 className="mt-5 text-5xl font-bold text-[#355E3B]">
                {founder.name}
              </h2>

              <p className="mt-4 text-xl text-[#6A994E]">
                {founder.position}
              </p>

              <div className="mt-8 h-0.5 w-28 rounded-full bg-[#6A994E]" />

              <div className="mt-8 space-y-6">

                {founder.bio.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-9 text-[#6B7566]"
                  >
                    {paragraph}
                  </p>
                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>
  );
}