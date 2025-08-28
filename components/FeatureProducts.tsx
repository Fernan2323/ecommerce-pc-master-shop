"use client"
import { useGetFeatureProducts } from '@/api/getFeatureProducts'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import SkeletonSchema from './SkeletonSchema'
import { ProductType } from '@/types/product'
import { Card, CardContent } from './ui/card'
import { Expand, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import IconButton from './IconButton'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'

const FeatureProducts = () => {
  const { loading, error, result } = useGetFeatureProducts()
  const {addItem, items} = useCart()
  const router = useRouter()
  console.log("result", result)
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {
            loading && (
              <SkeletonSchema grid={3} />
            )
          }
          {
            
              result.map((product: ProductType) => {
                const { id, images, slug, productName, taste, origin, price } = product

                return (
                  <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                    <div className="p-1">
                      <Card className="py-4 border border-gray-200 shadow-none h-[520px]" >
                        <CardContent className="relative flex items-center justify-center px-6 py-2 h-[400px] ">
                          <img src={`${process.env.NEXT_PUBLIC_URL_LOCALHOST}${images[0].url}`}
                            alt="Image featured" className="object-cover" />
                          <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                            <div className="flex justify-center gap-x-6">
                              <IconButton onClick={() => router.push(`/product/${slug}`)} icon={<Expand size={20} />} className="text-gray-600" />
                              <IconButton onClick={() => addItem(product)} icon={<ShoppingCart size={20} />} className="text-gray-600" />
                            </div>
                          </div>
                        </CardContent>
                        <div className="py-8 px-8">
                          <h3 className="text-lg font-bold"> {productName} </h3>
                          <div className="flex items-center">
                            <p className="py-1  w-fit"> {formatPrice(price)} </p>

                          </div>

                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })
            
          }

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}

export default FeatureProducts