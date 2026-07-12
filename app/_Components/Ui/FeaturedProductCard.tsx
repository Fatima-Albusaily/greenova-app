import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
};

type FeaturedProductCardProps = {
  product: Product;
};

export default function FeaturedProductCard({
  product,
}: FeaturedProductCardProps) {
  return (
  <Link href={`products/${product.id}`} className="group relative block overflow-hidden rounded-4xl">
    <Image src={product.image} alt={product.name} width={1400} height={700} 
    className="h-120 w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent">
    </div>
    {/* Content */}

    <div className="absolute bottom-0 p-10 text-white">
      <span
        className="
          inline-block
          rounded-full
          bg-white/15
          px-4
          py-2
          text-sm
          font-medium backdrop-blur-md">
        المنتج المميز
      </span>

      <h3
        className="
          mt-5
          text-4xl
          font-bold
          leading-tight
        "
      >
        {product.name}
      </h3>

      <p
        className="
          mt-4
          max-w-2xl
          text-lg
          leading-8
          text-white/90
        "
      >
        {product.shortDescription}
      </p>

      <div
        className="
          mt-8
          inline-flex
          items-center
          gap-3
          text-lg
          font-semibold
          transition-all
          duration-300
          group-hover:gap-5
        "
      >
        تعرف على المزيد

        <ArrowLeft size={20}/>
      </div>
    </div>
  </Link>
);
}