import Reveal from "../Ui/Reveal";

export default function ProductsHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[url('/hero3.png')]
        bg-cover
        bg-center
        text-center
      "
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-dark-main/70" />

      <div className="relative container mx-auto flex min-h-[55vh] justify-center items-center px-6 pt-36 pb-20">
        <div className="max-w-3xl text-white">
          <Reveal>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#CFE7C4]">
              Products
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-6xl">
              منتجاتنا
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-8 text-lg leading-9 text-white/90">
              نقدم مجموعة متكاملة من الحلول الزراعية والبيطرية المطورة بأحدث
              التقنيات، لتوفير منتجات فعالة وآمنة تدعم الاستدامة وتحافظ على صحة
              الإنسان والحيوان والبيئة.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}