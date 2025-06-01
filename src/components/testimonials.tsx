import Title from "./shared/title";
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselContent } from "./ui/carousel";
import { dataTestimonials } from "../../data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="Testimonials" subtitle="What my clients say" />

      <Carousel className="mx-10 mt-6" setApi={setApi} opts={{
        align: 'center',
        loop: true
      }}>
        <CarouselContent className="gap-4">
          {dataTestimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/3 p-4 text-center flex flex-col items-center border-2 border-slate-400 rounded-lg">
              <Avatar>
                <AvatarImage src={testimonial.imageUrl} alt="Profile picture" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="min-h-12 text-2xl mt-4">{testimonial.name}</p>
                <p>{testimonial.description}</p>
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