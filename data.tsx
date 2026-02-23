import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench,
} from "lucide-react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiMysql,
  SiDjango
} from "react-icons/si";
import { CSharpIcon } from "@/components/icons/CSharpIcon";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        name_es: "Experiencia",
        icon: <Briefcase />,
        description: "1 year of experience",
        description_es: "1 año de experiencia",
    },
    {
        id: 2,
        name: "Social",
        name_es: "Social",
        icon: <UsersRound />,
        description: "Friendly and eager to learn",
        description_es: "Amigable y ansioso por aprender",
    },
    {
        id: 3,
        name: "Projects",
        name_es: "Proyectos",
        icon: <Wrench />,
        description: "50+ projects completed",
        description_es: "50+ proyectos completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/cumple.jpg",
    },
    {
        id: 2,
        url: "/family.jpg",
    },
    {
        id: 3,
        url: "/mi-pechiche.jpg",
    },
    {
        id: 4,
        url: "/me-christmas.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Liora",
        image: "/liora.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/shop-classy",
        urlDemo: "https://shop-classy.netlify.app",
    },
    {
        id: 2,
        title: "Pranalatam",
        image: "/pranalatam.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/pranalatam",
        urlDemo: "https://pranalatam.netlify.app",
    },
    {
        id: 3,
        title: "Liceo Patria",
        image: "/liceo.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/propuesta-liceo-patria",
        urlDemo: "https://propuesta-liceo-patria.vercel.app",
    },
    {
        id: 4,
        title: "Heroes Cards",
        image: "/heroes.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/heroes-cards-json",
        urlDemo: "https://heroes-cards.netlify.app",
    },
    {
        id: 5,
        title: "Arena Fighter",
        image: "/arena.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/arena-heroes",
        urlDemo: "https://arena-heroes.netlify.app",
    },
    {
        id: 6,
        title: "LMS Platform",
        image: "/lms.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/LMS-PORTAL",
        urlDemo: "https://lms-portal-web.netlify.app",
    },
];

export const technologyIcons = {
  "HTML": <SiHtml5 className="w-8 h-8 text-orange-500 transform transition-all duration-300 hover:scale-110" />,
  "CSS": <SiCss3 className="w-8 h-8 text-blue-500 transform transition-all duration-300 hover:scale-110" />,
  "JavaScript": <SiJavascript className="w-8 h-8 text-yellow-400 transform transition-all duration-300 hover:scale-110" />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8 text-cyan-500 transform transition-all duration-300 hover:scale-110" />,
  "React": <SiReact className="w-8 h-8 text-blue-400 transform transition-all duration-300 hover:scale-110" />,
  "TypeScript": <SiTypescript className="w-8 h-8 text-blue-600 transform transition-all duration-300 hover:scale-110" />,
  "Node JS": <SiNodedotjs className="w-8 h-8 text-green-500 transform transition-all duration-300 hover:scale-110" />,
  "Mongo DB": <SiMongodb className="w-8 h-8 text-green-600 transform transition-all duration-300 hover:scale-110" />,
  "Python": <SiPython className="w-8 h-8 text-blue-600 transform transition-all duration-300 hover:scale-110" />,
  "MySQL": <SiMysql className="w-9 h-9 text-blue-700 transform transition-all duration-300 hover:scale-110" />,
  "C#": <CSharpIcon className="w-9 h-9 text-purple-600 transform transition-all duration-300 hover:scale-110" />,
  "Django": <SiDjango className="w-8 h-8 text-green-700 transform transition-all duration-300 hover:scale-110" />
};

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development 💄",
        experience: [
            {
                icon: technologyIcons["HTML"]
            },
            {
                icon: technologyIcons["CSS"]
            },
            {
                icon: technologyIcons["JavaScript"]
            },
            {
                icon: technologyIcons["Tailwind CSS"],
            },
            {
                icon: technologyIcons["React"],
            },
            {
                icon: technologyIcons["TypeScript"],
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                icon: technologyIcons["Node JS"]
            },
            {
                icon: technologyIcons["Mongo DB"],
            },
            {
                icon: technologyIcons["Python"]
            },
            {
                icon: technologyIcons["MySQL"]
            },
            {
                icon: technologyIcons["C#"]
            },
            {
                icon: technologyIcons["Django"]
            },
        ],
    },
];

