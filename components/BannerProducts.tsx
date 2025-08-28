import Link from "next/link"
import React from "react"
import { buttonVariants } from "./ui/button"

const BannerProducts = () => {
  return (
    <>
    <div className="mt-4 text-center">
         <p>Sumérgete en el mundo del gaming con nuestros productos</p>
         <h4 className="my-2 text-5xl font-extrabold uppercase">Gaming experience</h4>
          <p className="my-2 text-lg">Conviértete en un verdadero pro player</p>
          <Link href="#" className={buttonVariants()}>Comprar</Link>
    </div>
    
    <div className="bg-cover h-[350px] lg:h-[600px] bg-[url('/slider-image.webp')] bg-center mt-5 "></div>
    </>
  )
}

export default BannerProducts