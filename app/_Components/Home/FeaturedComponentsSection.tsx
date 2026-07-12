import { products } from "@/app/_data/products";
import FeaturedProductCard from "../Ui/FeaturedProductCard";
import Reveal from "../Ui/Reveal";
import ProductCard from "../Ui/ProductCard";
import Link from "next/link";

export default function FeaturedProductsSection() {
  const featuredProducts = products.filter(
    (product) => product.isFeatured
  );

  const mainProduct = featuredProducts[0];
  const otherProducts = featuredProducts.slice(1);

  return (
    <section className="bg-mainbg pb-20">
      <div className="container mx-auto px-6">
        {/* Title */}

        <div className="title mb-10 pb-10 text-center">
          <Reveal>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#6A994E]">
              Featured products
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-dark-main">
              منتجاتنا المميزة
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <p className="section-description mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#6B7566]">
              مجموعة مختارة من منتجاتنا الزراعية المصممة لتقديم نتائج فعالة
              مع الحفاظ على صحة الإنسان والبيئة.
            </p>
          </Reveal>
        </div>

        {/* Main Featured Product */}

        {mainProduct && (
          <Reveal>
            <FeaturedProductCard product={mainProduct} />
          </Reveal>
        )}

        {/* Other Featured Products */}

        {otherProducts.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {otherProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 150}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}

        {/* Button */}

        <Reveal delay={300}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/products"
              className="cursor-pointer rounded-full border-2 border-[#6A994E] px-8 py-4 font-semibold text-dark-main transition-all duration-300 hover:bg-[#6A994E] hover:text-white"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}