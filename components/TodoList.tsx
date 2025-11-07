'use client';

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card, CardTitle } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PanelTop, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { SidebarSeparator } from './ui/sidebar';

const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
})

const todoData = [
    {
      "id": 1,
      "title": "Finish UI dashboard design",

    },
    {
      "id": 2,
      "title": "Buy groceries for the week",

    },
    {
      "id": 3,
      "title": "Write Medium article on UX feedback",

    },
    {
      "id": 4,
      "title": "Review pull requests on GitHub",

    },
    {
      "id": 5,
      "title": "Call parents",

    },
 
  ]
  

const TodoList = () => {
    const [todos, setTodos] = useState(todoData);
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
       const newTodo ={
        id: todos.length + 1,
        title: values.title,
       }
       setTodos([...todos, newTodo])
       form.reset();
       toast.success('Todo has been logged')
       setOpen(false);
    }

    const handleDelete = (id: number) =>{
        const updatedTask = todos.filter(todo => todo.id !== id)
       setTodos(updatedTask);
       toast.success('Todo Deleted Successfully');
    }

    
  return (
    <div>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className='w-full' asChild>
                <Button className='w-full'><PanelTop /> Add Todo</Button>
            </PopoverTrigger>
            <PopoverContent>
                <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className='mb-2'>
                                    <FormLabel>Add Todo</FormLabel>
                                    <hr className='mb-2' />
                                    <FormControl>
                                        <Input placeholder="Drink water" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <Button className='text-end' type="submit">Submit</Button>
                            </form>
                        </Form>
            </PopoverContent>
        </Popover>

        <ScrollArea className="h-[400px] w-[350px] flex items-center justify-center rounded-md border p-4 border-0">
            {todos.map(todo => (
                <Card className='flex-row p-4 mb-2 items-center' key={todo.id}>
                    <div className="checkBox">
                        <Checkbox />
                    </div>
                    <div className="info text-left">
                        <CardTitle>
                            <h1 className='text-sm text-[#b6b6b6] font-medium text-left'>{todo.title}</h1>
                        </CardTitle>
                    </div>
                    <div className="deleteBtn ml-auto">
                        <Button onClick={() => handleDelete(todo.id)} className='text-end' variant={'secondary'}><Trash2  /></Button>
                    </div>
                </Card>
            ))}
        </ScrollArea>
    </div>
  )
}

export default TodoList