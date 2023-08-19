'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

const SandboxToastPage = () => {
  const { toast } = useToast();
  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Toast Sandbox</h1>
      <div className='flex flex-col gap-8 mt-12'>
        {/* Toast Default */}
        <div className='flex flex-col gap-6 w-max'>
          <Button
            variant='default'
            size='lg'
            onClick={() => {
              toast({
                description: 'Your message has been sent.',
              });
            }}
          >
            Toast Desc Only
          </Button>
          <Button
            variant='default'
            size='lg'
            onClick={() => {
              toast({
                title: 'Scheduled: Catch up',
                description: 'Friday, February 10, 2023 at 5:57 PM',
              });
            }}
          >
            Toast With Title
          </Button>
          <Button
            variant='default'
            size='lg'
            onClick={() => {
              toast({
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: (
                  <ToastAction altText='Try again'>Try again</ToastAction>
                ),
              });
            }}
          >
            Toast With Action
          </Button>
          <Button
            variant='default'
            size='lg'
            onClick={() => {
              toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: (
                  <ToastAction altText='Try again'>Try again</ToastAction>
                ),
              });
            }}
          >
            Toast With Action Destructive
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SandboxToastPage;
