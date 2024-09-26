import AnalyticsChart from '@/components/dasboard/AnalyticsChart';
import DashboardCard from '@/components/dasboard/DashboardCard';
import PostTable from '@/components/posts/PostTable';
import {Newspaper, Folder, User, MessageCircle } from 'lucide-react'
import React from 'react';



export default function Home() {
  return (
    <React.Fragment>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-14">
    <DashboardCard 
    icon={<Newspaper className='text-slate-500 dark:text-slate-200' size={72}/>} 
    title='Post' 
    count={100}/>
     <DashboardCard 
    icon={<Folder className='text-slate-500 dark:text-slate-200' size={72}/>} 
    title='Categories' 
    count={12}/>
     <DashboardCard 
    icon={<User className='text-slate-500 dark:text-slate-200' size={72}/>} 
    title='Users' 
    count={750}/>
     <DashboardCard 
    icon={<MessageCircle className='text-slate-500 dark:text-slate-200' size={72}/>} 
    title='Comments' 
    count={1200}/>
    </div>
    <AnalyticsChart/>
    <PostTable title='Posts' limit={5}/>
    </React.Fragment>
  );
}
