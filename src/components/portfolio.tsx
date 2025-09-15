import Link from "next/link";
import { dataPortfolio } from "../../data";
import Title from "./shared/title";
import Image from "next/image";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Portfolio = () => {
  const { language } = useLanguage();

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
    <div className="p-4 sm:p-6 md:px-12 md:py-15 max-w-4xl mx-auto" id="portfolio">
      <Title
        title={language === "es" ? "Portafolio" : "Portfolio"}
        subtitle={language === "es" ? "Mis Proyectos" : "My Projects"}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
      >
        {dataPortfolio.map((project) => (
          <motion.div 
            key={project.id}
            variants={itemVariants}
            className="group"
          >
            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">
              {project.title}
            </h3>
            <Link href={project.urlGithub} target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl shadow-lg shadow-slate-500/10"
              >
                <Image 
                  src={project.image} 
                  alt="project image" 
                  width={400} 
                  height={240} 
                  className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-xl"
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;