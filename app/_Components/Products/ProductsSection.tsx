"use client";

import { useMemo, useState } from "react";

import { products } from "@/app/_data/products";

import Reveal from "../Ui/Reveal";
import ProductCard from "../Ui/ProductCard";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "زراعي" | "بيطري"
  >("زراعي");

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">
        {/* Tabs */}

        <Reveal>
          <div className="mx-auto mb-16 flex w-fit rounded-full bg-white p-2 shadow-lg">
            <button
              onClick={() => setSelectedCategory("زراعي")}
              className={`
                rounded-full
                px-8
                py-3
                font-semibold
                transition-all
                duration-300

                ${
                  selectedCategory === "زراعي"
                    ? "bg-[#6A994E] text-white shadow-md"
                    : "text-dark-main hover:bg-[#EDF6E8]"
                }
              `}
            >
              المنتجات الزراعية
            </button>

            <button
              onClick={() => setSelectedCategory("بيطري")}
              className={`
                rounded-full
                px-8
                py-3
                font-semibold
                transition-all
                duration-300

                ${
                  selectedCategory === "بيطري"
                    ? "bg-[#6A994E] text-white shadow-md"
                    : "text-dark-main hover:bg-[#EDF6E8]"
                }
              `}
            >
              المنتجات البيطرية
            </button>
          </div>
        </Reveal>

        {/* Products */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}