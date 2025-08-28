"use client"

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react"
import { useRouter } from "next/navigation"
import MenuList from "./MenuList"
import ItemsMenuMobile from "./ItemsMenuMobile"
import ThemeButton from "./ThemeButton"
import { useCart } from "@/hooks/useCart"
import { usefavoriteProducts } from "@/hooks/useFavoriteProducts"

const NavBar = () => {
    const cart = useCart()
    const {lovedItems} = usefavoriteProducts()
    const router = useRouter()
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1 onClick={()=> router.push('/')} className="text-3xl">PC Master Shop!
        </h1>
        <div className="Items-center justify-between hidden sm:flex">
            <MenuList />
        </div>
        <div className="fles sm:hidden">
            <ItemsMenuMobile />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
            {
              cart.items.length === 0 ? 
               <ShoppingCart strokeWidth="1" className="cursor-pointer" onClick={()=> router.push("/cart")} />
                : (
                 <div className="flex gap-1" onClick={() => router.push("/cart")}>
                    <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                    <span> {cart.items.length} </span>
                 </div>
                )
            }
            <Heart strokeWidth="1" className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-white"}`} onClick={()=> router.push("/favorites-products")} />
            <User strokeWidth="1" className="cursor-pointer" />
            <ThemeButton />
        </div>
    </div>
  )
}

export default NavBar