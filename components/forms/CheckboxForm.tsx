import React from 'react';
import { Control } from 'react-hook-form';

import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form';

type CheckboxFormProps = {
  control: Control<any>;
  name: string;
  label: string;
  helperText?: string;
};

const CheckboxForm = ({
  label,
  control,
  name,
  helperText,
}: CheckboxFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow'>
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className='space-y-1 leading-none'>
            <FormLabel>{label}</FormLabel>
            <FormDescription>{helperText}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CheckboxForm;
