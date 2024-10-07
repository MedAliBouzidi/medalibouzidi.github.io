import {projects} from "@/app/data";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {ProjectsSection} from "@/components/projectsSection";


export default function ProjectDetails() {
    return (<ProjectsSection/>)
}

export function generateStaticParams() {
    return projects.map(project => ({id: project.id}));
}
