"use client";

import { Header } from "@/components/header";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";
import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { Loader } from "./loader";
import { StreamItem } from "./stream-item";

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
                setFullThread(results.messageThreadDetailsList);
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
            <div className="flex flex-col gap-8 p-6 items-center">
                {
                    fullThread.map((item, index) => (
                        <StreamItem item={item} key={index} />
                    ))
                }
                <FloatingAudioStatusButton />
            </div>
            {loading && <Loader/>}

            
        </>
    )
}