"use client";

import type { Product } from "@/app/_data/products";
import { products } from "@/app/_data/products";

import Reveal from "../../Ui/Reveal";
import ProductCard from "../../Ui/ProductCard";

type RelatedProductsSectionProps = {
  product: Product;
};

export default function RelatedProductsSection({
  product,
}: RelatedProductsSectionProps) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">

        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#6A994E]">
              Related Products
            </p>

            <h2 className="mt-4 text-5xl font-bold text-dark-main">
              منتجات مشابهة
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#6B7566]">
              اكتشف المزيد من المنتجات التي تنتمي إلى نفس الفئة وقد تكون مناسبة
              لاحتياجاتك.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <ProductCard product={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}