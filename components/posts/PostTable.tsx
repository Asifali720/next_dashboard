import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import posts from '@/data/post'
import Link from 'next/link'
import { Posts } from '@/types/post'


  interface PostTableProps{
    limit?: number,
    title?: string
  }


const PostTable = ({limit, title}: PostTableProps) => {

    const sortedPost: Posts[] =[...posts].sort((a, b)=>(
        new Date(b.date).getTime() - new Date(a.date).getTime()
       ))

    const limitedPosts = limit ? sortedPost.slice(0, limit) : sortedPost
  return (
    <div className='mt-4'>
       <h3 className='text-2xl mb-4 font-semibold'>{title ? title : ''}</h3>
        <Table>
  <TableCaption>A lists of recent posts</TableCaption>
  <TableHeader className='pointer-events-none'>
    <TableRow>
      <TableHead>Title</TableHead>
      <TableHead className='hidden md:table-cell'>Author</TableHead>
      <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        limitedPosts.map(({title, author, date, id})=>{
            return  <TableRow key={id}>
            <TableCell>{title}</TableCell>
            <TableCell className='hidden md:table-cell'>{author}</TableCell>
            <TableCell className='hidden md:table-cell text-right'>{date}</TableCell>
            <TableCell>
                <Link href={`/posts/edit/${id}`}>
                <button className='py-1 px-3 text-white font-medium rounded-sm bg-blue-500 hover:bg-blue-700'>
                    Edit
                </button>
                </Link>
            </TableCell>

          </TableRow>
        })
    }
     </TableBody>
</Table>
    </div>

  )
}

export default PostTable