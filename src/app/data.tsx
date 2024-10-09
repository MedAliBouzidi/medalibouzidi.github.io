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

export const navBarItems = ["About", "Skills", "Experiences", "Projects", "Resume"];

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
        "longDescription": "Hotel-X is a robust and feature-rich hotel management solution designed to streamline administrative tasks for hotel staff. Built with Spring Boot and Angular, it ensures smooth operation of booking systems, feedback management, and promotional offers. The system is secured with Spring Security, providing a seamless experience for both hotel staff and guest.",
        "technologies": [
            "Spring Boot",
            "Spring Security",
            "Angular",
            "Tailwind CSS",
            "MySQL",
            "Git",
            "GitHub",
            "Figma"
        ],
        "features": [
            "Create and manage offers",
            "Manage room reservations",
            "Handle guest feedback",
            "User authentication and security"
        ],
        "images": []
    },
    {
        "id": "d8d0e444-f696-48bd-80c2-c3e5929539bd",
        "title": "Car Parking Reservation App",
        "description": "A mobile solution that allows users to reserve parking spots in advance, reducing hassle and ensuring guaranteed parking availability in high-demand areas.",
        "longDescription": "The Car Parking Reservation app is a mobile solution developed with Flutter and Firebase to provide users with the convenience of reserving parking spaces before arrival. The app uses real-time databases to monitor parking spot availability and integrates push notifications to update users on their reservations. Its intuitive UI ensures smooth user experience.",
        "technologies": [
            "Flutter",
            "Firebase",
            "Git",
            "GitHub"
        ],
        "features": [
            "Reserve parking spots",
            "Real-time parking availability",
            "Push notifications for reservation updates"
        ],
        "images": []
    },
    {
        "id": "dc3c4987-19b7-4453-87cf-8e0e43b79cb5",
        "title": "CosmoGlowy",
        "description": "A fully functional e-commerce platform for cosmetics, offering a seamless online shopping experience with integrated inventory management systems.",
        "longDescription": "CosmoGlowy is an e-commerce platform tailored for the cosmetics market, built with the MERN stack (MongoDB, Express, React, NodeJS). It offers real-time inventory management. The platform is designed to handle high traffic loads, ensuring a smooth shopping experience across desktop and mobile platforms.",
        "technologies": [
            "React",
            "ExpressJS",
            "NodeJS",
            "MongoDB",
            "Bootstrap",
            "Git",
            "GitHub"
        ],
        "features": [
            "Product catalog",
            "Real-time inventory management",
            "User-friendly product catalog with filtering and sorting",
            "User reviews and ratings",
            "User account and order history management"
        ],
        "images": []
    },
    {
        "id": "cc7a4a4c-28e8-40aa-91ed-6414a877c783",
        "title": "Shrink-It",
        "description": "A fast and reliable URL shortening service that offers quick link generation.",
        "longDescription": "Shrink-It is a lightweight, scalable URL shortening service designed to convert long URLs into easily manageable links. Built with Flask and React, Shrink-It provides quick and reliable link generation while using MongoDB for persistent storage. With an intuitive front-end interface, it offers users the ability to manage their shortened links and prepare for future integration of analytics features.",
        "technologies": [
            "Flask",
            "React",
            "MongoDB",
            "Tailwind CSS",
            "Git",
            "GitHub"
        ],
        "features": [
            "URL shortening",
            "Custom link creation",
            "Copy link functionality"
        ],
        "images": []
    },
    {
        "id": "804de677-48f5-4638-b923-5466bcfdd751",
        "title": "YouTube Unsub",
        "description": "A mobile app for batch-unsubscribing from YouTube channels, simplifying subscription management.",
        "longDescription": "YouTube Unsub is designed to help users quickly and efficiently manage their YouTube subscriptions. Built with Flutter and leveraging SQLite for local storage, the app integrates with Google's authentication and YouTube's API to allow users to batch-unsubscribe from multiple channels simultaneously. The app provides an intuitive interface for sorting, selecting, and managing subscriptions, simplifying a previously time-consuming process.",
        "technologies": [
            "Flutter",
            "SQLite",
            "Google Authentication",
            "YouTube API"
        ],
        "features": [
            "Batch-unsubscribe from channels",
            "Google account integration",
            "YouTube API integration"
        ],
        "images": []
    },
    {
        "id": "03da07a1-d2f0-497a-b24f-0f9a77e113ef",
        "title": "Portfolio",
        "description": "A personal portfolio highlighting my skills and projects, featuring a responsive design and interactive user experience.",
        "longDescription": "This personal portfolio is built with NextJS and Tailwind CSS, featuring a clean and modern UI to highlight my skills and projects. It provides an interactive and responsive experience across different devices, with GitHub Actions integrated for continuous deployment. The portfolio offers project showcases, and downloadable resume options.",
        "technologies": [
            "NextJS",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "GitHub Actions"
        ],
        "features": [
            "Responsive design",
            "Project showcase",
            "Interactive user experience",
            "Continuous integration using GitHub Actions"
        ],
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
];

export const socialLinks = {
    linktree: "https://linktr.ee/BouzidiMedAli",
    github: "https://github.com/MedAliBouzidi",
    linkedin: "https://www.linkedin.com/in/bouzidi-med-ali/",
    email: "mailto:bouzidi.medali20@gmail.com",
}

export const githubStats = "https://github-readme-stats-sigma-eight-43.vercel.app/api?username=MedAliBouzidi&hide=contribs,issues&show_icons=true&rank_icon=github&theme=transparent";
