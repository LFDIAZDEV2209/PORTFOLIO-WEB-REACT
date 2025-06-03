import Title from "./shared/title";
import { dataContact } from "../../data";
import Link from "next/link";
import ContactForm from "./contact-form";
import { buttonVariants } from "./ui/button";
import { motion } from "framer-motion";
import AnimatedAvatar from "./ui/avatar-model";

const Contact = () => {
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
    <div className="p-6 md:px-12 md:py-15 max-w-5xl mx-auto" id="contact">
      <Title title="Contact Me" subtitle="Get in touch with me 👋" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-12"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          {dataContact.map((contact) => (
            <motion.div 
              key={contact.id} 
              variants={itemVariants}
              className="group flex flex-col items-center dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10"
            >
              <motion.div 
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {contact.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-1">{contact.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{contact.subtitle}</p>
              <Link 
                href={contact.link} 
                target="_blank" 
                className={buttonVariants({ 
                  variant: "outline",
                  className: "w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                })}
              >
                Send a message
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="col-span-2"
        >
          <motion.div 
            variants={itemVariants}
            className="dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <ContactForm />
          </motion.div>
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <AnimatedAvatar />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;