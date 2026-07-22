import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Product, products } from "@/app/_data/products";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductTranslation } from "@/translations/types";

type ProductCardProps = {
  product: Product;
  content?: ProductTranslation;
};

export default function ProductCard({ product, content }: ProductCardProps) {
  const t = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <Link
      href={`/products/${product.id}`}
      className="
        group
        overflow-hidden
        rounded-[28px]
        bg-white
        border border-[#E7E1CF]
        block

        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-[0_18px_40px_rgba(53,94,59,.12)]
      "
    >
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="
            h-64
            w-full
            object-cover

            transition-transform
            duration-700

            group-hover:scale-105
          "
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold text-dark-main">
          {product.name}
        </h3>

        <p className="mt-4 line-clamp-3 leading-8 text-[#6B7566]">
          {t.products[product.id].shortDescription}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            justify-end
            gap-2

            text-[#6A994E]

            transition-all
            duration-300

            group-hover:gap-3
          "
        >
          <span>{t.featuredProducts.details}</span>

          <ArrowLeft
            size={20}
            className={`
              transition-transform
              duration-300
              ${isRTL ? "" : "rotate-180"}
              group-hover:-translate-x-1
            `}
          />
        </div>
      </div>
    </Link>
  );
}