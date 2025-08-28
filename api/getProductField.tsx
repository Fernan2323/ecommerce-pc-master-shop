import { ResultFiltersType } from '@/types/filters'
import React, { useEffect, useState } from 'react'

export function useGetProductField() {
  const url = `${process.env.NEXT_PUBLIC_URL_LOCALHOST}/api/content-type-builder/content-types/api::product.product`
     const [result, setResult] = useState<ResultFiltersType | null >(null)
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
