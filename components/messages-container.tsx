"use client";

import { Header } from "@/components/header";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { SingleMessage } from "./single-message";

export default function MessagesContainer({messages}) {

    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold text-center mt-8">Top Posts (chits) on Airchat</h1>
            <div className="flex flex-col items-center">
                
                <div className="flex flex-row items-center justify-center gap-2 mt-4">
                    <Select>
                        <SelectTrigger className="w-[180px] bg-background">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="likes">Sort by Likes</SelectItem>
                                <SelectItem value="reposts">Sort by Reposts</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                {
                    messages.map((message, index) => (
                        <div 
                            key={index}
                            className="flex flex-row gap-4 items-center"
                        >
                            <div className="text-2xl text-bold">
                                {index === 0 && <span>🥇</span>} 
                                {index === 1 && <span>🥈</span>} 
                                {index === 2 && <span>🥉</span>} 
                                {" "}
                                #{index + 1}
                                
                            </div>
                            <SingleMessage message={message}  />
                        </div>
                    ))
                }
                <FloatingAudioStatusButton />
            </div>
        </>
    )
}