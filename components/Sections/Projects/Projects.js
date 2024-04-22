import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion";
import { container, listItem } from "@/animations/animations";
import ProjectItem from "./ProjectItem";
import projectList from "@/data/projectList";


export default function Projects() {

    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        setProjectData(projectList);
    }, []);

    return (
        <section id="work" className="flex-col">
            <motion.div
                className="flex gap-10 lg:gap-16 flex-col md:flex-row"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className="w-full" variants={listItem}>
                    <h2 className="text-6xl md:text-7xl">My Work</h2>
                </motion.div>
                <motion.div className="w-full" variants={listItem}>
                    <p className="text-xl md:text-2xl opacity-70 leading-relaxed">A proactive approach to learning and development has resulted in a diverse portfolio of projects, ranging from personal endeavors to freelance work. Each project serves as a reflection of a passion for design and a dedication to pushing boundaries.</p>
                </motion.div>
            </motion.div>
            <motion.div className="row w-full">
                <motion.div
                    className="grid gap-10 w-100 overflow-hidden md:grid-cols-2 "
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projectData.map((project, index) => (
                        <motion.div variants={listItem} key={index}>
                            <ProjectItem
                                id={project.id}
                                mainVideo={project.mainVideo}
                                thumbnail={project.thumbnail}
                                bgImage={project.bgImage}
                                title={project.title}
                                job={project.job}
                                descOne={project.descOne}
                                mainImage={project.mainImage}
                                cardImage={project.cardImage}
                                bgColor={project.color}
                                wip={project.wip}
                                github={project.github}
                                website={project.website}
                                tech={project.tech}
                                about={project.about}
                                mobileImage={project.mobileImage}
                                infoTitle={project.infoTitle}
                                infoDesc={project.infoDesc}
                                infoImage={project.infoImage}
                                classes={`${project.type === 2 ? "max-w-none md:right-[-25%] bottom-[-40%] md:bottom-[-60%] lg:bottom-[-70%] w-[500px] md:w-[720px] lg:w-[720px] xl:w-[720px]" : "w-5/6 md:w-4/5 inset-x-1/2 left-[10%] bottom-[-5%] md:bottom-[-15%]"}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>

    )
}