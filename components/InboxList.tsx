import React from 'react'
import { Card, CardHeader } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const userList = [
    {
      "id": 1,
      "name": "Aarav Mehta",
      "img": "/77.png",
      "working_on": "Building a GitHub repository",
      "status": "In Progress"
    },
    {
      "id": 2,
      "name": "Sara Khan",
      "img": "/57.png",
      "working_on": "Creating a portfolio ",
      "status": "Completed"
    },
    {
      "id": 3,
      "name": "Rohan Patil",
      "img": "/16.png",
      "working_on": "Contributing to a GitHub project.",
      "status": "In Progress"
    },
    {
      "id": 4,
      "name": "Priya Sharma",
      "img": "/50.png",
      "working_on": "Setting up a new repository",
      "status": "Pending"
    },
    {
      "id": 5,
      "name": "Ankit Verma",
      "img": "/45.png",
      "working_on": "Finance tracker using Chart.js",
      "status": "Completed"
    }
  ]
  

const InboxList = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className="headInfo flex items-center justify-between mb-6">
            <h1 className="text-lg font-medium">Team Colaboration</h1>
            <Button className='rounded-full' variant={'outline'}> <Plus /> Add Members</Button>
        </div>
        {userList.map(user => (
            <Card key={user.id} className='p-4'>
            <CardHeader className='flex items-center gap-5 justify-between'>
                <div className="infoImage">
                    <Image
                    className='rounded-full'
                    src={user.img}
                    alt='logo'
                    width={80}
                    height={80}
                    />
                </div>
                <div className="infoInfo w-full text-left">
                    <h2 className='font-medium text-lg'>{user.name}</h2>
                    <p className='text-sm text-gray-600'><span>{user.working_on}</span></p>
                </div>
                <div className="infoTag">
                    <span>
                        <Badge variant={
                            user.status ===   'Pending' ? 'destructive' : 'secondary' 
                        } asChild>
                            <Link href="/">{user.status}</Link>
                        </Badge>
                    </span>
                </div>
            </CardHeader>
        </Card>
        ))}
    </div>
  )
}

export default InboxList