"use client"
import { usefavoriteProducts } from "@/hooks/useFavoriteProducts"
import FavItemProduct from "./components/fav-item-product"

export default function Page() {

    const { lovedItems } = usefavoriteProducts()

    console.log("productos favoritos: ", lovedItems)

    return (

    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
        <h1 className="sm:text-2xl">Productos Favoritos</h1>

        <div>
            <div>
                {
                    lovedItems.length === 0 && (
                        <p>No hay productos en favoritos</p>
                    )
                }
                <ul>
                    {
                        lovedItems.map((product) => (
                            <FavItemProduct key={product.id} product={product} />
                        ))
                    }
                 
                </ul>
            </div>
        </div>
    </div>
    )
}