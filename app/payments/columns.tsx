'use client';


import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowDownUp, MoreHorizontal } from 'lucide-react';


export type Payment = {
    id: string,
    name: string,
    amount: number,
    status: "pending" | 'in progress' | ' success' | 'failed' | 'completed',
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox  
            checked={
                table.getIsAllPageRowsSelected() || 
                (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label='Select all'
            />

        ),
        enableSorting: false,
        enableHiding: false,    

    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className='capitalize'>{row.getValue("status")}</div>
        )
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <Button variant={'ghost'} onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                Email
                <ArrowDownUp />
            </Button>
        ),
        cell: ({ row }) => <div className='lowercase'>{row.getValue('email')}</div>,
    },
    

    {
        accessorKey: "amount",
        header: () => <div className='text-right'>Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))

            const formatted = new Intl.NumberFormat("es-US", {
                style: 'currency',
                currency: 'INR'
            }).format(amount)

            return <div className='text-right font-medium'>{formatted}</div>
        }
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({row}) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)} >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }

    }
]