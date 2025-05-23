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
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Navegando Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sitios Web Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Proyectos Web Dinámicos",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];

export const technologyIcons = {
  "HTML": <SiHtml5 className="w-8 h-8 text-orange-500" />,
  "CSS": <SiCss3 className="w-8 h-8 text-blue-500" />,
  "JavaScript": <SiJavascript className="w-8 h-8 text-yellow-400" />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
  "React": <SiReact className="w-8 h-8 text-blue-400" />,
  "TypeScript": <SiTypescript className="w-8 h-8 text-blue-600" />,
  "Node JS": <SiNodedotjs className="w-8 h-8 text-green-500" />,
  "Mongo DB": <SiMongodb className="w-8 h-8 text-green-600" />,
  "Python": <SiPython className="w-8 h-8 text-blue-600" />,
  "MySQL": <SiMysql className="w-9 h-9 text-blue-700" />,
  "C#": <CSharpIcon className="w-9 h-9 text-purple-600" />,
  "Django": <SiDjango className="w-8 h-8 text-green-700" />
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
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <BellPlus />,
        features: [
            {
                name: "Redacción de contenido original y de calidad",
            },
            {
                name: "Creación de vídeos atractivos y dinámicos",
            },
            {
                name: "Diseño gráfico para una imagen impactante",
            },
            {
                name: "Edición profesional de textos y materiales visuales",
            },
            {
                name: "Estrategias de marketing de contenidos efectivas",
            },
            {
                name: "Producción de podcasts informativos y entretenidos",
            },
            {
                name: "Generación de infografías claras y visualmente atractivas",
            },
            {
                name: "Fotografía profesional para capturar momentos excepcionales",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];

export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 3053924819",
        link: "tel:+573053924819",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/LFDIAZDEV2209",
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
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];