import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { ProductType } from "@/types/product"
import { toast } from "sonner"

interface UsefavoritesProductsType {
    lovedItems: ProductType[],
    addLovedItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const usefavoriteProducts = create(persist<UsefavoritesProductsType> ((set, get) => ({

    lovedItems: [],
    addLovedItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems
        const existingItem = currentLovedItems.find((item) => item.id === data.id)

        if(existingItem) {
            return toast("El producto ya existe en la lista")
        }
        
        set({
            lovedItems: [...get().lovedItems, data]
        })

        toast("Producto añadido a favoritos")

    },
    
    removeLovedItem: (id: number) => {
     set({lovedItems: [...get().lovedItems.filter((item) => item.id !== id )]})
     toast("El producto se ha eliminado de favoritos")
    }
}), {

    name: "favorites-products-storage",
    storage: createJSONStorage(() => localStorage)
}
))