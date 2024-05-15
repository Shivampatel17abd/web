import Image from "next/image";
import{SparklesPreview} from "@/app/components/temp/Back2"
import {SparklesPreview1} from "@/app/components/temp/Box3"
import {AnimatedTooltipPreview} from "@/app/components/temp/Instructer"
import {MeteorsDemo} from "@/app/components/temp/Card"
import {MeteorsDemo1} from "@/app/components/temp/Card1"
import {MeteorsDemo2} from "@/app/components/temp/Card2"
import {MeteorsDemo3} from "@/app/components/temp/Card3"

/**
 * 
 * @returns 
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <SparklesPreview1/>
     
      <div className="pt-10 flex space-x-5 pb-10">
      <MeteorsDemo />
      <MeteorsDemo1/>
      <MeteorsDemo2/>
      <MeteorsDemo3/>
      </div>
      
    </main>
  );
}
