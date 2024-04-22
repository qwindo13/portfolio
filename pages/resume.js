import { useEffect, useState } from "react"
import MainLayout from "@/layouts/MainLayout";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { container, listItem } from "@/animations/animations";

import jobList from "@/data/jobList";
import eduList from "@/data/educationList";
import awardList from "@/data/awardList";


export default function Resume() {
    const [jobData, setJobData] = useState([]);
    const [eduData, setEduData] = useState([]);
    const [awardData, setAwardData] = useState([]);
    useEffect(() => {
        setJobData(jobList);
        setEduData(eduList);
        setAwardData(awardList);
    }, [jobList, eduList, awardList]);
    return (
        <MainLayout 
        title="Resume | Miguel Ferreira - Frontend Dev"
        className="main-container h-screen overflow-auto"
        >
            <motion.section
                className="row flex-col gap-10 md:gap-16 w-full py-[50px] md:py-[100px] pt-[200px] md:pt-[200px]"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-6xl md:text-8xl font-semibold"
                    variants={listItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >Miguel Ferreira</motion.h2>

                <motion.div className="flex flex-col gap-5">
                    <p className="text-xl md:text-2xl leading-relaxed p-0">Frontend Developer and UI/UX Designer</p>
                    <span className="text-xl md:text-2xl opacity-70 leading-relaxed	p-0">I&apos;m someone who&apos;s always on the move and eager to tackle challenges, especially when it comes to problem-solving. My curiosity drives me to explore various techniques and platforms, constantly expanding my skillset. I&apos;m a great fit for any team, bringing enthusiasm and fresh ideas to the table, yet equally adept at shining in roles that require independent initiative and self-direction.</span>
                    <motion.div className="flex flex-row gap-10 pt-4">
                        <a href="https://www.linkedin.com/in/miguelantf/" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="linkedin" /></a>
                        <a href="https://github.com/miguel-antf" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="github"/></a>
                        <a href="https://www.instagram.com/miguelr.ferreira/" className="invert" target="_blank" rel="noopener noreferrer"><img height="28" width="28" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="instagram"/></a>
                    </motion.div>
                </motion.div>

            </motion.section >
            <section className="block">
                <motion.div className='resume flex flex-col md:grid md:grid-cols-12 gap-16 	'>
                    <motion.div className='col-span-1 md:col-span-4 '>
                        <motion.div className="sticky top-24">
                            <motion.div
                                className="flex flex-col gap-10 "
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl md:text-5xl">Awards</h3>
                                {awardData.map((award, index) => (
                                    <motion.div key={index} variants={listItem}>
                                        <h3 className='text-xl'>{award.award}</h3>
                                        <motion.div className='flex flex-col'>
                                            <span className='opacity-50  pb-2'>{award.date}</span>
                                            <span className="opacity-70">{award.description}</span>

                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div
                                className="flex flex-col gap-10 pt-12"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl">Education</h2>
                                {eduData.map((edu, index) => (
                                    <motion.div key={index}>
                                        <h3 className='text-xl'>{edu.course}</h3>
                                        <motion.div className='flex flex-col'>
                                            <span className='opacity-70 pb-2'>{edu.date}</span>
                                            <span className="opacity-70">{edu.school}</span>

                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    </motion.div>
                    <motion.div className='col-span-8'>
                        <motion.div
                            className="flex flex-col gap-10"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl">Experience</h2>
                            {jobData.map((job, index) => (
                                <motion.div className='job' key={index} variants={container} >
                                    <motion.div className='flex flex-col md:flex-row'>
                                        <h3 className='text-xl md:text-2xl'>{job.job}</h3>
                                        <h3 className='text-xl md:text-2xl bullet'>{job.company}</h3>
                                    </motion.div>
                                    <motion.div className='flex flex-col'>
                                        <motion.div className='flex flex-row pt-1 pb-2 gap-5'>
                                            <span className='opacity-50 '>{job.date}</span>
                                            <span className='opacity-50 flex '><MapPinIcon className="h-6" />{job.location}</span>
                                            <span className='opacity-50  flex'><BriefcaseIcon className="h-6 pr-1" />{job.type}</span>
                                        </motion.div>
                                        <span className="text-lg opacity-70">{job.description}</span>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

        </MainLayout>
    )
}