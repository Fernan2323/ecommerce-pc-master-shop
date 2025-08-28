import FeatureProducts from "@/components/FeatureProducts"
import CarouselTextBanner from "../components/CarouselTextBanner"
import BannerDiscount from "@/components/BannerDiscount"
import ChooseCategory from "@/components/ChooseCategory"
import BannerProducts from "@/components/BannerProducts"
export default function Home() {
  return (
 <main>
  <CarouselTextBanner />
  <FeatureProducts />
  <BannerDiscount />
  <ChooseCategory />
  <BannerProducts />
 </main>
  )
}
