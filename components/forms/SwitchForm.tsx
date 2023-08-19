import React from 'react';
import { Control } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form';
import { Switch } from '../ui/switch';

type SwitchFormProps = {
  control: Control<any>;
  name: string;
  label?: string;
  helperText?: string;
};

const SwitchForm = ({ label, control, name, helperText }: SwitchFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
          <div className='space-y-0.5'>
            <FormLabel>{label}</FormLabel>
            <FormDescription>{helperText}</FormDescription>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SwitchForm;
