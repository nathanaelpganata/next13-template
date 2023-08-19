import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SandboxStack } from '@/constant/SandboxData';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen w-full justify-center bg-gray-50 px-6 text-center'>
      <h1 className='text-5xl font-bold'>Next 13 Template</h1>
      <div className='flex flex-wrap max-w-md w-full justify-center items-center mt-4 gap-2'>
        {SandboxStack.map((item) => (
          <Badge key={item.name}>{item.name}</Badge>
        ))}
      </div>
      <Link href='/sandbox' className='mt-10'>
        <Button variant='link' size='lg'>
          Sandbox
          <ArrowRightIcon className='w-4 h-4' />
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
