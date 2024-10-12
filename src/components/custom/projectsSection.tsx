"use client";

import NotFound from "@/components/custom/404";
import {BackToHomeButton} from "@/components/custom/BackToHomeButton";
import {motion} from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {useParams} from "next/navigation";
import {projects, socialLinks} from "@/app/data";
import {ChevronLeft, ChevronRight, LinkedinIcon, MailIcon} from "lucide-react";
import Link from "next/link";
import {PiLinktreeLogo} from "react-icons/pi";
import {FaGithub} from "react-icons/fa6";
import {CustomBadge} from "@/components/custom/CustomBadge";

const CustomArrow = ({direction, onClick}: { direction: 'next' | 'prev', onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
                direction === 'next' ? 'right-4' : 'left-4'
            } bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            aria-label={direction === 'next' ? 'Next image' : 'Previous image'}
        >
            {direction === 'next' ? (
                <ChevronRight className="w-6 h-6"/>
            ) : (
                <ChevronLeft className="w-6 h-6"/>
            )}
        </button>
    )
}

export const ProjectsSection = () => {
    const {id} = useParams()
    const project = projects.find(p => p.id === id)

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrow direction="next"/>,
        prevArrow: <CustomArrow direction="prev"/>,
    }

    return (!project)
        ? (<NotFound/>)
        : (
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
                <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800 backdrop-blur-sm bg-gray-900/50 fixed w-full z-10">
                    <BackToHomeButton/>
                </header>
                <main className="grow pt-14 pb-8 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        {
                            project.images.length == 0
                                ? (<div className="mb-8 relative"></div>)
                                : (<div className="mb-8 relative">
                                    <Slider {...sliderSettings}>
                                        {project.images.map((image, index) => (
                                            <div key={index} className="outline-none">
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} - Image ${index + 1}`}
                                                    width={1200}
                                                    height={600}
                                                    className="rounded-lg shadow-lg object-cover w-full h-[600px]"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>)
                        }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <Card className="relative bg-gray-800/50 border-gray-700">
                                    <CardContent className="p-6">
                                        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                            {project.title}
                                        </h1>
                                        <p className="text-gray-300 mb-6"
                                           dangerouslySetInnerHTML={{__html: project.longDescription}}/>
                                        <h2 className="text-xl font-semibold mb-2 text-purple-400">Key Features</h2>
                                        <ul className="list-disc pl-5 mb-6 space-y-1">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="text-gray-300">{feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CustomBadge badge={project.badge}/>
                                </Card>
                            </div>
                            <div>
                                <Card className="bg-gray-800/50 border-gray-700">
                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-semibold mb-4 text-blue-400">Project Details</h2>
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold mb-2 text-gray-200">Technologies Used</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                                    {tech}
                                                </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </main>
                <footer className="flex flex-col-reverse gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
                    <p className="text-xs text-gray-400">© 2024 Bouzidi Mohamed Ali. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link className="text-xs hover:text-gray-300 transition-colors"
                              target="_blank"
                              href={socialLinks.linktree}>
                            <PiLinktreeLogo className="h-6 w-6"/>
                            <span className="sr-only">Linktree</span>
                        </Link>
                        <Link className="text-xs hover:text-gray-300 transition-colors"
                              target="_blank"
                              href={socialLinks.github}>
                            <FaGithub className="h-6 w-6"/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link className="text-xs hover:text-gray-300 transition-colors"
                              target="_blank"
                              href={socialLinks.linkedin}>
                            <LinkedinIcon className="h-6 w-6"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link className="text-xs hover:text-gray-300 transition-colors"
                              target="_blank"
                              href={socialLinks.email}>
                            <MailIcon className="h-6 w-6"/>
                            <span className="sr-only">Email</span>
                        </Link>
                    </nav>
                </footer>
            </div>
        )
}
