import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ModalProvider } from '@/context/ModalContext';
import { LenisScroller } from '@/animations/smoothScroll';


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {

  return (
    <ModalProvider> 
      <Component {...pageProps} className={inter.className}/>
      <LenisScroller />
    </ModalProvider>
  );
}