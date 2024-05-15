'use client'
import React from 'react'
import {BackgroundBeamsDemo} from "@/app/components/temp/Back1"
import {AnimatedTooltipPreview} from "@/app/components/temp/Instructer"
import {SparklesPreview} from "@/app/components/temp/Back2"
import {SVGMaskEffectDemo} from "@/app/components/temp/inttext"


function page() {
  return (
    <div>
       {/* <SparklesPreview/> */}
      <BackgroundBeamsDemo/>
      <div className="bg-gray-900 flex justify-between">
      <SVGMaskEffectDemo/>
      <div className='flex-initial pt-16 p-16'>
        <AnimatedTooltipPreview/>
      </div>
      </div>
     

      {/* <AnimatedTooltipPreview/> */}
    </div>
  )
}

export default page
