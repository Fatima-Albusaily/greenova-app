"use client";

import { useMemo, useState } from "react";

import { products } from "@/app/_data/products";

import Reveal from "../Ui/Reveal";
import ProductCard from "../Ui/ProductCard";
import { useTranslation } from "@/app/_Hooks/hooks/useTranslation";

export default function ProductsSection() {
  const t = useTranslation();

  const translatedProducts = products.map((base) => ({
    ...base,
    ...t.products[base.id],
  }));
  const [selectedCategory, setSelectedCategory] = useState<
    "Agricultural" | "Veterinary"
  >("Agricultural");

  const [selectedSubCategory, setSelectedSubCategory] = useState<
  "All" | "Pesticides" | "Fertilizers"
>("All");

  const filteredProducts = useMemo(() => {
    return translatedProducts.filter((product) => {
      if (product.category !== selectedCategory) return false;

      if (selectedCategory === "Veterinary") return true;

      if (selectedSubCategory === "All") return true;

      return product.subCategory === selectedSubCategory;
    });
  }, [
    translatedProducts,
    selectedCategory,
    selectedSubCategory,
  ]);

  return (
    <section className="bg-mainbg py-24">
      <div className="container mx-auto px-6">
        {/* Tabs */}

        <Reveal>
          <div className="mx-auto mb-16 flex w-fit rounded-full bg-white p-2 shadow-lg">
            <button
              onClick={() => {
                setSelectedCategory("Agricultural");
                setSelectedSubCategory("All");
              }}
              className={`
                rounded-full
                px-8
                py-3
                font-semibold
                transition-all
                duration-300

                ${
                  selectedCategory === "Agricultural"
                    ? "bg-[#6A994E] text-white shadow-md"
                    : "text-dark-main hover:bg-[#EDF6E8]"
                }
              `}
            >
              {t.productsPage.categories.agricultural}
            </button>

            <button
              onClick={() => {
                setSelectedCategory("Veterinary");
                setSelectedSubCategory("All");
              }}
              className={`
                rounded-full
                px-8
                py-3
                font-semibold
                transition-all
                duration-300

                ${
                  selectedCategory === "Veterinary"
                    ? "bg-[#6A994E] text-white shadow-md"
                    : "text-dark-main hover:bg-[#EDF6E8]"
                }
              `}
            >
              {t.productsPage.categories.veterinary}
            </button>
          </div>
        </Reveal>

        {selectedCategory === "Agricultural" && (
          <Reveal delay={150}>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
              <div className="text-sm font-semibold uppercase tracking-wider">
                {[
                  {
                    key: "All",
                    label: t.productsPage.subCategories.all,
                  },
                  {
                    key: "Pesticides",
                    label: t.productsPage.subCategories.pesticides,
                  },
                  {
                    key: "Fertilizers",
                    label: t.productsPage.subCategories.fertilizers,
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() =>
                      setSelectedSubCategory(
                        item.key as "All" | "Pesticides" | "Fertilizers"
                      )
                    }
                    className={`
                      px-2
                      mx-1
                      pb-1
                      text-base
                      font-medium
                      border-b-2
                      transition-all
                      ${
                      selectedSubCategory === item.key
                      ? "border-[#6A994E] text-dark-main"
                      : "border-transparent text-[#6B7566] hover:text-dark-main"
                      }
                      `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        )}

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