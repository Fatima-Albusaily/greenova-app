export type Product = {
  id: string;
  isFeatured: boolean;
  name: string;
  image: string;
  category: "Agricultural" | "Veterinary";
  subCategory?: "Pesticides" | "Fertilizers";
};

export const products: Product[] = [
  {
  category: "Agricultural",
  subCategory: "Pesticides",
  id: "biovigor1",
  isFeatured: true,
  name: "BioVigor Basic",
  image: "/products/bioBasic.png",
},

{
  category: "Agricultural",
  subCategory: "Pesticides",
  id: "biovigorPlus",
  isFeatured: false,
  name: "BioVigor Plus",
  image: "/products/bioPlus.png",
},

{
  category: "Agricultural",
  subCategory: "Pesticides",
  id: "biovigorMax",
  isFeatured: false,
  name: "BioVigor Max",
  image: "/products/bioMax.png",
},

{
  category: "Agricultural",
  subCategory: "Pesticides",
  id: "biovigorScorch",
  isFeatured: false,
  name: "BioVigor Scorch",
  image: "/products/bioScorch.jpeg",
},

{
  category: "Agricultural",
  subCategory: "Fertilizers",
  id: "biovigorMicrofeed",
  isFeatured: true,
  name: "BioVigor MicroFeed",
  image: "/products/bioMicroFeed.jpeg",
},

{
  category: "Agricultural",
  subCategory: "Fertilizers",
  id: "biovigorOrganicMatrix",
  isFeatured: false,
  name: "BioVigor Organic Matrix",
  image: "/products/bioOrganicMatrix.jpeg",
},

{
  category: "Agricultural",
  subCategory: "Fertilizers",
  id: "biovigorSoilActivator",
  isFeatured: false,
  name: "BioVigor Soil Activator",
  image: "/products/bioSoilActivator.jpeg",
},

{
  category: "Veterinary",
  id: "biovigorVet1",
  isFeatured: true,
  name: "BioVigor Vet 1",
  image: "/products/bioVet1.jpeg",
},

{
  category: "Veterinary",
  id: "biovigorVetPlus",
  isFeatured: false,
  name: "BioVigor Vet Plus",
  image: "/products/bioVetPlus.jpeg",
},
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}