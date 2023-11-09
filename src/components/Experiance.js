import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcons from './LiIcons';
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-center'
    >
      <LiIcons refrance={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'string' }}
      >
        <h3 className='font-bold text-lg sm:text-xl md:text-2xl'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark '
          >
            @{company}
          </a>
        </h3>
        <span className='font-medium text-dark/75 dark:text-light/75 text-sm md:text-lg'>
          {time} | {address}
        </span>
        <p className='font-medium w-full text-sm md:text-lg'>{work}</p>
      </motion.div>
    </li>
  );
};
export default function Experiance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-14 md:my-20'>
      <h2 className='font-bold text-4xl md:text-6xl xl:text-8xl mb-16 sm:mb-32 w-full text-center'>
        خبرتي
      </h2>
      <div className='w-full lg:w-[90%] xl:w-[75%] mx-auto relative ' ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute right-[20px] sm:right-[30px] lg:right-9 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light'
        />
        <ul className='w-full flex flex-col items-start justify-between mr-4 sm:mr-4'>
          <Details
            position='مهندس برمجيات'
            company='فيوتشر ميديا'
            time='2023'
            address='القاهرة -الجيزة'
            work='قمت بالعمل في شركة فيوتشر ميديا كمطور واجهة امامية وكنت مسئول عن تطوير الواجهة الامايمة لموقع adsapp واحد من اكبر مواقع البيع والشراء '
            companyLink='ahmedp76b@gmail.com'
          />
          <Details
            position='مهندس برمجيات'
            company='موقع مستقل'
            time='2021'
            work='لدي حساب في موقع مستقل يحتوي علي 15 مشروع مكتمل بتقييم خمس نجوم '
            companyLink='ahmedp76b@gmail.com'
          />
          <Details
            position='مهندس برمجيات'
            company='شركة وجين'
            time='2023'
            work='قمت بانشاء ثلاث مواقع لشركة وجين'
            companyLink='ahmedp76b@gmail.com'
          />
          <Details
            position='مهندس برمجيات'
            company='فريلانس'
            time='2023'
            work='قمت بانشاء اكثر من خمس مشاريع منها مشاريع تخرج ، مشاريع تجارة الكترونية'
            companyLink='ahmedp76b@gmail.com'
          />
        </ul>
      </div>
    </div>
  );
}
