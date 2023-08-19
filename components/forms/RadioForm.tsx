import React from 'react';
import { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type RadioItem = {
  label: string;
  value: string;
};

type RadioFormProps = {
  control: Control<any>;
  name: string;
  radioItems: RadioItem[];
  label?: string;
};

const RadioForm = ({ label, control, name, radioItems }: RadioFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className='flex flex-col space-y-1'
            >
              {radioItems.map((item) => (
                <FormItem
                  className='flex items-center space-x-3 space-y-0'
                  key={item.value}
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} />
                  </FormControl>
                  <FormLabel className='font-normal'>{item.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RadioForm;
