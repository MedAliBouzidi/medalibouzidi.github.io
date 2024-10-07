"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import Link from "next/link"
import {CalendarIcon, GithubIcon, LinkedinIcon, MailIcon, Menu, X} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
import {experiences, navBarItems, projects, skills} from "@/app/data";
import {useState} from "react";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const fadeInUp = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
        transition: {duration: 0.5}
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
            <header
                className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-800 backdrop-blur-sm bg-gray-900/50 fixed w-full z-20">
                <Link className="flex items-center justify-center" href="/">
                    <span className="text-2xl font-bold text-blue-500">M</span>
                </Link>
                <nav className="hidden md:flex space-x-4 ml-auto gap-4 sm:gap-6">
                    {navBarItems.map((item) => (
                        <Link key={item} className="text-gray-300 text-sm font-medium hover:text-blue-400 transition-colors"
                              href={`#${item.toLowerCase()}`}>
                            {item}
                        </Link>
                    ))}
                </nav>
                <Button
                    variant="ghost"
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                </Button>
            </header>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2}}
                        className="fixed inset-0 z-10 bg-gray-900 bg-opacity-95 md:hidden">
                        <nav className="flex flex-col items-center justify-center h-full space-y-8">
                            {navBarItems.map((item) => (
                                <Link key={item} className="text-gray-300 text-sm font-medium hover:text-blue-400 transition-colors"
                                      onClick={() => setMobileMenuOpen(false)}
                                      href={`#${item.toLowerCase()}`}>
                                    {item}
                                </Link>

                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            <main className="flex-1 pt-16">
                <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-gray-800">
                    <motion.div className="container px-4 md:px-6" {...fadeInUp}>
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                    Bouzidi Mohamed Ali
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
                                    Full Stack Developer passionate about creating web applications that make a difference.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Link href={"#contact"}>
                                    <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">Contact Me</Button>
                                </Link>
                                <Link href={"#projects"}>
                                    <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 border-gray-700 transition-colors">View
                                        Projects</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section id="skills" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-800/30 border-b border-gray-700">
                    <div className="container px-4 md:px-6 md:w-11/12 text-center">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600" {...fadeInUp}>
                            Skills
                        </motion.h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.3, delay: index * 0.1}}
                                >
                                    <Card
                                        className="bg-gray-700/50 border-gray-600 hover:border-green-500 transition-all hover:shadow-lg hover:shadow-green-500/10">
                                        <CardContent className="p-4">
                                            <p className="text-lg font-semibold text-white">{skill}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="experiences" className="flex justify-center w-full py-12 md:py-24 lg:py-32 border-b border-gray-800">
                    <div className="container px-4 md:px-6 md:w-11/12">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600" {...fadeInUp}>
                            Experiences
                        </motion.h2>
                        <div className="space-y-10">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row gap-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                >
                                    <div className="md:w-1/4 flex flex-col items-center md:items-start">
                                        {experience.icon}
                                        <h3 className="text-xl font-semibold text-white mt-2">{experience.title}</h3>
                                        <p className="text-gray-400">{experience.company}</p>
                                        <div className="flex items-center mt-2 text-gray-500">
                                            <CalendarIcon className="w-4 h-4 mr-2"/>
                                            <span>{experience.period}</span>
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <p className="text-gray-300">{experience.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="projects" className="flex justify-center w-full py-12 md:py-24 lg:py-32 border-b border-gray-800">
                    <div className="container px-4 md:px-6 md:w-11/12">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600" {...fadeInUp}>
                            Projects
                        </motion.h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                >
                                    <Card
                                        className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                                        <CardHeader>
                                            <CardTitle className="text-white">{project.title}</CardTitle>
                                            <CardDescription className="text-gray-400">{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Link href={`/projects/${project.id}`}>
                                                <Button variant="outline"
                                                        className="bg-gray-700/50 text-white hover:bg-gray-600 border-gray-600 transition-colors">
                                                    View Project
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-800/30">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-600" {...fadeInUp}>
                            Contact Me
                        </motion.h2>
                        <motion.form className="max-w-md mx-auto space-y-4" {...fadeInUp}>
                            <input
                                className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:border-pink-500 transition-colors"
                                placeholder="Name"/>
                            <input
                                className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:border-pink-500 transition-colors"
                                type="email" placeholder="Email"/>
                            <textarea
                                className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:border-pink-500 transition-colors"
                                placeholder="Message" rows={4}></textarea>
                            <Button type="submit"
                                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 transition-colors">Send
                                Message</Button>
                        </motion.form>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
                <p className="text-xs text-gray-400">© 2024 Bouzidi Mohamed Ali. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:text-gray-300 transition-colors"
                          target="_blank"
                          href="https://github.com/MedAliBouzidi">
                        <GithubIcon className="h-6 w-6"/>
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link className="text-xs hover:text-gray-300 transition-colors"
                          target="_blank"
                          href="https://www.linkedin.com/in/bouzidi-med-ali/">
                        <LinkedinIcon className="h-6 w-6"/>
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link className="text-xs hover:text-gray-300 transition-colors"
                          target="_blank"
                          href="mailto:bouzidi.medali20@gmail.com">
                        <MailIcon className="h-6 w-6"/>
                        <span className="sr-only">Email</span>
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
