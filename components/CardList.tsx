import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';

const CardList = ({title}: {title: string}) => {

    const latestTransactions = [
        {
          "title": "Coffee Purchase",
          "id": 1,
          "img": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
          "badge": "New",
          "transaction_count": 5000
        },
        {
          "title": "Uber Ride",
          "id": 2,
          "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
          "badge": "Pending",
          "transaction_count": 8200
        },
        {
          "title": "Grocery",
          "id": 3,
          "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
          "badge": "Completed",
          "transaction_count": 1200
        },
        {
          "title": "Movie Ticket",
          "id": 4,
          "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
          "badge": "New",
          "transaction_count": 3200
        },
        {
          "title": "Dinner Pay",
          "id": 5,
          "img": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
          "badge": "Pending",
          "transaction_count": 7566
        }
      ]

    const topPayer = [
        {
          "title": "John Doe",
          "id": 1,
          "img": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
          "badge": "VIP",
          "transaction_count": 5000
        },
        {
          "title": "Jane Smith",
          "id": 2,
          "img": "https://images.pexels.com/photos/34600302/pexels-photo-34600302.jpeg",
          "badge": "Gold",
          "transaction_count": 4570
        },
        {
          "title": "Michael Johnson",
          "id": 3,
          "img": "https://images.pexels.com/photos/14547446/pexels-photo-14547446.jpeg",
          "badge": "Platinum",
          "transaction_count": 6000
        },
        {
          "title": "Emily Davis",
          "id": 4,
          "img": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
          "badge": "Gold",
          "transaction_count": 3845
        },
        {
          "title": "William Brown",
          "id": 5,
          "img": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
          "badge": "VIP",
          "transaction_count": 5545
        }
      ]
        
      
      
      
    const list = title === "Latest Transactions" ? latestTransactions : topPayer; 
  return (
    
    <div>
        <h1 className="text-lg font-medium mb-6">{title}</h1>
        <div className='flex flex-col gap-2'>
        {list.map(item => (
            <Card className='p-4 flex-row items-center' key={item.id}>
                <div className='w-12 h-12 rounded-sm relative overflow-hidden'>
                    <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            className='object-cover'
                            />
                </div>
                    <CardContent className='p-0 text-left'>
                        <CardTitle className='text-sm font-medium'>{item.title}</CardTitle>
                        <Badge variant={'secondary'} asChild>
                            <Link href="/">{item.badge}</Link>
                        </Badge>
                    </CardContent>
                    <CardFooter className='justify-end'>
                        <p>{item.transaction_count/ 1000}K</p>
                    </CardFooter>
            </Card>
        ))}
        </div>
    </div>
  )
}

export default CardList