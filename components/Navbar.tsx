import Link from 'next/link';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggler } from './ThemeToggler';

const Navbar = () => {
  return (
    <div className='w-full bg-slate-500 dark:bg-slate-900 flex items-center justify-between py-2 px-10 fixed top-0 z-40'>
   <Link href='/' className='text-white font-bold text-2xl'>Logo</Link>

   <div className='flex items-center gap-5'>
   <ThemeToggler/>
   <DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-none'> 
    <Avatar>
    <AvatarImage src='https://github.com/shadcn.png'/>
    <AvatarFallback>FN</AvatarFallback>
   </Avatar></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href='/profile'>
      Profile
      </Link>
      </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href='/auth'>
      log out
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
   </div>
    </div>
  )
}

export default Navbar;