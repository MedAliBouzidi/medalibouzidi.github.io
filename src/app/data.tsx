import {CodeIcon, DatabaseIcon, LayersIcon} from "lucide-react";
import {
    BiLogoAngular,
    BiLogoBootstrap,
    BiLogoDocker,
    BiLogoFirebase,
    BiLogoFlask,
    BiLogoFlutter,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoPython,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss,
    BiLogoTypescript
} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {SiGit, SiGithub, SiGithubactions, SiLinux, SiMariadb, SiMongodb} from "react-icons/si";
import {v4} from "uuid";

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
        "id": "ebee737a-1ba9-46ca-a24d-6153805fc641",
        "title": "Hotel-X",
        "description": "A dynamic hotel management system that streamlines the process of managing offers, guest feedback, and room reservations for seamless hotel operations.",
        "longDescription": "Hotel-X is designed to help hotel staff efficiently manage room bookings, customer feedback, and special offers, providing an all-in-one solution for hotel operations. It ensures a smooth and efficient experience for both the staff and guests.",
        "technologies": ["Spring Boot", "Spring Security", "Angular", "Tailwind CSS", "MySQL", "Git", "GitHub", "Figma"],
        "features": ["Manage room reservations", "Handle guest feedback", "Create and manage offers", "User authentication and security"],
        "images": []
    },
    {
        "id": "d8d0e444-f696-48bd-80c2-c3e5929539bd",
        "title": "Car Parking Reservation App",
        "description": "A mobile solution that allows users to reserve parking spots in advance, reducing hassle and ensuring guaranteed parking availability in high-demand areas.",
        "longDescription": "The Car Parking Reservation app is designed to allow users to find and book parking spaces before arriving at their destination, reducing time spent searching for available spots and offering a stress-free parking experience.",
        "technologies": ["Flutter", "Firebase", "Git", "GitHub"],
        "features": ["Reserve parking spots", "Real-time parking availability", "Push notifications for reservation updates"],
        "images": []
    },
    {
        "id": "dc3c4987-19b7-4453-87cf-8e0e43b79cb5",
        "title": "CosmoGlowy",
        "description": "A fully functional e-commerce platform for cosmetics, offering a seamless online shopping experience with integrated inventory management systems.",
        "longDescription": "CosmoGlowy provides users with a convenient way to browse, purchase, and manage cosmetic products online, offering a smooth checkout process and integrated inventory system for store owners.",
        "technologies": ["React", "ExpressJS", "NodeJS", "MongoDB", "Bootstrap", "Git", "GitHub"],
        "features": ["Product catalog", "Secure checkout", "Real-time inventory management", "User reviews and ratings"],
        "images": []
    },
    {
        "id": "cc7a4a4c-28e8-40aa-91ed-6414a877c783",
        "title": "Shrink-It",
        "description": "A fast and reliable URL shortening service that offers quick link generation.",
        "longDescription": "Shrink-It is a service that allows users to shorten long URLs into more manageable links. The platform offers speed and ease of use for link creation, with the potential to add analytics and tracking for future improvements.",
        "technologies": ["Flask", "React", "MongoDB", "Tailwind CSS", "Git", "GitHub"],
        "features": ["URL shortening", "Custom link creation", "Copy link functionality"],
        "images": []
    },
    {
        "id": "804de677-48f5-4638-b923-5466bcfdd751",
        "title": "YouTube Unsub",
        "description": "A mobile app for batch-unsubscribing from YouTube channels, simplifying subscription management.",
        "longDescription": "YouTube Unsub allows users to easily manage their YouTube subscriptions by selecting multiple channels and unsubscribing from them in a single action. It simplifies the process of managing large subscription lists.",
        "technologies": ["Flutter", "SQLite", "Google Authentication", "YouTube API"],
        "features": ["Batch-unsubscribe from channels", "Google account integration", "YouTube API integration"],
        "images": []
    },
    {
        "id": "03da07a1-d2f0-497a-b24f-0f9a77e113ef",
        "title": "Portfolio",
        "description": "A personal portfolio highlighting my skills and projects, featuring a responsive design and interactive user experience.",
        "longDescription": "This personal portfolio showcases my technical skills, projects, and professional experience. Built with NextJS and Tailwind CSS, it features a clean, modern interface and responsive design for both mobile and desktop devices.",
        "technologies": ["NextJS", "Tailwind CSS", "Git", "GitHub", "GitHub Actions"],
        "features": ["Responsive design", "Project showcase", "Interactive user experience", "Continuous integration using GitHub Actions"],
        "images": []
    }
];

export const technicalSkills = [
    {"key": "spring-boot", "name": "Spring Boot", icon: (<BiLogoSpringBoot className="h-10 w-10 text-white"/>)},
    {"key": "angular", "name": "Angular", icon: (<BiLogoAngular className="h-10 w-10 text-white"/>)},
    {"key": "flutter", "name": "Flutter", icon: (<BiLogoFlutter className="h-10 w-10 text-white"/>)},
    {"key": "reactjs", "name": "ReactJS", icon: (<BiLogoReact className="h-10 w-10 text-white"/>)},
    {"key": "nextjs", "name": "NextJS", icon: (<TbBrandNextjs className="h-10 w-10 text-white"/>)},
    {"key": "flask", "name": "Flask", icon: (<BiLogoFlask className="h-10 w-10 text-white"/>)},
    {"key": "java", "name": "Java", icon: (<BiLogoJava className="h-10 w-10 text-white"/>)},
    {"key": "python", "name": "Python", icon: (<BiLogoPython className="h-10 w-10 text-white"/>)},
    {"key": "javascript", "name": "JavaScript", icon: (<BiLogoJavascript className="h-10 w-10 text-white"/>)},
    {"key": "typescript", "name": "Typescript", icon: (<BiLogoTypescript className="h-10 w-10 text-white"/>)},
    {"key": "tailwind-css", "name": "Tailwind CSS", icon: (<BiLogoTailwindCss className="h-10 w-10 text-white"/>)},
    {"key": "bootstrap", "name": "Bootstrap", icon: (<BiLogoBootstrap className="h-10 w-10 text-white"/>)},
    {"key": "mongodb", "name": "MongoDB", icon: (<SiMongodb className="h-10 w-10 text-white"/>)},
    {"key": "mariadb", "name": "MariaDB", icon: (<SiMariadb className="h-10 w-10 text-white"/>)},
    {"key": "firebase", "name": "Firebase", icon: (<BiLogoFirebase className="h-10 w-10 text-white"/>)},
    {"key": "docker", "name": "Docker", icon: (<BiLogoDocker className="h-10 w-10 text-white"/>)},
    {"key": "git", "name": "Git", icon: (<SiGit className="h-10 w-10 text-white"/>)},
    {"key": "github", "name": "GitHub", icon: (<SiGithub className="h-10 w-10 text-white"/>)},
    {"key": "github-actions", "name": "GitHub Actions", icon: (<SiGithubactions className="h-10 w-10 text-white"/>)},
    {"key": "linux-os", "name": "Linux OS", icon: (<SiLinux className="h-10 w-10 text-white"/>)},
];

export const softSkills = [
    "Clean Code", "Problem Solver", "Curiosity", "Adaptability", "Time Management", "Agile Scrum"
];

// Todo: Update experiences
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
