'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import InputForm from '@/components/forms/InputForm';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import useModalStore from '@/store/modalStore';

type EditFormType = {
  username: string;
  newUsername: string;
};

const SandboxDialogPage = () => {
  // Store initialization
  const isOpen = useModalStore.useIsOpen();
  const setOpen = useModalStore.useSetOpen();
  const setClose = useModalStore.useSetClose();

  // useEffect
  React.useEffect(() => {
    if (!isOpen) {
      setOpen();
    }
  }, [isOpen, setOpen]);

  // Initialization
  const router = useRouter();
  const { toast } = useToast();

  // Form
  const formSchema = z.object({
    username: z.string().min(8, {
      message: 'Username must be at least 8 characters.',
    }),
    newUsername: z.string().min(8, {
      message: 'Username must be at least 8 characters.',
    }),
  });

  const form = useForm<EditFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      newUsername: '',
    },
  });

  const onSubmit = (data: EditFormType) => {
    mutateChangeUsername(data);
  };

  // Mutation
  const { mutate: mutateChangeUsername } = useMutation<
    void,
    unknown,
    EditFormType
  >(async (data) => {
    console.log(data);
    toast({
      title: 'Changes Saved',
      description: (
        <div className='flex flex-col'>
          <p>
            <span className='font-semibold'>Old Username:</span> {data.username}
          </p>
          <p>
            <span className='font-semibold'>New Username:</span>{' '}
            {data.newUsername}
          </p>
        </div>
      ),
    });
    router.replace('/sandbox');
  });

  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Dalog Sandbox</h1>
      <div className='flex flex-col gap-8 mt-12'>
        {/* Dialog Default */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Default Dialog</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Modal
              // isOpen={isOpen}
              // onClose={setClose}
              buttonLabel={'Save Changes'}
              dialogButtonLabel={'Save'}
              dialogTitle={'Are you Sure?'}
              dialogDescription={'Changes will be saved permanently'}
              mutationFn={() => {
                toast({
                  title: 'Changes Saved',
                  description: new Date().toLocaleTimeString(),
                });
                // router.replace('/');
              }}
            />
          </div>
        </div>
        {/* Dialog Form */}
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Form Dialog</p>
          <div className='flex flex-row flex-wrap justify-left items-center w-full max-w-lg gap-6'>
            <Modal
              buttonLabel={'Edit Username'}
              dialogTitle={'Username Change'}
              dialogDescription={
                'Please Insert your current username and your desired username'
              }
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex flex-col gap-2'
                >
                  <InputForm
                    control={form.control}
                    label='Username'
                    name='username'
                    placeholder='Username...'
                  />
                  <InputForm
                    control={form.control}
                    label='New Username'
                    name='newUsername'
                    placeholder='New Username...'
                  />
                  <Button type='submit'>Submit</Button>
                </form>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxDialogPage;
