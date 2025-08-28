"use client"
import { useGetProductBySlug } from "@/api/getProductBySlug"
import { useParams } from "next/navigation"
import SkeletonProduct from "./components/SkeletonProduct"
import CarouselProduct from "./components/CarouselProduct"
import InfoProduct from "./components/InfoProduct"

export default function Page() {
    const params = useParams()
    const {productSlug} = params
    const slug = Array.isArray(productSlug) ? productSlug[0] : productSlug ?? "";
    const { result, loading } = useGetProductBySlug(slug)
     
      if (loading || !result || result.length === 0) {
    return <SkeletonProduct />
  }

  const product = result[0]

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct key={product.id} images={product.images} />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}