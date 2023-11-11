import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import proj1 from '../../public/images/projects/proj1.png';
import proj2 from '../../public/images/projects/proj2.png';
import proj3 from '../../public/images/projects/proj3.png';
import proj4 from '../../public/images/projects/proj4.png';
import proj5 from '../../public/images/projects/proj5.png';
import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className='w-full flex flex-col lg:flex-row items-center justify-between rounded-2xl sm:rounded-3xl border border-solid border-dark rounded-br-3xl sm:rounded-br-2xl bg-light shadow-2xl p-4 sm:p-8 lg:p-12 relative dark:bg-dark dark:border-light
    gap-y-3 lg:gap-y-0
    '
    >
      <div className='absolute top-0 -left-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link
        href={link}
        target='_blank'
        className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image
          src={img}
          alt='title'
          className='w-full h-auto'
          width={500}
          height={500}
          priority
        />
      </Link>
      <div className='w-full lg:w-1/2 flex flex-col items-start justify-between pr-0 lg:pr-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-4'
        >
          <h2 className='my-2 w-full text-right text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold dark:text-light'>
            {title}
          </h2>
        </Link>
        <p className='ny-2 font-medium text-dark dark:text-light text-sm sm:text-lg'>
          {summary}
        </p>
        <div className='mt-2 flex items-center flex-wrap gap-3'>
          <Link href={githubLink} target='_blank' className='text-4xl'>
            <AiFillGithub />
          </Link>
          <Link
            href={link}
            target='_blank'
            className='rounded-lg bg-dark text-light py-1.5 px-4 sm:py-2 sm:px-6 text-base sm:text-lg font-semibold dark:bg-light dark:text-dark'
          >
            تصفح المشروع
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -left-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark dark:bg-light ' />
      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image
          src={img}
          alt='title'
          className='w-full h-auto'
          width={500}
          height={500}
          priority
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-4'
        >
          <h2 className='my-2 w-full text-right text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>
            {title}
          </h2>
        </Link>

        <div className='mt-2 w-full flex items-center justify-between gap-3'>
          <Link
            href={link}
            target='_blank'
            className='text-lg font-semibold underline'
          >
            تصفح
          </Link>
          <Link href={link} target='_blank' className='text-4xl'>
            <AiFillGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default function projects() {
  return (
    <>
      <Head>
        <title>أحمد | المشاريع</title>
        <meta name='description' content='سيرة ذاتية أحمد أشرف' />
        <meta
          property='og:image'
          content='https://ahmedashraf.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper.697339b5.jpg&w=640&q=75'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-0 sm:pt-16'>
          <AnimatedText
            text='التخيل المعرفة الصبر'
            className='mb-8 sm:mb-16 !text-4xl sm:!text-6xl lg:!text-7xl'
          />
          <div className='grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-y-10 sm:gap-x-10 lg:gap-x-8 xl:gap-x-16 2xl:gap-24 2xl:gap-y-32 '>
            <div className='col-span-12'>
              <FeaturedProject
                title='موقع لشركة تقنية'
                summary='الموقع متعدد اللغات ويمكن إضافة أي لغة أخرى. إنه موقع ديناميكي وقابل للتوسيع.'
                link='https://ahmedashraf6.github.io/extramax/'
                githubLink='https://ahmedashraf6.github.io/extramax/'
                type='مشروع مميز'
                img={proj1}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                title='موقع بيع وشراء لشركة أدس اب'
                link='https://ahmedashraf6.github.io/test/'
                type='موقع'
                img={proj2}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                title='متجر الكتروني عربي'
                link='https://foodsystem.vercel.app/'
                type='موقع'
                img={proj3}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                title='موقع لشركة ماركتينج للمدير التنفيذي حازم جمعة'
                link='https://hgagencag.vercel.app/'
                type='موقع'
                img={proj4}
              />
            </div>
            <div className='col-span-12 md:col-span-6'>
              <Project
                title='موقع لرجل الأعمال البشمهندس محمود عفيفي '
                link='https://afifyorganization.com/'
                type='موقع'
                img={proj5}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
