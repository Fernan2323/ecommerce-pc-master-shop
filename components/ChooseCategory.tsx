"use client"
import { useGetCategories } from "@/api/getProducts"
import { CategoryTypeVariant } from "@/types/category"
import Link from "next/link"

const ChooseCategory = () => {
    const {result, loading} = useGetCategories()
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>

       <div className="grid gap-5 sm:grid-cols-3">
  {!loading && result !== undefined && (
    result.map((category: CategoryTypeVariant) => (
      <Link
        key={category.id}
        href={`/category/${category.slug}`}
        className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-lg group"
      >
        <div className="w-full aspect-[4/3]">
          <img
            src={`${category.mainImage?.url}`}
            alt={category.categoryName}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        <p className="absolute bottom-0 w-full py-2 text-lg font-bold text-center text-white bg-black/40 backdrop-blur-lg">
          {category.categoryName}
        </p>
      </Link>
    ))
  )}
</div>

    </div>
  )
}

export default ChooseCategory