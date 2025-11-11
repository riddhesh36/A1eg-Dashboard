import ChartAreaInteractive from '@/components/AppLineChart';
import CardList from '@/components/CardList';
import InboxList from '@/components/InboxList';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import React from 'react'
import { columns, Payment } from '../payments/columns';
import { DataTableDemo } from '../payments/data-table';
import GoogleCard from '@/components/GoogleCard';
import AppBarCharts from '@/components/AppPieChart';


async function getData(): Promise<Payment[]>{
    return [
      { id: "1", name: "Aarav Mehta", amount: 250, status: "completed", email: "aarav@example.com" },
      { id: "2", name: "Isha Patel", amount: 180, status: "pending", email: "isha@example.com" },
      { id: "3", name: "Rohan Sharma", amount: 320, status: "in progress", email: "rohan@example.com" },
      { id: "4", name: "Priya Nair", amount: 420, status: "completed", email: "priya@example.com" },
      { id: "5", name: "Aditya Verma", amount: 150, status: "pending", email: "aditya@example.com" },
      { id: "6", name: "Neha Singh", amount: 290, status: "completed", email: "neha@example.com" },
      { id: "7", name: "Karan Desai", amount: 500, status: "in progress", email: "karan@example.com" },
      { id: "8", name: "Simran Kaur", amount: 240, status: "completed", email: "simran@example.com" },
      { id: "9", name: "Vikram Joshi", amount: 310, status: "pending", email: "vikram@example.com" },
      { id: "10", name: "Meera Reddy", amount: 275, status: "completed", email: "meera@example.com" },
      { id: "11", name: "Rahul Bansal", amount: 460, status: "in progress", email: "rahul@example.com" },
      { id: "12", name: "Ananya Iyer", amount: 390, status: "completed", email: "ananya@example.com" },
      { id: "13", name: "Siddharth Kapoor", amount: 230, status: "pending", email: "siddharth@example.com" },
      { id: "14", name: "Tanya Rao", amount: 480, status: "completed", email: "tanya@example.com" },
      { id: "15", name: "Arjun Malhotra", amount: 310, status: "in progress", email: "arjun@example.com" },
      { id: "16", name: "Sneha Chatterjee", amount: 260, status: "completed", email: "sneha@example.com" },
      { id: "17", name: "Harsh Vora", amount: 340, status: "pending", email: "harsh@example.com" },
      { id: "18", name: "Ritika Das", amount: 410, status: "completed", email: "ritika@example.com" },
      { id: "19", name: "Manish Pillai", amount: 370, status: "in progress", email: "manish@example.com" },
      { id: "20", name: "Kavya Bhatt", amount: 180, status: "pending", email: "kavya@example.com" },
      { id: "21", name: "Devansh Ghosh", amount: 330, status: "completed", email: "devansh@example.com" },
      { id: "22", name: "Pooja Menon", amount: 420, status: "in progress", email: "pooja@example.com" },
      { id: "23", name: "Nikhil Jain", amount: 240, status: "pending", email: "nikhil@example.com" },
      { id: "24", name: "Sanya Dutta", amount: 310, status: "completed", email: "sanya@example.com" },
      { id: "25", name: "Rajat Khanna", amount: 390, status: "in progress", email: "rajat@example.com" },
      { id: "26", name: "Diya Kulkarni", amount: 260, status: "completed", email: "diya@example.com" },
      { id: "27", name: "Parth Chauhan", amount: 350, status: "pending", email: "parth@example.com" },
      { id: "28", name: "Avni Deshmukh", amount: 470, status: "completed", email: "avni@example.com" },
      { id: "29", name: "Yash Tiwari", amount: 300, status: "in progress", email: "yash@example.com" },
      { id: "30", name: "Mira Joshi", amount: 410, status: "completed", email: "mira@example.com" },
    ]
}

const SingleUserpage = async () => {
    const data = await getData()
  return (
    <div>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Users</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-4 flex flex-col xl:flex-row gap-8">
            {/* left side  */}
            <div className='w-full  xl:w-1/3 space-y-6'>
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <InboxList />
                </div>
                <div className="bg-primary-foreground p-4 rounded-lg"><GoogleCard /></div>
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <AppBarCharts />
                </div>
            </div>
            {/* right side  */}
            <div className='w-full  xl:w-2/3 space-y-6'>
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <ChartAreaInteractive />
                </div>
                <div className="bg-primary-foreground p-4 rounded-lg">
                    <DataTableDemo />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleUserpage;