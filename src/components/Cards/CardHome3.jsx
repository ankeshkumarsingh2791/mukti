// import {Card, CardContent} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const CardHome3 = ({ankesh}) => {
    
  return (
    <>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 w-full">
              
                <div className="flex aspect-square items-center justify-center p-6 bg-green-400">
                  <span className="text-3xl font-semibold">{index + 1 }{ankesh}</span>
                </div>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}

export default CardHome3
