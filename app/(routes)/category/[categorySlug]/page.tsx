"use client"

import { useGetCategoryProducts } from "@/api/getCategoryProducts"
import { Separator } from "@/components/ui/separator"
import { useParams} from "next/navigation"
import SkeletonSchema from "@/components/SkeletonSchema"
import ProductCard from "./components/ProductCard"
import { ProductType } from "@/types/product"

export default function Page() {
    const params = useParams()
    const slug = Array.isArray(params.categorySlug) ? params.categorySlug[0] : params.categorySlug ?? "capsula"
    const {result, loading} = useGetCategoryProducts(slug)


   const filteredProducts: ProductType[] = !loading
    ? result
    : []

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
             {
               !loading && result.length > 0 && (
                <h1 className="text-3xl font-medium">{result[0].category.categoryName}</h1>
                  )
             }

             <Separator />

             <div className="sm:flex sm:justify-between">
             </div>

             <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                 {
                    loading && (
                        <SkeletonSchema grid={3} />
                    )
                 }

                 {
                     !loading && filteredProducts.length > 0 &&  (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product} />

                        ))
                    )
                 }
                 {
                    !loading && filteredProducts.length === 0 && <p className="font-bold">Sin stock, lamentamos las molestias ocacionadas</p>
                 }
             </div>
        </div>
    )
}