import ItemImage from "@/components/shared/ItemImage"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"
import { usefavoriteProducts } from "@/hooks/useFavoriteProducts"
import { formatPrice } from "@/lib/formatPrice"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface FavItemProductProps {
    product: ProductType
}

const FavItemProduct = ({product}: FavItemProductProps) => {
    const router = useRouter()
    const { removeLovedItem } = usefavoriteProducts()
    const { addItem } = useCart()

    const addToCheckout = () => {
      addItem(product)
      removeLovedItem(product.id)
    }
  return (
    <li className="flex py-6 border-b">
       <ItemImage slug={product.slug} url={product.images[0].url} />
        <div className="flex justify-between flex-1 px-6">
            <div>
                 <h2 className="texl-lg font-bold"> {product.productName} </h2>
                 <p className=""> {formatPrice(product.price)} </p>
                  <Button className="mt-5 rounded-full" onClick={() => addToCheckout()}>Añadir al carrito</Button>
            </div>
            <div>
              <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                <X className="dark:text-black" size={20} onClick={() => removeLovedItem(product.id)} />
              </button>
            </div>
        </div>
    </li>
  )
}

export default FavItemProduct