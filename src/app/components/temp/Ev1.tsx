import React from "react";
import Link from "next/link";
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
  return (
    <div className="w-full mx-auto rounded-md  h-[50rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to TechVolution 2024
        </h2>
        <div className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          we are  orgnaising a Event name TechVolution in Indore.
          we are inviting you in TechVolution 2024.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] on">
            <Link href={"https://vibhavkhare01.github.io/yhills/"}>Register now</Link>
          </button>
          {/* <button className="px-4 py-2  text-white ">Watch trailer</button> */}
        </div>
      </Vortex>
    </div>
  );
}
