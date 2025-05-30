import Link from "next/link";
import { dataPortfolio } from "../../data";
import Title from "./shared/title";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 md-py-24 max-w-4xl mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="My Projects" />

      <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataPortfolio.map((project) => (
          <div key={project.id}>
            <h3 className="text-xl mb-4">{project.title}</h3>
            <Link href={project.urlGithub} target="_blank">
              <Image 
                src={project.image} 
                alt="project image" 
                width={300} 
                height={150} 
                className="rounded-xl w-full hover:scale-105 transition-all duration-300"
              />
            </Link>

        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;