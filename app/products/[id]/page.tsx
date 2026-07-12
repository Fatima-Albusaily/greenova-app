import { notFound } from "next/navigation";

import { getProductById } from "@/app/_data/products";
import ProductHero from "@/app/_Components/Products/ProductDetails/ProductHero";
import EffectsSection from "@/app/_Components/Products/ProductDetails/EffectSection";
import CompositionSection from "@/app/_Components/Products/ProductDetails/CopmisitionSection";
import ModeOfActionSection from "@/app/_Components/Products/ProductDetails/ModeOfActionSection";
import TargetPestsSection from "@/app/_Components/Products/ProductDetails/TargetPestsSection";
import ProductInfoSection from "@/app/_Components/Products/ProductDetails/ProductInfoSection";
import RelatedProductsSection from "@/app/_Components/Products/ProductDetails/relatedProductsSection";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    return {
      title: "المنتج غير موجود | GreeNova",
    };
  }

  return {
    title: `${product.name} | GreeNova`,
    description: product.shortDescription,
  };
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <>
    <ProductHero product={product} />;
    <EffectsSection product={product} />;
    <CompositionSection product={product} />;
    <ModeOfActionSection product={product} />;
    <TargetPestsSection product={product}/>;
    <ProductInfoSection product={product}/>;
    <RelatedProductsSection product={product}/>;
  </>
  
}