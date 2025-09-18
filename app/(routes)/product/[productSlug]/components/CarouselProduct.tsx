import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

interface CarouselProductProps {
    images: {
            id: number
            url: string
        }[]
    
}
const CarouselProduct = ({images}: CarouselProductProps) => {
  return (
    <div className="sm:px-16">
        <Carousel>
          <CarouselContent>
            {
                images.map((image) => (
                    <CarouselItem key={image.id}>
                        <img src={`${image.url}`} alt="image product" className="rounded-lg" />
                    </CarouselItem>
                ))
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default CarouselProduct