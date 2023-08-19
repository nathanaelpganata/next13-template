import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import React from 'react';
import { Control } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type DateFormProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  disabledDateBefore?: string;
  disabledDateAfter?: string;
};

const DateForm = ({
  label,
  control,
  placeholder,
  name,
  helperText,
  disabledDateBefore,
  disabledDateAfter,
}: DateFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[240px] pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date(`${disabledDateAfter}`) ||
                  date < new Date(`${disabledDateBefore}`)
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{helperText}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateForm;
