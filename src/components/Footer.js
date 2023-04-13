import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-base sm:text-lg dark:text-light dark:border-light'>
      <Layout className='py-6 lg:!py-8  flex flex-col lg:flex-row items-center justify-between '>
        <span>جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</span>
        <div className='flex items-center'>
          تصميم{' '}
          <span className='text-primary dark:text-primaryDark text-2xl px-1'>
            &#9825;
          </span>
          <Link href='/'>أحمد أشرف</Link>
        </div>
        <h3>يومك سعيد</h3>
      </Layout>
    </footer>
  );
}
