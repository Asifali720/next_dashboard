'use client'

import BackButton from "@/components/BackButton";
import posts from "@/data/post";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
interface EditPostPageProps{
    params:{
        id: string
    }
}


const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    body: z.string().min(1, {
        message: 'Body is required'
    }),
    author: z.string().min(1, {
        message: 'Author is required'
    }),
    date: z.string().min(1, {
        message: 'Date is required'
    })
})

const PostEditPage = ({ params}:EditPostPageProps)=>{
   const post = posts.find((post)=> post.id == params.id )

   const {toast} =  useToast()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || ''
        }
    })

    const handlesubmit = (data: z.infer<typeof formSchema>)=>{
    toast({
        title: "Post updated sucessfully...!",
        description: `Updated by ${data?.author} on ${data?.date}`,
    })

    console.log('working....!');
    
      
    }

    return <>
        <BackButton title="Back to post" link="/posts"/>
        <h3 className="text-2xl text-slate-500 dark:text-slate-200 font-semibold mt-5 mb-2">Edit Post</h3>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handlesubmit)} className="flex flex-col gap-5">
            <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-zinc-500 dark:text-white text-sm">Title</FormLabel>
      <FormControl>
        <Input className="border-none  bg-slate-200 dark:bg-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white" placeholder="Title" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-zinc-500 dark:text-white text-sm">Body</FormLabel>
      <FormControl>
        <Textarea className="border-none  bg-slate-200 dark:bg-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white min-h-[200px]" {...field} placeholder="Content here...!"/>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="author"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-zinc-500 dark:text-white text-sm">Author</FormLabel>
      <FormControl>
      <Input className="border-none  bg-slate-200 dark:bg-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white" placeholder="Author" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="text-zinc-500 dark:text-white text-sm">Date</FormLabel>
      <FormControl>
      <Input type="date" className="border-none  bg-slate-200 dark:bg-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 text-black dark:text-white" placeholder="Date" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
   <Button variant='default'>Update Post</Button>   
            </form>
        </Form>
    </>
}

export default PostEditPage;


