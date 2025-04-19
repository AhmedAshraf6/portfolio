import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcons from './LiIcons';
const Details = ({ type, time, place, info }) => {
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
          {type}&nbsp;
        </h3>
        <span className='font-medium text-dark/75 dark:text-light/75 text-sm md:text-lg'>
          {time} | {place}
        </span>
        <p className='font-medium w-full text-sm md:text-lg'>{info}</p>
      </motion.div>
    </li>
  );
};
export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className='my-14 md:my-20'>
      <h2 className='font-bold text-4xl md:text-6xl xl:text-8xl mb-16 sm:mb-32 w-full text-center'>
        الدراسة
      </h2>
      <div className='w-full lg:w-[90%] xl:w-[75%] mx-auto relative ' ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute right-[20px] sm:right-[30px] lg:right-9 top-0 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light'
        />
        <ul className='w-full flex flex-col items-start justify-between mr-4 sm:mr-4'>
          <Details
            type='كلية حاسبات ومعلومات '
            time='2018-2022'
            place='جامعة المنيا'
            info='حاسبات ومعلومات قسم البايوانفورماتكس'
          />
          <Details
            type=' موقع يوديمي'
            time='2018-2023'
            place='udemy website'
            info='انهاء 6 كورسات في موقع يوديمي'
          />
        </ul>
      </div>
    </div>
  );
}
