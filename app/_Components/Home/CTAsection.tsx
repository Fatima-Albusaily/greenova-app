import Link from "next/link";
import Reveal from "../Ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-[#F8F4E8] py-24 relative overflow-hidden">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-main/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#A3B18A]/25 blur-3xl" />
      <div className="container mx-auto px-6 text-center">

        <Reveal>
          <h2 className="card-title">
            هل تبحث عن حلول زراعية أكثر أمانًا وفعالية؟
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="section-description mx-auto mt-6 max-w-3xl text-xl text-desc">
            يسعد فريق <strong className="text-dark-main">GreeNova</strong> بالإجابة عن جميع استفساراتكم
            ومساعدتكم في اختيار الحلول الزراعية المناسبة.
          </p>
        </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                    href="/contact"
                    className="
                        rounded-full
                        bg-main
                        px-12
                        py-4.5

                        font-semibold
                        text-white

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:bg-dark-main
                        hover:shadow-lg
                    "
                    >
                    تواصل معنا
                    </Link>

                    <Link
                    href="/products"
                    className="
                        rounded-full
                        border-2
                        border-[#6A994E]

                        px-8
                        py-4

                        font-semibold
                        text-desc

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:bg-main
                        hover:text-white
                    "
                    >
                    تصفح المنتجات
                    </Link>

                </div>
            </Reveal>
      </div>
      
    </section>
  );
}