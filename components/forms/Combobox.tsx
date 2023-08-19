import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Control, UseFormReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type ComboboxItem = {
  label: string;
  value: string;
};

type ComboboxFormProps = {
  form: UseFormReturn<any, undefined>;
  control: Control<any>;
  name: string;
  comboboxItems: ComboboxItem[];
  label?: string;
  placeholder?: string;
  helperText?: string;
};

const ComboboxForm = ({
  form,
  label,
  control,
  comboboxItems,
  placeholder,
  name,
  helperText,
}: ComboboxFormProps) => {
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
                  variant='outline'
                  role='combobox'
                  className={cn(
                    'w-[200px] justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? comboboxItems.find((item) => item.value === field.value)
                        ?.label
                    : placeholder}
                  <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder={placeholder} className='h-9' />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {comboboxItems.map((item) => (
                    <CommandItem
                      value={item.label}
                      key={item.value}
                      onSelect={() => {
                        form.setValue(name, item.value);
                      }}
                    >
                      {item.label}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          item.value === field.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>{helperText}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ComboboxForm;
