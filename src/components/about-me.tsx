import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { dataAboutMe, dataSlider } from "../../data";
import { useEffect, useState, memo } from "react";
import Title from "./shared/title";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { UseEmblaCarouselType } from "embla-carousel-react";

interface AboutMeData {
  id: number;
  name: string;
  name_es?: string;
  icon: React.ReactNode;
  description: string;
  description_es?: string;
}

const AboutMe = memo(() => {
  const [api, setApi] = useState<UseEmblaCarouselType[1] | undefined>(undefined);
  const { language } = useLanguage();
  const texts = {
    en: {
      title: "About Me",
      subtitle: "Get to know me",
      description: "Hi, I'm a passionate web developer focused on details, with experience in JavaScript, React, Node.js and Python. I enjoy transforming complex problems into clean, elegant and functional solutions. In recent years, I have worked on various projects, from dynamic web applications to backend APIs. I am always looking for new technologies, ways to improve my skills and contribute to products that generate real impact. I am particularly interested in writing clean code, following good UI/UX practices and building intuitive digital experiences. When I'm not coding, I'm probably exploring new tools, collaborating on open source projects or learning about artificial intelligence and full stack development. I'm ready to create something amazing with you!",
      call: "Call me"
    },
    es: {
      title: "Sobre mí",
      subtitle: "Conóceme",
      description: "Hola, soy un desarrollador web apasionado y detallista, con experiencia en JavaScript, React, Node.js y Python. Disfruto transformar problemas complejos en soluciones limpias, elegantes y funcionales. En los últimos años he trabajado en diversos proyectos, desde aplicaciones web dinámicas hasta APIs backend. Siempre busco nuevas tecnologías, formas de mejorar mis habilidades y contribuir a productos que generen impacto real. Me interesa especialmente escribir código limpio, seguir buenas prácticas de UI/UX y construir experiencias digitales intuitivas. Cuando no estoy programando, probablemente estoy explorando nuevas herramientas, colaborando en proyectos open source o aprendiendo sobre inteligencia artificial y desarrollo full stack. ¡Estoy listo para crear algo increíble contigo!",
      call: "Llámame"
    },
  };
  
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="px-3 py-4 sm:p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="about-me">
      <Title title={texts[language].title} subtitle={texts[language].subtitle} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12"
      >
        <motion.div variants={itemVariants} className="py-4 sm:py-6 lg:py-0 flex items-center justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'center',
                loop: true,
                containScroll: 'trimSnaps'
              }}
              orientation="vertical"
              className="w-full h-fit"
            >
            <CarouselContent className="h-[300px] sm:h-[350px] lg:h-[450px] -mt-2 sm:-mt-3 lg:-mt-4">    
              {dataSlider.map((data) => (
                <CarouselItem key={data.id} className="pt-1 pb-1">
                  <div className="flex items-center justify-center">
                    <Image 
                      src={data.url} 
                      alt="Personal photo" 
                      width={280} 
                      height={350}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg shadow-slate-500/10 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -top-8 sm:-top-10 lg:-top-12 left-1/2 transform -translate-x-1/2 bg-white hover:bg-gray-100 text-white border-2 border-white/30 hover:border-white/50 shadow-lg z-10 w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-1/2 transform -translate-x-1/2 bg-white hover:bg-gray-100 text-white border-2 border-white/30 hover:border-white/50 shadow-lg z-10 w-8 h-8 sm:w-10 sm:h-10" />
            </Carousel>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="order-1 lg:order-2">
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            {dataAboutMe.map((data: AboutMeData) => (
              <motion.div
                key={data.id}
                variants={itemVariants}
                className="group dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 min-h-[120px] sm:min-h-[140px] flex flex-col"
              >
                <div className="text-primary mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-lg sm:text-xl">
                  {data.icon}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2 leading-tight">
                  {language === 'es' && data.name_es ? data.name_es : data.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                  {language === 'es' && data.description_es ? data.description_es : data.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="mt-6 sm:mt-8 lg:mt-12 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700/50"
          >
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {texts[language].description}
            </p>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button className="group text-sm sm:text-base">
                <Phone size={18} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                {texts[language].call}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
});

AboutMe.displayName = 'AboutMe';

export default AboutMe;
