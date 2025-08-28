export type ProductType = {
  id: number
  productName: string
  slug: string
  description: string
  active: boolean
  taste: string
  origin: string
  price: number
  images: {
    id: number
    url: string
  }[]
  category: {
    slug: string
    categoryName: string
  }
}
