"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/useCart"
import { usefavoriteProducts } from "@/hooks/useFavoriteProducts"
import { formatPrice } from "@/lib/formatPrice"
import { ProductType } from "@/types/product"
import { Heart, ShoppingCart } from "lucide-react"


export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = ({product}: InfoProductProps) => {

  const { addItem, items } = useCart()
  const { addLovedItem } = usefavoriteProducts()

  return (
    <div className="px-6">
        <div className="justify-between mb-3 sm:flex">
            <h1 className="text-2xl"> {product.productName} </h1>
        </div>
        <Separator className="my-4"/>
        <p> {product.description} </p>
        <Separator className="my-4"/>
        <p className="my-4 text-2xl font-bold"> {formatPrice(product.price)} </p>
        <div className="flex items-center gap-5">
             <Button onClick={() => addItem(product)}>Comprar</Button> 
            <Heart width="30" strokeWidth="1" className="transition duration-300 cursor-pointer hover:fill-black" onClick={() => addLovedItem(product)} />
        </div>
    </div>
  )
}

export default InfoProduct