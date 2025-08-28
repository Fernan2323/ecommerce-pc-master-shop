import { useRouter } from "next/navigation"

interface CartItemImageProps {
    url: string
    slug: string
}

const CartItemImage = ({ url, slug }: CartItemImageProps) => {
        const router = useRouter()
    
  return (
    <div onClick={() => router.push(`/product/${slug}`)} className="cursor-pointer">
            <img src={`${process.env.NEXT_PUBLIC_URL_LOCALHOST}${url}`}
             alt="Product" className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32" />

    </div>
  )
}

export default CartItemImage