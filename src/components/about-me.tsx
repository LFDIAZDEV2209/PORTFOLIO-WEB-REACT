import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { dataAboutMe, dataSlider } from "../../data";
import { useEffect, useState } from "react";
import Title from "./shared/title";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const AboutMe = () => {
  const [api, setApi] = useState<any>();
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
    <div className="p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="about-me">
      <Title title={texts[language].title} subtitle={texts[language].subtitle} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mt-12"
      >
        <motion.div variants={itemVariants} className="py-12 md:py-0 flex items-center justify-center">
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
                      className="w-full h-auto rounded-xl shadow-lg shadow-slate-500/10 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="right-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {dataAboutMe.map((data) => (
              <motion.div
                key={data.id}
                variants={itemVariants}
                className="group dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {data.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{language === 'es' && (data as any).name_es ? (data as any).name_es : data.name}</h3>
                <p className="text-gray-400 text-sm">{language === 'es' && (data as any).description_es ? (data as any).description_es : data.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="mt-12 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              {texts[language].description}
            </p>
            <div className="flex justify-center mt-8">
              <Button className="group">
                <Phone size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                {texts[language].call}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
