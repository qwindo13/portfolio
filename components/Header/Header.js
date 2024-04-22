import { useEffect, useState, useContext } from 'react';
import { useScroll, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { LenisScroller } from '@/animations/smoothScroll';
import { ModalContext } from '@/context/ModalContext';
import Spline from '@splinetool/react-spline';
import { HamburguerIcon } from './HamburguerIcon';
import Button from "../UI/Button/Button";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const { expandedProjectId, setExpandedProjectId } = useContext(ModalContext);

  const closeModal = () => {
    setExpandedProjectId(null); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const MenuVariants = {
    open: { opacity: 1, height: "100vh" },
    closed: { opacity: 0, height: 0 },
  };

  useEffect(() => {
    scrollYProgress.onChange(v => setIsScrolling(v > 0.1)); // Scroll begins
    scrollYProgress.onChange(v => {
      if (v < 0.1) { // Scroll is back at top
        setIsScrolling(false);
      }
    });
  }, [scrollYProgress]);

  const menuItems = [
    { title: "Work", href: "#work" },
    { title: "Skills", href: "#skills" },
    { title: "About", href: "#about" },
    { title: "Resume", href: "/resume" },
    { title: "CV", href: "/cv" }, // Assuming /cv is the link for the CV
  ];

  return (
    <>
      <div className={`flex justify-center fixed top-0 z-[51] items-center ${isScrolling ? 'w-fit ' : 'w-full'}`}>
        <motion.nav
          layout
          className={`h-auto justify-between ${isScrolling ? 'w-fit ' : 'w-full'} rounded-3xl m-4 md:m-8 flex flex-row gap-10 items-center ${isScrolling ? 'p-2 bg-white bg-opacity-10 backdrop-blur-xl drop-shadow-lg' : ''} border-white border-opacity-10`}
        >
          <motion.div onClick={closeModal} layout className={`transition-colors rounded-full ${isScrolling ? 'p-1 h-[50px] w-[50px] bg-[#F5D042] shadow-md' : 'h-[100px] w-[100px]'}`}>
          <Spline 
                scene="https://prod.spline.design/9-x30-rNb-0YOjhb/scene.splinecode" 
                onLoad={() => setSplineLoaded(true)}
              />
              
            {!splineLoaded && (
              <Image src="/assets/images/avatar-loader.png" height={100} width={100} alt="loading" className={`absolute top-[33px] animate-pulse`} />
            )}
            </motion.div>

          <motion.ul layout className="hidden md:flex flex-row gap-2 items-center font-roboto-mono text-base ">
            {expandedProjectId != null ? (
                <motion.li className="opacity-50 hover:opacity-100 mr-2 flex items-center transition-all duration-200 text-white">
                  <motion.div onClick={closeModal} className='flex items-center gap-2 cursor-pointer'><img className='h-4' src="assets/icons/arrow-back-outline.svg" alt="Go Back" /> Go Back </motion.div>
                </motion.li>
              ) : (
                <>
                  <li className="opacity-50 hover:opacity-100 mr-2  transition-all duration-200"><Link href="#work" onclick="lenis.scrollTo('#work')">Work</Link></li>
                  <li className="opacity-50 hover:opacity-100 mr-2  transition-all duration-200"><Link href="#skills" onclick="lenis.scrollTo('#skills')">Skills</Link></li>
                  <li className="opacity-50 hover:opacity-100 mr-2  transition-all duration-200 "><Link href="#about" onclick="lenis.scrollTo('#about')">About</Link></li>
                </>
              )}
              <li><Link href="/resume"><Button transparent>Resume</Button></Link></li>
              <li><Button highlight>CV <img className='h-5 ml-2' src="assets/icons/cloud-download-outline.svg" alt="Download CV" /></Button></li>
          </motion.ul>
          <HamburguerIcon onClick={toggleMenu} className='flex md:hidden' />
        </motion.nav>
      </div>

      {/* Hamburguer Menu */}
      <motion.div
        className="fixed z-50 top-0 left-0 flex flex-row h-screen w-full gap-10 items-center overflow-hidden bg-black justify-between"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={MenuVariants}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className='px-4 md:px-8 py-40 mx-auto w-full lg:w-1/2 justify-start'>
          <ul className='w-auto'>
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className='p-4'
              >
                <Link
                  href={item.href}
                  className='text-white text-5xl font-semibold transition-all hover:opacity-100 duration-200'
                  onClick={closeMenu} // Close the menu when a link is clicked
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
