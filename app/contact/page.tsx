import ContactForm from '../_Components/Contact/ContactForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "تواصل معنا | GreeNova",
  description:
    "تواصل مع فريق جرينوفا للاستفسارات وطلبات المنتجات والشراكات.",
};

export default function page() {
  return (
    <div>
      <ContactForm></ContactForm>

    </div>
  )
}
