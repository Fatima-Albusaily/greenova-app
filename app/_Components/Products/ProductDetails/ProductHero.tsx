"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../Ui/Reveal";
import { Product } from "@/app/_data/products";

type ProductHeroProps = {
  product: Product;
};

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="bg-mainbg pb-24 pt-44">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <Reveal>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-5 -top-5 h-full w-full rounded-4xl border-2 border-[#6A994E]/30" />

              <div className="relative overflow-hidden rounded-4xl bg-white shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Content */}

          <div>
            <Reveal>
              <span className="inline-flex rounded-full bg-[#EDF6E8] px-5 py-2 text-sm font-semibold text-[#6A994E]">
                {product.category}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-bold leading-tight text-dark-main">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 text-lg leading-9 text-[#6B7566]">
                {product.shortDescription}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href={`https://wa.me/962781882724?text=${
                        `السلام عليكم، أود الاستفسار عن منتج ${product.name}.`}`}
                  className="
                    rounded-full
                    bg-[#6A994E]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-dark-main
                  "
                >
                  اطلب المنتج
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
                    text-dark-main
                    transition
                    hover:bg-[#EDF6E8]
                  "
                >
                  جميع المنتجات
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}