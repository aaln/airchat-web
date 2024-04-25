"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { airchatCDNUrl } from "@/constants";
import { EyeIcon, ListTree, Repeat, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
export function MessageThread({ messageThread }: any) {
    console.log("messageThread", messageThread)
    const referenceMessage = messageThread?.referenceMessage;
    if(!referenceMessage) {
        console.log("No reference message", messageThread)
        return <></>
    }
    const fromUser = referenceMessage?.fromUser;

    return (
        <Card>
            <CardHeader className="flex flex-row gap-2 items-center">
                 <Avatar>
                    <AvatarImage src={`${airchatCDNUrl}/${fromUser?.avatar}`} alt={fromUser?.name} />
                    <AvatarFallback delayMs={600}>{fromUser?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-md">
                    {
                        `${fromUser?.name}(${fromUser?.username})`
                    }
                    {
                        messageThread?.channel && <p>in {messageThread?.channel?.name}</p>
                    }
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                
                    <p>{referenceMessage?.transcription?.transcriptionText}</p>
                    
                </CardDescription>
            </CardContent>
            <CardFooter>
                <div className="flex w-full justify-evenly items-center gap-2">
                    <div className="flex flex-col gap-1 items-center">
                        <EyeIcon />
                        {referenceMessage.messageAnalytics.viewCount}
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <ThumbsUp />
                        {referenceMessage.messageAnalytics.likeCount}
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <Repeat />
                        {referenceMessage.messageAnalytics.repostCount}
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <ListTree />
                        {referenceMessage.messageAnalytics.threadCount}
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
