import Reveal from "./Reveal";

type PageHeroProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function PageHero({
  subtitle,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-x-hidden bg-[#F8F4E8] pt-40 pb-10">

      {/* Background Blobs */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#6A994E]/5 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#A3B18A]/10 blur-3xl" />

      {/* Content */}

      <div className="container relative mx-auto px-6 text-center">

        <Reveal>
          <p className="section-subtitle">
            {subtitle}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="page-title">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="page-description">
            {description}
          </p>
        </Reveal>

      </div>

    </section>
  );
}