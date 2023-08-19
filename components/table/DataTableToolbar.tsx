'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  DataTableFacetedFilter,
  DataTableFacetedFilterProps,
} from './DataTableFacetedFilter';
import { DataTableViewOptions } from './DataTableViewOptions';

export interface FacetedFilterProps<TData, TValue>
  extends Omit<DataTableFacetedFilterProps<TData, TValue>, 'column'> {
  column: string;
}

interface DataTableToolbarProps<TData, TValue> {
  table: Table<TData>;
  searchFilter?: string;
  facetedFilter?: FacetedFilterProps<TData, TValue>[];
}

export function DataTableToolbar<TData, TValue>({
  table,
  searchFilter,
  facetedFilter,
}: DataTableToolbarProps<TData, TValue>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {searchFilter == undefined ? null : (
          <Input
            placeholder='Filter..'
            value={
              (table
                .getColumn(searchFilter as string)
                ?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table
                .getColumn(searchFilter as string)
                ?.setFilterValue(event.target.value)
            }
            className='h-8 w-[150px] lg:w-[250px]'
          />
        )}
        {facetedFilter && facetedFilter.length <= 0 ? null : (
          <>
            {facetedFilter?.map((d, i) => (
              <DataTableFacetedFilter
                key={i}
                column={table.getColumn(d.column)}
                title={d.title}
                options={d.options}
              />
            ))}
          </>
        )}
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
