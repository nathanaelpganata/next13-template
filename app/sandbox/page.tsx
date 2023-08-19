'use client';

import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { SandboxOptions } from '@/constant/SandboxData';

const SandboxPage = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-52'>
      <h1 className='text-5xl font-bold'>Sandbox</h1>
      <div className='flex flex-row flex-wrap justify-between items-center w-full max-w-xl gap-6 px-6 mt-32'>
        {SandboxOptions.map((d, i) => (
          <Link
            href={`/sandbox/${d.link}`}
            target='_blank'
            key={i}
            className='mx-auto'
          >
            <Button variant='default' size='lg'>
              {d.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SandboxPage;
