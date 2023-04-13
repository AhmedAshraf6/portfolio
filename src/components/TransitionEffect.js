import React from 'react';
import { motion } from 'framer-motion';
export default function TransitionEffect() {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-30 bg-primary'
        initial={{ x: '-100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '-100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-20 bg-light'
        initial={{ x: '-100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-10 bg-dark'
        initial={{ x: '-100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
}
//  <motion.div
//     className='fixed top-0 bottom-0 left-full w-screen h-screen z-30 bg-primary'
//     // initial={{ x: '0%', width: '0%' }}
//     // animate={{ x: '-100%', width: '100%'}}
//     animate={{ x: ['0%', '-100%', '0%'], width: ['0%', '100%', '0%'] }}
//     transition={{ duration: 1.8, ease: 'easeInOut' }}
//   />

//   <motion.div
//     className='fixed top-0 bottom-0 left-full w-screen h-screen z-20 bg-light'
//     initial={{ x: '-100%', width: '100%', visibility: 'hidden' }}
//     animate={{ x: '0%', width: '0%', visibility: 'visible' }}
//     transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
//   />
//   <motion.div
//     className='fixed top-0 bottom-0 left-full w-screen h-screen z-10 bg-dark'
//     initial={{ x: '-100%', width: '100%', visibility: 'hidden' }}
//     animate={{ x: '0%', width: '0', visibility: 'visible' }}
//     transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
//   />
