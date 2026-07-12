import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Product } from "@/app/_data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
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
          {product.shortDescription}
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
          <span>التفاصيل</span>

          <ArrowLeft
            size={20}
            className="
              transition-transform
              duration-300

              group-hover:-translate-x-1
            "
          />
        </div>
      </div>
    </Link>
  );
}