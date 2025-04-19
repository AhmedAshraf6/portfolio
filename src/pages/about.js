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
        <meta
          property='og:image'
          content='https://ahmedashraf.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper.697339b5.jpg&w=640&q=75'
        />
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
                أنا مطور ويب بخبرة عملية متنوعة في تطوير مواقع الإنترنت باستخدام
                React وغيرها من التقنيات الحديثة. خريج كلية الحاسبات والمعلومات،
                ولدي شغف دائم بالتطوير وحل المشكلات التقنية.
              </p>
              <p className='my-4 font-medium'>
                أمتلك خبرة قوية في منصة زد (Zid) من خلال عملي على تطوير ثيمات
                مخصصة وتحسين تجربة المستخدم بما يتوافق مع متطلبات المنصة. عملت
                على أكثر من 20 مشروع عبر موقع "مستقل"، بالإضافة إلى خبرة عملية
                داخل شركتين، مما ساعدني على صقل مهاراتي في العمل الجماعي وتحقيق
                أهداف العملاء بكفاءة واحترافية.
              </p>
              <p className='my-4 font-medium'>
                التطوير المهني المستمر: رغبة قوية في التعلم ومتابعة التقنيات
                والأدوات الجديدة في مجال تطوير الويب.
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
                  <AnimatedNumber value={33} />
                </span>
                <h2 className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-dark/75 dark:text-light '>
                  عملاء راضيين
                </h2>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
                  +
                  <AnimatedNumber value={45} />
                </span>
                <h2 className='text-sm sm:text-base md:text-lg xl:text-xl font-medium text-dark/75 dark:text-light'>
                  مشاريع مكتملة
                </h2>
              </div>
              <div className='flex flex-col items-start justify-center'>
                <span className='inline-block text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
                  +
                  <AnimatedNumber value={5} />
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
