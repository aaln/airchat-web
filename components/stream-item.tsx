"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { airchatCDNUrl } from "@/constants";
import { EyeIcon, Heart, PlayIcon, Repeat } from "lucide-react";
import React from "react";
import Moment from 'react-moment';

const renderTranscription = (message) => {
    console.log(" message?.transcription?.transcriptionText",  message?.transcription?.transcriptionText)
    const words = message?.transcription?.transcriptionText.split(' ');
    return words?.map((word, index) => {
        const isMentionedUser = message?.mentionedUsersList?.some(u => u.name === word);
        return (
            <React.Fragment key={index}>
                {isMentionedUser ? <span className="text-blue-600">{word}</span> : word}
                {index < words.length - 1 ? ' ' : ''}
            </React.Fragment>
        );
    });
}
const renderMessage = ({item, message}: {item: any, message: any}) => {
    return (
        <div className="flex flex-row gap-6 z-10">
            <div className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src={`${airchatCDNUrl}/${message?.fromUser?.avatar}`} alt={message?.fromUser?.name} />
                    <AvatarFallback delayMs={600}>{message?.fromUser?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="cursor-pointer">
                    <PlayIcon />
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="relative flex flex-col rounded-lg p-2.5 gap-2 bg-white dark:bg-gray-800 w-full shadow-lg">
                    <div className="flex flex-row    gap-2 items-center">
                        <div className="font-bold">
                        {message.fromUser.name}
                            {item?.channel &&
                                <span className="text-blue-600">
                                    {` in ${item?.channel?.name}`}
                                </span>
                            }
                        </div>
                        <span className="text-xs">
                        <Moment fromNow>
                            {new Date(message.createdDate.seconds * 1000).toLocaleString()}
                        </Moment>
                        </span>
                    </div>

                        <p>
                            {renderTranscription(message)}
                        </p>
                        {message?.imageReferenceIdsList.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {/* {message?.imageReferencesList.map((imageRef, idx) => (
                                <img
                                    key={idx}
                                    src={`${airchatCDNUrl}/images/${imageRef.imageReferenceId}`}
                                    alt={`Attached image ${idx + 1}`}
                                    style={{
                                        maxHeight: '180px',
                                        width: 'auto',
                                        height: 'auto',
                                        maxWidth: `${180 * (imageRef.resolution.resolutionWidth / imageRef.resolution.resolutionHeight)}px`
                                    }}
                                    className="rounded-lg shadow-md"
                                />
                            ))} */}
                        </div>
                    )}

                    <div className="absolute right-[-0px] bottom-[-20px]">
                        <div className="flex justify-between gap-4 px-4 py-2 rounded-full bg-white border-1-black shadow-md">
                            <div className="flex gap-1 items-center p-0 rounded-full dark:text-black">
                                <Heart className="h-3 w-3" />
                                <span className="text-xs">{message.messageAnalytics.likeCount}</span>
                            </div>
                            <div className="flex gap-1 items-center p-0 rounded-full dark:text-black">
                                <Repeat className="h-3 w-3" />
                                <span className="text-xs">{message.messageAnalytics.repostCount}</span>
                            </div>
                            <div className="flex gap-1 items-center px-1 rounded-full dark:text-black">
                                <EyeIcon className="h-3 w-3" />
                                <span className="text-xs">{message.messageAnalytics.viewCount}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        
    )
}

export function StreamItem({item}) {

//   if(item.type === 1) {
//     return (
//             renderMessage({item, message: item.messagesList[0]})
//     )
//   }
  return (
    <div className="relative flex flex-col gap-8 py-6 w-full justify-center max-w-5xl">
        {
            item?.referenceMessage && renderMessage({item, message: item?.referenceMessage})
        }
        {
            item.messagesList.map((message, index) => (
                
                renderMessage({item, message})
            ))
        }
        <div className="w-full h-2 bg-[#F7F8FA]">

        </div>
        {
            item.type !== 1 && <div className="absolute left-[20px] z-0 h-full w-0.5 bg-gray-300"></div>
        }
        
    </div>
  )
}

