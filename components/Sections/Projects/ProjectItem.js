import React, { useRef, useEffect, useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { container, listItem } from "@/animations/animations";
import { ModalContext } from '@/context/ModalContext';

export default function ProjectItem(props) {

    const videoRef = useRef(null);
    const { expandedProjectId, setExpandedProjectId } = useContext(ModalContext); // Use new context values
    const isExpanded = props.id === expandedProjectId; // Determine if this project is expanded

    const toggleExpand = () => {
        setExpandedProjectId(props.id); // Expand this project
    };

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setExpandedProjectId(null);
            }
        };

        // Disable scroll when expanded, enable when collapsed
        if (isExpanded) {
            document.body.classList.add('overflow-hidden');
            window.addEventListener('keydown', handleKeyDown);
            // Delayed play to ensure video element is available
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play().catch(e => {
                        // Handle errors for video play here (like logging)
                        console.error("Error playing video:", e);
                    });
                }
            }, 0);
        } else {
            document.body.classList.remove('overflow-hidden');
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isExpanded]);



    return (
        <motion.div>

            <motion.div
                 data-lenis-prevent={isExpanded ? "true" : undefined}
                className={`flex flex-col gap-5 bg-white bg-opacity-10 hover:bg-opacity-100 hover:bg-[#F5D042] rounded-2xl transition-colors duration-500 w-full aspect-[4/3] cursor-pointer overflow-hidden ${isExpanded ? "fixed inset-0 w-screen !bg-black h-screen z-10  !overflow-y-scroll aspect-auto cursor-auto rounded-none" : ""}`}
                transition={{
                    duration: 0.5,
                    layout: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] } // Spring animation for layout

                }}
                layout
                onClick={toggleExpand} // Toggle expansion on click
                onMouseEnter={() => videoRef.current.play()}
                onMouseLeave={() => videoRef.current.pause()}
            >
                {/* BACKGROUND IMG */}
                {isExpanded && (
                    <motion.div
                        className="absolute top-0 left-0 right-0 w-full h-5/6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <motion.div className="w-full h-full !bg-cover" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%), url('/assets/images/projects/${props.bgImage}') no-repeat fixed` }} />
                    </motion.div>
                )}

                <motion.div layout className='w-full h-full flex flex-col items-center relative'>

                    {/* TITLE & DESC */}
                    {isExpanded && (
                        <motion.section
                            initial="hidden"
                            whileInView="visible"
                            variants={container}
                            viewport={{ once: true }}
                            className="py-[100px] pt-[200px]"
                        >
                            <motion.div className="w-full">
                                <motion.h2 className="text-5xl md:text-8xl">{props.title}</motion.h2>
                            </motion.div>

                            <motion.div className="w-full flex flex-col gap-5">
                                <motion.span className="text-xl md:text-lg leading-relaxedopacity-60 opacity-70">{props.job}</motion.span>
                                <p className="text-xl md:text-2xl opacity-70 leading-7 font-normal">{props.descOne}</p>
                            </motion.div>
                        </motion.section >
                    )}

                    {/* MAIN VIDEO */}
                    <motion.div
                        layoutId={`${props.mainVideo}`}
                        className={`h-full transform transition-sm duration-700 justify-center ease-out items-center overflow-hidden flex ${props.classes} ${isExpanded ? "overflow-visible" : ""}`}

                    >
                        <motion.video
                            layout
                            src={`/assets/videos/projects/${props.mainVideo}`}
                            className={` h-fit shadow-lg ${isExpanded ? "rounded-2xl" : "rounded-xl"}`}
                            alt={props}
                            muted
                            loop
                            playsInline
                            controls={isExpanded}
                            ref={videoRef} // Reference to the video element
                        >
                            Your browser does not support video.
                        </motion.video>
                    </motion.div>

                    {/* BUILT WITH */}
                    {isExpanded && (
                        <section className="items-center ">
                            <div className="w-full">
                                <h2 className="text-5xl md:text-6xl">Built with</h2>
                            </div>

                            <div className="flex flex-row flex-wrap md:flex-nowrap gap-10 w-full ">
                                {props.tech.map((tech, index) => (
                                    <span className="text-2xl md:text-3xl opacity-70 w-max" key={index}>{tech}</span>
                                ))}
                            </div>
                        </section >
                    )}

                    {/* ABOUT */}
                    {isExpanded && (
                        <section className="gap-32">
                            <div className="w-full md:sticky top-24 flex flex-col gap-10">
                                <h5 className="text-5xl md:text-6xl">About</h5>
                                <div>
                                    {props.about && props.about.map((about, index) => (
                                        <p className="text-xl md:text-2xl opacity-70" key={index}>{about}</p>
                                    ))}

                                </div>
                                {props.website &&
                                    <a href={`${props.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-2xl md:text-lg font-medium rounded-md text-white">
                                        Visit Website
                                        <svg className="ml-2 h-5 w-5 transform transition-transform hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M14.707 10.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 1 0 0 2h8.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                }

                            </div>
                            {props.mobileImage && (
                                <div className="flex flex-col gap-10 w-full justify-end">
                                    {props.mobileImage.map((image, index) => (
                                        <img key={index} className="rounded-2xl" src={`/assets/images/projects/${image}`} alt={`mobile-image-${index}`} />
                                    ))}
                                </div>
                            )}

                        </section >
                    )}

                    {/* INFO */}
                    {isExpanded && (
                        <div className='w-full h-full flex flex-col items-center relative'>
                            <section className="py-[100px] pt-[200px] flex flex-col">
                                <div className='flex justify-between w-full'>
                                    <div className="w-full">
                                        <motion.h2 className="text-xl md:text-4xl">{props.infoTitle}</motion.h2>
                                    </div>

                                    <div className="w-full">
                                        <p className="text-xl md:text-2xl opacity-70 leading-7 font-normal">{props.infoDesc}</p>
                                    </div>
                                </div>
                            </section >
                            {props.infoImage && (
                            <section className='pt-0 md:px-'>
                                <Image
                                    src={`/assets/images/projects/${props.infoImage}`}
                                    className='rounded-2xl w-full h-full object-cover'
                                    cover
                                    width={1920}
                                    height={1080}
                                    alt="background-cover"
                                />
                            </section>
                            )}
                        </div>
                    )}
                </motion.div>
            </motion.div>


            <motion.div className='mt-5'>
                <motion.h2 className="text-xl" >{props.title}</motion.h2>
                <motion.div className="flex">
                    <motion.span className="opacity-70 text-lg">{props.job}</motion.span>
                </motion.div>
            </motion.div>

        </motion.div>
    );
}
