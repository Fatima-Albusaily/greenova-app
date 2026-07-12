import Reveal from "../Ui/Reveal";

export default function ClosingSection() {
  return (
    <section className="relative overflow-x-hidden bg-[#F8F4E8] pb-28">

      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(#355E3B 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">

        <Reveal>

          <div className="mx-auto max-w-4xl text-center">

            {/* Divider */}

            <div
              className="
                mx-auto
                h-0.5
                w-28
                rounded-full
                bg-[#6A994E]
              "
            />

            {/* Title */}

            <h2
              className="
                mt-10
                text-4xl
                font-bold
                leading-relaxed
                text-[#355E3B]
              "
            >
              معًا نحو مستقبل
              <br />
              زراعي أكثر استدامة
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-[#6B7566]
              "
            >
              في{" "}
              <span className="font-semibold text-[#355E3B]">
                GreeNova
              </span>{" "}
              نؤمن بأن الابتكار والاستدامة هما الأساس لبناء مستقبل أفضل،
              وأن حماية الإنسان تبدأ من حماية الأرض التي تمنحه الحياة.
            </p>

            {/* Signature */}

            <p
              className="
                mt-14
                text-xl
                font-semibold
                tracking-[0.35em]
                text-[#6A994E]
              "
            >
              GreeNova
            </p>

          </div>

        </Reveal>

      </div>

    </section>
  );
}