import { getLocale } from '@/lib/getLocale';
import ContactForm from '../_Components/Contact/ContactForm'
import { Metadata } from 'next';
import { getTranslations } from '@/lib/getTranslations';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations(locale);

  return {
    title: `${t.contact.hero.title} | GreeNova`,
    description: t.contact.hero.description,
  };
}

export default function page() {
  return (
    <div>
      <ContactForm></ContactForm>

    </div>
  )
}
