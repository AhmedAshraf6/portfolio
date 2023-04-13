import React from 'react';
import { motion } from 'framer-motion';
const Skill = ({ name, x = 0, y = 0 }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full cursor-pointer sm:font-semibold sm:bg-dark  sm:text-light sm:dark:bg-light sm:dark:text-dark px-3 py-1.5 md:px-4 lg:px-5 md:py-2 shadow-dark absolute bg-transparent dark:bg-transparent text-dark dark:text-light font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once }}
    >
      {name}
    </motion.div>
  );
};
export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-4xl md:text-6xl xl:text-8xl my-14 md:my-20 sm:mb-32 w-full text-center'>
        مهاراتي
      </h2>
      <div className='w-full h-[70vh] sm:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm dark:bg-circularDarkSm sm:bg-circularLight sm:dark:bg-circularDark '>
        <Skill name='Web' />
        <Skill name='Html' x='-18vw' y='-10vh' />
        <Skill name='Css' x='18vw' y='-10vh' />
        <Skill name='Js' x='-18vw' y='10vh' />
        <Skill name='React' x='18vw' y='10vh' />
        <Skill name='Next Js' y='-27vh' />
        <Skill name='Tailwind Css' y='27vh' />
        <Skill name='Bootstrap' x='-22vw' y='-28vh' />
        <Skill name='Firebase' x='22vw' y='-28vh' />
        <Skill name='Redux' x='30vw' y='5vh' />
        <Skill name='Redux' x='30vw' y='5vh' />
        <Skill name='Axios' x='-30vw' y='5vh' />
        <Skill name='Wordpress' x='-20vw' y='30vh' />
        <Skill name='Typescript' x='20vw' y='30vh' />
      </div>
    </>
  );
}
