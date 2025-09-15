import { Check } from "lucide-react";
import { dataServices } from "../../data";
import Title from "./shared/title";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
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
    <div className="p-4 sm:p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="services">
      <Title
        title={language === "es" ? "Servicios" : "Services"}
        subtitle={language === "es" ? "Lo que ofrezco" : "What I Offer"}
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12"
      >
        {dataServices.map((service) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className="group dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10"
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg lg:text-xl font-semibold">
                {language === "es" ? service.title_es : service.title}
              </h4>
            </div>
            <motion.ul 
              variants={containerVariants}
              className="space-y-3 lg:space-y-4"
            >
              {(language === "es" ? service.features_es : service.features).map((feature, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 group/item"
                >
                  <Check size={18} className="text-primary mt-0.5 group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300 text-sm lg:text-base">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;