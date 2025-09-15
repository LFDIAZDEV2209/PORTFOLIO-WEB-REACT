import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import Image from "next/image";
import Link from "next/link";
import { Mail, Paperclip, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { LottieAvatar } from "./ui/avatar-animated";
import { useLanguage } from "@/context/LanguageContext";
import { introductionTexts } from "../../data";

const Introduction = () => {
  const { language, toggleLanguage } = useLanguage();
  const texts = introductionTexts[language];

  return (
    <Container>
      <div className="text-center" id="home">
        {/* Botón de idioma */}
        <div className="flex justify-end mb-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 rounded-lg border border-slate-700/50 bg-slate-800/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Globe2 className="w-4 h-4" />
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl mb-3"
        >
          {texts.hello}
        </motion.h3>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 flex items-center justify-center flex-wrap gap-2"
        >
          Luis Felipe Diaz 
          <LottieAvatar />
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400"
        >
          {texts.role}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-between mt-6 sm:mt-8 mx-auto max-w-md">
            <Link className={`${buttonVariants()} text-sm sm:text-base`} href="#contact">
              <Mail size={16} className="sm:mr-2" />
              <span className="hidden sm:inline">{texts.contact}</span>
              <span className="sm:hidden">{texts.contact}</span>
            </Link>

            <Link className={`${buttonVariants({ variant: 'secondary'})} text-sm sm:text-base`} href="/luis-felipe-cv.pdf" target="_blank">
              <Paperclip size={16} className="sm:mr-2" />
              <span className="hidden sm:inline">{texts.download}</span>
              <span className="sm:hidden">{texts.download}</span>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-6 sm:mt-8 lg:mt-10"
        >
          <Image 
            className="rounded-full hover:scale-105 transition-transform duration-300"
            src="/Profile_Photo.jpg" 
            alt="Profile pic" 
            width={300} 
            height={300} 
            sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 400px"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Introduction;