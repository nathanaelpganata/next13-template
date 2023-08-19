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
import { Textarea } from '../ui/textarea';

type TextareaFormProps = {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  textareaClassName?: string;
};

const TextareaForm = ({
  label,
  control,
  placeholder,
  name,
  helperText,
  textareaClassName,
}: TextareaFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className={textareaClassName}
              {...field}
            />
          </FormControl>
          <FormDescription>{helperText}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaForm;
