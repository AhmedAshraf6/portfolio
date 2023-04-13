import React from 'react';

export default function Layout({ children, className = '' }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-4 sm:p-12 md:p-16 lg:p-24 xl:p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
}
