'use client';

import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { LuMoreHorizontal } from 'react-icons/lu';

import { DataTable } from '@/components/table/DataTable';
import { DataTableColumnHeader } from '@/components/table/DataTableColumnHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Data Definition
type TodoSchema = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

// Badge Labels
const labels = [
  {
    value: 'true',
    label: 'DOIT!',
  },
];

// Columns Definition
const columns: ColumnDef<TodoSchema>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'userId',
    header: 'UserID',
    accessorKey: 'userId',
  },
  {
    id: 'id',
    header: 'ID',
    accessorKey: 'id',
  },
  {
    id: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      const label = labels.find(
        (label) => label.value === String(row.original.completed)
      );

      return (
        <div className='flex space-x-2'>
          {label && <Badge variant='outline'>{label.label}</Badge>}
          <span className='max-w-[500px] truncate font-medium'>
            {row.getValue('title')}
          </span>
        </div>
      );
    },
    accessorKey: 'title',
  },
  {
    id: 'completed',
    accessorKey: 'completed',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Completed' />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const todo = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <LuMoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(todo.id.toString())}
            >
              Copy Todo ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// Faceted filter
const completion = [
  {
    column: 'completed',
    title: 'Completed',
    options: [
      {
        value: 'true',
        label: 'True',
        icon: QuestionMarkCircledIcon,
      },
      {
        value: 'false',
        label: 'False',
        icon: QuestionMarkCircledIcon,
      },
    ],
  },
];

const SandboxTablePage = () => {
  const { data: PostData, isLoading } = useQuery<TodoSchema[]>(['/todos']);

  // Changing the completed value to string to match the filter
  const modifiedPostData = PostData?.map((post: TodoSchema) => ({
    ...post,
    completed: post.completed ? 'true' : 'false',
  }));

  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Table Sandbox</h1>
      <div className='mt-12'>
        {!isLoading ? (
          <DataTable
            data={modifiedPostData as TodoSchema[]}
            columns={columns}
            searchFilter={'title'}
            facetedFilter={completion}
          />
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default SandboxTablePage;
