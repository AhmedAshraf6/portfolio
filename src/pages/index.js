import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
// import profilePic from '../../public/images/profile/developer-pic-1.png';
import profilePic from '../../public/images/profile/developer.jpg';

import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import AnimatedText from '@/components/AnimatedText';
import { BsArrowUpLeftSquare } from 'react-icons/bs';
import Link from 'next/link';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>أحمد | الرئيسية</title>
        <meta name='description' content='سيرة ذاتية أحمد أشرف' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 sm:pt-16'>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-y-5'>
            <div className='w-full lg:w-1/2 flex flex-col items-center text-center lg:text-right self-center'>
              <AnimatedText
                text='انا احمد ، مصمم ومطور مواقع  '
                className='!text-3xl !text-center lg:!text-right sm:!text-5xl md:!text-5xl lg:!text-6xl '
              />
              <p className='my-4 text-xs sm:text-sm md:text-base font-medium leading-6 md:leading-8'>
                خريج حاسبات ومعلومات أستطيع تصميم مواقع بأحدث التقنيات وفقا
                للمعايير العالمية ، أحدث التقنيات يتم استخدامها بداية من التصميم
                انتهاء ب تجاوب الموقع علي جميع الشاشات.
              </p>
              <div className='flex  flex-wrap justify-center items-center  selft-center lg:self-start mt-2 gap-2'>
                <Link
                  href='/cv.docx'
                  className='flex items-center bg-dark text-light py-2 px-4 text-base md:py-2.5 md:px-6 rounded-lg md:text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all transition-500
                  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light '
                  download={true}
                >
                  السيرة الذاتية <BsArrowUpLeftSquare className='mx-2' />
                </Link>
                <Link
                  href='mailto:ahmedp76b@gmail.com'
                  target={'_blank'}
                  className='text-base md:text-lg font-semibold text-dark underline underline-offset-8 dark:text-light'
                >
                  تواصل معي
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <Image
                src={profilePic}
                alt='CodeBucks'
                className='w-full h-auto rounded-2xl'
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </Layout>
        <div className='hidden lg:block'>
          <HireMe />
        </div>
        <div className='hidden absolute left-8 bottom-8 lg:inline-block w-24'>
          <Image src={lightBulb} alt='ahmed' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
