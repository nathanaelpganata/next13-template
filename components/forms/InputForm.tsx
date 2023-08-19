import React from 'react';
import { Control } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

type InputFormProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
};

const InputForm = ({
  label,
  control,
  placeholder,
  name,
  helperText,
}: InputFormProps) => {
  return (
    <FormField
      control={control}
      name={name as string}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{helperText}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputForm;
