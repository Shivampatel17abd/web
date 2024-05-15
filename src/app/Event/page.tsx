'use client'
import React from 'react'
import {VortexDemo} from '@/app/components/temp/Ev1'
import {TracingBeamDemo} from '@/app/components/temp/Eve2'

function page() {
  return (
    <div className='bg-gray-950 text-white pb-32'>
      <VortexDemo/>
     <TracingBeamDemo/>
    </div>
  )
}

export default page
