import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>

      <footer className="bg-desc text-white relative text-center sm:text-start overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#6A994E]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#A3B18A]/10 blur-3xl" />

        <div className="container mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>

              <h3 className="text-3xl font-bold">
                GreeNova
              </h3>

              <div className="mt-5 h-1 w-20 rounded-full bg-[#A3B18A] mx-auto sm:mx-0" />

              <p className="mt-6 leading-8 text-white/80">
                حلول زراعية حديثة تجمع بين الفاعلية
                وسلامة الإنسان والبيئة، لنمنح المزارعين
                مستقبلًا أكثر استدامة.
              </p>

            </div>

            <div>

              <h4 className="text-xl font-semibold">
                الصفحات
              </h4>

              <ul className="mt-6 space-y-4 text-white/80">

                <li>
                  <Link href="/">
                    الرئيسية
                  </Link>
                </li>

                <li>
                  <Link href="/whous">
                    من نحن
                  </Link>
                </li>

                <li>
                  <Link href="/founder">
                    عن المؤسس
                  </Link>
                </li>

                <li>
                  <Link href="/products">
                    المنتجات
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    تواصل معنا
                  </Link>
                </li>

              </ul>

            </div>

            <div>

              <h4 className="text-xl font-semibold">
                تواصل معنا
              </h4>

              <div className="mt-6 space-y-5 text-white/80">

                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>dr-mamdouh@greenova.bio</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+20 1007075680</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span>+962781882724</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Egypt</span>
                </div>

              </div>

            </div>

          </div>

          <div className="my-10 h-px bg-white/10" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">

            <p>
              © {new Date().getFullYear()} GreeNova.
              جميع الحقوق محفوظة.
            </p>

            <p>
              Crafted by{" "}
              <a href="" className="font-semibold text-[#A3B18A]">
                Fatima Albusaily
              </a>
            </p>

          </div>
        </div>

      </footer>
    </>

  );
}