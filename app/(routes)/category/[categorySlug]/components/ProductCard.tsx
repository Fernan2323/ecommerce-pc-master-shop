import Link from "next/link"
import { useRouter } from "next/navigation"
import { Expand, ShoppingCart } from "lucide-react"

import { ProductType } from "@/types/product"
import { formatPrice } from "@/lib/formatPrice"

import IconButton from "@/components/IconButton"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


type ProductCardProps = {
  product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
  const { product } = props
  const router = useRouter()
  return (

    <Link href={`/product/${product.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >

      <Carousel opts={{ align: "start" }} className="w-full max-w-sm mb-2">
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id} className="relative group">
              {/* Contenedor con proporción fija */}
              <div className="w-full aspect-square overflow-hidden rounded-xl">
                <img
                  src={`${image.url}`}
                  alt="image"
                  className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Botones en hover */}
              <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 transition duration-200 group-hover:opacity-100">
                <div className="flex gap-x-6 bg-white/70 backdrop-blur-md rounded-lg p-2">
                  <IconButton
                    onClick={() => router.push(`/product/${product.slug}`)}
                    icon={<Expand size={20} />}
                    className="text-gray-600"
                  />
                  <IconButton
                    onClick={() => console.log("product")}
                    icon={<ShoppingCart size={20} />}
                    className="text-gray-600"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-2xl text-center"> {product.productName} </p>
      <p className="font-bold text-center"> {formatPrice(product.price)} </p>
    </Link>
  )
}

export default ProductCard