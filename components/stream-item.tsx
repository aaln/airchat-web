"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { airchatCDNUrl } from "@/constants";
import { useAuth } from "@/contexts/auth";
import { useEffect, useRef, useState } from 'react';
import { RenderMessage } from "./render-message";


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
            if(!threadDetails?.length) {
                const url = `/api/thread/details?id=${item?.messageThread?.referenceRecordingId}&token=${accessToken}`
                const response = await fetch(url);
                const result = await response.json();
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

  return (
    <div ref={itemRef} className="relative flex flex-col gap-14 pt-6 w-full justify-center max-w-2xl">
      {item?.referenceMessage && RenderMessage({ item, message: item?.referenceMessage || item?.firstMessage })}
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
        selectedDetails && <RenderMessage item={item} message={selectedDetails?.firstMessage} />
      }
      {!selectedDetails && item?.messagesList?.map((message, index) => <RenderMessage key={index} item={item} message={message} />
      )}
      <div className="w-full h-2 bg-[#F7F8FA]"></div>
      {item.type !== 1 && <div className="absolute left-[20px] z-0 h-full w-0.5 bg-gray-300"></div>}
    </div>
  );
}