export const dataServices = [
    {
        id: 1,
        title: "Web Development",
        title_es: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            "Custom web development",
            "Responsive design and development",
            "SEO optimization",
            "Web application development",
            "Content management",
            "E-commerce development",
            "Continuous maintenance and support",
        ],
        features_es: [
            "Desarrollo web a medida",
            "Diseño y desarrollo responsivo",
            "Optimización SEO",
            "Desarrollo de aplicaciones web",
            "Gestión de contenidos",
            "Desarrollo de e-commerce",
            "Mantenimiento y soporte continuo",
        ],
    },
    {
        id: 2,
        title: "Content Creation",
        title_es: "Creación de Contenido",
        icon: <BellPlus />,
        features: [
            "Content creation",
            "Social media management",
            "SEO optimization",
            "Content marketing",
            "Copywriting",
            "Graphic design",
        ],
        features_es: [
            "Creación de contenido",
            "Gestión de redes sociales",
            "Optimización SEO",
            "Marketing de contenido",
            "Copywriting",
            "Diseño gráfico",
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        title_es: "Diseño UI/UX",
        icon: <Brush />,
        features: [
            "Intuitive design for a fluid user experience",
            "Interactive prototyping to visualize the interface",
            "User research to understand needs and expectations",
            "Optimization of usability to improve accessibility",
            "Usability testing to evaluate the experience",
            "Responsive design to adapt to different devices",
        ],
        features_es: [
            "Diseño intuitivo para una experiencia de usuario fluida",
            "Prototipado interactivo para visualizar la interfaz",
            "Investigación de usuario para entender necesidades y expectativas",
            "Optimización de usabilidad para mejorar la accesibilidad",
            "Pruebas de usabilidad para evaluar la experiencia",
            "Diseño responsivo para adaptarse a diferentes dispositivos",
        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Phone",
        title_es: "Teléfono",
        subtitle: "+57 3053924819",
        subtitle_es: "+57 3053924819",
        link: "tel:+573053924819",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        title_es: "Github",
        subtitle: "LFDIAZDEV2209",
        subtitle_es: "LFDIAZDEV2209",
        link: "github.com/LFDIAZDEV2209",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        title_es: "Correo",
        subtitle: "diazf7583@gmail.com",
        subtitle_es: "diazf7583@gmail.com",
        link: "mailto:diazf7583@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Hector",
        name_es: "Héctor",
        description: "He is a person with formidable ingenuity, capable of overcoming any challenge.",
        description_es: "Es una persona con un ingenio formidable capaz de avanzar sobre los retos que se le presenten.",
        imageUrl: "/hector.jpg",
    },
    {
        id: 2,
        name: "Sheyla Samur",
        name_es: "Sheyla Samur",
        description: "I admire the way she handles herself in the world of technology, always with a desire to learn and improve.",
        description_es: "Admiro la forma en que se desenvuelve en el mundo de la tecnología, siempre con ganas de aprender y mejorar.",
        imageUrl: "/sheyla.jpg",
    },
    {
        id: 3,
        name: "Jholver Pardo",
        name_es: "Jholver Pardo",
        description: "Excellent student, learns quickly and is very responsible.",
        description_es: "Excelente estudiante, aprende rápido y es muy responsable.",
        imageUrl: "/jholver.jpg",
    },
    {
        id: 4,
        name: "Juan Contreras",
        name_es: "Juan Contreras",
        description: "Quality person, great professional.",
        description_es: "Calidad de persona, gran profesional.",
        imageUrl: "/juan.jpg",
    },
    {
        id: 5,
        name: "Luis Gamboa",
        name_es: "Luis Gamboa",
        description: "Example of a person who is always willing to help and learn.",
        description_es: "Ejemplo de una persona que siempre está dispuesta a ayudar y aprender.",
        imageUrl: "/luis.jpg",
    },
    {
        id: 6,
        name: "Sergio Himayrob",
        name_es: "Sergio Himayrob",
        description: "A strong and brave person, I have not met anyone as good as a professional as him.",
        description_es: "Alguien fuerte y valiente, no he conocido a alguien tan bueno como profesional como él.",
        imageUrl: "/sergio.jpg",
    },
];

export const introductionTexts = {
  en: {
    hello: "Hello, I'm",
    role: "FullStack Developer",
    contact: "Contact Me",
    download: "Download CV",
  },
  es: {
    hello: "Hola, soy",
    role: "Desarrollador FullStack",
    contact: "Contáctame",
    download: "Descargar CV",
  },
};