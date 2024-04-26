"use client";

import { Header } from "@/components/header";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";

export default function ThreadContainer({threadId}) {
    const { accessToken, refreshTokens } = useAuth();
    const [fullThread, setFullThread] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console
                const response = await fetch(`/api/thread/details?id=${threadId}&token=${accessToken}`);
                const results = await response.json();
                setFullThread(results);
                console.log(results);
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
            {loading && <div>Loading...</div>}
            <div className="flex flex-col gap-8 p-6 items-center">
                <div className="relative flex flex-col gap-14 pt-6 w-full justify-center max-w-2xl">

                </div>
                {/* <StreamItem item={fullThread} /> */}
                {/* {
                    fullThread?.messageThreadDetailsList?.map((item, index) => (
                        
                            {
                                item?.referenceMessage && renderMessage({item, message: item?.referenceMessage || item?.firstMessage})
                            }
                            {
                                item?.messagesList?.map((message, index) => (
                                    
                                    renderMessage({item, message})
                                ))
                            }
                            <div className="w-full h-2 bg-[#F7F8FA]">

                            </div>
                            {
                                item.type !== 1 && <div className="absolute left-[20px] z-0 h-full w-0.5 bg-gray-300"></div>
                            }
                            
                        </div>
                    ))
                } */}
            </div>
        </>
    )
}