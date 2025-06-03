import { buttonVariants } from "./ui/button";
import Container from "./shared/container";
import Image from "next/image";
import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-3"
        >
          Hello, I'm
        </motion.h3>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold mb-3"
        >
          Luis Felipe Diaz 🧑🏻‍💻
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl text-gray-400"
        >
          FullStack Developer
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail />Contact Me
            </Link>

            <Link className={buttonVariants({ variant: 'secondary'})} href="/luis-felipe-cv.pdf" target="_blank">
              <Paperclip />Download CV
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-10"
        >
          <Image 
            className="rounded-full hover:scale-105 transition-transform duration-300"
            src="/Profile_Photo.jpg" 
            alt="Profile pic" 
            width={400} 
            height={400} 
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Introduction;