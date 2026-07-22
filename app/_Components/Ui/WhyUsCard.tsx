import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type WhyUsCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function WhyUsCard({
  icon: Icon,
  title,
  description,
  href,
}: WhyUsCardProps) {
    const { isRTL } = useLanguage();

  return (
    <Link
      href={href}
      className="
        group
        relative
        block

        rounded-[28px]
        border
        border-[#E7E1CF]

        bg-white

        p-8

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-[#6A994E]/30
        hover:shadow-[0_20px_50px_rgba(53,94,59,.12)]
      "
    >
      {/* Icon */}

      <div
        className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-full

          bg-[#EEF7E8]

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:bg-[#E2F2D8]
        "
      >
        <Icon
          size={30}
          className="
            text-[#6A994E]
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-7
          text-center
          text-2xl
          font-bold
          text-dark-main
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          text-center
          leading-8
          text-[#6B7566]
          line-clamp-2
        "
      >
        {description}
      </p>

      {/* Arrow */}

      <div
        className="
          mt-8

          flex
          justify-end

          opacity-20

          transition-all
          duration-300

          group-hover:opacity-100
        "
      >
        <ArrowLeft
          className={`
            text-[#6A994E]

            transition-transform
            duration-300
            ${isRTL ? "" : "rotate-180"}
            group-hover:-translate-x-1
          `}
          size={22}
        />
      </div>
    </Link>
  );
}