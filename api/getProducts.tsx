import { CategoryTypeVariant } from "@/types/category"
import { useEffect, useState } from "react"

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_URL_LOCALHOST}/api/categories?populate=*`
    const [result, setResult] = useState<CategoryTypeVariant[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
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
        getData()
    },[url])

    return {loading, result, error}
}