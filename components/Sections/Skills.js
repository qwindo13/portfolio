import { motion } from "framer-motion";
import { container, listItem } from "@/animations/animations";

export default function Skills() {
    const skillCategories = [
        {
            title: "Front-End Development",
            skills: ["HTML5", "CSS3", "Javascript", "React", "Next.js", "Bootstrap", "Tailwind", "Sass/SCSS", "Jekyll", "Responsive Design", "Performance Optimization"]
        },
        {
            title: "Content Management Systems (CMS)",
            skills: ["Wordpress", "Shopify", "Prestashop", "Joomla"]
        },
        {
            title: "Project Management and Methodology",
            skills: ["Agile Methodologies", "Git"]
        },
        {
            title: "Design",
            skills: ["UX/UI Design", "Figma", "Photoshop", "InDesign", "Lightroom", "Gimp"]
        },
        {
            title: "Other Skills",
            skills: ["Photography", "Graphic Design"]
        }
    ];

    return (
        <motion.section id="skills" className="h-screen">
            <motion.div
                className="md:sticky top-24 w-full"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="text-6xl md:text-7xl">Skills</h2>
            </motion.div>

            <motion.div className="w-full" variants={listItem}>
                <div className="grid gap-16 w-100 overflow-hidden grid-cols-1 ">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="w-full"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            key={index}
                        >
                            <h3 className="text-2xl">{category.title}</h3>
                            <motion.div className="skill-list flex flex-row flex-wrap" variants={listItem}>
                                {category.skills.map(skill => <p key={skill}>{skill}</p>)}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
