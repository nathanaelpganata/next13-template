'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillStar } from 'react-icons/ai';
import * as z from 'zod';

import CheckboxForm from '@/components/forms/CheckboxForm';
import ComboboxForm from '@/components/forms/Combobox';
import DateForm from '@/components/forms/DateForm';
import InputForm from '@/components/forms/InputForm';
import RadioForm from '@/components/forms/RadioForm';
import RadioFormRating from '@/components/forms/RadioFormRating';
import SelectForm from '@/components/forms/SelectForm';
import SwitchForm from '@/components/forms/SwitchForm';
import TextareaForm from '@/components/forms/TextareaForm';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

const radioItems = [
  { label: 'Cola', value: 'cola' },
  { label: 'Pepsi', value: 'pepsi' },
  { label: 'Fanta', value: 'fanta' },
  { label: 'Sprite', value: 'sprite' },
];

const radioItemsRating = [
  { label: <AiFillStar className='w-4 h-4' />, value: '1' },
  { label: <AiFillStar className='w-4 h-4' />, value: '2' },
  { label: <AiFillStar className='w-4 h-4' />, value: '3' },
  { label: <AiFillStar className='w-4 h-4' />, value: '4' },
  { label: <AiFillStar className='w-4 h-4' />, value: '5' },
];

const selectItems = [
  { label: 'Black', value: 'black' },
  { label: 'Pink', value: 'pink' },
  { label: 'Blue', value: 'blue' },
];

const comboboxItems = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
];

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  notification: z.boolean(),
  dob: z.date(),
  drink: z.enum(['cola', 'pepsi', 'fanta', 'sprite']),
  rating: z.enum(['1', '2', '3', '4', '5']),
  color: z.enum(['black', 'pink', 'blue']),
  dark_mode: z.boolean(),
  biodata: z.string().min(10, {
    message: 'Biodata must be at least 10 characters.',
  }),
  language: z.string().default('en'),
});

const FormSandboxPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      notification: false,
      dob: undefined,
      drink: 'cola',
      rating: '4',
      color: 'black',
      dark_mode: false,
      biodata: '',
      language: 'en',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Form submitted',
      description: <pre>{JSON.stringify(data, null, 2)}</pre>,
    });
  };

  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Table Sandbox</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col sm:flex-row gap-8 sm:gap-10 w-full mt-8 bg-gray-100 p-8 rounded-md'
        >
          <div className='flex flex-col gap-8 w-full'>
            <InputForm
              control={form.control}
              label='User Name'
              name='username'
              helperText='Please enter your username'
              placeholder='username...'
            />
            <CheckboxForm
              control={form.control}
              name='notification'
              label='Notifications'
              helperText='Do you want to receive notifications?'
            />
            <DateForm
              control={form.control}
              name='dob'
              placeholder='Date of Birth'
              label='Pick your date of birth'
              disabledDateAfter={`${new Date()}`}
              disabledDateBefore='1900-01-01'
            />
            <RadioForm
              control={form.control}
              label='Rate your order'
              name='drink'
              radioItems={radioItems}
            />
            <RadioFormRating
              form={form}
              label='Rate your order'
              name='rating'
              radioItems={radioItemsRating}
            />
          </div>
          <div className='flex flex-col gap-8 w-full'>
            <SelectForm
              control={form.control}
              label='Select Color'
              name='color'
              selectItems={selectItems}
              helperText='Your color will be used for your profile.'
            />
            <SwitchForm
              control={form.control}
              name='dark_mode'
              helperText='Dark mode is for losers'
              label='Dark Mode'
            />
            <TextareaForm
              control={form.control}
              name='biodata'
              label='Bio Data'
              textareaClassName='resize-y'
              placeholder='Tell us about yourself'
            />
            <ComboboxForm
              control={form.control}
              form={form}
              name='language'
              comboboxItems={comboboxItems}
              placeholder='Select your language'
              label='Language'
              helperText='Select your language for your system language.'
            />
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormSandboxPage;
