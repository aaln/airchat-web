"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { airchatCDNUrl } from "@/constants";
import { useAuth } from "@/contexts/auth";
import { EyeIcon, Heart, Repeat } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Moment from 'react-moment';
import AudioWrapper from "./audio-wrapper";
import TranscriptionWrapper from "./transcription-wrapper";


export const renderMessage = ({item, message}: {item: any, message: any}) => {
      
    return (
        <div className="flex flex-row gap-6 z-10">
            <div className="flex flex-col items-center gap-4">
                <Avatar>
                    <AvatarImage src={`${airchatCDNUrl}/${message?.fromUser?.avatar}`} alt={message?.fromUser?.name} />
                    <AvatarFallback delayMs={600}>{message?.fromUser?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <AudioWrapper message={message}/>
            </div>
            <div className="flex flex-col w-full">
                <div className="relative flex flex-col rounded-lg p-2.5 gap-2 bg-white dark:bg-gray-800 w-full shadow-lg">
                    <div className="flex flex-row  gap-2 items-center">
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
                        {/* <Link href={`/thread/${item?.messageThread?.referenceRecordingId || message?.referenceMessageThreadId}`} target="_blank"> */}
                            <TranscriptionWrapper message={message} />
                        {/* </Link> */}
                        {message?.imageReferenceIdsList.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {message?.imageReferencesList.map((imageRef, idx) => (
                                <Zoom key={idx}>
                                <img
                                    src={`${airchatCDNUrl}/images/${imageRef.imageReferenceId}`}
                                    alt={`Attached image ${idx + 1}`}
                                    style={{
                                        maxHeight: '200px',
                                        width: 'auto',
                                        height: 'auto',
                                        maxWidth: `${200 * (imageRef.resolution.resolutionWidth / imageRef.resolution.resolutionHeight)}px`
                                    }}
                                    className="rounded-lg shadow-md"
                                />
                                </Zoom>
                            ))}
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


export function StreamItem({ item }) {
  const [threadDetails, setThreadDetails] = useState([]);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const { accessToken } = useAuth();
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            
            if(!threadDetails) {
                const url = `/api/thread/details?id=${item?.messageThread?.referenceRecordingId}&token=${accessToken}`
                const response = await fetch(url);
                const result = await response.json();
                console.log("threadDetails result", result)
                setThreadDetails(result.messageThreadDetailsList);
            }
            
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    console.log("selectedDetails", selectedDetails)
  }, [selectedDetails])

  return (
    <div ref={itemRef} className="relative flex flex-col gap-14 pt-6 w-full justify-center max-w-2xl">
      {item?.referenceMessage && renderMessage({ item, message: item?.referenceMessage || item?.firstMessage })}
       {
        threadDetails?.length > 1 && 
        <div className="ml-16 flex flex-col gap-2">
            <div>
                {threadDetails?.length} Responses
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center">
                {
                    threadDetails?.map((detail, index) => (
                        <Avatar 
                            className="cursor-pointer hover:scale-110 hover:border hover:border-gray-300 transition-transform duration-300"
                            onClick={() => {
                                setSelectedDetails(detail);
                            }}
                            key={index}
                        >
                            <AvatarImage src={`${airchatCDNUrl}/${detail?.firstMessage?.fromUser?.avatar}`} alt={detail?.firstMessage?.fromUser?.name} />
                            <AvatarFallback delayMs={600}>{detail?.firstMessage?.fromUser?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))
                }
            </div>
        </div>
      }
      {
        selectedDetails && renderMessage({item, message: selectedDetails?.firstMessage})
      }
      {!selectedDetails && item?.messagesList?.map((message, index) => renderMessage({ item, message }))}
      <div className="w-full h-2 bg-[#F7F8FA]"></div>
      {item.type !== 1 && <div className="absolute left-[20px] z-0 h-full w-0.5 bg-gray-300"></div>}
    </div>
  );
}
