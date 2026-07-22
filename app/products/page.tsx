import { Metadata } from 'next';
import ProductsHero from '../_Components/Products/ProductsHero'
import ProductsSection from '../_Components/Products/ProductsSection'
import { getLocale } from '@/lib/getLocale';
import { getTranslations } from '@/lib/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations(locale);

  return {
    title: `${t.productsPage.hero.title} | GreeNova`,
    description: t.productsPage.hero.description,
  };
}

export default function page() {
  return (
    <>
      <ProductsHero></ProductsHero>
      <ProductsSection></ProductsSection>
    </>
  )
}
