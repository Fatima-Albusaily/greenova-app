'use client'

import { useEffect, useState } from 'react'
import React from 'react' 
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'الرئيسية', href: '/'},
  { name: 'من نحن', href: '/whous' },
  { name: 'عن المؤسس', href: '/founder' },
  { name: 'منتجاتنا', href: '/products' },
  { name: 'تواصل معنا', href: '/contact' },
]

export default function Navbar() {

  const pathname = usePathname();

  const isHome = pathname === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);

  const textColor = isScrolled ? "text-[#F8F8F5]" : "text-[#355E3B]";

  const activeColor = isScrolled
  ? "text-[#D8F3DC]"
  : "text-[#6A994E]";

  useEffect(() => {
  if (!isHome) {
    setIsScrolled(true);
    return;
  }

  const hero = document.getElementById("hero");

  if (!hero) {
    setIsScrolled(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    },
    {
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px",
    }
  );

  observer.observe(hero);

  return () => observer.disconnect();
}, [isHome]);

  const isActive = (href: string) => {
  if (href === "/") return pathname === "/";

  return pathname.startsWith(href);
};

  return (

    <>
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500 ease-out
        shadow-xl backdrop-blur-sm
        ${
          isScrolled
            ? "bg-dark-main/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
        <nav aria-label="Global" className="flex items-center justify-between py-3 px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GreeNova</span>
              <Image
                alt=""
                src="/icon.png"
                className="h-16 w-auto"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 cursor-pointer"
            >
              <span className="sr-only text-dark-main">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className={`size-10 cursor-pointer ${textColor}`}
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
              key={item.name}
              href={item.href}
              className={`
                relative
                group
                text-md/6
                font-semibold
                transition-colors
                duration-300

                ${
                  isActive(item.href)
              ? activeColor
              : textColor
                }
              `}
            >
              {item.name}

              <span
                className={`
                  absolute
                  -bottom-2
                  right-0
                  h-0.5
                  ${isScrolled ? "bg-[#D8F3DC]" : "bg-[#6A994E]"}
                  transition-all
                  duration-300

                  ${
                    isActive(item.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/whous"
              className={`text-md/6 flex items-center gap-2 cursor-pointer ${textColor} transition-colors duration-300`}
            >
             اعرف المزيد
             <ArrowLeft size={15}/>
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-main p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">GreeNova</span>
                <img
                  alt=""
                  src="/icon.png"
                  className="h-14 w-auto"
                  
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      onClick={() => setMobileMenuOpen(false)}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/whous"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    اعرف المزيد
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>




  )
}