import Title from "./shared/title";
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselContent } from "./ui/carousel";
import { dataTestimonials } from "../../data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { UseEmblaCarouselType } from "embla-carousel-react";

const Testimonials = () => {
  const [api, setApi] = useState<UseEmblaCarouselType[1] | undefined>(undefined);
  const { language } = useLanguage();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="p-4 sm:p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="testimonials">
      <Title title={language === "es" ? "Testimonios" : "Testimonials"} subtitle={language === "es" ? "Lo que dicen mis clientes" : "What my clients say"} />

      <Carousel className="mx-2 sm:mx-4 lg:mx-10 mt-6" setApi={setApi} opts={{
        align: 'center',
        loop: true
      }}>
        <CarouselContent className="gap-2 sm:gap-4">
          {dataTestimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3 p-3 sm:p-4 text-center flex flex-col items-center border-2 border-slate-400 rounded-lg">
              <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                <AvatarImage src={testimonial.imageUrl} alt="Profile picture" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="min-h-10 sm:min-h-12 text-lg sm:text-xl lg:text-2xl mt-3 sm:mt-4">{language === 'es' && testimonial.name_es ? testimonial.name_es : testimonial.name}</p>
                <p className="text-sm sm:text-base">{language === 'es' && testimonial.description_es ? testimonial.description_es : testimonial.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;