import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { BsLinkedin, BsPinterest } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillDribbbleCircle,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon } from './LiIcons';
import HireMe from './HireMe';
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const CustomLink = ({ href, title, className = '' }) => {
    return (
      <Link href={href} className={`${{ className }} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute -bottom-0.5 right-0 group-hover:w-full transiti-all ease-outon-[width] ease duration-300 ${
            router.asPath === href ? 'w-full' : 'w-0'
          } dark:bg-light`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };
  const CustomMobileLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    const handleClick = () => {
      toggleMenu();
      router.push(href);
    };
    return (
      <button
        href={href}
        className={`${{ className }} relative group text-light dark:text-dark`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-light dark:bg-dark absolute -bottom-0.5 right-0 group-hover:w-full transition-all duration-300 ease-outon-[width]   ${
            router.asPath === href ? 'w-full' : 'w-0'
          } dark:bg-light`}
        >
          &nbsp;
        </span>
      </button>
    );
  };
  return (
    <header className='w-full px-5 md:px-15 lg:px-32 py-2 sm:py-4 font-medium  dark:text-light'>
      {/* small screen */}
      <div className='w-full flex lg:hidden items-center justify-between '>
        <button
          className='flex flex-col justify-center items-center '
          onClick={toggleMenu}
        >
          <span
            className={`bg-dark dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm my-0.5  ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transiti-all duration-300 ease-out  block h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45  -translate-y-1' : 'translate-y-0.5'
            } `}
          ></span>
        </button>
        <div className='hidden sm:block'>
          <Logo />
        </div>
        <HireMe />
      </div>
      <div className='w-full hidden lg:flex items-center justify-between'>
        <nav className='flex gap-3'>
          <CustomLink href='/' title='الرئيسية' />
          <CustomLink href='/about' title='معلومات عني' />
          <CustomLink href='/projects' title='المشاريع' />
        </nav>
        <Logo />
        <nav className='flex items-center gap-4'>
          <motion.a
            href='https://twitter.com'
            target={'_blank'}
            className='text-4xl text-[#1DA1F2] '
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineTwitter />
          </motion.a>
          <motion.a
            href='https://twitter.com'
            target={'_blank'}
            className='text-4xl  '
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            href='https://twitter.com'
            target={'_blank'}
            className='text-4xl  text-[#1DA1F2]'
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            href='https://twitter.com'
            target={'_blank'}
            className='text-4xl  text-[#E60023]'
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsPinterest />
          </motion.a>
          <motion.a
            href='https://twitter.com'
            target={'_blank'}
            className='text-4xl  text-[#f80000]'
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillDribbbleCircle />
          </motion.a>
          <button
            className={`rounded-full p-1 flex items-center justify-center ${
              theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mounted && currentTheme === 'dark' ? (
              <SunIcon
                className={'fill-dark'}
                onClick={() => setTheme('light')}
              />
            ) : (
              <MoonIcon
                className={'fill-dark'}
                onClick={() => setTheme('dark')}
              />
            )}
          </button>
        </nav>
      </div>
      {/* menu */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-center gap-3'>
            <CustomMobileLink href='/' title='الرئيسية' />
            <CustomMobileLink href='/about' title='معلومات عني' />
            <CustomMobileLink href='/projects' title='المشاريع' />
          </nav>
          <nav className='flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-2 '>
            <motion.a
              href='https://twitter.com'
              target={'_blank'}
              className='text-4xl text-[#1DA1F2] '
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineTwitter />
            </motion.a>
            <motion.a
              href='https://twitter.com'
              target={'_blank'}
              className='text-4xl  '
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillGithub />
            </motion.a>
            <motion.a
              href='https://twitter.com'
              target={'_blank'}
              className='text-3xl  text-[#1DA1F2]'
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsLinkedin />
            </motion.a>
            <motion.a
              href='https://twitter.com'
              target={'_blank'}
              className='text-3xl  text-[#E60023]'
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsPinterest />
            </motion.a>
            <motion.a
              href='https://twitter.com'
              target={'_blank'}
              className='text-4xl  text-[#f80000]'
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillDribbbleCircle />
            </motion.a>
            <button
              className={`rounded-full p-1 flex items-center justify-center ${
                theme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mounted && currentTheme === 'dark' ? (
                <SunIcon
                  className={'fill-dark'}
                  onClick={() => setTheme('light')}
                />
              ) : (
                <MoonIcon
                  className={'fill-dark'}
                  onClick={() => setTheme('dark')}
                />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
