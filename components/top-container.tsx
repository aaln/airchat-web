"use client";

import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { SingleMessage } from "./single-message";

export default function TopContainer({messages}) {
    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-6">Top 150 Chits on Airchat
            <p className="text-sm text-gray-500 italic">Sorted by likes</p>
            </h1>
            
            <div className="flex flex-col gap-8 p-4 pb-20 items-center">
                {
                    messages.map((message, index) => (
                        <div 
                            key={index}
                            className="relative flex flex-row gap-2 items-center justify-center w-full"
                        >
                           
                            <SingleMessage message={message}  />
                            <div className="absolute top-8 right-4 z-30 font-semibold">
                                #{index + 1}
                            </div>
                        </div>
                    ))
                }
                <FloatingAudioStatusButton />
            </div>

        </>
    )
}