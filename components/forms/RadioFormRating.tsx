import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'; // Import the star icon

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type RadioItem = {
  label: React.ReactNode;
  value: string;
};

type RadioFormProps = {
  form: any;
  name: string;
  radioItems: RadioItem[];
  label?: string;
};

const RadioForm = ({ label, form, name, radioItems }: RadioFormProps) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const handleChange = (selectedValue: string) => {
    form.setValue(name, selectedValue);
    setHoveredValue(null); // Reset hover state on selection
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='space-y-3'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={handleChange}
              defaultValue={field.value}
              className='flex flex-row space-x-1'
            >
              {radioItems.map((item) => (
                <FormItem
                  className='flex items-center space-x-3 space-y-0'
                  key={item.value}
                >
                  <FormLabel
                    className={`cursor-pointer ${
                      parseInt(field.value) >= parseInt(item.value) ||
                      (hoveredValue &&
                        parseInt(hoveredValue) >= parseInt(item.value)) // Check if the star should be highlighted
                        ? 'text-amber-500'
                        : 'text-gray-400'
                    }`}
                    onClick={() => handleChange(item.value)}
                    onMouseEnter={() => setHoveredValue(item.value)} // Set hover state
                    onMouseLeave={() => setHoveredValue(null)} // Reset hover state
                  >
                    <AiFillStar className='w-4 h-4' />
                  </FormLabel>
                  <FormControl>
                    <RadioGroupItem value={item.value} className='hidden' />
                  </FormControl>
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
