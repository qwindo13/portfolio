import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { container, listItem } from "@/animations/animations";
import useMousePosition from "@/utils/useMousePosition";

export default function Hero() {
    const opacityRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: opacityRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

    return (
        <><div className="absolute  top-0 h-screen w-screen" />

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
                        Hello, I&apos;m <br></br><a className="text-primary">Miguel Ferreira</a>.
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
                            <motion.span className="rounded-full border-white border h-10 w-10">

                            </motion.span>
                        </motion.span>
                    </Link>
                </motion.div>
            </section></>
    );
}