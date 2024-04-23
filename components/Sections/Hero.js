import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { container, listItem } from "@/animations/animations";


export default function Hero() {
    const opacityRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: opacityRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);



    return (
        <>
        <div className="absolute  top-0 h-screen w-screen" />

            <section className="flex-col py-[50px] md:py-[100px]  h-screen justify-center" ref={opacityRef} >

                <motion.div
                    className="flex flex-col gap-5 md:gap-10 z-10"
                    initial="hidden"
                    animate="visible"
                    variants={container}
                >
                    <motion.h2
                        className="text-7xl md:text-9xl font-semibold"
                        variants={listItem}
                        data-cursor-type='hover'
                    >
                        Hello, I&apos;m <br></br>Miguel Ferreira.
                    </motion.h2>
                    <motion.h2
                        className="text-3xl md:text-6xl font-semibold flex flex-col"
                        variants={listItem}
                    >
                        <span className="">I&apos;m a Frontend Developer </span>
                        <span className="type-skills opacity-50 text-2xl md:text-5xl ">&amp; skilled in </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="fixed  right-8 bottom-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                    style={{ opacity, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link href="#work">
                        <motion.span className="flex flex-row gap-5 items-center">
                            <h5 className="!text-xl">Scroll to see my work</h5>
                            <motion.span className="rounded-full border-white border h-10 w-10 overflow-hidden flex items-center justify-center">
                            <motion.div
            animate={{
                y: [0, 40, 40, -100],  // Y position keyframes for vertical movement
            }}
            transition={{
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Ensure the loop starts over seamlessly
                duration: 2.5, // Duration for one full animation cycle
                ease: "easeInOut", // Smooth easing for the animation
                times: [0, 0.5, 0.99, 1] // Timing to control the position and scaling at specific points
            }}
            style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
        </motion.div>
                            </motion.span>
                        </motion.span>
                    </Link>
                </motion.div>
            </section></>
    );
}