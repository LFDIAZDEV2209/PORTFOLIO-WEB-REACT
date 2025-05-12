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
    <div className="p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="about-me">
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
            Hi, I'm a passionate web developer focused on details, with experience in JavaScript, React, Node.js and Python. I enjoy transforming complex problems into clean, elegant and functional solutions. In recent years, I have worked on various projects, from dynamic web applications to backend APIs. I am always looking for new technologies, ways to improve my skills and contribute to products that generate real impact. I am particularly interested in writing clean code, following good UI/UX practices and building intuitive digital experiences. When I'm not coding, I'm probably exploring new tools, collaborating on open source projects or learning about artificial intelligence and full stack development. I'm ready to create something amazing with you!
          </p>
          <div className="flex justify-center mt-4">
          <Button>
            <Phone size={20} className="mr-2" />
            Call me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
