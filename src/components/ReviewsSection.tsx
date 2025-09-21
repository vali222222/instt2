
import { Card } from "@/components/ui/card";
import { Hand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      image: "/public/review1.webp",
      alt: "SHEIN Gift Card Success Story - Tanja"
    },
    {
      id: 2,
      image: "/public/review1.webp",
      alt: "SHEIN Package Delivery Success"
    },
    {
      id: 3,
      image: "/lovable-uploads/review2.webp",
      alt: "Happy Customer with SHEIN Rewards"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-pink-50/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-4 leading-tight">
            SHEIN Top Claims of the Week
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Real results from real people! 💕
          </p>
          
          {/* Swipe Animation Indicator */}
          <div className="flex items-center justify-center gap-3 text-pink-400">
            <div className="relative">
              <Hand className="w-5 h-5 animate-pulse" />
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-pink-400 animate-slide-left"></div>
            </div>
            <span className="text-xs font-medium animate-pulse">Swipe to see more</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="h-full transition-all duration-300 hover:scale-105 overflow-hidden rounded-lg">
                  <div className="aspect-[9/16] w-full">
                    <img 
                      src={review.image} 
                      alt={review.alt}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="hidden sm:block">
            <CarouselPrevious className="border-pink-200 hover:bg-pink-50 hover:border-pink-300 text-pink-600" />
            <CarouselNext className="border-pink-200 hover:bg-pink-50 hover:border-pink-300 text-pink-600" />
          </div>
        </Carousel>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 sm:hidden">
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-pink-300/50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
