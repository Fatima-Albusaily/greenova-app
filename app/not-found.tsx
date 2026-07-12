import Link from "next/link";
import { Leaf, Home, Package } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-mainbg flex items-center justify-center px-6 py-40">
      <div className="max-w-2xl text-center">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#EDF6E8]">
          <Leaf className="h-12 w-12 text-[#6A994E]" />
        </div>

        {/* Error Code */}

        <h1 className="mt-8 text-7xl font-black text-dark-main">
          404
        </h1>

        {/* Title */}

        <h2 className="mt-4 text-3xl font-bold text-dark-main">
          الصفحة غير موجودة
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#6B7566]">
          يبدو أن الصفحة التي تبحث عنها غير موجودة، أو ربما تم نقلها أو حذفها.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full
              bg-[#6A994E]

              px-8
              py-4

              font-semibold
              text-white

              transition
              duration-300

              hover:bg-dark-main
            "
          >
            <Home size={20} />
            العودة للرئيسية
          </Link>

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border-2
              border-[#6A994E]

              px-8
              py-4

              font-semibold
              text-dark-main

              transition
              duration-300

              hover:bg-[#EDF6E8]
            "
          >
            <Package size={20} />
            تصفح المنتجات
          </Link>

        </div>

      </div>
    </main>
  );
}