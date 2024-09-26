'use client'

import React from 'react'
import {ResponsiveContainer, LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import data from '@/data/analytics'
const AnalyticsChart = () => {
  return (
    <>
    <Card className='my-10'>
    <CardHeader>
    <CardTitle>Analytics for this year</CardTitle>
    <CardDescription>View per month</CardDescription>
      <CardContent className='mt-20'>
        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
              <LineChart width={1000} height={300} dataKey='uv' data={data}>
                <Line type='monotone' dataKey='uv' stroke='#8884d8'/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                   <XAxis dataKey='name'/>
                   <YAxis/>
                   <Tooltip/>  
              </LineChart>
            </ResponsiveContainer>
        </div>
      </CardContent>  
    </CardHeader> 

    </Card>
    </>
  )
}

export default AnalyticsChart