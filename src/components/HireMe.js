import React from 'react';
import HireIcon from './SvgIcons';
import Link from 'next/link';

export default function HireMe() {
  return (
    <div className='static lg:fixed  right-0 bottom-4 items-center justify-center overflow-hidden'>
      <div className='w-32 lg:w-48 h-auto flex items-center justify-center relative '>
        <HireIcon className='fill-dark animate-spin-slow dark:fill-light' />
        <Link
          href='//api.whatsapp.com/send?phone=2001098750546'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold bg-dark text-light shadow-md border-solid border-dark w-12 h-12 lg:w-20 lg:h-20 text-[10px] lg:text-lg rounded-full hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:border-light dark:hover:text-light '
        >
          تواصل
        </Link>
      </div>
    </div>
  );
}
