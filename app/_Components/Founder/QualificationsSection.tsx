import Reveal from "../Ui/Reveal";
import {
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import {
  qualifications,
  positions,
} from "@/app/_data/founder";

export default function QualificationsSection() {
  return (
    <section className="bg-[#F8F4E8] py-24">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <Reveal>

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[.25em] text-[#6A994E]">
              Qualifications
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              المؤهلات والمناصب
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#6B7566]">
              مسيرة أكاديمية ومهنية امتدت عبر سنوات من التعلم،
              والقيادة، وبناء المشاريع الزراعية المستدامة.
            </p>

          </div>

        </Reveal>

        <div className="mt-20 grid gap-20 lg:grid-cols-2">

          <TimelineColumn
            icon={<GraduationCap size={30} />}
            title="المؤهلات"
            data={qualifications}
          />

          <TimelineColumn
            icon={<BriefcaseBusiness size={30} />}
            title="المناصب"
            data={positions}
          />

        </div>

      </div>

    </section>
  );
}

function TimelineColumn({
  icon,
  title,
  data,
}: {
  icon: React.ReactNode;
  title: string;
  data: {
    title: string;
    place: string;
    date: string;
  }[];
}) {
  return (
    <Reveal>

      <div>

        <div className="mb-12 flex items-center gap-4">

          <div className="text-[#6A994E]">
            {icon}
          </div>

          <h3 className="text-3xl font-bold text-dark-main">
            {title}
          </h3>

        </div>

        <div className="relative">

          <div className="absolute right-2.75 top-0 h-full w-px bg-[#D6DCCF]" />

          <div className="space-y-10">

            {data.map((item) => (

              <div
                key={`${item.title}-${item.date}`}
                className="relative pr-10"
              >

                <span
                  className="
                    absolute
                    right-0
                    top-2
                    h-6
                    w-6
                    rounded-full
                    border-4
                    border-[#F8F4E8]
                    bg-[#6A994E]
                  "
                />

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#6A994E]
                    px-4
                    py-1
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {item.date}
                </span>

                <h4 className="mt-4 text-xl font-bold text-dark-main">
                  {item.title}
                </h4>

                <p className="mt-2 text-[#6B7566]">
                  {item.place}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </Reveal>
  );
}