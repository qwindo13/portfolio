import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function MainLayout({children, title, className }) {
    return (
        <motion.div className='mx-auto'>
            <main>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content="Miguel Ferreira - Frontend Dev" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="John Doe - Frontend Developer Portfolio" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.miguelrferreira.com" />
                    <meta property="og:image" content="https://www.miguelrferreira.com/assets/images/portfolio/header.png" />
                    <meta property="og:description" content="I am a frontend developer with experience in HTML, CSS, and JavaScript. Check out my work and get in touch!" />

                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                </Head>
                <section className={className}>
                    <Header />
                    {children}
                    <Footer />
                </section>
            </main>
        </motion.div>
    );
};
