import Image from "next/image";
import { motion } from "framer-motion"
import { container, listItem } from "@/animations/animations";

export default function About() {
    return (
        <motion.section id="about" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div
                className="md:sticky top-24 w-full"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="text-6xl md:text-7xl">About me</h2>
            </motion.div>

            <motion.div className="flex flex-col flex-nowrap w-full">
                <motion.div
                    className="grid gap-10 w-100 overflow-hidden grid-cols-2 grid-rows-2 grid-rows-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="col-span-2 row-span-1 animate-fade-in-down bottom-8">

                        <p className="text-xl md:text-2xl opacity-70 ">I am a Porto-based front-end developer, passionate about crafting elegant and effective design solutions to tackle complex challenges.</p>
                        <p className="text-xl md:text-2xl opacity-70 ">When I am not in front of my computer,  I like to stay active by going to the gym, riding my motorcycle, and exploring the outdoors.</p>

                    </motion.div>

                    <motion.div className="col-span-1 row-span-2 relative" variants={listItem}>
                        <Image height={500} width={500} className="object-cover h-full rounded-2xl" src="/assets/images/about-me/1.jpg" alt="about-me"/>
                    </motion.div>
                    <motion.div className="col-span-1 row-span-1 relative" variants={listItem}>
                        <Image height={500} width={500} className="object-cover h-full rounded-2xl" src="/assets/images/about-me/2.jpg" alt="about-me"/>
                    </motion.div>
                    <motion.div className="col-span-1 row-span-1 relative" variants={listItem}>
                        <Image height={500} width={500}  className="object-cover h-full rounded-2xl" src="/assets/images/about-me/4.jpg" alt="about-me"/>
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.section >
    )
}