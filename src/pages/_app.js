import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import DarkModeProvider from '@/context/DarkModeProvider';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Tajawal } from 'next/font/google';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';

const tajawal = Tajawal({
  subsets: ['latin'],
  variable: '--font-taj',
  weight: ['400', '700', '800'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:image'
          content='https://ahmedashraf.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper.697339b5.jpg&w=640&q=75'
        />
      </Head>
      <DarkModeProvider>
        <main
          className={`${tajawal.variable} font-taj dark:bg-dark bg-light w-full min-h-screen`}
        >
          <Navbar />
          <AnimatePresence mode='wait'>
            <Component kay={router.asPath} {...pageProps} />;
          </AnimatePresence>
          <Footer />
        </main>
      </DarkModeProvider>
    </>
  );
}
