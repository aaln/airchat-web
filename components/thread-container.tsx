"use client";

import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { airchatCDNUrl } from "@/constants";
import { useAuth } from "@/contexts/auth";
import { MessageSquareReply } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import AudioWrapper from "./audio-wrapper";
import { Loader } from "./loader";
import { BottomMessageAnalytics, LinkMetadata } from "./render-message";
import TranscriptionWrapper from "./transcription-wrapper";

function RenderNode({ nodeId, level, fullThread }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => setIsOpen(!isOpen);
    const message = fullThread?.messagesCache[nodeId];
    const children = fullThread.messagesTree[nodeId];
    return (
        <div key={nodeId} className="my-8" style={{ marginLeft: `${level * (window.innerWidth < 768 ? 10 : 30)}px` }}>
            <div className="flex flex-row gap-4 z-10">
                <div className="flex flex-col items-center gap-4">
                    <Link href={`/user/${message?.fromUser?.id}`}>
                        <Avatar>
                            <AvatarImage src={`${airchatCDNUrl}/${message?.fromUser?.avatar}`} alt={message?.fromUser?.name} />
                            <AvatarFallback delayMs={600}>{message?.fromUser?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Link>
                    <AudioWrapper message={message}/>
                    {
                        children?.length && 
                        <div className="flex flex-row items-center justify-center gap-2 cursor-pointer" onClick={toggleOpen}>
                            <div className="font-semibold">{children?.length}</div>
                            <div>
                                <MessageSquareReply className="h-4 w-4" />
                            </div>
                        </div>
                    }
                    
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-full relative flex flex-col rounded-lg p-2.5 gap-2 bg-white dark:bg-gray-800 w-full shadow-lg">
                        <div className="flex flex-row  gap-2 items-center">
                            <Link href={`/user/${message?.fromUser?.id}`} className="font-bold">
                                {message?.fromUser?.name}
                                {/* {item?.channel &&
                                    <span className="text-blue-600">
                                        {` in ${item?.channel?.name}`}
                                    </span>
                                } */}
                            </Link>
                            <span className="text-xs">
                            <Moment fromNow>
                                {new Date((message?.createdDate?.seconds || message?.createdTime?.seconds) * 1000).toLocaleString()}
                            </Moment>
                            </span>
                        </div>
                            <div className="cursor-pointer" onClick={toggleOpen}>          
                                <TranscriptionWrapper message={message} charLimit={400} />
                            </div>   
                            
                        {/* <ImageReferences message={message} /> */}
                        <LinkMetadata message={message} />
                        <BottomMessageAnalytics message={message}/>
                        
                    </div>

                </div>

            </div>
            {/* <div onClick={toggleOpen} className="cursor-pointer">{nodeId} - {children?.length}</div> */}
            {isOpen && children && children.map((childId, index) => <RenderNode key={index} nodeId={childId} level={level + 1} fullThread={fullThread} />)}
        </div>
    );
}

export default function ThreadContainer({threadId}) {
    const { accessToken, refreshTokens } = useAuth();
    const [fullThread, setFullThread] = useState([]);
    const [loading, setLoading] = useState(true);
    const [originMessageId, setOriginMessageId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/thread/${threadId}`);
                const results = await response.json();
                setFullThread(results);

                const parentMessageIds = Object.keys(results?.messagesTree);
                const childMessageIds = Object.values(results?.messagesTree).reduce<string[]>((acc, val) => acc.concat(val as string[]), []);
                const originId = parentMessageIds.filter(parentId => !childMessageIds.includes(parentId));
                setOriginMessageId(originId[0]);
                setLoading(false);
            } catch(e) {
                refreshTokens();
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="p-8 tree-structure">
                {originMessageId && <RenderNode nodeId={originMessageId} level={0} fullThread={fullThread} />}
            </div>
            {loading && <Loader />}
        </>
    )
}
