import { Check } from "lucide-react";
import { dataServices } from "../../data";
import Title from "./shared/title";
import { motion } from "framer-motion";

const Services = () => {
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
    <div className="p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="services">
        <Title title="Services" subtitle="What I Offer" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {dataServices.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
              <motion.ul 
                variants={containerVariants}
                className="space-y-4"
              >
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start gap-3 group/item"
                  >
                    <Check size={20} className="text-primary mt-1 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                      {feature.name}
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