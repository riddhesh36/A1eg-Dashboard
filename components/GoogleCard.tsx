import { Facebook, FacebookIcon, LucideFacebook } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Progress } from './ui/progress'

const GoogleCard = () => {
  return (
    <div className='mainWrapper'>
        <h1 className="text-lg font-medium mb-6">Team Colaboration</h1>
        <Card className='p-4'>
            <div className="logoavatar flex justify-between items-center">
                <div className="logo">
                    <Image
                    src='/26.png'
                    alt="logo"
                    width={40}
                    height={40}
                    />
                </div>
                <div className="avatars">
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                    <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
                </div>
            </div>
            <div className="infoGame">
                <h3 className='scroll-m-20 text-xl font-medium tracking-tight'>
                    10 simple steps to revolutionise workflows with our product
                </h3>
            </div>
            <div className="dateInfo flex items-center justify-between">
                <p className='text-sm text-slate-600'>Start: <span className='text-white'>June 10, 2023</span></p>
                <p className='text-sm text-slate-600'>Ends: <span className='text-white'>August 22, 2023</span></p>
            </div>
            <div className="mainLoader">
                <Progress value={33} />
            </div>
            <div className="dateInfo flex items-center justify-between">
                <p className='text-sm text-slate-600'>Last updated: <span className='text-white'>April 12, 2023</span></p>
            </div>
        </Card>
    </div>
  )
}

export default GoogleCard