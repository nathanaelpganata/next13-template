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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type SelectItem = {
  label: string;
  value: string;
};

type SelectFormProps = {
  control: Control<any>;
  name: string;
  selectItems: SelectItem[];
  label?: string;
  placeholder?: string;
  helperText?: string;
};

const SelectForm = ({
  label,
  control,
  placeholder,
  name,
  helperText,
  selectItems,
}: SelectFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {selectItems.map((item) => (
                <SelectItem value={item.value} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{helperText}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectForm;
