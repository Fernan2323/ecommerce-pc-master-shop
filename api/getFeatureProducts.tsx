import { ProductType } from '@/types/product'
import { useEffect, useState } from 'react'

export function useGetFeatureProducts () {
  const url = `${process.env.NEXT_PUBLIC_URL_LOCALHOST}/api/products?filters[isFeatured][$eq]=true&populate=*`

  const [result, setResult] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
  async function getProducts () {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResult(json.data)
        console.log("FeatureProducts",json.data)
        setLoading(false)
      } catch (e: unknown) {
        if (typeof e === "string") {
          setError(e)
        } else if (e instanceof Error) {
          setError(e.message)
        } else {
          setError("Ocurrió un error desconocido")
        }
        setLoading(false)
      }
    }

    getProducts()
  }, [url])

  return { loading, result, error }
}
