import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { dataAboutMe, dataSlider } from "../../data";
import { useEffect, useState } from "react";
import Title from "./shared/title";
import { Phone } from "lucide-react";
import Image from "next/image";

const AboutMe = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About Me" subtitle="Get to know me" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/* Carousel */}
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="mt-1 h-[250px]">    
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image 
                      src={data.url} 
                      alt="Image" 
                      width={250} 
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <div className="grid md:grid-cols-3 mt-7 gap-4">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800"
              >
                {data.icon}
                <p className="my-2">{data.name}</p>
                <p className="text-gray-400">{data.description}</p>
              </div>
            ))}
          </div>
          <p className="my-8">
            ¡Hola! Soy un desarrollador web apasionado y orientado a los
            detalles, con experiencia en JavaScript, React, Node.js y Python.
            Disfruto transformar problemas complejos en soluciones limpias,
            elegantes y funcionales. En los últimos años he trabajado en
            diversos proyectos, desde aplicaciones web dinámicas hasta APIs
            backend. Siempre estoy en busca de nuevas tecnologías, formas de
            mejorar mis habilidades y contribuir a productos que generen un
            impacto real. Me interesa especialmente escribir código limpio,
            seguir buenas prácticas de UI/UX y construir experiencias digitales
            intuitivas. Cuando no estoy programando, probablemente esté
            explorando nuevas herramientas, colaborando en proyectos open source
            o aprendiendo sobre inteligencia artificial y desarrollo full stack.
            ¡Estoy listo para crear algo increíble contigo!
          </p>

          <Button >
            <Phone size={20} className="mr-2" />
            Call me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
