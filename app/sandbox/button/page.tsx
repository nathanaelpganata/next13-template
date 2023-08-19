import React from 'react';
import { FaReact } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

const SandboxButtonPage = () => {
  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Button Sandbox</h1>
      <div className='flex flex-col gap-8 mt-12'>
        {/* Button Default */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Default</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='default' size='lg'>
              Button
            </Button>
            <Button variant='default' size='default'>
              Button
            </Button>
            <Button variant='default' size='sm'>
              Button
            </Button>
            <Button variant='default' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
        {/* Button Destructive */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Destructive</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='destructive' size='lg'>
              Button
            </Button>
            <Button variant='destructive' size='default'>
              Button
            </Button>
            <Button variant='destructive' size='sm'>
              Button
            </Button>
            <Button variant='destructive' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
        {/* Button Outline */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Outline</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='outline' size='lg'>
              Button
            </Button>
            <Button variant='outline' size='default'>
              Button
            </Button>
            <Button variant='outline' size='sm'>
              Button
            </Button>
            <Button variant='outline' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
        {/* Button Secondary */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Secondary</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='secondary' size='lg'>
              Button
            </Button>
            <Button variant='secondary' size='default'>
              Button
            </Button>
            <Button variant='secondary' size='sm'>
              Button
            </Button>
            <Button variant='secondary' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
        {/* Button Ghost */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Ghost</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='ghost' size='lg'>
              Button
            </Button>
            <Button variant='ghost' size='default'>
              Button
            </Button>
            <Button variant='ghost' size='sm'>
              Button
            </Button>
            <Button variant='ghost' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
        {/* Button Link */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Button Link</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Button variant='link' size='lg'>
              Button
            </Button>
            <Button variant='link' size='default'>
              Button
            </Button>
            <Button variant='link' size='sm'>
              Button
            </Button>
            <Button variant='link' size='icon'>
              <FaReact className='w-6 h-6' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxButtonPage;
