"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Success = () => {
  const router = useRouter()
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
             <div>
                  <h1 className="text-3xl">Gracias por tu compra!</h1>
                  <p className="my-3">En Breve recibiras un mail con tu factura y los detalles de tu compra</p>
                  
                  <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
              </div> 
        
    
    </div>
  )
}

export default Success
