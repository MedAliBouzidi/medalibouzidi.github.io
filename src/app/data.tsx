import {CodeIcon, DatabaseIcon, LayersIcon} from "lucide-react";

export const navBarItems = ["About", "Skills", "Experiences", "Projects", "Contact"];

export const projects: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    images: string[];
}[] = [
    {
        id: "project-1",
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
        longDescription: "This e-commerce platform provides a seamless shopping experience for customers and an intuitive management interface for store owners. Built with React for the frontend and Node.js for the backend, it offers features such as product browsing, cart management, secure checkout, and admin dashboard for inventory control.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        features: [
            "Responsive design for mobile and desktop",
            "User authentication and authorization",
            "Product search and filtering",
            "Shopping cart functionality",
            "Secure payment processing with Stripe",
            "Admin dashboard for inventory management"
        ],
        images: []
    },
    {
        id: "project-2",
        title: "Task Management App",
        description: "A React-based task manager with drag-and-drop functionality.",
        longDescription: "This task management application helps users organize their work efficiently. Built with React and featuring a drag-and-drop interface, it allows for easy task creation, prioritization, and status updates. The app includes features like task categorization, due dates, and progress tracking.",
        technologies: ["React", "Redux", "react-beautiful-dnd", "Firebase"],
        features: [
            "Intuitive drag-and-drop interface",
            "Task categorization and tagging",
            "Due date reminders",
            "Progress tracking and reporting",
            "Collaborative features for team projects",
            "Real-time updates using Firebase"
        ],
        images: [
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg"
        ]
    },
    {
        id: "project-3",
        title: "Weather Dashboard",
        description: "A weather app that fetches and displays data from a third-party API.",
        longDescription: "This weather dashboard provides users with up-to-date weather information for any location. Using a third-party weather API, it displays current conditions, forecasts, and other relevant meteorological data. The app features a clean, intuitive interface and supports multiple locations for easy comparison.",
        technologies: ["React", "Axios", "Chart.js", "OpenWeatherMap API"],
        features: [
            "Current weather conditions display",
            "5-day weather forecast",
            "Interactive weather maps",
            "Location search functionality",
            "Temperature unit conversion (Celsius/Fahrenheit)",
            "Responsive design for all devices"
        ],
        images: [
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg",
            "https://images.pexels.com/photos/18150916/pexels-photo-18150916/free-photo-of-woman-hand-pouring-water-and-brewing-coffee.jpeg"
        ]
    },
];

export const skills = ["Spring Boot ", "Angular ", "Flutter ", "ReactJS ", "Flask ", "Java", "Python",
    "JavaScript/Typescript", "MongoDB ", "MariaDB ", "Docker ", "Git/GitHub ", "Linux OS",
    "Clean Code ", "Problem Solver ", "Adaptability ", "Time Management ", "Agile Scrum"
];

export const experiences: {
    title: string;
    company: string;
    period: string;
    description: string;
    icon: JSX.Element;
}[] = [
    {
        title: "Junior Web Developer",
        company: "Tech Innovators Inc.",
        period: "Jan 2023 - Present",
        description: "Developed and maintained web applications using React and Node.js. Collaborated with the design team to implement responsive and accessible user interfaces.",
        icon: <CodeIcon className="w-6 h-6 text-gray-400"/>,
    },
    {
        title: "Web Development Intern",
        company: "Digital Solutions LLC",
        period: "Jun 2022 - Dec 2022",
        description: "Assisted in the development of client websites, gained hands-on experience with HTML, CSS, and JavaScript. Participated in code reviews and agile development processes.",
        icon: <LayersIcon className="w-6 h-6 text-purple-400"/>,
    },
    {
        title: "Freelance Web Designer",
        company: "Self-employed",
        period: "Jan 2022 - May 2022",
        description: "Created custom websites for small businesses, focusing on user-centric design and SEO optimization. Managed client relationships and project timelines.",
        icon: <DatabaseIcon className="w-6 h-6 text-green-400"/>,
    },
]
