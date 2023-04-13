import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/developer.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experiance from '@/components/Experiance';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>أحمد | معلومات عني</title>
        <meta name='description' content='سيرة ذاتية أحمد أشرف' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-0 sm:pt-16'>
          <AnimatedText
            text='شغوف متحمس محب للعمل'
            className='mb-4 !text-4xl sm:!text-6xl lg:!text-7xl'
          />
          <div className='grid w-full grid-cols-8 gap-8 sm:gap-16'>
            <div className='col-span-8 md:col-span-4 lg:col-span-3 flex flex-col justify-start items-start order-2 md:order-1'>
              <h2 className='mb-4 text-xl font-bold text-dark/75 dark:text-light'>
                نبذة عني
              </h2>
              <p className='my-4 font-medium'>
                اسمي احمد اشرف اعيش في مصر - المنيا طالب في كلية الحاسبات
                والمعلومات. يمكنني تصميم أي الموقع الإلكتروني وجعله مستجيبًا
                للتكنولوجيا الحديثة
              </p>
              <p className='my-4 font-medium'>
                يمكنني عمل تصميمات معقدة ومواقع ديناميكية. يمكنني تصميم أي نوع
                من تصميم التجارة الإلكترونية - موقع الويب الشخصي - موقع الشركة.
              </p>
              <p className='my-4 font-medium'>
                تصميم مواقع الويب ، تطوير الواجهة الأمامية ، مهارات حل المشكلات
                ، المواقع الديناميكية ، التصاميم المستجيبة.
              </p>
            </div>
            <div className='col-span-8 md:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 order-1 md:order-2'>
              <div className='absolute top-0 -left-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                className='w-full h-auto rounded-2xl'
                alt='ahmed'
                width={500}
                height={500}
                priority
              />
            </div>
            <div className='col-span-8 lg:col-span-2 flex flex-wrap flex-row lg:flex-col items-end justify-between order-3 md:order-3 gap-3'>
              <div className='flex flex-col items-start justify-center '>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
                  +
                  <AnimatedNumber value={20} />
                </span>
                <h2 className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-dark/75 dark:text-light '>
                  عملاء راضيين
                </h2>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
                  +
                  <AnimatedNumber value={30} />
                </span>
                <h2 className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-dark/75 dark:text-light'>
                  مشاريع مكتملة
                </h2>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
                  +
                  <AnimatedNumber value={3} />
                </span>
                <h2 className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-dark/75 dark:text-light'>
                  أعوام من الخبرة
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experiance />
          <Education />
        </Layout>
      </main>
    </>
  );
}
