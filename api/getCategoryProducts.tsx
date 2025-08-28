import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetCategoryProducts(slug: string) {
  const url = `${process.env.NEXT_PUBLIC_URL_LOCALHOST}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
  const [result, setResult] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        const json = await res.json();

   const formatted: ProductType[] = json.data.map((item: any) => ({
    id: item.id,
    productName: item.productName,
    slug: item.slug,
    description: item.description,
    active: item.active,
    taste: item.taste,
    origin: item.origin,
    price: parseFloat(item.price),
    images: item.images.map((img: any) => ({
    id: img.id,
    url: img.url,
     })),
     category: {
    slug: item.category.slug,
    categoryName: item.category.categoryName,
    },
     }));

        setResult(formatted);
        setLoading(false);
      } catch (e: unknown) {
        if (typeof e === "string") {
          setError(e);
        } else if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("Ocurrió un error desconocido");
        }
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { loading, result, error };
}
