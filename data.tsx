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
        name: "Experiencia",
        icon: <Briefcase />,
        description: " 1 year of experience",
    },
    {
        id: 2,
        name: "Social",
        icon: <UsersRound />,
        description: "Friendly and eager to learn",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "50+ projects completed",
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
        url: "/family-2.jpg",
    },
    {
        id: 3,
        url: "/giuliana.jpg",
    },
    {
        id: 4,
        url: "/my-love.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Management of Liquors",
        image: "/licores.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/LICORES_SOFT",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Audio Recorder",
        image: "/grabadora.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/voice-recorder",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "eCommerce Website",
        image: "/ecommerce.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/eCommerce-Clothes-WEB",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Heroes Cards",
        image: "/heroes.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/heroes-cards-json",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Arena Fighter",
        image: "/arena.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/arena-heroes",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "LMS Platform",
        image: "/lms.png",
        urlGithub: "https://github.com/LFDIAZDEV2209/LMS-PORTAL",
        urlDemo: "#!",
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
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom web development",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "SEO optimization",
            },
            {
                name: "Web application development",
            },
            {
                name: "Content management",
            },
            {
                name: "E-commerce development",
            },
            {
                name: "Continuous maintenance and support",
            },
        ],
    },
    {
        id: 2,
        title: "Content Creation",
        icon: <BellPlus />,
        features: [
            {
                name: "Original content writing",
            },
            {
                name: "Creation of attractive and dynamic videos",
            },
            {
                name: "Graphic design for an impactful image",
            },
            {
                name: "Professional text editing and visual materials",
            },
            {
                name: "Effective content marketing strategies",
            },
            {
                name: "Production of informative and entertaining podcasts",
            },
            {
                name: "Generation of clear and visually attractive infographics",
            },
            {
                name: "Professional photography to capture exceptional moments",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Intuitive design for a fluid user experience",
            },
            {
                name: "Interactive prototyping to visualize the interface",
            },
            {
                name: "User research to understand needs and expectations",
            },
            {
                name: "Optimization of usability to improve accessibility",
            },
            {
                name: "Usability testing to evaluate the experience",
            },
            {
                name: "Responsive design to adapt to different devices",
            },
        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+57 3053924819",
        link: "tel:+573053924819",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "LFDIAZDEV2209",
        link: "github.com/LFDIAZDEV2209",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "diazf7583@gmail.com",
        link: "mailto:diazf7583@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Hector",
        description:
            "Es una persona con un ingenio formidable capaz de avanzar sobre los retos que se le presenten",
        imageUrl: "/hector.jpg",
    },
    {
        id: 2,
        name: "Sheyla Samur",
        description:
            "En espera de testimonio",
        imageUrl: "/sheyla.jpg",
    },
    {
        id: 3,
        name: "Jholver Pardo",
        description:
            "En espera de testimonio",
        imageUrl: "/jholver.jpg",
    },
    {
        id: 4,
        name: "Juan Contreras",
        description:
            "En espera de testimonio",
        imageUrl: "/juan.jpg",
    },
    {
        id: 5,
        name: "Luis Gamboa",
        description:
            "En espera de testimonio",
        imageUrl: "/luis.jpg",
    },
    {
        id: 6,
        name: "Sergio Himayrob",
        description:
            "En espera de testimonio",
        imageUrl: "/sergio.jpg",
    },
];