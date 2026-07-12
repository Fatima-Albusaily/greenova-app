import { Metadata } from 'next';
import ProductsHero from '../_Components/Products/ProductsHero'
import ProductsSection from '../_Components/Products/ProductsSection'

export const metadata: Metadata = {
  title: "منتجاتنا | GreeNova",
  description:
    "اكتشف مجموعة منتجات جرينوفا الزراعية والبيطرية المصممة لتحقيق أعلى كفاءة مع الحفاظ على البيئة.",
};

export default function page() {
  return (
    <>
      <ProductsHero></ProductsHero>
      <ProductsSection></ProductsSection>
    </>
  )
}
