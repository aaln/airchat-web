"use client";

import { Header } from "@/components/header";
import { StreamItem } from "@/components/stream-item";
import { useAuth } from "@/contexts/auth";
import { useEffect, useState } from "react";
import { FloatingAudioStatusButton } from "./floating-audio-status-tracker";
import { Loader } from "./loader";
import UserDisplay from "./user-display";

export default function StreamContainer({userAnalytics}: {userAnalytics?: any}) {
    const { accessToken, refreshTokens } = useAuth();
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageKey, setNextPageKey] = useState(null);

    const fetchFeed = async (pageKey) => {
        try {
            let endpoint = userAnalytics ? `/api/userfeed` : `/api/messagefeed`;
            let url = new URL(endpoint, window.location.origin);
            if (userAnalytics) {
                url.searchParams.append('userId', userAnalytics?.user?.id);
            }
            url.searchParams.append('token', accessToken);
            if (pageKey) {
                url.searchParams.append('nextPageKey', pageKey);
            }
            const response = await fetch(url.toString());
            const results = await response.json();
            setFeed(prevFeed => [...prevFeed, ...results.itemsList]);
            setNextPageKey(results.nextPageKey);
        } catch (e) {
            console.error('Error:', e);
            refreshTokens();
        } finally {
            console.error('Error:finall');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFeed(null);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if (!loading && nextPageKey) {
                setLoading(true);
                fetchFeed(nextPageKey);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, nextPageKey]);
    
    console.log("feed[0]", feed?.[0]);

    
    return (
        <>
            <Header />


            <div className="flex flex-col gap-8 items-center justify-center">
                {
                    userAnalytics && <UserDisplay userAnalytics={userAnalytics} />
                }
            </div>
            
            <div className="flex flex-col gap-8 p-6 items-center">
                 
            
                {
                    feed.map((item, index) => (
                        <StreamItem item={item} key={index} />
                    ))
                }
                <FloatingAudioStatusButton />
            </div>
            {loading && <Loader/>}
        </>
    )
}