import Link from 'next/link'
import React from 'react'
import {ArrowLeftCircle} from 'lucide-react'


interface BackButtonProps{
    title: string,
    link: string
}

const BackButton = ({title, link}:BackButtonProps) => {
  return (
    <Link href={link} className='flex items-center gap-2 mt-14 text-slate-500 dark:text-slate-200'>
      <ArrowLeftCircle/>
      <p>{title}</p>
    </Link>
  )
}

export default BackButton