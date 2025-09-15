import { dataExperience } from "../../data";
import Title from "./shared/title";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExperienceData } from "@/types";

const Experience = () => {
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
        <div className="p-4 sm:p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="experience">
            <Title
                title={language === "es" ? "Experiencia" : "Experience"}
                subtitle={language === "es" ? "Mis habilidades" : "My skills"}
            />

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12"
            >
                {dataExperience.map((data) => (
                    <motion.div
                        key={data.id}
                        variants={itemVariants}
                        className="group dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10"
                    >
                        <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-primary">
                            {language === "es" && (data as ExperienceData).title_es ? (data as ExperienceData).title_es : data.title}
                        </h3>
                        <motion.div 
                            variants={containerVariants}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-8"
                        >
                            {data.experience.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={itemVariants}
                                    className="flex flex-col items-center group/item"
                                >
                                    <div className="text-2xl lg:text-4xl mb-2 lg:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Experience;